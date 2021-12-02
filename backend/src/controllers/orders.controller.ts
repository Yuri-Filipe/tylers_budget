import express, { Router } from "express";
import schema from "../models/orders";
import schema_recycle from "../models/history";
import schema_geral from "../models/geral";
const router = express.Router();

router.post("/get/table_orders", async (req, res) => {
  try {
    const response = await schema.find();
    const res_geral = await schema_geral.find();
    return res.status(200).json({
      code: "sucess",
      value: response,
      last_order: res_geral[0].last_order,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ code: "error", value: "Failed to fetch data from database" });
  }
});

router.post("/send/table_orders", async (req, res) => {
  try {
    const res_geral = await schema_geral.find();
    await schema_geral.deleteOne();
    await new schema_geral({
      last_order: res_geral[0].last_order + 1,
    }).save();

    const { name, date, n_pedido, hour, qtd, price, obs, completed } = req.body;
    await new schema({
      name: name,
      date: date, 
      n_pedido: res_geral[0].last_order + 1,
      hour: hour,
      qtd: qtd,
      price: price,
      obs: obs,
      completed: completed,
    }).save();

    let response = await schema.find();
    return res.status(200).json({
      code: "sucess",
      value: response,
      last_order: res_geral[0].last_order + 1,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ code: "error", value: "Failed to fetch data from database" });
  }
});
router.post("/delete/table_orders", async (req, res) => {
  try {
    // pega o banco de dados

    let order_selected = await schema.find({ n_pedido: req.body.n_pedido });

    await schema.deleteOne({ n_pedido: req.body.n_pedido });

    const { name, date, n_pedido, hour, qtd, price, obs } =
      order_selected[0];
    const newHistory = await new schema_recycle({
      name: name,
      date: date,
      n_pedido: n_pedido,
      hour: hour,
      qtd: qtd,
      price: price,
      obs: obs,
      completed: req.body.completed,
    }).save();

    let orders = await schema.find();
    return res.status(200).json({ code: "sucess", value: orders });
  } catch (err) {
    return res
      .status(400)
      .json({ code: "error", value: "Failed to fetch data from database" });
  }
});

export default router;

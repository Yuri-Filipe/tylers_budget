import express, { Router } from "express";
import schema from "../models/history";
const router = express.Router();

router.post("/get/table_history", async (req, res) => {
  try {
    const response = await schema.find();

    return res.status(200).json({ code: "sucess", value: response });
  } catch (err) {
    return res
      .status(400)
      .json({ code: "error", value: "Failed to fetch data from database" });
  }
});

router.post("/send/table_history", async (req, res) => {
  try {
    const { name, date, n_pedido, hour, qtd, price, obs, completed } = req.body;
    const newHistory = await new schema({
      name: name,
      date: date,
      n_pedido: n_pedido,
      hour: hour,
      qtd: qtd,
      price: price,
      obs: obs,
      completed: completed,
    }).save();
    let response = await schema.find();
    return res.status(200).json({ code: "sucess", value: response });
  } catch (err) {
    return res
      .status(400)
      .json({ code: "error", value: "Failed to fetch data from database" });
  }
});

router.post("/delete/table_history", async (req, res) => {
  try {
    // pega o banco de dados
    let response = await schema.find();
    if (response.length > 0) {
      await schema.deleteOne({ n_pedido: req.body.n_pedido });
    }
    response = await schema.find();
    return res.status(200).json({ code: "sucess", value: response });
  } catch (err) {
    return res
      .status(400)
      .json({ code: "error", value: "Failed to fetch data from database" });
  }
});
export default router;

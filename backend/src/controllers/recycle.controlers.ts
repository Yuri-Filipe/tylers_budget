import express, { Router } from "express";
import schema from "../models/recycle";
const router = express.Router();

router.post("/get/table_recycle", async (req, res) => {
  try {
    const response = await schema.find();

    return res.status(200).send({ code: "sucess", value: response });
  } catch (err) {
    return res
      .status(400)
      .send({ code: "error", value: "Failed to fetch data from database" });
  }
});

router.post("/send/table_recycle", async (req, res) => {
  try {
    let new_value = req.body;
    const { name, date, n_pedido, hour, qtd, price, obs } = new_value;
    const newHistory = await new schema({
      name: name,
      date: date,
      n_pedido: n_pedido,
      hour: hour,
      qtd: qtd,
      price: price,
      obs: obs,
    }).save();
    let response = await schema.find();
    return res.status(200).send({ code: "sucess", value: response });
  } catch (err) {
    return res
      .status(400)
      .send({ code: "error", value: "Failed to fetch data from database" });
  }
});

router.post("/delete/table_recycle", async (req, res) => {
  try {
    let { _id } = req.body;
    // pega o banco de dados
    let response = await schema.find();
    if (response.length > 0) {
      await schema.deleteOne({_id:_id});
    }
    response = await schema.find();
    return res
      .status(200)
      .send({ code: "sucess", value: response[response.length - 1] });
  } catch (err) {
    return res
      .status(400)
      .send({ code: "error", value: "Failed to fetch data from database" });
  }
});
export default router;

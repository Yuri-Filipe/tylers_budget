import express, { Router } from "express";
import schema from "../models/price";
const router = express.Router();

router.post("/get/table_price", async (req, res) => {
  try {
    const response = await schema.find();
    return res.status(200).send({ code: "sucess", value: response });
  } catch (err) {
    return res
      .status(400)
      .send({ code: "error", value: "Failed to fetch data from database" });
  }
});

router.post("/send/table_price", async (req, res) => {
  try {
    let new_value = req.body;
    // pega o banco de dados
    let response = await schema.find();
    if (response.length > 0) {
      //pega o valor da ultima atualização, retornando um array
      const { value } = response[response.length - 1];
      if (response.length > 2) {
        await schema.deleteOne({ _id: response[0]._id });
      }
    }
    const newHistory = await new schema({
      value: new_value,
      last_update: new Date(),
    }).save();
    response = await schema.find();
    return res.status(200).send({ code: "sucess", value: response[response.length - 1] });
  } catch (err) {
    return res
      .status(400)
      .send({ code: "error", value: "Failed to fetch data from database" });
  }
});

export default router;

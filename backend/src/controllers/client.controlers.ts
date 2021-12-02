import express, { Router } from "express";
import schema from "../models/geral";
const router = express.Router();

router.post("/get/geral", async (req, res) => {
  try {
    const response = await schema.find();

    return res.status(200).json({ code: "sucess", value: response });
  } catch (err) {
    return res
      .status(400)
      .json({ code: "error", value: "Failed to fetch data from database" });
  }
});

export default router;

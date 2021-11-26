import express, { json } from "express";
import connectMongoDb from "./database/mongo_db";
import Price from "./controllers/price.controller";
import Orders from "./controllers/orders.controller";
import Recycle from "./controllers/recycle.controlers";
const app = express();
app.use(express.json());

app.get("/teste", (req, res) => {
  res.status(200).send("<h1>Hello World ...</h1>");
});
app.use("/api/price", Price);
app.use("/api/orders", Orders);
app.use("/api/recycle", Recycle);

app.listen(3000, () => console.log("server is running..."));

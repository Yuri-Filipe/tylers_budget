import express, { json } from "express";
import Price from "./controllers/price.controller";
import Orders from "./controllers/orders.controller";
import History from "./controllers/history.controlers";
import Client from "./controllers/client.controlers";
import helmet from "helmet";
import cors from "cors";
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/api/price", Price);
app.use("/api/orders", Orders);
app.use("/api/history", History);
app.use("/api/client", Client);

app.listen(3000, () => console.log("server is running..."));

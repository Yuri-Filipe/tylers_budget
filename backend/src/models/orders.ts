import mongoose from "../database/mongo_db";
const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  n_pedido: {
    type: Number,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  qtd: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  obs: {
    type: String,
    required: true,
  },
  completed:{
    type: Boolean,
    required: true,
  }
});
let schema;
try {
  schema = mongoose.model("table_orders");
} catch (error) {
  schema = mongoose.model("table_orders", Schema);
}

mongoose.model("table_orders", Schema);
export default schema;

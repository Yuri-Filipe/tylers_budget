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
});
let schema;
try {
  schema = mongoose.model("table_recycle");
} catch (error) {
  schema = mongoose.model("table_recycle", Schema);
}

mongoose.model("table_recycle", Schema);
export default schema;

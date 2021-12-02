import mongoose from "../database/mongo_db";
const Schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  cpf: {
    type: Number,
  },
  adress: {
    type: String,
  },
  district: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  orders: {
    type: Array,
  },
});
let schema;
try {
  schema = mongoose.model("client");
} catch (error) {
  schema = mongoose.model("client", Schema);
}

mongoose.model("client", Schema);
export default schema;

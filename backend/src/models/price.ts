import mongoose from "mongoose";
const Schema = new mongoose.Schema({
  value: {
    type: Array,
    required: true,
  },
  last_update: { type: String, required: true },
});
let schema;
try {
  schema = mongoose.model("table_prices");
} catch (error) {
  schema = mongoose.model("table_prices", Schema);
}

mongoose.model("table_prices", Schema);
export default schema; 
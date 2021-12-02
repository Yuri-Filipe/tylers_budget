import mongoose from "../database/mongo_db";
const Schema = new mongoose.Schema({
  last_order: {
    type: Number,
    required: true,
  }
});
let schema;
try {
  schema = mongoose.model("geral");
} catch (error) {
  schema = mongoose.model("geral", Schema);
}

mongoose.model("geral", Schema);
export default schema;

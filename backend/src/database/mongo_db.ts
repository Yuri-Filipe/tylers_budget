import mongoose from "mongoose";

const url =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

mongoose.connect(url);
mongoose.Promise = global.Promise;

export default mongoose;

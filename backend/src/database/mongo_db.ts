import mongoose from "mongoose";

// const url =
//   "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
  const url =
  "mongodb+srv://cluster01.b8yil.mongodb.net/budget_app?retryWrites=true&w=majority"

mongoose.connect(url,{
  user:"admin",
  pass:"22641127"
});
mongoose.Promise = global.Promise;

export default mongoose;

import mongoose from "mongoose";
import { config } from 'dotenv';
config()


// const url =
//   "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const url = process.env.MONGO_URL;

mongoose.connect(url, {
  user: process.env.MONGO_USERNAME,
  pass: process.env.MONGO_PASSWORD
});
mongoose.Promise = global.Promise;

export default mongoose;
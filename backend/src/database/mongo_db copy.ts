import mongoose from "mongoose";


const url =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
export let connectionMongo = false;
mongoose.Promise = global.Promise;
// user: process.env.DB_USER,
//       pass: process.env.DB_PASS,
export default async function connectMongoDb() {
  try {
    let connect = await mongoose.connect(url);

    if (connect) {
      connectionMongo = true;
      console.log("Banco de dados conectado")
    }
  } catch (error) {
    connectionMongo = false;
    console.log("Error ao autenticar no Banco de Dados ==> " + error);
  }
} 
module.exports = mongoose

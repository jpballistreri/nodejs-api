import mongoose from "mongoose";
import "dotenv/config";

console.log("conectando a mongo db");
mongoose
  .connect(process.env.MONGO_URL)
  .then((db) => console.log("db mongo conectada"))
  .catch((error) => console.log("error de conexion a db mongo"));

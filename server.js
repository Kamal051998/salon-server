import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import productRouter from "./routes/productRoute.js";

const app = express();

const port = process.env.port;
const DB = process.env.database;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/products", productRouter);

mongoose
  .connect(DB)
  .then(() => {
    console.log(`datatbase is running`);
  })
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

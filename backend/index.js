import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import contadorRouter from "./routes/contador.routes.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//conecto a mongo
const connection = async () => {
  try {
    // eslint-disable-next-line no-unused-vars, no-undef
    const conn = mongoose.connect(process.env.URL_MONGO);
    console.log("conectado a mongo db");
  } catch (error) {
    console.log("error en monogdb");
  }
};

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-type,Accept"
  );
  next();
});

app.use("/api/contador", contadorRouter);

// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-undef
  console.log(`Escuchando el puerto ${process.env.PORT}`);
  connection();
});

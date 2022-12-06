import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import routeIndex from "./routes/index.js";

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/recipes", routeIndex);

const SERVER = process.env.CONNECTION_URL;

// mongoose.createConnection(SERVER, { autoIndex: true }, () => {
//   try {
//     console.log("Connected to DB");
//   } catch (error) {
//     console.log(error.message);
//   }
// });

mongoose.connect(SERVER , { useNewUrlParser: true, useUnifiedTopology: true } ).then(() => console.log("connected to db")).catch((error) => consosle.log(error.message))

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Express is listening on Port ${PORT}`);
});

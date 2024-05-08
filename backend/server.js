import express from "express";
import { router } from "./Routes/router.js";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const app = express();
const port = process.env.EX_port || 3000;

app.use(express.json());
app.use("/", router);

app.listen(port, () =>
  console.log(`Example app is listening on port ${port}.`)
);

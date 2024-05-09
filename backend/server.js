import express from "express";
import { router } from "./Routes/router.js";
import "dotenv/config";
import { db } from "./database/IndexDB.js";
import mongoose from "mongoose";

const app = express();
const port = process.env.EX_PORT || 3001;

app.use(express.json());
app.use("/", router);

db.connect();

app.listen(port, () => console.log(`Server is listening on port ${port}.`));

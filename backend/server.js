import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const app = express();
const port = process.env.EX_port;

app.use("/request-type", (req, res, next) => {
  console.log("Request type: ", req.method);
  next();
});

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.listen(port, () =>
  console.log(`Example app is listening on port ${port}.`)
);

import express from "express";
import cors from "cors";
import { getWeather } from "./api/getWeather.js";
import { getLocation } from "./api/getLocation.js";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config({ path: "../.env" });

const app = express();
const port = process.env.EX_port || 3000;

app.use(cors());
app.use(express.json());

//Routes

app.get("/api/data/:name", async (req, res) => {
  const location = req.params.name.toLowerCase();
  try {
    //const apiWet = await getWeather(location);
    const files = fs.readdirSync("data");
    const jsonData = [];

    for (const file of files) {
      const data = JSON.parse(fs.readFileSync(`data/${file}`, "utf8"));
      jsonData.push(data);
    }
    res.json(jsonData);
  } catch (error) {
    console.error("Errore durante la richiesta all'API esterna:", error);
    res.status(500).send("Errore durante la richiesta all'API esterna");
  }
});

app.listen(port, () =>
  console.log(`Example app is listening on port ${port}.`)
);

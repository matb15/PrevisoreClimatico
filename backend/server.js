import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import getDocument from "./Database/searchInDB.js";
dotenv.config({ path: "../.env" });

const app = express();
const port = process.env.EX_port || 3000;

app.use(cors());

app.get("/api/data/:lat/:long", async (req, res) => {
  const lat = req.params.lat;
  const long = req.params.long;

  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,weather_code,visibility,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Errore durante la richiesta all'API esterna:", error);
    res.status(500).send("Errore durante la richiesta all'API esterna");
  }
});

app.get("/api/data/:name", async (req, res) => {
  const name = req.params.name;

  try {
    const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${name}&language=it`);
    res.json(response.data);


  } catch (error) {
    console.error("Errore durante la richiesta all'API esterna:", error);
    res.status(500).send("Errore durante la richiesta all'API esterna");
  }
});

app.listen(port, () =>
  console.log(`Example app is listening on port ${port}.`)
);

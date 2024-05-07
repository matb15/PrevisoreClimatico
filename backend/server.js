import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const app = express();
const port = process.env.EX_port || 3000;

app.use(cors());
app.use(express.json());

//Routes

app.get("/api/data/:lat/:long", async (req, res) => {
  const lat = req.params.lat;
  const long = req.params.long;

  try {
    const response = getForecast(lat, long);
    res.json(response.data);
  } catch (error) {
    console.error("Errore durante la richiesta all'API esterna:", error);
    res.status(500).send("Errore durante la richiesta all'API esterna");
  }
});

app.get("/api/data/:name", async (req, res) => {
  const location = req.params.name;
  try {
    const apiLoc = await getLocation(location);
    const name = apiLoc.results[0].name;
    const country = apiLoc.results[0].country;
    const lat = apiLoc.results[0].latitude;
    const long = apiLoc.results[0].longitude;
    const apiWet = await getForecast(lat, long);
    res.json(apiWet);
  } catch (error) {
    console.error("Errore durante la richiesta all'API esterna:", error);
    res.status(500).send("Errore durante la richiesta all'API esterna");
  }
});

app.listen(port, () =>
  console.log(`Example app is listening on port ${port}.`)
);

async function getLocation(location) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&language=it`;
  const response = await axios.get(url);
  return response.data;
}

async function getForecast(latitude, longitude) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,weather_code,visibility,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset`;
  const response = await axios.get(url);
  return response.data;
}

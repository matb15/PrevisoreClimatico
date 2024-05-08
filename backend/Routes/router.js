import express from "express";
import { getWeather } from "../api/getWeather.js";
import { getLocation } from "../api/getLocation.js";
import { db } from "../database/IndexDB.js";
import addPrev from "../database/methods/addWeather.js";

const router = express.Router();

router.get("/api/data/:name", async (req, res) => {
  const location = req.params.name.toLowerCase();

  try {
    const apiLoc = await getLocation(location);
    const cityName = apiLoc.results[0].name;
    const countryCode = apiLoc.results[0].country_code;
    const lat = apiLoc.results[0].latitude;
    const long = apiLoc.results[0].longitude;

    const apiWeat = await getWeather(lat, long);

    const response = await addPrev(apiLoc, apiWeat);
    res.json(response);
  } catch (error) {
    console.error("Errore durante la richiesta all'API esterna:", error);
    res.status(500).send("Errore durante la richiesta all'API esterna");
  }
});

export { router };

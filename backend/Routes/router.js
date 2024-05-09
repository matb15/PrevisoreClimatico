import express from "express";
import { getWeather } from "../api/getWeather.js";
import { getLocation } from "../api/getLocation.js";
import { db } from "../database/IndexDB.js";

const router = express.Router();

router.get("/api/data/:name", async (req, res) => {
  const location = req.params.name.toLowerCase();
  let apiLoc = undefined;
  let result;
  const date = getDate();

  try {
    apiLoc = await getLocation(location);
  } catch (error) {
    console.error("Errore durante la richiesta all'API esterna:", error);
    res.status(500).send("Errore durante la richiesta all'API esterna");
  }

  const cityName = apiLoc.results[0].name.toLowerCase();
  try {
    result = await db.getData(cityName, date);
  } catch (e) {
    console.log(e);
  }

  if (result) {
    console.log("vecchio");
    res.json(result);
  } else {
    const lat = apiLoc.results[0].latitude;
    const long = apiLoc.results[0].longitude;
    let apiWeat = undefined;
    try {
      apiWeat = await getWeather(lat, long);
      result = await db.insertData(apiLoc, apiWeat);
      console.log("nuovo");
      res.json(result);
    } catch (error) {
      console.error("Errore durante la richiesta all'API esterna:", error);
      res.status(500).send("Errore durante la richiesta all'API esterna");
    }
  }
});

function getDate() {
  const today = new Date();
  const isoString = today.toISOString();
  return isoString.substring(0, isoString.indexOf("T"));
}
export { router };

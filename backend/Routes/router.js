import express from "express";
import { getWeather } from "../api/getWeather.js";
import { getLocation } from "../api/getLocation.js";

const router = express.Router();

router.get("/api/data/:name", async (req, res) => {
  const location = req.params.name.toLowerCase();

  try {
    //const apiWet = await getWeather(location);
    //res.json(apiWet);
    console.log("chiamata fatta");
  } catch (error) {
    console.error("Errore durante la richiesta all'API esterna:", error);
    res.status(500).send("Errore durante la richiesta all'API esterna");
  }
});

export { router };

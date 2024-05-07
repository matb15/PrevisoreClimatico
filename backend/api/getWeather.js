import axios from "axios";
import { getLocation } from "./getLocation.js";

async function getWeather(cityName) {
  const apiLoc = await getLocation(cityName);

  const name = apiLoc.results[0].name;
  const country = apiLoc.results[0].country;
  const lat = apiLoc.results[0].latitude;
  const long = apiLoc.results[0].longitude;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,weather_code,visibility,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset`;
  const response = await axios.get(url);
  return response.data;
}

export { getWeather };

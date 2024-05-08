import mongoose from "mongoose";
import dataWeather from "../schema/weather.js";

async function addPrev(objLoc, objWeat) {
  const year = objWeat.daily.time[0].substring(0, 4);
  const model = mongoose.model(year, dataWeather);
  try {
    await model.create({
      cityName: objLoc.results[0].name,
      code: objLoc.results[0].country_code,
      latitude: objLoc.results[0].latitude,
      longitude: objLoc.results[0].longitude,
      elevation: objLoc.results[0].elevation,
      date: objWeat.current.time.substring(0, 10),
      current: {
        time: objWeat.current.time,
        temperature_2m: objWeat.current.temperature_2m,
        relative_humidity_2m: objWeat.current.relative_humidity_2m,
        precipitation: objWeat.current.precipitation,
        weather_code: objWeat.current.weather_code,
        wind_speed_10m: objWeat.current.wind_speed_10m,
      },
      hourly: {
        time: objWeat.hourly.time,
        temperature_2m: objWeat.hourly.temperature_2m,
        relative_humidity_2m: objWeat.hourly.relative_humidity_2m,
        precipitation_probability: objWeat.hourly.precipitation_probability,
        precipitation: objWeat.hourly.precipitation,
        weather_code: objWeat.hourly.weather_code,
        visibility: objWeat.hourly.visibility,
        wind_speed_10m: objWeat.hourly.wind_speed_10m,
      },
      daily: {
        time: objWeat.daily.time,
        weather_code: objWeat.daily.weather_code,
        temperature_2m_max: objWeat.daily.temperature_2m_max,
        temperature_2m_min: objWeat.daily.temperature_2m_min,
      },
    });
  } catch (e) {
    console.log("Errore nel salvare il documento: ", e);
  }
  return model;
}

export default addPrev;

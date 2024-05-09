import mongoose from "mongoose";
import dataWeather from "../schema/weather.js";

async function findDocument(cityName, date) {
  const year = date.substring(0, 4);
  const MyModel = mongoose.model(year, dataWeather);
  const document = await MyModel.findOne({ cityName: cityName, date: date });
  return document;
}

export default findDocument;

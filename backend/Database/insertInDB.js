import mongoose from "mongoose";
import dataWeather from "./schema/weather.js";

async function insertIntoDB(cityName, date, CollectionName) {
  const collezione = mongoose.model("dataWeather", dataWeather, CollectionName);
  let tempo = await collezione.create({ cityName: cityName, date: date });
  console.log(tempo);
}

export default insertIntoDB;

import mongoose from "mongoose";
import connessione from "./IndexDB.js";
import dataWeather from "./schema/weather.js";
import dotenv from "dotenv"

dotenv.config({ path: "../../.env" })
const CollectionName = process.env.NomeCollezione

async function insertIntoDB(cityName, date) {
    connessione()
    const collezione = mongoose.model('dataWeather', dataWeather, CollectionName)
    let tempo = await collezione.create({ "cityName": cityName, "date": date })
    console.log(tempo)
}

export default insertIntoDB
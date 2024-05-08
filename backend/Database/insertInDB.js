import mongoose from "mongoose";
import connessione from "./connessioneDB.js";
import dataWeather from "./schema/weather.js";

async function insertIntoDB(cityName, date) {
    connessione()
    const collezione = mongoose.model('dataWeather', dataWeather, 'Prova')
    let tempo = await collezione.create({ "cityName": cityName, "date": date })
    console.log(tempo)
    mongoose.disconnect()
}

insertIntoDB("San PietroBurgo", "25/06/2003")
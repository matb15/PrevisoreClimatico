//Connessione db con mongoose
import mongoose from "mongoose";
import dotenv from "dotenv"
import searchInDocument from "./searchInDB";
import insertIntoDB from "./insertInDB";
import dataWeather from "./schema/weather";

dotenv.config({ path: "../../.env" })

const user = process.env.nomeUT
const passwd = process.env.Password
const DB = process.env.NameDB

let db = {}

async function connect() {
    try {
        await mongoose.connect(`mongodb+srv://${user}:${passwd}@meteo.aiaoufr.mongodb.net/${DB}`)
        console.log("Connessione al database avvenuta con successo")
    } catch (error) {
        console.log(error)
    }
}
async function disconnect() {
    await mongoose.disconnect()
}

db.connect = connect
db.disconnect = disconnect
db.searchInDocument = searchInDocument
db.insertIntoDB = insertIntoDB
db.dataWeather = dataWeather

export { db }
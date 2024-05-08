import mongoose from "mongoose";
import "dotenv/config";
import searchInDocument from "./searchInDB.js";
import insertIntoDB from "./insertInDB.js";
import dataWeather from "./schema/weather.js";

const user = process.env.USER;
const passwd = process.env.PASSW;
const dbName = process.env.DB_NAME;

let db = {};

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${passwd}@meteo.aiaoufr.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Meteo`
    );
    console.log("Connection to MongoDB successful");
  } catch (error) {
    console.log(error);
  }
}
async function disconnect() {
  await mongoose.disconnect();
}

db.connect = connect;
db.disconnect = disconnect;
db.getData = searchInDocument;
db.insertData = insertIntoDB;
db.dataWeather = dataWeather;

export { db };

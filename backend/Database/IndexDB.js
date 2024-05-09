import mongoose from "mongoose";
import "dotenv/config";
import dataWeather from "./schema/weather.js";
import findDocument from "./methods/findWeather.js";
import addPrev from "./methods/addWeather.js";

const dbName = process.env.DB_NAME;

let db = {};

async function connect() {
  try {
    await mongoose.connect(`mongodb://database:27017/${dbName}`);
    console.log("Connection to MongoDB successful");
  } catch (error) {
    console.log(error);
  }
}
async function disconnect() {
  await mongoose.connection.close();
  console.log("Mongo disconnected");
}

db.connect = connect;
db.disconnect = disconnect;
db.getData = findDocument;
db.insertData = addPrev;
db.dataWeather = dataWeather;

export { db };

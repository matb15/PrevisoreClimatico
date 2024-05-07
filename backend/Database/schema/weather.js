import mongoose from "mongoose";

const schemaForMongoose = mongoose.Schema;

const dataWeather = schemaForMongoose({
  cityName: { type: String },
  countryCode: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  elevation: { type: Number },
  date: { type: Date },
  current: {
    time: { type: Date },
    temperature_2m: { type: Number },
    relative_humidity_2m: { type: Number },
    precipitation: { type: Number },
    weather_code: { type: Number },
    wind_speed_10m: { type: Number },
  },
  hourly: {
    temperature_2m: [{ type: Number }],
    relative_humidity_2m: [{ type: Number }],
    precipitation_probability: [{ type: Number }],
    precipitation: [{ type: Number }],
    weather_code: [{ type: Number }],
    visibility: [{ type: Number }],
    wind_speed_10m: [{ type: Number }],
  },
  daily: {
    weather_code: { type: Number },
    temperature_2m_max: { type: Number },
    temperature_2m_min: { type: Number },
  },
});

export default dataWeather;

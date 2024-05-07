import {mongoose} from mongoose

const weatherSchema = new mongoose.Schema({
  cityName: String,
  latitude: Number,
  longitude: Number,
  timezone: String,
  timezone_abbreviation: String,
  elevation: Number,
  current: {
    time: Date,
    interval: Number,
    temperature_2m: Number,
    relative_humidity_2m: Number,
    precipitation: Number,
    weather_code: Number,
    wind_speed_10m: Number,
  },
  hourly: [
    {
      time: Date,
      temperature_2m: Number,
      relative_humidity_2m: Number,
      precipitation_probability: Number,
      precipitation: Number,
      weather_code: Number,
      visibility: Number,
      wind_speed_10m: Number,
    },
  ],
  daily: [
    {
      time: Date,
      temperature_2m_max: Number,
      temperature_2m_min: Number,
      sunrise: Date,
      sunset: Date,
    },
  ],
});

module.exports = mongoose.model("Weather", weatherSchema);

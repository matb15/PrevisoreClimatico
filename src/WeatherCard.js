import React from "react";
import "./weatherCard.css";

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>Oggi</h2>
      <div className="weather-details">
        <p>Temperatura: {data.temperature_2m}°C</p>
        <p>Umidità: {data.relative_humidity_2m}%</p>
        <p>Precipitazioni: {data.precipitation}mm</p>
        <p>Codice meteo: {data.weather_code}</p>
        <p>Velocità del vento: {data.wind_speed_10m}km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;

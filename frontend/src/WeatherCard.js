import React from "react";
import "./weatherCard.css";

function WeatherCard({ data }) {
  let weatherBackgrounds = "/img/d.png";

  if (data.weather_code === 0) weatherBackgrounds = "/img/clear.png";
  else if ([1, 2, 3].includes(data.weather_code))
    weatherBackgrounds = "/img/cloudy.png";
  else if ([45, 48].includes(data.weather_code))
    weatherBackgrounds = "/img/fog.png";
  else if ([51, 53, 55, 56, 57].includes(data.weather_code))
    weatherBackgrounds = "/img/drizzle.png";
  else if ([61, 63, 65, 66, 67].includes(data.weather_code))
    weatherBackgrounds = "/img/rain.png";
  else if ([71, 73, 75, 77].includes(data.weather_code))
    weatherBackgrounds = "/img/snow.png";
  else if ([95, 96, 99].includes(data.weather_code))
    weatherBackgrounds = "/img/thunderstorm.png";
  else console.log(data.weather_code);

  return (
    <div
      className="weather-card"
      style={{
        backgroundImage: `url(${weatherBackgrounds})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
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

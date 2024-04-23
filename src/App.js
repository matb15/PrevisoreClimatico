import React from "react";
import "./App.css";
import weatherData from "./weatherData.json";
import WeatherCard from "./WeatherCard";
import WeatherChart from "./WeatherChart";

function App() {
  const hourlyData = [];
  for (
    let i = 0;
    i < weatherData.hourly.time.length &&
    i < weatherData.hourly.temperature_2m.length;
    i++
  ) {
    let oggetto = {
      time: weatherData.hourly.time[i],
      temperature_2m: Math.floor(weatherData.hourly.temperature_2m[i]),
    };
    hourlyData.push(oggetto);
  }

  return (
    <div className="App">
      <h1>Previsore Climatico</h1>
      <WeatherCard data={weatherData.current} />
      <h1>Temperature nei prossimi 7 giorni</h1>
      <WeatherChart hourlyData={hourlyData} />
    </div>
  );
}

export default App;

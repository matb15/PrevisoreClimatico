import React from "react";
import "./App.css";
import weatherData from "./weatherData.json";
import WeatherCard from "./WeatherCard";

function App() {
  return (
    <div className="App">
      <h1>Previsore Climatico</h1>
      <WeatherCard data={weatherData.current} />
    </div>
  );
}

export default App;

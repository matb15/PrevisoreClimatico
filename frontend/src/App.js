import React from "react";
import "./App.css";
import weatherData from "./weatherData.json";
import WeatherCard from "./components/WeatherCard";
import Navbar from "./components/Navbar";
import PanelButton from "./components/PanelButton";
import "bootstrap/dist/css/bootstrap.min.css";
import MiniWeatherCard from "./components/MiniWeatherCard";

function App() {
  const backgroundStyle = {
    backgroundImage: `url('img/b.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <div className="App" style={backgroundStyle}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <PanelButton />
            <WeatherCard data={weatherData.current} />
          </div>
          <div className="col-md-6">
            <MiniWeatherCard data={weatherData.daily} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

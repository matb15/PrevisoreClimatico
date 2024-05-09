import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import weatherData from "./weatherData.json";
import WeatherCard from "./components/WeatherCard";
import Navbar from "./components/Navbar";
import PanelButton from "./components/PanelButton";
import "bootstrap/dist/css/bootstrap.min.css";
import MiniWeatherCard from "./components/MiniWeatherCard";

function App() {
  const [data, setData] = useState(weatherData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    axios
      .get(`http://localhost:3001/api/data/${searchQuery}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Errore nella richiesta API:", error);
      });
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const backgroundStyle = {
    backgroundImage: `url('img/b.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <div className="App" style={backgroundStyle}>
      <Navbar onSearch={handleSearch} onInputChange={handleInputChange} />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <PanelButton data={data} />
            <WeatherCard data={data.current} />
          </div>
          <div className="col-md-6">
            <MiniWeatherCard data={data.daily} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

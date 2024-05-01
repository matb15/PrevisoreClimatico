import React from "react";
import "../css/WeatherCard.css";

function MiniWeatherCard({ data }) {
  return (
    <div className="mini-container">
      <div className="mini-weather-card">
        <div className="mini-weather-info">
          <h3>{data.time[0]}</h3>
          <div className="mini-weather-details">
            <p>
              min: {data.temperature_2m_min[0]}°C | max:{" "}
              {data.temperature_2m_max[0]}°C
            </p>
          </div>
        </div>
      </div>
      <div className="mini-weather-card">
        <div className="mini-weather-info">
          <h3>{data.time[1]}</h3>
          <div className="mini-weather-details">
            <p>
              min: {data.temperature_2m_min[1]}°C | max:{" "}
              {data.temperature_2m_max[1]}°C
            </p>
          </div>
        </div>
      </div>
      <div className="mini-weather-card">
        <div className="mini-weather-info">
          <h3>{data.time[2]}</h3>
          <div className="mini-weather-details">
            <p>
              min: {data.temperature_2m_min[2]}°C | max:{" "}
              {data.temperature_2m_max[2]}°C
            </p>
          </div>
        </div>
      </div>
      <div className="mini-weather-card">
        <div className="mini-weather-info">
          <h3>{data.time[3]}</h3>
          <div className="mini-weather-details">
            <p>
              min: {data.temperature_2m_min[3]}°C | max:{" "}
              {data.temperature_2m_max[3]}°C
            </p>
          </div>
        </div>
      </div>
      <div className="mini-weather-card">
        <div className="mini-weather-info">
          <h3>{data.time[4]}</h3>
          <div className="mini-weather-details">
            <p>
              min: {data.temperature_2m_min[4]}°C | max:{" "}
              {data.temperature_2m_max[4]}°C
            </p>
          </div>
        </div>
      </div>
      <div className="mini-weather-card">
        <div className="mini-weather-info">
          <h3>{data.time[5]}</h3>
          <div className="mini-weather-details">
            <p>
              min: {data.temperature_2m_min[5]}°C | max:{" "}
              {data.temperature_2m_max[5]}°C
            </p>
          </div>
        </div>
      </div>
      <div className="mini-weather-card">
        <div className="mini-weather-info">
          <h3>{data.time[6]}</h3>
          <div className="mini-weather-details">
            <p>
              min: {data.temperature_2m_min[6]}°C | max:{" "}
              {data.temperature_2m_max[6]}°C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniWeatherCard;

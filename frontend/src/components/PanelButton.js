import React, { useState } from "react";
import WeatherChart from "./WeatherChart";
import "../css/PanelButton.css";

function PanelButton({ data }) {
  const [isChartVisible, setIsChartVisible] = useState(false);

  const toggleChartVisibility = () => {
    setIsChartVisible(!isChartVisible);
  };

  const hourlyData = [];
  for (
    let i = 0;
    i < data.hourly.time.length && i < data.hourly.temperature_2m.length;
    i++
  ) {
    let oggetto = {
      time: data.hourly.time[i],
      temperature_2m: Math.floor(data.hourly.temperature_2m[i]),
    };
    hourlyData.push(oggetto);
  }

  return (
    <div style={{ position: "relative" }}>
      <button className="button" onClick={toggleChartVisibility}>
        {isChartVisible ? "Nascondi grafico" : "Mostra grafico"}
      </button>

      {isChartVisible && (
        <div style={{ position: "absolute", zIndex: 999 }}>
          <WeatherChart hourlyData={hourlyData} />
        </div>
      )}
    </div>
  );
}

export default PanelButton;

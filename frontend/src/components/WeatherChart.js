import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import "../css/TemperatureChart.css";

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

function TemperatureChart({ hourlyData }) {
  const timeLabels = hourlyData.map((entry) => {
    const date = new Date(entry.time);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} ${formattedTime}`;
  });

  const data = {
    labels: timeLabels,
    datasets: [
      {
        label: "Temperature",
        data: hourlyData.map((entry) => entry.temperature_2m),
        fill: false,
        borderColor: "rgb(10, 46, 207)",
        tension: 0.1,
        pointBackgroundColor: "rgb(17, 32, 99)",
        pointBorderColor: "rgb(255, 255, 255)",
        pointHoverBackgroundColor: "rgb(0, 47, 255)",
        pointHoverBorderColor: "rgb(0, 47, 255)",
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataPoint = hourlyData[tooltipItem.dataIndex];
            return `Data: ${timeLabels[tooltipItem.dataIndex]}, Temperatura: ${
              dataPoint.temperature_2m
            }°C`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "category",
        labels: timeLabels,
      },
      y: {
        type: "linear",
        ticks: {
          callback: function (value) {
            return `${value}°C`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
}

export default TemperatureChart;

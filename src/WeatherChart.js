import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import "./TemperatureChart.css";

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
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        pointBackgroundColor: "rgb(75, 192, 192)",
        pointBorderColor: "rgb(75, 192, 192)",
        pointHoverBackgroundColor: "rgb(75, 192, 192)",
        pointHoverBorderColor: "rgb(75, 192, 192)",
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
        ticks: {
          callback: function (value) {
            const date = new Date(value);
            return date.toLocaleDateString();
          },
        },
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

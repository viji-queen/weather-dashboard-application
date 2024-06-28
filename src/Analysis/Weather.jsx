import React from "react";
import { Bar, Pie, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
const WeatherCharts = (extractedData) => {
  console.log(extractedData, "extracted data from weather");
  const temperatures = extractedData.extractedData.map(
    (item) => item.temperature - 272.15
  );
  const labels = extractedData.extractedData.map((item) => item.dt);
  const weatherCounts = extractedData.extractedData.reduce((acc, item) => {
    acc[item.weather] = (acc[item.weather] || 0) + 1;
    return acc;
  }, {});
  const weatherTypes = Object.keys(weatherCounts);
  const weatherValues = Object.values(weatherCounts);

  const barData = {
    labels: labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        backgroundColor: "lightgrey",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: weatherTypes,
    datasets: [
      {
        data: weatherValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Weather Data Charts</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Temperature Bar Chart</h2>
            <Bar data={barData} />
          </div>
          <div className="col">
            <h2>Weather Pie Chart</h2>
            <Doughnut data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCharts;

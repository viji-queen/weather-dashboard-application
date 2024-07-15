import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { convertTemperature } from "../redux/temparatureConverter";

Chart.register(...registerables, ChartDataLabels);

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Colors,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
function TempGraph({ weatherData, formatDateTime }) {
  const temperatureUnit = useSelector((state) => state.temperature.unit);
  const getTemperatureUnitSymbol = (unit) => {
    switch (unit) {
      case "Celsius":
        return "°C";
      case "Fahrenheit":
        return "°F";
      case "Kelvin":
        return "K";
      default:
        return "H";
    }
  };

  const labels = weatherData.map((w) => formatDateTime(w.dt_txt)).slice(0, 10)
  const temperatures = weatherData.map((item) =>
    Math.ceil(convertTemperature(item.main.temp, temperatureUnit))
  );
  console.log(temperatures, "Temparatures");
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: temperatures,
        fill: true,
        // backgroundColor: "pink",
        background: 'linear-gradient(to bottom, #2b9dca, #ADD8E6)',
        borderColor: "transparent",
        pointRadius: 0,
        tension: 0.25,
        grid: false,
      },
    ],
  };

  const options = {
    labels: {
      font: {
        color: "white",
      },
    },
    plugins: {
      tooltip: {
        enabled: false, // Disable the default tooltip
      },
      datalabels: {
        display: true,
        align: "top",
        formatter: (value) => `${value}`,
        color: "white",
        font: {
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        display: false,

        grid: {
          display: false,
        },
        ticks: {
          stepSize: 10, // Set step size for y-axis ticks
        },
      },
      x: {
        title: {
          display: true,
          color: "white",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line data={data} options={options} className="chart-bg" />;
}

export default TempGraph;

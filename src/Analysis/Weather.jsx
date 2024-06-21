import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
  const weatherData = [
    { temperature: 305.45, weather: 'Clouds', dt: 'Fri 6 AM' },
    { temperature: 306.59, weather: 'Clouds', dt: 'Fri 9 AM' },
    { temperature: 305.74, weather: 'Clouds', dt: 'Fri 12 PM' },
    { temperature: 304.08, weather: 'Clouds', dt: 'Fri 3 PM' },
    { temperature: 303.63, weather: 'Clouds', dt: 'Fri 6 PM' },
    { temperature: 302.45, weather: 'Clouds', dt: 'Fri 9 PM' },
    { temperature: 301.89, weather: 'Clouds', dt: 'Sat 12 AM' },
    { temperature: 303.65, weather: 'Clouds', dt: 'Sat 3 AM' },
    { temperature: 307.04, weather: 'Clouds', dt: 'Sat 6 AM' },
    { temperature: 305.97, weather: 'Clouds', dt: 'Sat 9 AM' },
    { temperature: 303.99, weather: 'Clouds', dt: 'Sat 12 PM' },
    { temperature: 304.16, weather: 'Clouds', dt: 'Sat 3 PM' },
    { temperature: 303.96, weather: 'Rain', dt: 'Sat 6 PM' },
    { temperature: 302.84, weather: 'Clouds', dt: 'Sat 9 PM' },
    { temperature: 302.08, weather: 'Clouds', dt: 'Sun 12 AM' },
    { temperature: 304.22, weather: 'Clouds', dt: 'Sun 3 AM' },
    { temperature: 306.47, weather: 'Clouds', dt: 'Sun 6 AM' },
    { temperature: 307.63, weather: 'Clouds', dt: 'Sun 9 AM' },
    { temperature: 305.18, weather: 'Clouds', dt: 'Sun 12 PM' },
    { temperature: 304.86, weather: 'Clouds', dt: 'Sun 3 PM' },
    { temperature: 304.64, weather: 'Rain', dt: 'Sun 6 PM' },
    { temperature: 303.35, weather: 'Clouds', dt: 'Sun 9 PM' },
    { temperature: 302.23, weather: 'Clouds', dt: 'Mon 12 AM' },
    { temperature: 303.48, weather: 'Clouds', dt: 'Mon 3 AM' },
    { temperature: 306.74, weather: 'Clouds', dt: 'Mon 6 AM' },
    { temperature: 307.48, weather: 'Clouds', dt: 'Mon 9 AM' },
    { temperature: 306.11, weather: 'Clouds', dt: 'Mon 12 PM' },
    { temperature: 305.3, weather: 'Clouds', dt: 'Mon 3 PM' },
    { temperature: 304.23, weather: 'Clouds', dt: 'Mon 6 PM' },
    { temperature: 302.82, weather: 'Clouds', dt: 'Mon 9 PM' },
    { temperature: 302.64, weather: 'Clouds', dt: 'Tue 12 AM' },
    { temperature: 303.65, weather: 'Clouds', dt: 'Tue 3 AM' },
    { temperature: 306.66, weather: 'Clouds', dt: 'Tue 6 AM' },
    { temperature: 307.99, weather: 'Clouds', dt: 'Tue 9 AM' },
    { temperature: 305.51, weather: 'Clouds', dt: 'Tue 12 PM' },
    { temperature: 305.02, weather: 'Clouds', dt: 'Tue 3 PM' },
    { temperature: 304.8, weather: 'Clouds', dt: 'Tue 6 PM' },
    { temperature: 303.09, weather: 'Clouds', dt: 'Tue 9 PM' },
    { temperature: 302.27, weather: 'Clouds', dt: 'Wed 12 AM' },
    { temperature: 302.58, weather: 'Clouds', dt: 'Wed 3 AM' },
  ];
  const WeatherCharts = () => {
    
    const temperatures = weatherData.map((item) => item.temperature);
    const labels = weatherData.map((item) => item.dt);
    const weatherCounts = weatherData.reduce((acc, item) => {
      acc[item.weather] = (acc[item.weather] || 0) + 1;
      return acc;
    }, {});
    const weatherTypes = Object.keys(weatherCounts);
    const weatherValues = Object.values(weatherCounts);
  
    const barData = {
      labels: labels,
      datasets: [
        {
          label: 'Temperature (K)',
          data: temperatures,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  
    return (
      <div>
        <h1>Weather Data Charts</h1>
       <div className="row">
       <div className='col'>
          <h2>Temperature Bar Chart</h2>
          <Bar data={barData} />
        </div>
        <div className='col'>
          <h2>Weather Pie Chart</h2>
          <Pie data={pieData} />
        </div>
       </div>
      </div>
    );
  };
  
  export default WeatherCharts;
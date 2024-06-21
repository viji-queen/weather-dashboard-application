// import React from 'react';
// import { Pie } from 'react-chartjs-2';

// // Assuming `extractedData` is passed as a prop or imported from a module


// // Function to prepare data for the pie chart
// const preparePieChartData = (data) => {
//   const weatherCounts = {};

//   data.forEach(item => {
//     if (weatherCounts[item.weather]) {
//       weatherCounts[item.weather]++;
//     } else {
//       weatherCounts[item.weather] = 1;
//     }
//   });

//   const labels = Object.keys(weatherCounts);
//   const values = Object.values(weatherCounts);

//   return {
//     labels,
//     datasets: [
//       {
//         label: 'Weather Conditions',
//         data: values,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
// };

// const PieChart = (extractedData) => {
//   const pieChartData = preparePieChartData(extractedData);

//   return (
//     <div>
//       <h2>Weather Conditions Pie Chart</h2>
//       <Pie data={pieChartData} />
//     </div>
//   );
// };

// export default PieChart;

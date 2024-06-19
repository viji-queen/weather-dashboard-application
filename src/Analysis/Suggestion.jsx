import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import cloth from "../asset/clothing.jpg";
import umbrella from "../asset/umbrella.jpg";
import outdoor from "../asset/outdoors.jpg";
import uvRays from "../asset/uvRays.jpg";


function Suggestion({weatherData, formatDateTime }) {
  function groupByDate(weatherData) {
    const grouped = weatherData.reduce((acc, dateString) => {
      const date = new Date(dateString.dt_txt);
      const dateKey = date.toISOString().split('T')[0]; // Extract the date part (YYYY-MM-DD)
      
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      
      acc[dateKey].push(dateString);
      return acc;
    }, {});
    
    return Object.values(grouped);
  }
  
  const groupedDates = groupByDate(weatherData);
  
  console.log(groupedDates, "grouped data");

  function summarizeDayWeather(data) {
    // Aggregate data
    let totalTemp = 0;
    let weatherCount = {};
  
    data.forEach(entry => {
      totalTemp += entry.main.temp;
  
      if (weatherCount[entry.weather[0].main]) {
        weatherCount[entry.weather[0].main]++;
      } else {
        weatherCount[entry.weather[0].main] = 1;
      }
    });
    if (data.length === 0) {
      return {
        avgTemp: "N/A",
        weather: "N/A",
        image:'N/A'
      };
    }
    
    // Calculate average temperature
    const avgTemp = totalTemp / data.length;
  
    // Determine most frequent weather condition
    const mostFrequentWeather = Object.keys(weatherCount).reduce((a, b) => weatherCount[a] > weatherCount[b] ? a : b);

  
    return {
      avgTemp: avgTemp.toFixed(2), // average temperature
      weather: mostFrequentWeather, // most frequent weather condition
    };  
  }
  
  // Example usage
  const summary = summarizeDayWeather(weatherData);
  console.log(summary);
  return (
    <>
      <Card
        style={{ backgroundColor: "transparent" }}
        className="now-card text-white"
      >
        <Card.Header>
          Suggestion For Today
          <Card.Body>
          <h1>{summary.weather}</h1>
            <Row className="m-2">
              <Col>
                <img
                  className="   w-25   h-50"
                  variant="top"
                  src={umbrella}
                  alt="umbrella"
                />
              </Col>
              <Col>
                <img
                  className="   w-25   h-50"
                  variant="top"
                  src={outdoor}
                  alt="outdoor"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  className="   w-25   h-50"
                  variant="top"
                  src={uvRays}
                  alt="uvRays"
                />
              </Col>
              <Col>
                {" "}
                <img
                  className="   w-25   h-50"
                  variant="top"
                  src={cloth}
                  alt="clothing"
                />
              </Col>
            </Row>
            <Button variant="outlined">View Detailed Analysis</Button>
          </Card.Body>
        </Card.Header>
      </Card>
    </>
  );
}

export default Suggestion;

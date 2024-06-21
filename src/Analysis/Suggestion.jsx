import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col, Modal } from "react-bootstrap";

import HealthAndSafety from "./HealthAndSafety";
import {
  Umbrella,
  DirectionsBike,
  Brightness7,
  Checkroom,
} from "@mui/icons-material";
import AgricultureSharpIcon from '@mui/icons-material/AgricultureSharp';

function Suggestion(
  { weatherData, formatDateTime }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function groupByDate(weatherData) {
    const grouped = weatherData.reduce((acc, dateString) => {
      const date = new Date(dateString.dt_txt);
      const dateKey = date.toISOString().split("T")[0]; // Extract the date part (YYYY-MM-DD)

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

    data.forEach((entry) => {
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
        image: "N/A",
      };
    }

    // Calculate average temperature
    const avgTemp = totalTemp / data.length;

    // Determine most frequent weather condition
    const mostFrequentWeather = Object.keys(weatherCount).reduce((a, b) =>
      weatherCount[a] > weatherCount[b] ? a : b
    );

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
          Suggestion For Your Day
          <Card.Body>
            <h1>Mostly {summary.weather}</h1>

            <Row className="m-2">
              <Col>
                <Umbrella color=" " sx={{ fontSize: 50 }} />
              </Col>
              <Col>
                <DirectionsBike sx={{ fontSize: 50 }} color=" " />
              </Col>
            </Row>
            <Row>
              <Col>
                <Brightness7 sx={{ fontSize: 50 }} color=" " />
              </Col>
              <Col>
                {" "}
                <AgricultureSharpIcon sx={{ fontSize: 50 }} color=" " />
              </Col>
            </Row>
            <Button variant="outlined" onClick={handleShow}>
              View Detailed Analysis
            </Button>
          </Card.Body>
        </Card.Header>
      </Card>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-transparent text-white">
        <Modal.Header closeButton>
          <Modal.Title>Health & Safety</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HealthAndSafety groupedData={groupedDates} summary={summary} weatherData= {weatherData} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Suggestion;

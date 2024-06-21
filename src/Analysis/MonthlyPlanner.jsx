import React,{useState} from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import WeatherCharts from './Weather';
import { Row, Col, Modal } from "react-bootstrap";

function MonthlyPlanner({weatherData, formatDateTime}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    console.log(weatherData);
    const extractedData = weatherData.map(item => ({
        temperature: item.main.temp,
        weather: item.weather[0].main,
        dt: formatDateTime(item.dt_txt) // Optionally include the datetime for reference
      }));
console.log(extractedData, "Extracteddata");
  return (
    <>
    <Card
    style={{ backgroundColor: "transparent" }}
    className="now-card text-white"
  >
    <Card.Header>
      Weekly Planner
      <Card.Body>
        <h1>Mostly</h1>
       
       
        <Button variant="outlined"  onClick={handleShow}>
          View Detailed Analysis
        </Button>
      </Card.Body>
    </Card.Header>
  </Card>
  <Modal show={show} onHide={handleClose} dialogClassName="modal-transparent text-white">
  <Modal.Header closeButton>
    <Modal.Title>Weekly Plan</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <WeatherCharts />
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
</>
  )
}

export default MonthlyPlanner
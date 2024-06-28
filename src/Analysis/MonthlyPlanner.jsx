import React,{useState} from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import WeatherCharts from './Weather';
import { Row, Col, Modal } from "react-bootstrap";
import {EqualizerOutlined,BarChartOutlined , AutoGraphOutlined, PieChartOutlineOutlined} from '@mui/icons-material/';

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
      <h3>Plan your week Accordingly</h3>

      <Row className="m-2">
              <Col>
                <BarChartOutlined color=" " sx={{ fontSize: 50 }} />
              </Col>
              <Col>
                <AutoGraphOutlined sx={{ fontSize: 50 }} color=" " />
              </Col>
            </Row>
            <Row>
              <Col>
                <EqualizerOutlined sx={{ fontSize: 50 }} color=" " />
              </Col>
              <Col>
                {" "}
                <PieChartOutlineOutlined sx={{ fontSize: 50 }} color=" " />
              </Col>
            </Row>
       
       
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
  <WeatherCharts extractedData={extractedData} />
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
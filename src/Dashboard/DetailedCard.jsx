import React from "react";
import { Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

function DetailedCard({ days, temp, image, description }) {
  const temperatureUnit = useSelector((state) => state.temperature.unit);
  const getTemperatureUnitSymbol = (unit) => {
    switch (unit) {
      case 'Celsius':
        return '°C';
      case 'Fahrenheit':
        return '°F';
      case 'Kelvin':
        return 'K';
      default:
        return 'H';
    }
  };
  return (
    <>
    <Card style={{ width: '18rem' ,
    backgroundColor:'transparent',   
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" ,
    color:'white'
    }}>
      <img className="card-img" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{days}</Card.Title>
        <Card.Text>
         {temp}{getTemperatureUnitSymbol(temperatureUnit)}
        </Card.Text>
        <Card.Text>{description}</Card.Text>

      </Card.Body>
    </Card>
    </>
  );
}

export default DetailedCard;

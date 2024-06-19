import React from "react";
import { Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DetailedCard({ days, temp, image, description }) {
  return (
    <>
    <Card style={{ width: '18rem' ,
    backgroundColor:'transparent',   
    fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" ,
    // color:'white'
    }}>
      <img className="card-img" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{days}</Card.Title>
        <Card.Text>
         {temp}°C
        </Card.Text>
        <Card.Text>{description}</Card.Text>

      </Card.Body>
    </Card>
    </>
  );
}

export default DetailedCard;

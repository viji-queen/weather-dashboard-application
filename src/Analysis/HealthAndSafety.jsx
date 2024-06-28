import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";
import {
  Umbrella,
  DirectionsBike,
  Brightness7,
  Checkroom,
  DriveEtaOutlined,
} from "@mui/icons-material";
import AgricultureSharpIcon from '@mui/icons-material/AgricultureSharp';

function HealthAndSafety({ groupedData, summary , weatherData}) {
  const StatusIndicator = ({ status }) => {
    let color = "";

    switch (status) {
      case "red":
        color = "red";
        break;
      case "green":
        color = "green";
        break;
      case "yellow":
        color = "yellow";
        break;
      default:
        color = "gray";
    }

    return <FaCircle style={{ color, fontSize: "10px", marginRight: "5px" }} />;
  };

  let dayWeather = [];
  const getWeatherOfTheDay = () => {
    groupedData[0].map((g) => {
      dayWeather.push(g.weather[0].main);
    });
  };
  getWeatherOfTheDay();

  const weaCount = {}
  useEffect(()=>{
    const getSuggestion=(arr)=>{
console.log("Getting Suggestion");

arr.forEach(element => {
  if(weaCount[element]){
    weaCount[element] +=1
  }else{
    weaCount[element] =1
  }
 
});
console.log(weaCount);
return weaCount

    }
    getSuggestion(dayWeather)
  },[])
  const uniqueWeather = [...new Set(dayWeather)];
  const tempPerDay =[]
groupedData[0].map((g)=>{
 tempPerDay.push( Math.ceil( g.main.temp -272.15))
})
const calculateAverage = (arr) => {
  if (arr.length === 0) return 0; // Handle empty array case
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
};
console.log(calculateAverage(tempPerDay));
console.log(tempPerDay);
  return (
    <div>
      <h1>Mostly {summary.weather}</h1>

      <Row className="m-2">
        <Col className="d-flex">
          <Umbrella color=" " sx={{ fontSize: 50 }} />
          {weaCount.Rain >= 0 &&  weaCount.Rain <=2 ?
           <div>
           <StatusIndicator status="yellow" /> Good To Have.
         </div>:
         <div>
         {" "}
         <StatusIndicator status="green"  /> No Need
       </div>
          }
          
        </Col>
        <Col className="d-flex">
          <DirectionsBike sx={{ fontSize: 50 }} color=" " />
          {weaCount.Clouds >= 0 &&  weaCount.Clouds <=2 ?
           <div>
           <StatusIndicator status="yellow" /> Avoid
         </div>:
         <div>
         {" "}
         <StatusIndicator status="green"  /> Great
       </div>
          }
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <Brightness7 sx={{ fontSize: 50 }} color=" " className="mx-3" />
         {calculateAverage(tempPerDay) > 30 ?
          <div><StatusIndicator status="red" /> Danger UV Rays</div>
           :
       <div>
           <StatusIndicator status="yellow" /> Extreme Caution
       </div>
       }
          
          
        </Col>
        <Col className="d-flex">
        <AgricultureSharpIcon sx={{ fontSize: 50 }} color=" " className="mx-3" />
        {weaCount.Clouds >= 0 &&  weaCount.Clouds <=2 ?
           <div>
           <StatusIndicator status="yellow" /> Avoid
         </div>:
         <div>
         {" "}
         <StatusIndicator status="green"  /> Great
       </div>
          }        </Col>
      </Row>
     
    </div>
  );
}

export default HealthAndSafety;

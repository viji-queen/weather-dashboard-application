import React, { useEffect, useState } from "react";
import NowCard from "./NowCard";
import DetailedCard from "./DetailedCard";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Suggestion from "../Analysis/Suggestion";

function Dashboard({lat, lon}) {
  const API_URL = "https://api.openweathermap.org/data/2.5/forecast";
  const API_KEY = "6d3af1a2f2341dbebecf0a68bac8ef62";
  // const [lat, setLat] = useState(13.0878);
  // const [lon, setLon] = useState(80.2785);
  const [locationData, setLocationData] = useState({});
  const [weatherData, setWeatherData] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        console.log(lat);
        console.log(lon);
        const weatherDetails = await response.json();
        setLocationData(weatherDetails.city);
        setWeatherData(weatherDetails.list);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [lat,lon]);
  console.log(weatherData);
  const formatDateTime = (dt_txt) => {
    const date = new Date(dt_txt);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const period = hours >= 12 ? "PM" : "AM";
    const hour = hours % 12 === 0 ? 12 : hours % 12;
    return `${dayOfWeek} ${hour} ${period}`;
  };
  return (
    <>
    <Suggestion weatherData={weatherData} formatDateTime={formatDateTime}/>
      <div className="dashboard-card">
        {weatherData.length > 0 && (
          <div>
            <NowCard
              city={locationData.name}
              country={locationData.country}
              temp={Math.ceil(weatherData[0].main.temp - 272.15)}
              feels_like={Math.ceil(weatherData[0].main.feels_like - 272.15)}
              description={weatherData[0].weather[0].description}
              image={`https://openweathermap.org/img/wn/${weatherData[0].weather[0].icon}.png`}
            />
          </div>
        )}

        <div className="carousel-container">
        <Slider {...settings}>
          {weatherData.map((w, index) => (
             <div key={index} className="card-wrapper">
            <DetailedCard
              days={formatDateTime(w.dt_txt)}
              temp={Math.ceil(w.main.temp - 273.15)}
              image={`https://openweathermap.org/img/wn/${w.weather[0].icon}.png`}
              description={w.weather[0].description}
              weatherData={weatherData}
            />
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

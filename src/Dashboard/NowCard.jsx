import React from "react";
import { useSelector } from "react-redux";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";
function NowCard({
  city,
  country,
  humidity,
  temp,
  description,
  image,
  feels_like,
  wind_speed,
  sunrise,
  sunset,
  population,
  timezone,
}) {
  const temperatureUnit = useSelector((state) => state.temperature.unit);
  const getTemperatureUnitSymbol = (unit) => {
    switch (unit) {
      case "Celsius":
        return "°C";
      case "Fahrenheit":
        return "°F";
      case "Kelvin":
        return "K";
      default:
        return "H";
    }
  };
  return (
    <>
      <div className="now-card ">
        <h1>
          {city}, {country}
        </h1>
        <div>
          <div className="row">
            <div className="col">
              <h2>Now</h2>
              <h2>
                {temp}
                {getTemperatureUnitSymbol(temperatureUnit)}
              </h2>
            </div>
            <div className="col">
              <h2>{description}</h2>
            </div>
            <div className="col">
              <h2>Feels Like</h2>
              <h2>
                {feels_like}
                {getTemperatureUnitSymbol(temperatureUnit)}
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col">
              <h5>Wind Speed </h5>
              <h5>{wind_speed} km/hr</h5>
            </div>
            <div className="col">
              {" "}
              <img
                className="col"
                style={{ height: "150px", width: "150px" }}
                src={image}
                alt={description}
              />
            </div>

            <div className="col">
              <h5>Humidity</h5>
              <h5>{humidity}%</h5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5>
                Sunrise <WbSunnyOutlinedIcon />
              </h5>
              <h5>{sunrise}</h5>
            </div>
            <div className="col">
              <h5>Population</h5>
              <h5>{population} </h5>
            </div>
            <div className="col">
              <h5>Timezone</h5>
              <h5>{timezone} </h5>
            </div>
            <div className="col">
              <h5>
                Sunset <WbTwilightOutlinedIcon />
              </h5>
              <h5>{sunset} </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NowCard;

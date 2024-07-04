import React, { useEffect, useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
function Region({ setLat, setLon }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "6d3af1a2f2341dbebecf0a68bac8ef62";
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API_URL}?q=${selectedRegion},${selectedCountry}&APPID=${API_KEY}`
        );
        const locationDetails = await response.json();
        if (locationDetails.coord) {
          setLat(locationDetails.coord.lat);
          setLon(locationDetails.coord.lon);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (selectedCountry && selectedRegion) {
      fetchData();
    }
  }, [selectedCountry, selectedRegion, setLat, setLon]);
  return (
    <div className="m-2 d-flex">
      <div>
        <CountryDropdown
          className="drop-down"
          value={selectedCountry}
          onChange={(val) => setSelectedCountry(val)}
        />

        {selectedCountry && (
          <RegionDropdown
            className="drop-down mx-2"
            country={selectedCountry}
            value={selectedRegion}
            onChange={(val) => setSelectedRegion(val)}
          />
        )}
      </div>
      <div className="mx-2 ">
        <button
          className="btn btn-default mx-2"
          onClick={() => {
            setSelectedCountry("United Kingdom");
            setSelectedRegion("London");
          }}
        >
          London
        </button>
        <button
          className="btn btn-default mx-2"
          onClick={() => {
            setSelectedCountry("United States");
            setSelectedRegion("New York");
          }}
        >
          Newyork
        </button>
        <button
          className="btn btn-default mx-2"
          onClick={() => {
            setSelectedCountry("France");
            setSelectedRegion("Paris");
          }}
        >
          Paris
        </button>
        <button
          className="btn btn-default mx-2"
          onClick={() => {
            setSelectedCountry("United States");
            setSelectedRegion("Washington");
          }}
        >
          Washington
        </button>
      </div>
    </div>
  );
}

export default Region;

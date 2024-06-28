import React from 'react'

function NowCard({city,country,humidity, temp, description, image, feels_like, wind_speed}) {
  return (
    <>
  <div className='now-card '>
  
    <h1>{city}, {country}</h1>
    <div>
      <div className="row">
        <div className="col">
          <h2>Now</h2>
          <h2>{temp}°C</h2>
        </div>
        <div className='col'>
        <h2>{description}</h2>
        </div>
        <div className='col'>
          <h2>Feels Like</h2>
          <h2>{feels_like}°C</h2>
        </div>
      </div>
    </div>
    <div>
    <div className="row">
      <div className="col">
        <h5>Wind Speed</h5>
        <h5>{wind_speed} km/hr</h5>
      </div>
   <div className="col"> <img 
    className='col'
    style={{height:'150px', width:'150px'}}
    src={image}
    alt={description}
    /></div>
   
    <div className="col">
        <h5>Humidity</h5>
        <h5>{humidity}%</h5>
      </div>
      </div>
    </div>

   </div>
    </>
  )
}


export default NowCard
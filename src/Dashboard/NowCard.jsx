import React from 'react'

function NowCard({city,country, temp, description, image, feels_like}) {
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
        <p>{description}</p>
        </div>
        <div className='col'>
          <h2>Feels Like</h2>
          <h2>{feels_like}°C</h2>
        </div>
      </div>
    </div>
    <div>
    <div className="">
    <img 
    style={{height:'150px', width:'150px'}}
    src={image}
    alt={description}
    />
    </div>
  
    </div>

   </div>
    </>
  )
}


export default NowCard
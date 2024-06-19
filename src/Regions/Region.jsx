import React, { useEffect, useState } from 'react'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
function Region({setLat, setLon}) {
    const API_URL ="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY ="6d3af1a2f2341dbebecf0a68bac8ef62"
    const [selectedCountry, setSelectedCountry]= useState('')
    const [selectedRegion, setSelectedRegion] = useState('')

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch(
                    `${API_URL}?q=${selectedRegion},${selectedCountry}&APPID=${API_KEY}`
                )
                const locationDetails = await response.json()
                if (locationDetails.coord) {
                    setLat(locationDetails.coord.lat);
                    setLon(locationDetails.coord.lon);
                }

            }catch(err){
                console.log(err);
            }
        }
        if (selectedCountry && selectedRegion) {
            fetchData();
        }
    },[selectedCountry, selectedRegion,setLat,setLon])
  return (
    <div className='m-2'>
        <div>
        <CountryDropdown
        className="drop-down"
        // style={{width: '300px', borderRadius:'5px', height:'35px', backgroundColor: 'transparent', border:'white 1px solid'}}
          value={selectedCountry}
          onChange={(val) => setSelectedCountry(val)} />

       {
        selectedCountry &&
        <RegionDropdown
         className="drop-down mx-2"
        // style={{width: '300px', borderRadius:'5px', height:'35px', backgroundColor: 'transparent'}}
        country={selectedCountry}
        value={selectedRegion}
        onChange={(val) => setSelectedRegion(val)} />
       }
      </div>
      
    </div>
  )
}

export default Region
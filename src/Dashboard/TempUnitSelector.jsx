import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTemperatureUnit } from '../redux/temparatureSlice';

function TempUnitSelector() {
    const dispatch = useDispatch();
    const temperatureUnit = useSelector((state) => state.temperature.unit);
  
    const handleUnitChange = (event) => {
        console.log("Changing drop down");
        console.log(setTemperatureUnit(event.target.value));
      dispatch(setTemperatureUnit(event.target.value));
    };
    console.log(temperatureUnit, 'from selector');
  return (
    <div className='now-card'>
    {/* <label htmlFor="temperature-unit">Select Temperature Unit: </label> */}
    <select
      id="temperature-unit"
       className="drop-down m-2 orm-select bg-transparent"
       style={{width: '50px', float:'right'}}
      // value={temperatureUnit}
      onChange={handleUnitChange}
    >
      <option value="Kelvin">K</option>
      <option value="Celsius"  >°C</option>
      <option value="Fahrenheit"  >°F</option>
    </select>
  </div>
  )
}

export default TempUnitSelector
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import Region from './Regions/Region';

import {React, useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import  ThemeToggle from './Dashboard/ThemeToggle'
function App() {
  const [lat, setLat] = useState(13.0878);
  const [lon, setLon] = useState(80.2785);
  const theme = useSelector((state)=> state.theme.mode)
useEffect(()=>{
  document.documentElement.setAttribute('data-theme',theme)
},[theme])
  return (
    <div className="App"> <ThemeToggle />
      <header className="App-header">
      <h1 className='app-name'>Weathering With You</h1>
      
     
      <Region setLat={setLat} setLon={setLon} />
      <Dashboard lat={lat} lon={lon} />
      
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Dashboard from './Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import Region from './Regions/Region';

import {React, useState} from 'react'
import Suggestion from './Analysis/Suggestion';
function App() {
  const [lat, setLat] = useState(13.0878);
  const [lon, setLon] = useState(80.2785);
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='app-name'>Weathering With You</h1>
      

      <Region setLat={setLat} setLon={setLon} />
      <Dashboard lat={lat} lon={lon} />
      
      </header>
    </div>
  );
}

export default App;

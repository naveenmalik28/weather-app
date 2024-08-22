// src/App.js

import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import WeatherForm from './components/WeatherForm';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ lat: 28.4595, lng: 77.0266 }); // Gurgaon coordinates

  const updateWeatherData = (data) => {
    setWeatherData(data);
    if (data && data.coord) {
      setLocation({ lat: data.coord.lat, lng: data.coord.lon });
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Weather App</h1>
        </div>
        <WeatherForm setWeatherData={updateWeatherData} />
        <div className="map-container">
          <MapComponent location={location} setWeatherData={updateWeatherData} />
        </div>
        {weatherData && (
          <div className="weather-info">
            <h2>{weatherData.name}</h2>
            <p>{weatherData.weather[0].description}</p>
            <p>{weatherData.main.temp} °C</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

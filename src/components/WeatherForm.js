// src/components/WeatherForm.js

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const WeatherForm = ({ setWeatherData }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_KEY = "a87004dedf28bd2c4f4e795b492f6641";

  const getWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found");
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      getWeather(city);
    } else {
      setError("Please enter a city");
      setWeatherData(null);
    }
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button type="submit">Get Weather</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

WeatherForm.propTypes = {
  setWeatherData: PropTypes.func.isRequired,
};

export default WeatherForm;

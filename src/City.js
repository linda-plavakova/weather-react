
import React, { useState } from "react";
import axios from "axios";
import Picture from "./Rain.jpg";
//import { getSuggestedQuery } from "@testing-library/react";

export default function City() {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
 const [cityName, setCityName] = useState("Nitra");

  function handleResponse(response) {
    setWeatherData({
    temperature: Math.round(response.data.main.temp),
    wind: Math.round(3.6*(response.data.wind.speed)),
    city: response.data.name,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`

    });
    setReady(true); }

    function search(event) {
      event.preventDefault();
    const apiKey = "dc266af0719230920ce97e61b0255f6f";
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    function getCity(event) {
      setCityName(event.target.value);
    }
    
   if(ready) 
   {
  return (
  <div>
 
  <h1> {weatherData.city} </h1>

   <div>
      <img src={Picture} className="main-photo" alt="Happy Rain" />
    </ div>

    <section className="current-weather">
      <p id="current-date"> Today </p>
      <span id="current-temp"> {weatherData.temperature}°C</span>

      <img
        src = {weatherData.iconUrl}
        alt="Happy Rain"
        className="icon-current"
      />

      <span id="current-temp"> </span>
      <p>
        <span id="condition"> Condition: {weatherData.description} </span> <br />
        <span id="wind-speed">Wind: {weatherData.wind} km/h</span> <br />
        <span id="humidity">Humidity: {weatherData.humidity} %</span> <br />
      </p>
    </section>

    <div>
      <form onSubmit={search}>
        <input
          type="search"
          name="city"
          id="search-form"
          className="form-control"
          placeholder="Enter city "
          autoComplete="off"
          onChange={getCity}
        />
        <container className="buttons">
          <button type="submit" className="btn btn-primary">
            {" "}
            Show weather
          </button>
          <button className="btn btn-primary buttons" id="locate-btn">
            {" "}
            Locate me{" "}
          </button>
        </container>
      </form>
    </div>

    </ div > 
    

    
    )

  }

  else {
    const apiKey = "dc266af0719230920ce97e61b0255f6f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
<div>      
<div>
<h1> {cityName} </h1>

   <div>
      <img src={Picture} className="main-photo" alt="Happy Rain" />
    </ div>

    <section className="current-weather">
      <p id="current-date"> Today </p>
      <span id="current-temp"> {weatherData.temperature}°C</span>

      <img
        src= {weatherData.iconUrl}
        alt="Happy Rain"
        className="icon-current"
      />

      <span id="current-temp"> </span>
      <p>
        <span id="condition"> Condition: {weatherData.description} </span> <br />
        <span id="wind-speed">Wind: {weatherData.wind} km/h</span> <br />
        <span id="humidity">Humidity: {weatherData.humidity} %</span> <br />
      </p>
    </section>

      <form onSubmit={search}>
        <input
          type="search"
          name="city"
          id="search-form"
          className="form-control"
          placeholder="Enter city "
          autoComplete="off"
          onChange={getCity}
        />
        <container className="buttons">
          <button type="submit" class="btn btn-primary">
            {" "}
            Show weather
          </button>
          <button className="btn btn-primary buttons" id="locate-btn">
            {" "}
            Locate me{" "}
          </button>
        </container>
      </form>
    </div>

    </ div > 
   
    )
  }
}

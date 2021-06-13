
import React, { useState } from "react";
import axios from "axios";
import Picture from "./Rain.jpg";

export default function City() {
  const [weatherData, setWeatherData] = useState({});
  const [ready, setReady] = useState(false);
  function handleResponse(response) {
    setWeatherData({
    temperature: Math.round(response.data.main.temp),
    wind: Math.round(3.6*(response.data.wind.speed)),
    city: response.data.name,
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,

    });
    setReady(true); }

    function search() {
      const apiKey = "dc266af0719230920ce97e61b0255f6f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Nitra&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
        src="https://openweathermap.org/img/wn/01d@2x.png"
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
      <form>
        <input
          type="text"
          name="city"
          id="search-form"
          className="form-control"
          placeholder="Enter city "
          autoComplete="off"
        />
        <container className="buttons">
          <button type="submit" class="btn btn-primary">
            {" "}
            Show weather
          </button>
          <button class="btn btn-primary buttons" id="locate-btn">
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

    search();
    return (
      

      <h1>Loading...</h1>
    )
  }
}

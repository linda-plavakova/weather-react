import React from "react";

export default function Current() {
  return (
    <section className="current-weather">
      <p id="current-date"> Today </p>
      <span id="current-temp"> 12°C</span>

      <img
        src="https://openweathermap.org/img/wn/01d@2x.png"
        alt="Happy Rain"
        className="icon-current"
      />

      <span id="current-temp"> </span>
      <p>
        <span id="condition"> Clear Sky </span> <br />
        <span id="wind-speed">Wind: 12km/h</span> <br />
        <span id="humidity">Humidity: 80%</span> <br />
      </p>
    </section>
  );
}

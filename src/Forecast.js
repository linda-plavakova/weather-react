import React from "react";
import PlusDay from "./PlusDay";
import PlusDayTwo from "./PlusDayTwo";
import PlusDayThree from "./PlusDayThree";
import PlusDayFour from "./PlusDayFour";
import PlusDayFive from "./PlusDayFive";

export default function Forecast() {
  return (
    <section className="next-five-days">
      <div className="row weather-forecast" id="forecast">
        <PlusDay />
        <PlusDayTwo />
        <PlusDayThree />
        <PlusDayFour />
        <PlusDayFive />
      </div>
    </section>
  );
}

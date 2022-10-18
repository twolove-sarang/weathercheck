import React from "react";

const WeatherSection = ({ weather }) => {
  return (
    <div>
      <div>Today Weather</div>
      <div>{weather?.name}</div>
      <div>{weather?.main.temp}°C</div>
      <div>{weather?.weather[0].main}</div>
      <div>{weather?.wind.speed}m/s</div>
    </div>
  );
};

export default WeatherSection;

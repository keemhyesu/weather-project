import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("엥", weather);
  return (
    <div className="outer">
      <h1>{weather?.name}</h1>
      <h2>
        {weather?.main.temp}C /{(weather?.main.temp * 1.8 + 32).toFixed(2)}F
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;

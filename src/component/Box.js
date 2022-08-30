import React from "react";

const Box = ({ weather }) => {
  console.log("날씨?", weather);
  return (
    <div className="topBox">
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp}/ {weather?.main.temp * 1.8 + 32}
      </h2>
      <h2>{weather?.weather[0].description}</h2>
    </div>
  );
};

export default Box;

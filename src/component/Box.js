import React from "react";
import { RiCelsiusFill } from "react-icons/ri";
import { RiFahrenheitFill } from "react-icons/ri";

const Box = ({ weather }) => {
  console.log("날씨?", weather);
  return (
    <div className="topBox">
      <h1>{weather?.name}</h1>
      <h2>
        {weather?.main.temp}
        <RiCelsiusFill /> / {weather?.main.temp * 1.8 + 32}
        <RiFahrenheitFill />
      </h2>
      <h2>{weather?.weather[0].description}</h2>
    </div>
  );
};

export default Box;

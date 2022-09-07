import React from "react";

const CityButtons = ({ cities, setCity, handleCityChange }) => {
  return (
    <div className="buttons">
      <button onClick={() => handleCityChange("current")}>
        Current Location
      </button>
      {cities.map((city, index) => (
        <button key={index} onClick={() => handleCityChange(city)}>
          {city}
        </button>
      ))}
    </div>
  );
};

export default CityButtons;

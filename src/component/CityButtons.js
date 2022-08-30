import React from "react";

const CityButtons = ({ cities, setCity, handleCityChange }) => {
  console.log("cities?", cities);
  return (
    <div className="outer">
      <div className="buttons">
        <button onClick={() => handleCityChange("current")}>current</button>
        {cities.map((item, index) => (
          <button key={index} onClick={() => setCity(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CityButtons;

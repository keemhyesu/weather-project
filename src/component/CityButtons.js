import React from "react";

const CityButtons = ({ cities, setCity }) => {
  console.log("cities?", cities);
  return (
    <div className="buttons">
      <button>현재 위치</button>
      {cities.map((item, index) => (
        <button key={index} onClick={() => setCity(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default CityButtons;

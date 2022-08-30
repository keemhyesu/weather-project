import React from "react";

const CityButtons = ({ cities }) => {
  console.log("cities?", cities);
  return (
    <div className="buttons">
      <button>현재 위치</button>
      {cities.map((item) => (
        <button>{item}</button>
      ))}
    </div>
  );
};

export default CityButtons;

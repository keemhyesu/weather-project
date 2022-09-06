import React, { useEffect, useState } from "react";
import "../src/App.css";
import CityButtons from "./component/CityButtons";
import WeatherBox from "./component/WeatherBox";
import { MagnifyingGlass } from "react-loader-spinner";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const cities = ["Paris", "New york", "London", "Bangkok"];
  const [visible, setVisible] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      callApi(lat, lon);
    });
  };

  const callApi = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=47aea59812fff51f357ac9c028580eea&units=metric`;
    setVisible(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setVisible(false);
    console.log("data", data);
  };

  const citiesWeather = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47aea59812fff51f357ac9c028580eea&units=metric`;
    setVisible(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setVisible(false);
    console.log("data", data);
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      citiesWeather();
    }
  }, [city]);

  return (
    <>
      <div className="container">
        {visible ? (
          <MagnifyingGlass
            visible={visible}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        ) : (
          <div className="container">
            <WeatherBox weather={weather} />
            <CityButtons cities={cities} setCity={setCity} />
          </div>
        )}
      </div>
    </>
  );
};

export default App;

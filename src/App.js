import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "./component/Box";
import CityButtons from "./component/CityButtons";

//1. 앱 실행 => 현재 위치 기반 날씨를 보여줌
//2. 날씨 정보에는 도시,섭씨,화씨 날씨상태
//3. 5개의 버튼이 있다(1개는 현재위치, 4개는 다른 도시)
//4. 도시 버튼을 클릭할 때마다 도시별 날씨가 보인다
//5. 현재 위치버튼을 누르면 다시 현재 위치 기반의 날씨가 보인다
//6. 데이터를 들고 오는동안 로딩스피너가 돈다

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      callApi(lat, lon);
    });
  };

  const callApi = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=47aea59812fff51f357ac9c028580eea`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className="container">
        <Box />
        <CityButtons />
      </div>
    </div>
  );
}

export default App;

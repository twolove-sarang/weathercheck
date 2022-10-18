import { useEffect, useState } from "react";
import "./App.css";
import WeatherSection from "./component/WeatherSection";
import ButtonSection from "./component/ButtonSection";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

//지역 정보를 가져올 수 있다.
//내 위치의 날씨와 각 나라별 날씨를 볼 수 있다.
//로딩 스피너
const API_KEY = process.env.REACT_APP_API_KEY;
const cities = ["paris", "seoul", "busan", "tokyo", "shanghai", "hawaii"];

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const geolocationAPI = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      // console.log("위치는", lat, lon);
      weatherAPI(lat, lon);
    });
  };

  const weatherAPI = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    console.log("데이터는?", data);
    // weather값을 전해주고싶어
    setWeather(data);
    setLoading(false)
  };

  const getCityApi = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    console.log("데이터는", data);
    //weather를 설정하는 애니까 setWeather를 써야해!
    setWeather(data);
    setLoading(false)
  };

  const getCurrentWeather = () => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };


  useEffect(() => {
    if (city === "") {
      geolocationAPI();
    } else {
      getCityApi();
    }
  }, [city]);

  // useEffect(()=>{
  //   getCityApi()
  // },[city])

  const Main = styled.div`
    border: 1px solid black;
  `;

  return (
    <Main>
      {loading ? (
        <ClipLoader color="#909022" loading={loading} size={150} />
      ) : (
        <div>
          <WeatherSection weather={weather} />
          <ButtonSection
            cities={cities}
            setCity={setCity}
            getCurrentWeather={getCurrentWeather}
            selectedCity={city}
          />
        </div>
      )}
    </Main>
  );
}

export default App;

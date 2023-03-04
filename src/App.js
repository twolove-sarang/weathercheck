import { useEffect, useState } from 'react';
import './App.css';
import WeatherSection from './component/WeatherSection';
import ButtonSection from './component/ButtonSection';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const API_KEY = process.env.REACT_APP_API_KEY;
const cities = ['paris', 'seoul', 'busan', 'tokyo', 'shanghai', 'hawaii'];

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const geolocationAPI = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      weatherAPI(lat, lon);
    });
  };

  const weatherAPI = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log('데이터는?', data);
    setWeather(data);
    setLoading(false);
  };

  const getCityApi = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log('데이터는', data);
    setWeather(data);
    setLoading(false);
  };

  const getCurrentWeather = () => {
    if (city === 'current') {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  const MainSection = styled.div`
    background-color: #f9f9f9;
    padding: 30px;
    // width: 50%;
  `;

  useEffect(() => {
    if (city === '') {
      geolocationAPI();
    } else {
      getCityApi();
    }
  }, [city]);

  return (
    <Container>
      {loading ? (
        <ClipLoader color="#005995" loading={loading} size={150} />
      ) : (
        <MainSection>
          <WeatherSection weather={weather} />
          <div>Press City Button👇</div>
          <ButtonSection
            cities={cities}
            setCity={setCity}
            getCurrentWeather={getCurrentWeather}
            selectedCity={city}
          />
        </MainSection>
      )}
    </Container>
  );
}

export default App;

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperature3,
  faCloud,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const WeatherTitle = styled.div`
  font-size: 1em;
`;

const WeatherName = styled.div`
  font-size: 2.5em;
  font-weight: 700;
`;

const WeatherBigBox = styled.div`
  display: flex;
  text-align: center;
`;

const WeatherSmallBox = styled.div`
  width: 33%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 1em;
  padding: 1em;
  font-weight: 800;
  margin: 0.5em;
  background-color: white;
`;

const WeatherSection = ({ weather }) => {
  return (
    <div>
      <WeatherTitle>Today Weather</WeatherTitle>
      <WeatherName>{weather?.name}</WeatherName>
      <WeatherBigBox>
        <WeatherSmallBox>
          <FontAwesomeIcon icon={faTemperature3} />
          <div className="iconSection">{weather?.main.temp}°C</div>
        </WeatherSmallBox>
        <WeatherSmallBox>
          <FontAwesomeIcon icon={faCloud} />
          <div>{weather?.weather[0].main}</div>
        </WeatherSmallBox>
        <WeatherSmallBox>
          <FontAwesomeIcon icon={faWind} />
          <div>{weather?.wind.speed}m/s</div>
        </WeatherSmallBox>
      </WeatherBigBox>
    </div>
  );
};

export default WeatherSection;

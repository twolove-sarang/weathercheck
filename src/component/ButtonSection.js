import React from "react";
import styled from "styled-components";



const ButtonStyle = styled.button`
  border : none;
  border-radius : 15px;
  padding : 10px;
  margin : 5px;
  font-weight : 500;
`

const ButtonSection = ({
  cities,
  setCity,
  getCurrentWeather,
  selectedCity,
}) => {
  return (
    <div>
      <ButtonStyle
        onClick={() => getCurrentWeather("current")}
        style={{
          textTransform: "uppercase",
          background: `${selectedCity}` == null ? "#005995" : "white",
        }}
      >
        current
      </ButtonStyle>

      {cities.map((item, index) => (
        <ButtonStyle
          onClick={() => setCity(item)}
          style={{
            textTransform: "uppercase",
            background: `${selectedCity}` == item ? "#005995" : "white",
            color: `${selectedCity}` == item? "white":"black"
          }}
          key={index}
        >
          {item}
        </ButtonStyle>
      ))}
    </div>
  );
};

export default ButtonSection;

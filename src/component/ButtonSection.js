import React from "react";

const ButtonSection = ({
  cities,
  setCity,
  getCurrentWeather,
  selectedCity,
}) => {
  return (
    <div>
      <button
        onClick={() => getCurrentWeather("current")}
        style={{
          textTransform: "uppercase",
          background: `${selectedCity}` == null ? "#446ff2" : "white",
        }}
      >
        current
      </button>

      {cities.map((item, index) => (
        <button
          onClick={() => setCity(item)}
          style={{
            textTransform: "uppercase",
            background: `${selectedCity}` == item ? "#005995" : "909077",
            color: `${selectedCity}` == item? "white":"black"
          }}
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonSection;

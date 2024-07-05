// src/utils/temperatureConverter.js
export const convertTemperature = (temp, unit) => {
    switch (unit) {
      case 'Celsius':
        return temp - 273.15;
      case 'Fahrenheit':
        return (temp - 273.15) * 9/5 + 32;
      case 'Kelvin':
        return temp;
      default:
        return temp;
    }
  };
  
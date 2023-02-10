const convertToCelsius = function(temp) {
  let celsiusTemp = ((temp - 32) * 5/9);
  if (Number.isInteger(celsiusTemp)) {
    console.log(celsiusTemp);
    return celsiusTemp;
  } else {
    return celsiusTemp = +celsiusTemp.toFixed(1);
  }
};

const convertToFahrenheit = function(temp) {
  let fahTemp = (temp * 9/5 + 32);
  if (Number.isInteger(fahTemp)) {
    return fahTemp;
  } else {
    return fahTemp = +fahTemp.toFixed(1);
  }
};

/** Farenheit to celsius x °F ≘ (x − 32) × 5/9 °C */
/** Celsius to Farenheit	x °C ≘ (x × 9/5 + 32) °F */
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
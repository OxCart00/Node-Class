function celsiusToKelvin(celsius) {
  const kelvin = celsius + 273.15;
  return kelvin;
}

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

function kelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return celsius;
}

function kelvinToFahrenheit(kelvin) {
  const fahrenheit = (kelvin - 273.15) * 9/5 + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}

function fahrenheitToKelvin(fahrenheit) {
  const kelvin = (fahrenheit - 32) * 5/9 + 273.15;
  return kelvin;
}

module.exports = {
  celsiusToFahrenheit : celsiusToFahrenheit,
  celsiusToKelvin : celsiusToKelvin,
  kelvinToCelsius : kelvinToCelsius,
  kelvinToFahrenheit : kelvinToFahrenheit,
  fahrenheitToCelsius : fahrenheitToCelsius,
  fahrenheitToKelvin : fahrenheitToKelvin
}
const { celsiusToFahrenheit, celsiusToKelvin, kelvinToCelsius, kelvinToFahrenheit, fahrenheitToCelsius, fahrenheitToKelvin } = require('./converter.js');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un valor de temperatura: ', (numero) => {
  rl.question('Ingrese la unidad de medida de la temperatura (C, K o F): ', (letra) => {
    const temperatura = parseFloat(numero);
    // Caso Celsius
    if (letra.toLowerCase() === 'c' || letra.toUpperCase() === 'C') {
      console.log(`${temperatura} grados Celsius equivalen a ${celsiusToFahrenheit(temperatura)} grados Fahrenheit`);
      console.log(`${temperatura} grados Celsius equivalen a ${celsiusToKelvin(temperatura)} grados Kelvin`);
    } 
    // Caso Kelvin
    else if (letra.toLowerCase() === 'k' || letra.toUpperCase() === 'K') {
      console.log(`${temperatura} grados Kelvin equivalen a ${kelvinToFahrenheit(temperatura)} grados Fahrenheit`);
      console.log(`${temperatura} grados Kelvin equivalen a ${kelvinToCelsius(temperatura)} grados Celsius`);
    }
    // Caso Fahrenheit
    else if (letra.toLowerCase() === 'f' || letra.toUpperCase() === 'F') {
      console.log(`${temperatura} grados Fahrenheit equivalen a ${fahrenheitToCelsius(temperatura)} grados Celsius`);
      console.log(`${temperatura} grados Fahrenheit equivalen a ${fahrenheitToKelvin(temperatura)} grados Kelvin`);
    } else {
      console.log("La letra recibida no es ni 'C' ni 'F' ni 'K'.");
    }
    rl.close();
  });
});
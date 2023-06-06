const { calcularMCM, calcularMCD } = require ('./components.js');
// Obtener los argumentos desde la terminal
const numeros = process.argv.slice(2);
const a = parseInt(numeros[0]);
const b = parseInt(numeros[1]);

console.log("El mínimo común múltiplo (mcm) de", a, "y", b, "es", calcularMCM(a, b));
console.log("El máximo común divisor (mcd) de", a, "y", b, "es", calcularMCD(a, b));


const { fibonacci, verificacionFibonacci, primerosFibonacci } = require('./fibonacci_functions');
// Obtener el n-ésimo número de Fibonacci
var n = 10;
console.log(`El n-ésimo numero de Fibonacci, siendo n = ${n}, es: ${fibonacci(n)}`);

// Verificar si un número está en la serie de Fibonacci
var numero = 55;
var fibonacciNumbero = verificacionFibonacci(numero);
console.log(`El número ${numero} ${fibonacciNumbero ? '¡Es!' : '!No es¡'} de la serie de Fibonacci.`);

// Mostrar los primeros m números de Fibonacci
var m = 11;
console.log(`Los primeros ${m} numeros de fibonacci son: ${primerosFibonacci(m)}`); 
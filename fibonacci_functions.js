// Función para calcular el n-ésimo número de Fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Función para verificar si un número está en la serie de Fibonacci
function verificacionFibonacci(numero) {
  var a = 0;
  var b = 1;

  while (b < numero) {
    var temp = b;
    b = a + b;
    a = temp;
  }

  if (b === numero) {
    return true;
  } else {
    return false;
  }
}

// Función para mostrar los primeros m números de Fibonacci, contando el 0
function primerosFibonacci(m) {
  var numerosFibonacci = [];
  for (var i = 0; i < m; i++) {
    numerosFibonacci.push(fibonacci(i));
  }
  return numerosFibonacci;
}

module.exports = {
  fibonacci:fibonacci,
  verificacionFibonacci:verificacionFibonacci,
  primerosFibonacci:primerosFibonacci
};
// Suma dos números
function sumar(a, b) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) {
      reject(new Error('Los parámetros deben ser números'));
    } else {
      resolve(a + b);
    }
  });
}

// Resta dos números
function restar(a, b) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) {
      reject(new Error('Los parámetros deben ser números'));
    } else {
      resolve(a - b);
    }
  });
}

// Multiplica dos números
function multiplicar(a, b) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) {
      reject(new Error('Los parámetros deben ser números'));
    } else {
      resolve(a * b);
    }
  });
}

// Divide dos números
function dividir(a, b) {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b)) {
      reject(new Error('Los parámetros deben ser números'));
    } else if (b === 0) {
      reject(new Error('No se puede dividir entre 0'));
    } else {
      resolve(a / b);
    }
  });
}

// Exporta las funciones para usarlas en otro archivo
module.exports = {
  sumar:sumar,
  restar:restar,
  multiplicar:multiplicar,
  dividir:dividir,
};

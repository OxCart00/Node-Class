const operaciones = require('./operaciones');

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

operaciones.sumar(num1, num2)
  .then(resultado => {
    console.log(`Suma: ${resultado}`);
    return operaciones.restar(num1, num2);
  })
  .then(resultado => {
    console.log(`Resta: ${resultado}`);
    return operaciones.multiplicar(num1, num2);
  })
  .then(resultado => {
    console.log(`Multiplicación: ${resultado}`);
    return operaciones.dividir(num1, num2);
  })
  .then(resultado => {
    console.log(`División: ${resultado}`);
  })
  .catch(error => {
    console.error(error.message);
  });
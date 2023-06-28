const { mostrarDatos, solicitarFrases, guardarSuma } = require('./read_n_print');

// mostrarDatos('datos.txt');

// solicitarFrases();

guardarSuma('numeros.txt', 'original.txt')
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });
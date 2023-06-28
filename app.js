const {copyFile} = require ('./module');

copyFile('texto.txt', 'copia.txt')
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });
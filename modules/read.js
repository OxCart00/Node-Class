const fs = require('fs');

function leerArchivo(nombreArchivo) {
  return new Promise((resolve, reject) => {
    fs.readFile(nombreArchivo, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = leerArchivo;
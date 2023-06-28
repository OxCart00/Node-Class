const fs = require('fs');

function copyFile(filePath, originalFilePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(`No se pudo leer el archivo: ${filePath}`);
        return;
      }

      fs.writeFile(originalFilePath, data, 'utf8', (error) => {
        if (error) {
          reject('Ocurrió un error al escribir en el archivo:', error);
          return;
        }
        resolve(`Los datos se han copiado de manera exitosa`);
      });
    });
  });
}

module.exports = {
  copyFile: copyFile
};
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const frases = [];

// Función para solicitar al usuario ingresar las frases
function solicitarFrases() {
  rl.question('Ingresa una frase (o "fin" para terminar): ', (frase) => {
    if (frase.toLowerCase() === 'fin' || frase === "") {
      guardarFrases();
    } else {
      frases.push(frase);
      solicitarFrases();
    }
  });
}

function guardarFrases() {
  const contenido = frases.join('\n');

  fs.writeFile('frases.txt', contenido, 'utf8', (error) => {
    if (error) {
      console.error('Ocurrió un error al guardar las frases:', error);
    } else {
      console.log('Las frases se han guardado correctamente en el archivo "frases.txt".');
    }
    rl.close();
  });
}

// Definir la función para leer y mostrar los datos del archivo
function mostrarDatos(nombreArchivo) {
  fs.readFile(nombreArchivo, 'utf8', (error, data) => {
    if (error) {
      console.error(`No se pudo leer el archivo: ${nombreArchivo}`);
      return;
    }

    // Separar los datos por líneas
    const lineas = data.split('\n');

    // Imprimir cada línea en la consola
    lineas.forEach((linea) => {
      console.log(linea.trim());
    });
  });
}

// Leer el contenido del archivo
function guardarSuma(filePath) {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.error(`No se pudo leer el archivo: ${filePath}`);
      return;
    }

    // Obtener los números separados por comas
    const numeros = data.split(',').map((numero) => parseInt(numero.trim(), 10));

    // Calcular la suma de los números
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

    // Escribir el resultado en el archivo
    fs.writeFile(filePath, suma.toString(), 'utf8', (error) => {
      if (error) {
        console.error('Ocurrió un error al escribir en el archivo:', error);
        return;
      }
      console.log('La suma de los números se ha guardado correctamente en el archivo "numeros.txt".');
    });
  });
}

module.exports = {
  mostrarDatos: mostrarDatos,
  solicitarFrases: solicitarFrases,
  guardarSuma: guardarSuma
};
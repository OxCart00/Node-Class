// Ejemplo de lista:

// casa perro gato mesa silla cama cocina ventana perro mesa gato silla casa ventana cocina cama gato cama cocina perro ventana mesa silla ventana silla casa perro mesa cocina gato


const readline = require('readline');
const leerArchivo = require('./modules/read');
const buscarPalabra = require('./modules/search');
const fs = require('fs');

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Paso 1: Crear y escribir en el archivo "palabras.txt"
  rl.question('Ingrese una lista de palabras separadas por espacios: ', (palabras) => {
    fs.writeFile('palabras.txt', palabras, (err) => {
      if (err) {
        console.error('Error al escribir en el archivo:', err);
        rl.close();
        return;
      }

      // Paso 2: Leer el contenido del archivo
      leerArchivo('palabras.txt')
        .then((contenido) => {
          // Paso 3: Solicitar al usuario ingresar una palabra para buscar
          rl.question('Ingrese una palabra para buscar en el archivo: ', (palabraBuscar) => {
            // Paso 4: Realizar la búsqueda y mostrar el resultado
            const cantidad = buscarPalabra(contenido, palabraBuscar);
            console.log(`La palabra '${palabraBuscar}' aparece ${cantidad} veces en el archivo.`);
            rl.close();
          });
        })
        .catch((err) => {
          console.error('Error al leer el archivo:', err);
          rl.close();
        });
    });
  });
}

main();

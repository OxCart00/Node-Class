import axios from 'axios';
import chalk from 'chalk';
import fs from 'fs';

// 2. Crear la función asincrónica fetchPokemon
async function fetchPokemon(numero) {
  const url = `https://pokeapi.co/api/v2/pokemon/${numero}`;
  const response = await axios.get(url);
  return response.data;
}

// 3. Realizar la solicitud a la API y mostrar los datos en consola
async function getPokemonInfo() {
  try {
    const numero = 25;
    if (numero < 1 || numero > 898) {
      throw new Error('Número de Pokémon inválido');
    }

    const data = await fetchPokemon(numero);
    const nombre = data.name;
    const tipos = data.types.map((type) => type.type.name);

    console.log(chalk.yellow(`El Pokémon ${nombre} es de tipo ${tipos.join(' y ')}.`));
  } catch (error) {
    console.log(error.message);
  }
}

getPokemonInfo();

// 4. Crear la función formatPokemon
function formatPokemon(nombre, tipo1, tipo2) {
  if (!nombre || !tipo1) {
    throw new Error('Datos de Pokémon incompletos');
  }

  let formattedText = chalk.yellow(`El Pokémon ${nombre} es de tipo ${tipo1}`);
  if (tipo2) {
    formattedText += chalk.yellow(` y ${tipo2}`);
  }

  return formattedText;
}

// 5. Llamar a la función formatPokemon y capturar excepciones
try {
  const nombre = "Pikachu";
  const tipo1 = "Eléctrico";
  const tipo2 = "Volador";
  const formattedPokemon = formatPokemon(nombre, tipo1, tipo2);
  console.log(formattedPokemon);
} catch (error) {
  console.log(error.message);
}

// 6. Leer el contenido de un archivo
fs.readFile('datos.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("El archivo 'datos.txt' no existe");
  } else {
    console.log(data);
  }
});

// 7. Escribir en un archivo
function writeToFile(message) {
  fs.writeFile('resultados.txt', message, (err) => {
    if (err) {
      throw new Error("Error al escribir en el archivo 'resultados.txt'");
    } else {
      console.log("Mensaje escrito en el archivo 'resultados.txt'");
    }
  });
}

// 8. Llamar a la función writeToFile y capturar excepciones
try {
  writeToFile("Examen finalizado");
} catch (error) {
  console.log(error.message);
}
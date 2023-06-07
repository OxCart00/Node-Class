// PROBLEMA 1
function numeroMayor(numeros) {
  let mayor = numeros[0]; // Defino el primer numero como el mayor
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    } // recorro la lista de numeros, si algun numero es mayor que el primero toma su posicion.
  }
  return mayor;
}

// PROBLEMA 2
function numeroMenor(numeros) {
  let menor = numeros[0]; // Defino el primer numero como el menor
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    } // Recorro la lista de numeros, si alguno es menor que el primero toma su lugar
  }
  return menor;
}

// PROBLEMA 3
function sumatoria(numeros) {
  let sumatoria = 0; // Variable que va a guardar la sumatoria
  for (let i = 0; i < numeros.length; i++) {
    sumatoria += numeros[i];
  } // Recorre la ista de numeros, sumando el numero actual a la sumatoria.
  return sumatoria;
}

// PROBLEMA 4
function ordenarNumeros(numeros) {
  return numeros.sort((a, b) => a - b); // Devuelve la lista de numeros, ordenandolos con la condicion a (primer numero) < b (segundo numero)
}

module.exports={
  numeroMayor:numeroMayor,
  numeroMenor:numeroMenor,
  sumatoria:sumatoria,
  ordenarNumeros:ordenarNumeros
};





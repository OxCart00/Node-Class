function buscarPalabra(contenido, palabra) {
  const palabras = contenido.split(' ');
  const contador = palabras.reduce((count, p) => {
    if (p === palabra) {
      count++;
    }
    return count;
  }, 0);
  return contador;
}

module.exports = buscarPalabra;
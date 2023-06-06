function area(r) {
  return 3.1415 * Math.pow(r, 2);
}
function perimetro(r) {
  return 2 * 3.1415 * r;
}

module.exports = {
  area: area,
  perimetro: perimetro
}
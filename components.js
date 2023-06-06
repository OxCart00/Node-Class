// Calcula el mínimo común múltiplo (mcm)
function calcularMCM(a, b) {
  return (a * b) / calcularMCD(a, b);
}
// Calcula el máximo común divisor (mcd)
function calcularMCD(a, b) {
  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

module.exports={
  calcularMCD:calcularMCD,
  calcularMCM:calcularMCM
};
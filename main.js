// ----------------------------------------------PROBLEMA 1----------------------------------------------

// let numero = 7;

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// if (numero < 0) {
//     console.log("Error: El número debe ser positivo.");
// } else {
//     let resultado = factorial(numero);
//     console.log(`El factorial de ${numero} es ${resultado}.`);
// }

// ----------------------------------------------PROBLEMA 2----------------------------------------------

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Ingrese el valor de A: ", function (valorA) {
//     rl.question("Ingrese el valor de B: ", function (valorB) {
//         rl.question("Ingrese el valor de C: ", function (valorC) {
//             valorA = parseInt(valorA);
//             valorB = parseInt(valorB);
//             valorC = parseInt(valorC);

//             let mayor = valorA;

//             if (valorB > mayor) {
//                 mayor = valorB;
//             }

//             if (valorC > mayor) {
//                 mayor = valorC;
//             }

//             console.log("El valor mas grande es: " + mayor);

//             rl.close();
//         });
//     });
// });

// ----------------------------------------------PROBLEMA 3----------------------------------------------

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Ingrese el valor de A: ", function (valorA) {
//   rl.question("Ingrese el valor de B: ", function (valorB) {
//     rl.question("Ingrese el valor de C: ", function (valorC) {
//       valorA = parseInt(valorA);
//       valorB = parseInt(valorB);
//       valorC = parseInt(valorC);

//       let promedio = (valorA + valorB + valorC) / 3;

//       console.log("El promedio es: " + promedio);
//       rl.close();
//     });
//   });
// });

// ----------------------------------------------PROBLEMA 4----------------------------------------------

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Ingrese un número entero: ", function (numero) {
//   numero = parseInt(numero);

//   if (numero < 0) {
//       console.log("El número es negativo.");
//   } else if (numero > 0) {
//       console.log("El número es positivo.");
//   } else {
//       console.log("El número es cero.");
//   }

//   rl.close();
// });

// ----------------------------------------------PROBLEMA 5----------------------------------------------

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Ingrese el primer número entero: ", function (numero1) {
//   rl.question("Ingrese el segundo número entero: ", function (numero2) {
//       numero1 = parseInt(numero1);
//       numero2 = parseInt(numero2);

//       if (numero2 === 0) {
//           console.log("Error: No se puede dividir entre cero.");
//       } else {
//           let division = numero1 / numero2;
//           console.log("El resultado de la división es: " + division);
//       }

//       rl.close();
//   });
// });

// ----------------------------------------------PROBLEMA 6----------------------------------------------

// let numero = 1;
// let sumatoria = 0;
// while (numero <= 10) {
//   sumatoria += numero;
//   numero++;
// }
// console.log("El resultado de la suatoria de los numeros enteros entre 1 y 10 es igual a: " + sumatoria);

// ----------------------------------------------PROBLEMA 7----------------------------------------------

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Ingrese el número de melcochones vendidos: ", function (cantidadMelcochones) {
//     cantidadMelcochones = parseInt(cantidadMelcochones);

//     const precioNormal = 600; // Precio habitual de un melcochón
//     const descuentoMiércoles = 0.45; // Descuento del 45% para los miércoles

//     let precioDescuento = precioNormal * descuentoMiércoles; // Descuento aplicado al precio normal
//     let precioFinal = precioNormal - precioDescuento; // Precio final con el descuento

//     let total = cantidadMelcochones * precioFinal; // Costo total de los melcochones vendidos

//     console.log("Precio habitual de un melcochón: ₡" + precioNormal);
//     console.log("Descuento por ser miércoles: " + (descuentoMiércoles * 100) + "%");
//     console.log("Costo final total: ₡" + total);

//     rl.close();
// });

// ----------------------------------------------FIN----------------------------------------------
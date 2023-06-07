const { numeroMayor, numeroMenor, sumatoria, ordenarNumeros } = require('./components.js');

const lista = [543, 106, 238, 208, 153, 260, 198, 16, 49, 312, 108, 40, 207, 107, 121, 137, 513, 219, 316, 614];


// Mostrar el número mayor
console.log('El número mayor, de la lista, es:', numeroMayor(lista));

// Mostrar el número menor
console.log('El número menor, de la lista, es:', numeroMenor(lista));

// Mostrar la sumatoria
console.log('La sumatoria de todos los numeros de la lista es:', sumatoria(lista));

// Mostrar la lista ordenada
console.log('Lista ordenada:', ordenarNumeros(lista));
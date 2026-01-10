//1- CONCAT
const originalArray = [1, 2, 3];
const copyArray = [].concat(originalArray);

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false

//2- SLICE
// slice sin argumentos retorna una copia superficial del array

const originalArray_SLICE = [1, 2, 3];
const copyArray_SLICE = originalArray.slice();

console.log(copyArray_SLICE); // [1, 2, 3]
console.log(originalArray_SLICE === copyArray_SLICE); // false

//3- OPERADOR DE PROPAGACION

const originalArray_PROPAGACION = [1, 2, 3];
const copyArray_PROPAGACION = [...originalArray_PROPAGACION];

console.log(copyArray_PROPAGACION); // [1, 2, 3]
console.log(copyArray_PROPAGACION === originalArray_PROPAGACION); // false

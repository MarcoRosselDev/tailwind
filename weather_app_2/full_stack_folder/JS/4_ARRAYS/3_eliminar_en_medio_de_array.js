let fruits = ["apple", "banana", "orange", "mango"];
let indexToRemove = fruits.indexOf("orange");
if (indexToRemove !== -1) {
  fruits.splice(indexToRemove, 1);
}

console.log(fruits); // ["apple", "banana", "mango"]

// array.splice(startIndex, itemsToRemove, item1, item2)

// eliminar todos los elementos de un array

let array = [1, 2, 3, 4, 5];
array.splice(0);

console.log(array); // []

// crear una copia antes de editar un array , por que splice los edita directamente, no crea un nuevo array si no que muta el original
// solucion crear una copia con destructuring

let copia = [...array]; // ahora podemos trabajar con copia para no cagarla

// return
// splice retorna un array con los elementos eliminados, si no se elimino nada retorna un array vacio = []

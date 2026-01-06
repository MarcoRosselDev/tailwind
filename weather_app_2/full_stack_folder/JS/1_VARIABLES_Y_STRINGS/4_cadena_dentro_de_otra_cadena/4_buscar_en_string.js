let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result); // true
// .includes() es key sensitive

/* podemos aplicar un segundo parametro
para decirle desde que index buscar */

let text = "Hello, JavaScript world!";
let index_7 = text.includes("JavaScript", 7); // true
let index_8 = text.includes("JavaScript", 8); // false

console.log(index_7);
console.log(index_8);

/* ojo que sole retorna un booleano

no nos dice cuantas veces se repite la cadena o donde esta
para eso podemos aplicar .indexOf() que es mas detallado.
*/

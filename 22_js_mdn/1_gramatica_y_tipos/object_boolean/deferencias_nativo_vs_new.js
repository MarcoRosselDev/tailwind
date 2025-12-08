/* la premisa es la siguiente explicacion de mozilla dn

Booleanos literales
El tipo booleano tiene dos valores literales: true y false.

Nota: No confundas los valores booleanos primitivos true y false con los valores 
true y false del objeto Boolean.
El objeto Boolean es un contenedor alrededor del tipo de dato primitivo Boolean. 
Consulta Boolean para obtener más información.
*/

// explicacion más clara:
// comparacion con == y ===
let primitivo = true;
let objeto = new Boolean(true);

console.log(primitivo == objeto); // true (coinciden en valor)
console.log(primitivo === objeto); // false (diferente tipo: primitivo vs objeto)

console.log(typeof primitivo); // "boolean"
console.log(typeof objeto); // "object" ← ¡Aquí está la clave!

// por que existe el bojecto Bollean entonces?

/* Principalmente por razones históricas y para mantener consistencia con otros objetos como Number y String. 
En la práctica moderna, casi nunca necesitas usar new Boolean().
Siempre usa los primitivos. */

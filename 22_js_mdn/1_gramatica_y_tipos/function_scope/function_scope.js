/* Declaración de función */

foo(); // "bar"

function foo() {
  console.log("bar");
}

/* Expresión de función */

baz(); // TypeError: baz no es una función

var baz = function () {
  console.log("bar2");
};

/* en resumen las funciones declaradas:

function name(){}

al ser leidas suben al top cuando se interpretan en el navegador.
En cambio las apuntadas a un var:

var myfunction = function(){}

son interpretadas en orden, por lo que si se llama antes de ser declarada,
lanzara error.
*/

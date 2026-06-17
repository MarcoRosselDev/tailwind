# Cuales son los diferentes tipos de botones, y cuando  deberias usarlos ?

El elemento "button" se usa para ejecutar una accion cuando es activada.
Aqui un ejemplo del elemento "button" con el texto "Start Game".

```html
<button>Start Game</button>
```

Otros ejemplos de uso del elemento "button" incluyen el envio de un formulario,
mostrar un modal, o abrir y cerrar un menu lateral.
El elemento "button" tiene un atributo "type" que controla el comportamiento (behavior)
del boton cuando es activado.
El primer valor posible para el atributo "type" sera el tipo de boton (type).
Aqui un ejemplo del uso del elemento button con el type=button y el texto "Show Alert":

```html
<button>Start Game</button>
```

Por defecto el boton no hara nada cuando se active.
Pero tu puedes agregar algun codigo javascript que convierta el boton en interactivo,
como ahora mostrando un alert en este caso.

```javascript
const btn = document.querySelector("button");
btn.addEventListener("click", () => alert("You clicked on the alert button"));
```
```html
<button type="button">Show Alert</button>
<script src="index.js"></script>
```

Otro posible valor para el atributo "type" es el valor "submit".
Aqui un ejemplo de usar un boton con el type en "submit":

```html
<form action="">
  <label for="email">Email address:</label>
  <input type="email" id="email" name="email" />
  <button type="submit">Submit form</button>
</form>
```

Dentro del elemento "form", estan los elemento "lable" y "input" para el email
del usuario.
Cuando el usuario clickea en el boton "submit",  su dato sera enviado al servidor
y sera procesado.

El tercer posible valor en el atributo "type" es "rest".
Aqui un ejemplo de un elemento "form" con botones "rest" y "submit".

```html
<form action="">
  <label for="email">Email address:</label>
  <input type="email" id="email" name="email" />
  <button type="reset">Reset form</button>
  <button type="submit">Submit form</button>
</form>
```

En este ejemplo modificado, los elementos "label" y "input" son usados para recolectar
la direccion del usuario.
Cuando el usuario clikea en el boton "rest", se limpiaran todos los datos.
Es importante notar que el boton "rest" no es la mejor idea porque ellos podrian accidentalmente resetando sus datos del usuario.
Tambien muchos botones en el formulario podrian desordenar la interfas de usuario.

Otra forma de crear botones en HTML es usar el elemento "input".
El elemento "input" tambien tiene el atributo "type" con los posible valores de "submit",
"rest", y "button".
Aqui un ejemplo usando el elemento "input" con el type configurado en "button":

```html
<input class="start-btn" type="button" value="Start Game" />
<script src="index.js"></script>
```

El atributo "value" se usa para mostrar el texto del boton.
Entonces, cual es la diferencia entre usar el elemento input o el elemento button ?
el elemento "input" es un elemento vacio, lo que significa que
ellos no pueden tener nodos hijos, como texto, y solo pueden tener un tag inicial.
En el otro lado, el elemento "button" ofrece mas flexivilidad porque
puedes anidar texto, imagenes, y iconos dentro de el.
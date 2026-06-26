# que es 'aria-hidden' y como trabaja ?

Si necesitas desplegar contenido mientras que al mismo tiempo esconderlo
de personas que usan tecnologia de asistencia, como lectores de pantalla,
puedes usar el atributo 'aria-hidden'.

Solo necesitas agregarlo al elemento HTML que quieres esconder y actualizar el valor
a 'true', como puedes ver aqui: "aria-hidden='true'".

Este atributo esconde el elemento y todos sus hijos para el arbol de accesibilidad,
mientras que lo mantiene visible en la pagina.
Casos comunes de uso son:
  * Iconos e imagenes que sono tienen un proposito decorativo.
  * contenido duplicado.

Es importante recordar, que 'aria-hidden' solo esconde contenido para tecnologias de asistencia,
como loctores de pantalla.
Si el contenido fuere escondido para todos, entonces no deberias usar 'aria-hidden' para esconderlo.
Por ejemplo, un menu de hamburgesa que a menudo es colapsado deberia ser escondido
para todos los usuarios de teclado, no solo usuarios de lectores de pantalla.
En este caso, deberias actualizar el CSS 'display' a 'none' en el menu para removerlo
de la pagina renderizada y el arbol de accesibilidad cuando se colapse.

Nunca deberias usar 'aria-hidden' para esconder un elemento que es 'focuseable' con el taclado.
El 'aria-hidden' solo remueve el elemento el arbol de accesiblidad.
No lo remueve de el DOM.
De este modo, sera posible usarlo para lectores de pantalla el 'tab' tabular al elemento,
pero los lectores de pantalla no anunciaran el elemento,
efectivamente causando que 'focuseen' en nada.

Aqui un ejemplo cuando ocultamos un icono de el arbol de accesibilidad al agregar
el atributo 'aria-hidden' con un valor en 'true'.

Nosotros solo mantenemos el texto expuesto a tecnologias de asistencia
para evitar cualquier confucion que pueda correr de una redundancia de
mantener ambos iconos y texto para el mismo proposito.

```html
<button>
  <i class="fa-solid fa-gear" aria-hidden="true"></i>
  <span class="label">Settings</span>
</button>
```

No necesitas usar 'aria-hidden' cuando:
  * el elemento HTML ya cuenta con un atributo 'hidden'.
  * el elemento o elementos ancestros ya cuentan con un ocultamiento usando 'display: none'.
  * el elemento o elementos ancestros ya cuentan con un coultamiento usando 'visibility: hidden'.

En estos tres casos, el elemento es actualemnte oculto para el arbol de accesibilidad,
por lo que el atributo 'aria-hidden' no es necesario.

Como al usar cualquier atributo ARIA, deberas siempre probarlos con tecnologias de asistencia,y
preferentemente tener personas descapasitadas que prueben tu trabajo, para asegurate
que es facil de entender, incluso con estos elementos ocultos.

Tambien deberas saber que actualizar el 'aria-hidden' a 'false' no expondra 
el elemento a tecnologias de asistencia si ninguno de sus parientes este atributo actualizado a 'true'.

El atributo 'aria-hidden' se usa para ocultar elementos de personas que usarn tecnologia de asistencia,
como usaurios de lectores de pantalla.

Si bien puede ser útil para ocultar elementos puramente decorativos y contenido duplicado, 
debe usarse con moderación para evitar obstaculizar la accesibilidad.

En general, todo el contenido y funcionalidad disponible en la pagina tambien deberia estar
disponible para usuarios de tecnologia de asistencia.
El uso de 'aria-hidden' es muy angosto y deberia ser limitado principalmente
para hacer la experiencia clara para lectores de pantalla al remover solo los decorativos
o informacion duplicada.
No uses 'aria-hidden' para ocultar contenido que no creas que los lectores de pantalla 
se interesaran.
Estos usuarios merecen tener acceso a toda la informacion de la pagina.

Al seguir estas buenas practicas y probando la experiencia de usaurio, puedes crear
experiencias online inclusivas para todos.
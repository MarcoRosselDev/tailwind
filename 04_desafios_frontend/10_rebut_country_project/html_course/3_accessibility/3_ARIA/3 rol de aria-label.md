# cuale es el rol de los atributos 'aria-lable' y 'aria-labelledby' ?

Es importante estar seguros que todos los usuarios, incluyendo a los discapasitados,
que puedan acceder a sitios web sin complicaciones.

Para personas con lectores de pantalla, los atributos 'aria-label' y 'aria-labelledby' entregan
informacion crucial sobre elementos de la pagina que pueden ser confusos o invisibles.

veamos que son estos atributos y el rol que juegan para hacer la web accesible
para personas con problemas visuales y discapasidad.

Notaras que los dos atributos son prefijos de 'aria-'.
Entonces, que significa eso?
aria probiene de ARIA (stands for Accessible Rich Internet Applications), que vimos en la leccion pasada.
es un conjunto de atributos prefijados con 'aria-', que permite a los desarrolladores comunicar
el proposito del elemento para las tecnologias de asistencia.
El atributo 'aria-label' es una etiqueta invisible para elementos interactivos.
Este agrega un texto etiqueta a un elemento que los lectores de pantalla puedan leer.

'aria-label' es especialmente util para elementos que no tienen texto visible pero
siguen necesitando ser descritos por lectores de pantalla.
Por ejemplo, 'buttons' con solo iconos a menudo necesitan 'aria-lable'
para espesificar su proposito.

Aqui un ejemplo:
```html
<button aria-label="Search">
  <i class="fa-solid fa-magnifying-glass"></i>
</button>
```
En este caso, un lector de pantalla anunciara este boton como 'Search, button',
incluso si el boton solo continene un icono.
El atributo 'aria-lable' le dice al los lectores de pantalla que texto usar
en lugar del icono.

Si el contenido del boton tiene el texto 'Search' en lugar del icono, entonces
no seria necesario el atributo 'aria-label' por que el texto provee la etiqueta para el boton.

Para elementos input, el atributo 'aria-label' proporiciona una etiqueta directa
si hay un 'label'=(etiqueta) visible con el input.

El atributo 'aria-labelledby' hace exactamente lo mismo, pero en lugar de definir el texto
directamente en el atributo, lo usas como referencia a un texto que actualmente existe en la pagina.
El texto existente debera tener un atributo 'id', el cual sera usado para referenciar el valor
en el atributo 'aria-labelledby'.

Aqui un ejemplo:
```html
<input type="text" aria-labelledby="search-btn">
<button type="button" id="search-btn">Search</button>
```
En este caso, el texto para el boton es usado como el label para el input serch.
Lectores de pantalla anunciaran el input como algo asi 'Search, edit'.
Si mas tarde decides cambiar el texto del boton a 'Find', el label de el input
sera actualizado automaticamente por el nuevo texto mientras este referencie al texto del boton.

Combinar multiples 'id' en un solo 'aria-labelledby' es posible tambien.
Aqui como trabaja:

```html
<div>
  <span id="volume-label">Volume</span>
  <span id="volume-details">Adjust the volume level</span>
  <input
    type="range"
    min="0"''
    max="100"
    value="30"
    aria-labelledby="volume-label volume-details">
</div>
```
Para el 'slider' o deslizador, el lector de pantalla mirara el contenido del 'vloume-label'
y 'volume-details' y anunciara 'Volume Adjust the vloume level'.

Veras que ambos atributons ayudan a lectores de pantallas a entender que hace un elemento.
Entonces, cual deberias usar?
Como ambos facilitan el mismo funcionamiento, cualquiera puede ser usado, pero hay algunas
ventajas de usar 'aria-labelledby' por sobre 'aria-label':

  * Si alguien esta usando un servicio de traduccion para traducir el contenido en tu pagina,
    el texto en 'aria-label' no siempre sera traducido.
  * Usando 'aria-labelledby' puede ayudar a prevenir desajustes entre el texto label visible
    y el label invisible para lectores de pantalla mientras que actualizar el texto visible 
    actualizara automaticamente el label visible.
  * 'aria-labelledby' puede facilitar mucho la creación programática de etiquetas invisibles 
    complejas que constan de múltiples fuentes de texto.

Una ultima cosa, no uses 'aria-label' y 'aria-labelledby' en un elemento al mismo tiempo.
En ese caso, la etiqueta invisible para lectores de pantalla siempre sera determinada por 'aria-labelledy'
y 'aria-label' sera completamente ignorado.
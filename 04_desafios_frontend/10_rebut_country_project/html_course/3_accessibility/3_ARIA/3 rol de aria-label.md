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
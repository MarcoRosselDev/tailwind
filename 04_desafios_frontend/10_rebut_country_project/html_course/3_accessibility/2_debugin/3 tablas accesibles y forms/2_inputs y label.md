# Por que es importante para los inputs tener un Label asociado ?

Los labes en inputs se deben ver como pequeños detalles, pero estos
juegan un papel crucial en hacer los formularios faciles de usar para todos.

Los labels ayudan a las personas con discapacidad, hacer los formularios
mas amigables par los usuarios , y finalmente mejorar los tasas de conversion de formulario.

Veamos por que agregar labels a los inputs es importante para la accesibilidad y usabilidad.

Los lectores de pantalla suelen fijarse en los labels para describir
el proposito de los inputs.
Para que esto funcione correctamente, el label (etiqueta) debe estar asociado programaticamente con el input (entrada).
Mientras que hay varias formas de hacer eso, la mas comun es usar el elemento HTML 'label'.

Aqui un ejemplo de como asociar un 'lable' con un 'input'

```html
<form>
   <label for="name">Your Name</label>
   <input type="text" id="name" />
</form>
```

En este ejemplo, el atributo 'for' de el elemento 'label' se asocia con el 'id'
de el elemento 'input'.
Esta coneccion ayuda a los lectores de pantalla a anunciar el 'label'
con el 'input' en un estado de enfoque, ayudando a los lectores de pantalla
a entender el proposito de el input.

Asociar 'labels' con todos los 'inputs' tambien beneficia el SEO.
con los labels apropiados, los motores de busqueda entenderan el contenido de la pagina,
principal para el inpacto positivo de el ranking de busqueda de la pagina.

Pero es importante entender que estas haciendo contenido para humanos,
No motores de busqueda.
Por lo que deberas asegurarte que el label sera lo mas claro y descriptivo posible.
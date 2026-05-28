# Como trabajar con forms, labels y inputs en HMTL ? 

El elemento form en HTML se usa para recolectar informacion del usuario,
como el nombre y direcciones de correo.
Aqui un ejemplo de un elemento form:

```html
<form action="url-goes-here">
  <!-- input elements go here -->
</form>
```

El atributo action especifica donde va la informacion del formulario
cuando se envien.
Para recolectar informacion espesifica, como el nombre y direccion de correo, reveras usar el elemento input.
Aqui un ejemplo del elemento input

```html
<form action="">
  <input type="text" />
</form>
```

Los elementos input son elementos vacios y no tienen tags de cierre.
El atributo tipe define el tipo de dato que se espera del usuario.
En este caso, el dato sera texto plano.
Para agregar un label para el input (etiqueta), deberas utilizar el elemento label.
Aqui un ejemplo de un elemento label con el texto "Full Name:"

Si cliqueas en el texto "Full Name:" veras el input ir en focus en el input relacionado.

```html
<form action="">
  <label>
    Full Name:
    <input type="text" />
  </label>
</form>
```

Al anidar un input dentro de un elemento input, tu creas una asosiacion implicita entre el label y el input.
El termino "implicito" se refiere a algo que es entendido o inferido sin necesidad de explisitamente declararlo
agregando atributos o elementos.
Para asociar un label explicitamente con un input, puedes usar el atributo "for".
Aqui un ejemplo de uso del atributo "for" para una label de direccion de email:

```html
<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" />
</form>
```

cuando se usa la asociacion explicita, el valor del atributo "for" y el "id" necesitan ser el mismo.
En este caso, el valor de ambos es "email".
el type "email" en el "input" probee una balidacion vasica para formatear correctamente una direccion email.
Si deceas mostrar pistas adicionales para el usuario sobre el atributo "placeholder" dentro del input email.

```html
<form action="">
  <label for="email"> Email Address: </label>
  <input type="email" id="email" placeholder="example@email.com" />
</form>
```

para el texto del "placeholder", necesitas entregar textos corto y que ayude a mostrar el fromato y tipo de dato
que esperarias de tu usuario.
En este caso, el texto "placeholder", example@email.com, mustra el usuario que deveria ingresar un email
con un formato correcto.

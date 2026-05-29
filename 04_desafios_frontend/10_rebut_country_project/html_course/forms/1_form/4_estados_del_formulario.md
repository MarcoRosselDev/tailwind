# Cuales son los diferentes estados de un formulario, y 
# por que ellos son importantes ?

en HTML, los controles de formulario, como inputs, pueden estar
en diferentes estados como "focused", "readonly", o "disabled".

El primer estado deberia ser considerado el estado por defecto.
El estado por defecto de una direccion de email input 
es un input blank (blanco).

Cuando el usuario clickea en el formulario o lo selecciona con el 
teclado usando el boton tab, entonces eso significa que esta en 
el estado "focused".
Cuando un input esta en el estado "focused", la mayoria de navegadores
mostrara un borde azul alrededor del input.
Pero tu puedes seleccionar si agregar estilos CSS adicionales.

#

Otro estado de formulario es el estado "disabled".
Esto estado muestra al los usuarios que el input no puede ser 
enfocado o activado.

Similar al estado "focused", puedes escoger si agregar estilos CSS 
adicionales.

#

Otro tipo de estado de formulario es el estado "readonly".
Este es cuando un control de furmulario, como un input, no es editable
por el usuario.
Aqui un ejemplo de configuracion de un input email a "read-only".
El atributo "value" es usado para actualizar el valor dentro del input.

```html
<input
  readonly
  type="email"
  name="email"
  id="email"
  value="example@emaasdfail.com"
/>
```

La diferencia clave entre el estado "disabled" y "readonly" es que
"readonly" puede ser focuseada mientras que "disabled" no.

Entendiendo los diferentes estados de formulario es importante porque
ellos aseguran una experincia de usuario mas prolija al proveer 
feedback y guia al manejar errores.
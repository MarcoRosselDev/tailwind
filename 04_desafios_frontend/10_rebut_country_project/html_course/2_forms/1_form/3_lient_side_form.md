# que son los validaciones de formularios del lado del cliente en HTML,
# cuales son algunos ejemplos ?

Cuando los usuarios rellenan un formulario en tu website,
es importante que ellos llenen todo lo necesario en el formato correcto.
HTML control de formulario, como inputs, tienen un monton de 
validaciones built-in que tu puedes usar para revisar la valides de informacion.
Esto te ayudara a que el usuario erregle estos errores antes
que la informacion es enviada y processada por el servidor.

El termino "client-side" refiere a todo lo que pasa en el computador
del usuario o dispositivo, como la parte del website o app con la que
interactuas. Esto incluye el layout, diseño, y cualquier caracteristica interactivo.

El termino "server-side" refiere a todo lo que pasa en el servidor,
el computador, o el sistema, que hospeda la website o app.
Esto incluye procesar datos, correr aplicaciones, y manejar peticiones
que vienen de dispositivos del usuario.

Mientras que validaciones "client-side" son importantes, tu puedes nesecitar tambien validaciones "server-side" para agregarle seguridad.
Usuarios maliciosos pueden traspasar reviciones client-side,
entonces medidas robustas en el server-side son escenciales.
Aprenderas mas sobre esto en siguientes modulos.
Por ahora, vamos a hablar un monton sobre ejemplos de validaciones 
de formulario client-side.

Un ejemplo comun de un validador de formulario built-in es el atributo
"required" en inputs.
El atributo "require" espesifica que el usuario necesita llenar esa
porcion del formulario antes de enviarlo.
Aqui un ejemplo de uso en un input email.

```html
<form action="">
  <label for="email">Email Address (Required field):</label>
  <input required type="email" name="email" id="email" />
  <button type="submit">Submit Form</button>
</form>
```

Cada navegador deberia tener  su propio set de estilos para mostrar
esta alerta de mensaje.

Otra ventaja de usar el input email es que el input email tiene algunos
validadores basicos para asegurar el formato correcto de la direccion
de correo.
Por ejemplo, si tipeas una palabra aleatoria y clickeas enviar,
entonces el navegador mostrara una alerta con un signo "@" faltante.

```html
<form action="">
  <label for="email">Email Address (Required field):</label>
  <input required type="email" name="email" id="email" />
  <button type="submit">Submit Form</button>
</form>
```

Es importante notar que el navegador solo revisa validaciones basicas
para emails standars.
Es opcion tuya agregar capas adicionales de validaciones,
las cuales aprenderas en modulos futuros.

Otra forma de valida para inputs email son usar los atributos 
"minlenght" y "maxlength".
Aqui un ejemplo de uso de extra validacion:

```html
<form action="">
  <label for="email">Email Address (Required field):</label>
  <input
    required
    type="email"
    name="email"
    id="email"
    minlength="4"
    maxlength="64"
  />
  <button type="submit">Submit Form</button>
</form>
```

Los atributos minlength y maxlength se usan para configurar el largo
minimo y maximo de caracteres para el input email.
Si tu no incluyes en largo minimo o maximo de caracteres,
el navegador un mensaje de alerta.
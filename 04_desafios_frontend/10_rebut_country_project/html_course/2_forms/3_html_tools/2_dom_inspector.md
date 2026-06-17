# como usar el inspector DOM y DevTools para debugear y construir tus proyectos ?

Cuando estas construyendo tus proyectos, frecuentemente tendras problemas cuando
tu codigo no este corriendo o ejecutandoce como esperas.

Los programadores seguido se refieren a los problemas como bugs.
El proceso de encontrar y arreglar estos bugs se conose como debugging.

Para debugiar tu codigo, necesitaras usar algunas herramientas entregadas
por tu navegador.

Dos herrameintas importantes para usar sera el inspector DOM (DOM inspector)
y el "developer tools".

El inspector DOM nos ayuda a inspeccionar la estructura HTML de la pagina en la que estas.

DOM significa (Document Object Model) Es como la estructura de un arbol,
que representa los elementos de una pagina.
Aprenderas mas aserca del DOM en futuros modulos.

Los developer tools nos ayudan a inspeccionar HTML, CSS, y javascript de la pagina
en la que estes.

Veamos un ejemplo HTML que contiene un pequeño bug en el elemento a="anchor o ancla":

```html
<a href="https://www.freecodecamp.org/larn/">freeCodeCamp curriculum</a>
```

Cuando clickeas en el link, te mostrara una pagina 404.
Una pagina 404 es una pagina de error comun, que se muestra cuando un usuario
trata de acceder a una pagina web que no existe en ese servidor.

La intencion es que el link te dirija a la pagina lead de freecodecamp.

Para ver el problema que puede ser, puedes usar el developer tools.

Para abrir los developer tools en tu navegador, puedes usar el click-izquierdo
en la pagina y seccionar "Inspect".

O puedes usar tambien el comando "contro shift + I".

Cuando abres los developer tools en Google Chrome, veras unas pestañas.
La primera perstaña se llama "Elements".
Esta pestaña muestra la estructura de la pagina en la que estas.

La segunda pestaña se llama "Console".
Esta pestaña muestra cualquier error que pueda ocurrir en la pagina.

En la situacion donde tengas un link roto, puedes revisar la consola
para ver el mensaje de error para ese link roto.
El mensaje mas comun que se suele mostrar para el link roto 404.
El error 404 indica que la pagina no se encontro.

Esto nos deja saber que el problema es con la URL en el elemento ancla "a".
Cuando inspeccionas el valor href veras que exciste un typo (error de escritura).

Ahora mismo el mensaje en la consola muestra "/larn" denuevo como 404,
pero la URL correcta es "/learn".
Cuando lo corrigues, entonces debe funcionar como esperas.

Aprenderemos mas sobre trabajar con developer tools alrededor de la certificacion,
pero este es solo un ejemplo corto de como este te puede ayudar a debugiar tu codigo.
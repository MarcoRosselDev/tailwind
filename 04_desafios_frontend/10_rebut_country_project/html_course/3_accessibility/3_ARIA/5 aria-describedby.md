# que es aria-describerdby, y como funciona ?

El atributo 'aria-describedby' se usa para probeer informacion adicional sobre un elemento
a lectores de pantalla al referenciar contenido existente en una pagina.
Este crea una asociacion programatica entre el elemento y el contenido (técnicamente denominada 
descripción accesible), el cual los lectores de pantalla pueden usar para informar
cuando ellos interactuen con el elemento.

El uso mas comun de 'aria-describedby' es asociar instrucciones y mensajes de error
con incresos de formulario.
Debido a los variados metodos que tienen los lectores de pantalla para navegar una pagina,
estos pueden saltarce o perder el mensaje al navegar entre inputs.
Usando 'aria-describedby' te aseguras que ellos lo escucharan.

Veamos algunos ejemplos para entender como trabajan.
En este primer ejemplo, tenemos un elemento form que acepta un passoword.

Escribe algunos caracteres en el input del passowrd.
Deberias ver que el password esta oculto en la ventana de vista previa.
Tambien deberias ver que el texto 'password-help' permanece rojo
mientras no ingreces 8 o mas caracteres en el input.

```html
<form>
  <label for="password">Password:</label>
  <input type="password" id="password" aria-describedby="password-help" />
  <p id="password-help">Your password must be at least 8 characters long.</p>
</form>
<!-- js:
const passwordEl = document.getElementById("password");
const passwordHelpText = document.getElementById("password-help");

passwordEl.addEventListener("input", (e) => { 
  const userInput = e.target.value;
  passwordHelpText.style.color = userInput.length >= 8 ? "green" : "red";
});
css:
#password-help {
  color: red;
}
-->
```
Estamos usando un 'label'(etiqueta) para el texto del passowrd y asociando esto 
con el input del password.
Tambien tenemos un elemento 'p' que describe el requerimiento del passowrd.
Estamos usando el atributo 'aria-describedby' para asociar el input password con el
requerimiento del password en el elemento 'p'.
Cuando un lector de pantalla interactue con este input,
el lector de pantalla debera anunciar  el nombre del input (password) y debera
tambien anunciar el requerimiento del passowrd.
Sin embargo, esto no es una garantía absoluta, ya que algunos lectores de pantalla 
podrian no anunciar automaticamente el contenido agregado, o solo anunciar esto
en sircunstancias espesificas.
Esto no es infrecuente.
Cada lector de pantalla es diferente y maneja los atributos ARIA de su propia manera.
Esto no niega el uso de 'aria-describedby',
ya que beneficiará a los usuarios de lectores de pantalla en general.

Otro buen caso de uso es cuando tienes un boton de eliminar.
Aqui un ejemplo de un boton eliminar seguido de un mensaje describiendo que ocurrira
cuando el boton se clickee:

```html
<button aria-describedby="delete-message">Delete</button>

<p id="delete-message">Warning! All deletions are permanent.</p>
```

Al igual que el ejemplo anterior, asociamos el boton delete con el mensaje
usando 'aria-describedby'.
El valor 'id' y el valor de 'aria-describedby' deben coinsidir.

Este atributo es uno poderoso que puede ser usado para ayudar a asegurar
que la informacion adicional sobre un elemento sea entregada a lectores de pantalla
cuando interactuen con el elemento.
Es comunmente usado para asociar instrucciones y mensajes de error con ingresos
de formularios con el objetivo de reducir las chances de que los lectores de pantalla
perdan el mensaje cuando navegen por el formulario.
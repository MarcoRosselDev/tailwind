# cual es el proposito de ARIA y como funciona ?

Hace contenido estatico accecsible puede ser relativamente directo,
pero el contenido dinamico puede ser mas desafiante.
Aqui es donde WAI-ARIA viene.

Veamo WAI-ARIA, su proposito, como funciona, y algunos ejemplos.

WAI-ARIA biene de Web Accessibility Initiative - Accessible Rich Internet Applications
o (Iniciativa de Accesibilidad Web - Aplicaciones de Internet Enriquecidas Accesibles).
Es una espesificacion que mejora la accesibilidad para contenido dinamico y componentes UI(user interface).

Note que WCAG Y WAI-ARI no son lo mismo.
WCAG provee una guia general para accesibilidad web, mientras que WAI-ARIA ofrece reglas espesificas
para contenido interactivo y dinamico para usuarios con tecnologias de asistencia.

Entonces, el principal proposito de WAI-ARIA es mejorar la accessiblidad para contenido dinamico y
componentes UI que no tienen una equivaliencia HTML nativa.

WAI-ARIA trabaja al introducir un conjunto de atributos que puedes agregar a los elementos HTML
para probeer informacion semantica adicional.
Estos atributos estan categorizados en roles, estados, y propiedades.

el rol de ARIA define el proposito de un elemento dentro de un sitio web o app.
Aqui un ejemplo de un conjunto de roles para loe elementos 'button' y 'div'.

```html
<div role="button">Click Me</div>
```
Al hacer esto estas indicando a las tecnologias de asistencia que el elemento es un boton.
Los Roles no proveen ninguna funcioanlidad sin embargo. meramente al darle a este 'div'
un 'role' de 'button' no lo hace actual como un boton.
Para hacerlo ver y comportarce como un boton necesitaras usar CSS y JavaScript para 
obtener el resultado deceado.

Aqui un ejemplo usando HTML, CSS y JavaScript para crear un elemento 'button' personalizado.

```html
<link href="styles.css" rel="stylesheet">
<div id="custom-btn" role="button">Click Me</div>
<script src="index.js"></script>
```
```js
const button = document.getElementById("custom-btn");

button.addEventListener("click", () => {
  alert("Button clicked!");
});

button.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault(); 
    button.click();
  }
});
```
```css
#custom-btn {
  display: inline-block;
  padding: 0.4em 1em;
  font-size: 1rem;
  font-family: sans-serif;
  color: buttontext;
  background-color: buttonface;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  text-align: center;
}

#custom-btn:focus {
  outline: 2px solid Highlight;
  outline-offset: 2px;
}

#custom-btn:active {
  background-color: #ddd;
}
```

Siempre sera mejor usar elementos 'button' o 'input' nativos con el 'type="button"' en su lugar.

las propiedades ARIA proveen detalles adicionales sobre elementos.
Por ejemplo, el la propiedad 'aria-labelledby' te deja conectar un elemento a un 'label' espesifico:

```html
<h2 id="header-id">About freeCodeCamp</h2>
<button id="button-id" aria-labelledby="header-id button-id">Learn More</button>
```

Esto convertira el elemento comprensible y nevegable para usuarios de tecnologia de asistencia.

Para sacar el máximo partido a WAI-ARIA, intente utilizar HTML nativo siempre que sea posible, 
ya que generalmente ofrece mayor accesibilidad de forma predeterminada.

Utilice WAI-ARIA solo cuando HTML sea insuficiente, y no olvide realizar pruebas con tecnologías 
de asistencia como lectores de pantalla, o pedir a personas con discapacidad que prueben su trabajo. 
Además, asegúrese de que los estados y propiedades de WAI-ARIA se actualicen con el contenido en tiempo real. 
Evite el uso excesivo de ARIA, ya que a menudo puede resultar confuso.
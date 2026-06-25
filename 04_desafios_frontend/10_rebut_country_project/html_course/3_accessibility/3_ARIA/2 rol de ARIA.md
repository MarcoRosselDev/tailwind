# cuales son los roles de ARIA ?

Nota:
    Algunos de estos ejemplos iteractivos incluiran CSS y JavaScript.
	No te preocupes tratando de entender el codigo.
	La vista previa esta ahi para ayudar a ilustrar algunos de los
	puntos principales descutidos en la leccion.
	Para ver la vista previa, deberas abilitar el editor interactivo.

ARIA viene de Accessible Rich Internet Applications.

Los roles ARIA espesifican el significado semantico de elementos HTML.
Son escenciales para marcar contenido web accesible para usuarios de teclogia de asistencia,
como lectores de pantalla.

HTML tiene elementos semanticos y no-semanticos, basados en donde convengan 
aserca de su contenido.

Munchos elementos HTML semanticos tienen un 'role' ARIA asignado por defecto.
Por ejemplo, el elemento 'button' tiene el role ARIA button por defecto.
##

Pero elementos no-semanticos no tienen un 'role'.
Por ejemplo, los lectores de pantallae no sabran como interpretar
el proposito de un 'div' si no espesificas su 'role' explisitamente.

Para espesificar el 'role' ARIA de un elemento, solo necesitas agregar
el atributo 'role', como esto 'role="ARIA role"'.
donde value es el nombre de el role en la espesificacion ARIA.

Aqui un ejemplo de uso del atributo 'role' con el value en 'alert':

```HTML
<div class="alert" id="exp-warning" role="alert">
  <span class="hidden">Your log in session will expire in 3 minutes.</span>
</div>
```

Es importante notar que al espesificar un 'role' en un elemento solo hace una cosa:
	Este informa a las tecnologias de asistencia el proposito de el elemento.
Este no agrega ninguna funcionalidad de nada al elemento.
Si las personas experan que el rol se comporte de sierta manera, es opcion tuya,
el desarrollador, el agregar ese comportamiento espesifico.

Por ejemplo, agregar un 'role' de un 'button' a un 'div' no convierte automaticamente
en clickeable con un mouse o usable con un teclado.
Esta es la responsabilidad de el desarrollador el agregar el comportamiento espesifico
que ayude al 'div' a actuar como un 'button', y en la mayoria de casos, es solo mejor
el usar un elemento 'button'.

##
Aqui estan seis categorias principales de 'roles' de ARIA:

* Document structure roles (Roles de estructura de documentos)
* Widget roles (Roles de widgets)
* Landmark roles (Roles de puntos de referencia)
* Live region roles (Roles de regiones en vivo)
* Window roles (Roles de ventanas)
* Abstract roles ( Roles abstractos)

Veamoslos en mas detalle.

### Document structure roles:
	definen la estructura en general de la pagina web.
	con estos roles, las tecnologias de asistencia  pueden entender
	la relacion entre diferentes secciones y ayudar a los usuarios
	a navegar el contenido.
	Como sea, la mayoria de los roles de estrucutras de documento no son
	usadas por desarrolladores web modernos porque los navegadores(browsers)
	actualmente soportan elementos HTML semanticos equivalentes,
	que seran priorizados lo mas posible.
	Deberas espesificar los 'roles' que no tengan un elemento semantico equivalente.
	Por ejemplo toolbar, tooltip, feed, math, presentation, none y note.
	Hay otros roles similares pero esos son los mas comunmente usados.
	Este es un ejemplo de un 'div' con el role ARIA de 'math'.
	El div contiene ecuaciones matematicas.

```html
<div role="math" aria-label="x squared + y squared = 3">
  x<sup>2</sup> + y<sup>2</sup> = 3
</div>
```
Tu notaras que el 'div' tiene un atributo 'aria-label'.
El valor de el atributo deberia ser un string que represente la expresion.

### widget roles:
Los roles de los Widget definen el proposito y funcionalidad de un elemento interactivo,
como scrollbars(barras de desplazamiento).

Ejemplo de un 'role' widget incluyen scrollbar, searchbox, 
separator(cuando es focusable), slider, spinbutton, switch, tab, tabpanel y treeitem.
Aqui un ejemplo de un 'searchbox':

```html
<div class="search-container" role="search">
  <label for="searchbox" class="visually-hidden">Search</label>

  <div
    id="searchbox"
    class="searchbox"
    role="searchbox"
    aria-label="Search the site"
    tabindex="0"
    contenteditable="true">
  </div>

  <button type="button" aria-label="Submit search">Search</button>
</div>

```
Algunos de estos roles tienen su equivalente semantico.
Deberias prioizar los elementos semanticos sobre el 'role' si hay uno.
Por ejemplo, deberias mejor usar el elemento HTML button sobre agregar el
'role' de 'button' a un 'div'.

### Landmark roles:
Los roles 'Landmark' clasifican y etiquetan las secciones principales de una pargina web.
Los lectores de pantalla los usan para proveer navegaciones convenientes para
importar secciones de una pagina.
Deberas usarlas escasamente para mantener el lineamiento simple y facil de entender.
Ejemplos de roles landmark son banner, complementary, contentinfo, form, main, navigation, region y search.
Cada uno de estos roles tienen un elemento HTML equivalente,
como un header, footer, aside, form, main, nav, section y search.
Si usas el elemento HTML apropiado para definir la seccion de tu pagina
entonces no es necesario agregar explisitamente el atributo 'role' a 
estos elementos.
Aqui un ejemplo:
```html
<div role="banner" class="site-banner">
  <h1>Accessible Web Design</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Articles</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>
```
### Live region roles:
Los roles de región dinámica definen elementos con contenido que cambia dinámicamente. 
De esta forma, los lectores de pantalla y otras tecnologías de asistencia pueden 
anunciar los cambios a los usuarios con discapacidades visuales.
Estos roles incluyen: alert, log, marquee, status y timer.
Aqui un ejemplo de un status:

```html
<div class="status-demo">
  <button id="update-status-btn">Check Status</button>
  <div id="status-msg" role="status" class="status-message">
    No updates yet.
  </div>
</div>
```

### Window roles:
Los roles de ventana definen sub-ventanas, como 'dialogos modales pop up'.
Estos roles incluyen 'alertdialog' y 'dialog'.
Porfavor note que no se considera una buena practica usar el elemento HTML 'dialog'
y su methodo javascript asociado en lugar de su creacion manual de un 'dialog'.

Aqui un ejemplo usando el role 'dialog' para un dialogo personalizado:

```html
<button id="open-dialog">Open Dialog</button>

<div id="custom-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" class="dialog">
  <div class="dialog-content">
    <h3 id="dialog-title">Confirm Action</h3>
    <p>Are you sure you want to delete this file?</p>
    <div class="dialog-actions">
      <button id="confirm-btn">Yes</button>
      <button id="close-dialog">Cancel</button>
    </div>
  </div>
</div>
```

### Abstract roles:
Estos roles ayudan a organizar el documento.
Estos solo seran usados internamente por el navegador, no por desarrolladores,
por lo que deberias saber que excisten pero no deberias usarlos
en tus paginas web o web apps.

# Conclucion:
Con los roles ARIA, puedes crear webs accesibles y inclusibas.
Estas probeen informacion semantica sobre el proposito y funcionalidad de elementos HTML.

Lectores de pantalla y otras tecnologias de asistencia usan esta informacion para
ayudar a entender el contenido de tu pagina y establecer expectativas sobre cómo usarlo,
lo que asegura que todos pueden tener una buena experiencia de uso.
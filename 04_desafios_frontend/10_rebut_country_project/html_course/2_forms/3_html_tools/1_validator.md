# Que es un validador HTML, y como esto me puede ayudar a debugear mi codigo ?

HTML es un lenguaje muy indulgente, los elemento se renderizara igual
incluso cuando cometas errores, como por ejemplo olvidar incluir un tag de cierre.
Por ejemplo digamos que olvidaste cerrar un h2, este igual se renderizara.

```html
<h1>Article Topic</h1>
<h2>Subheading 1 </h2>
<h2>Subheading 2 </h2>

<!-- This h2 does not have a closing tag -->
<h2>Subheading 3
```

El h2 sin el tag de cierre seguira renderizandoce.
Esto pasa por que el navegador usa un algoritmo de parceo (análisis sintáctico)
que maneja los errores comunes y trata de renderizar HTML lo mas 
sercano posible a las intenciones del autor.

Pero esto puede salir mal algunas veces.
Agreguemos algunos parametros bajo el encabezado excistente,
agregando 2 tags en el codigo:

```html
<h1>Article Topic</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nisi.</p>

<h2>Subheading 1 </h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, doloremque.</p>

<h2>Subheading 2 </h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat.</p>

<!-- This h2 does not have a closing tag -->
<h2>Subheading 3
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, illum.</p>
```

Como resultado, el elemento parrafo bajo el h2 win el  tag de cierre
renderiza como 2 encabezados.
Esto es por que necesitas un validador HTML.

Un validador HTML es una herramienta que revisa la valides de un codigo HTML
bajo los estandares de espesificaciones HTML.
Esto te ayuda a identificar errores y alertando en tu codigo HTML,
asegurandoce que tu pagina web esta estructurada correctamente y compila
con estandares web.

Usando un validador HTML veneficia no solo a ti sino a las futuras reviciones de codigo,
pero tambien cualquier persona que vea a traves de tu codigo,
como tus compañeros y contribuidores open-source.

Por ahi excisten muchos validadores HTML que puedes usar.
El mas aceptado es w3.org markup validation service.

Cuando visitas el sitio validator.w3.org , tu puedes revisar en el
input de Validador directo y pegar tu codigo HTML.

Cuando clickeas en el boton "Check", entonces una lista de resultados se despliegan
con los errores que necesitas arreglar.

Otro validador HTML que puedes usar es jsonformatter.org.

Puedes copiar y pegar tu codigo HTML dentro del primer editor,
y cuando clikeas en el boton "Validate", te mostrara cualqueir error que tengas en tu codigo.


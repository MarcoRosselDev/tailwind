# Beneficios de textos alternos buenos, y ejemplos 

Veamos los beneficios de escribir buenos textos de enlace (links) en el contexto de accesibilidad, 
y algunos ejemplos de buenos texto de links.

El primer beneficio de un buen texto de link es que es facil para todos de entontrar infomracion.
Links descriptivos ayuda a los usuarios a saber adonde se dirigen y donde estan accediendo.
Esto asegura a los usuarios que no se sientan perdidos y mejoren en general la experiencia de uso.

Para los que usan lecores de pantalla, es impresindible que un texto de link sea claro y descriptivo.
Los lectores de pantalla leen el texto de link en voz alta, entonces un texto de link 
"Lea nuestra guía de accesibilidad" es mucho mejor que "Haga clic aquí".

Hacer un texto de link claro y descriptivo no es solo veneficioso para personas con 
impedimentos visuales. Los links descriptivos tambien ayudan a personas con problemas
congnitivos al probeer texto claro.

Aqui algunas buenas practicas para tener en mente al escribir textos de links:

* Asegurate que los links sean visualmente distintivos al usar subrallados y otros efectos visuales,
  para que el usuario pueda identificarlos facilmente y navegar hacia ellos.
* Evita los textos de link como "here", "click here" y "more-info" por que no entregan
  ninguna informacion util.
* Procure que los textos de los enlaces sean concisos y descriptivos, idealmente entre 2 y 5 palabras,
  y que transmitan el propósito del enlace.
* Evita jergas y abreviaciones que los usuarios puedan no entender.
* Enfocate en el destino, no en la accion. Por ejemplo, "resultados de el comportamiento de usuarios",
  en lugar de "click aqui para leer mas.".
* No repitas el mismo texto de link en diferentes destinos.
* Coloca los enlaces de forma que tengan sentido dentro del texto circundante.
  por ejemplo: "Para mas detalle, visitar nuestra pagina de eventos" en lugar de 
  "click aqui para mas."

Aqui un ejemplo de un buen texto de link para un caso de uso especifico,
comparado con uno menos util.
Digamos que vas a enlazar a una pagina entregando detalles sobre un evento asi:
```html
<a href="webinar-details-link">Details</a>
```
"Details" es vago y no entrega una informacion especifica sobre que encontrara el usuario si
clickea el link.
Sin informacion adicional, los usuario no sabran si el link los manda a un producto, seminario web,
algo politico o algo mas.

Ahora un ejemplo de un buen texto de link:
```html
<a href="webinar-details-link">
  Get details about our upcoming webinar
</a>
```
Este texto de link le da informacion al usuario sobre el contenido que encontraran, 
haciendolo facil de decidir donde van a clickear.
Esto reduce ambiguedad al especificar que el link se dirigue a un seminario web (webinar).

Aqui otro ejemplo de un link a un post:
```html
<a href="/blog-post-link">Read more</a>
```
El texto de link "Read more" no es ideal en terminos de accesibilidad porque le falta contexto.
Aqui un mejor texto de link:
```html
<a href="/blog-post-link">
   Read our latest blog post on web accessibility
</a>
```
Este texto de link actualizado le entrega a los usuarios una idea clara de que esperar y
de porque deberian clickear aqui, lo que es particularmente importante para esos
usuarios usando lectores de pantalla.

Veamos un ejemplo mas.
Digamos que entregaras mas informacion hacerca de un topico:
```html
<a href="/link-to-topic">More info</a>
```
"More info" es tambien vago y puede ser problematico para la accesibilidad.
No entrega detalles especificos lobre el destino del link, que puede ser confuso
para los usarios de lectores de pantalla o los que navegen el sitio de una forma
no-lineal.
Aqui una mejor manera de mejorar el ejemplo previo:
```html
<a href="/link-to-topic">
   Learn more about our accessibility efforts
</a>
```
Esto actualizacion del texto de link es mejor porque describe claramente que encontrara
el usuario si clickean ese link.
Los usuarios pueden entender inmediatamente que el link dirije a informacion acerca
tus esfuersos de accesibilidad.

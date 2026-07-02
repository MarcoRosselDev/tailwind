# que es el atributo 'alt' necesario, y cuales son algunos ejemplos de buenos textos 'alt'?

Textos alternativos, a menudo abreviados como textos 'alt',
Es un texto breve que describe una imagen.
Entrega informacion escencial sobre imagenes para usuarios que no pueden ver,
como personas que usan lectores de pantalla o otras tecnologias.

Es escencial para hacer sitios web accesibles para personas con discapasidad visual.

Los textos alternativos tambien se usan para ingenieria de busqueda para entender imagenes.
Algunos navegadores podrian desplegarlos cuando una imagen no se carge apropiadamente.
Esto puede pasar cuando el archivo de la imagen se pierde o cuando el usuario tenga problemas de conectividad.
Por lo que es util por muchos motivos.

Una persona con problemas visuales no sera capas de saber que hay en la imagen a no ser
que se describa en el texto alterno "alt text".
Un ejemplo de un mal texto alterno para una imagen de un cachorro podria ser "A cute puppy".

Este texto no es suficientemente especifico para transmitir los detalles importantes
de la imagen, como que apariencia tiene el cachorro?
Donde esta? hay objetos importantes alrededor del cachorro?

Mejoremoslo. Un ejemplo de un buen texto alternativo seria: 
  "Un cachorro negro y blanco con un collar naranjo , yace boca abajo en la arena,
  mirando hacia un lado. Una pelota naranja brillante descansa cerca de sus patas delanteras."

Aqui puedes ver este HTML con un elemento image, el atributo alt, y mas detalles de descripcion:

```html
<img src="puppy.png" alt="A black and white puppy with an orange collar lies on its belly in the sand, looking off to the side. A bright orange ball rests near its front paws." />
```

Es importante notar que no existe una forma correcta de escribir un texto alternativo para una imagen.
Lo que inclullas en tu descripcion dependera de el contexto en que se use la imagen.
Por ejemplo, si la imagen del cachorro estubiera en un sitio web de razas de perro, entonces
deberas incluir mas detalles sobre el fisico y posiblemente ignorar el hecho de que el cachorro
esta en la playa con una pelota naranja.
Finalmente, el texto alternativo  que uses para una imagen debera reflejar el proposito principal
de por que se incluye en la pagina, y la informacion que probeeas deberia entregarle a la gente quien puede
ver la imagen los detalles necesario para entender ese proposito.

Aqui tenemos otro ejemplo de un hermoso complejo turístico tropical.
Describamoslo.

Un ejemplo de un mal texto alternativo seria "Resort".

Este es muy corto y no entrega informacion suficiente sobre la imagen.
Para mejorar esta descripcion, podrias expandirlo para incluir los elementos mas importante de la imagen.

"Complejo turistico tropical con piscina rodeada de palmeras y bungalows."

Puedes usar el atributo alt en HTML asi:

```html
<img src="resort.png" alt="Tropical resort featuring a swimming pool surrounded by palm trees and bungalows." />
```

Ahora que sabes cual es un mal y buen texto alternativo,
veamos algunas buenas practicas.

* Trata de mantener los textos alternativos cortos. Tendra detalles suficientes si se entiende la imagen pero
  no tan largo por que se vuelve confuso.
* No trates de describir cada pequeño detalle. Centrate en lo aspectos mas importantes de la imagen.
* Generalmente, no necesitas con "imagen of" o "picture of".
  Solo puedes comenzar describiendolo directamente.
* Tambien, si hay un texto similar serca de la imagen, no necesitas escribirla denuevo.
* Es recomendable terniar un texto alterno con un punto para mantener la coherencia.
* Si la imagen es un link a otra pagina, en lugar de describir la imagen en si, 
  el texto alternativo debe desribir que ocurrira si el usuario clikea en el.

Por ejemplo, si tu sitio web tiene un icono de flecha que envia al usuario a la siguiente pagina,
en lugar de escribir en el texto alterno "right arrow", como en este ejemplo,
donde puedes ver que el texto lterno con esta descripcion:

```html
<a href="about.html">
  <img src="arrow-right.png" alt="Right arrow." />
</a>
```
Debes escribir algo asi en su lugar, donde el texto alterno describe que pasaria si
el usuario clickea en la imagen.
El iria a la siguiente pagina.
```html
<a href="about.html">
  <img src="arrow-right.png" alt="Go to next page." />
</a>
```
Solo las imagenes que transmitan informacion importante deben contar con texto alterno.
Si una imagen solo se usa por propositos decorativos, debe tener un texto alternativo null,
para que pueda ser ignorado por los lectores de pantalla.

Aqui un ejemplo de un texto alteno vacio:
```html
<img src="decorative_image.jpg" alt="" />
```
Cada imagen en tu sitio web debe tener un texto alterno, incluso si esta vacio.
si omites al atributo alt, algunos lectores de pantalla leeran el nombre del archivo,
lo que puede ser distractivo para personas que usan tecnologias de asistencia,
por lo que esto no es recomendable.

Finalmente, antes de que tu sitio web viva, debes testearlo cuidadosamente por lectores
de pantalla, para que puedan leer corectamente los textos alternativos.

Escribioendo textos alternativos es esencial para crear contenido web eccesible.
como desarrollador web, al entregar descipciones claras de tus imagenes, 
te aseguras que todos pueden conectar con tu sitio web en una experiencia
online inclusiva.
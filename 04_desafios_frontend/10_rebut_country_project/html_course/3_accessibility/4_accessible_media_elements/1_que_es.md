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
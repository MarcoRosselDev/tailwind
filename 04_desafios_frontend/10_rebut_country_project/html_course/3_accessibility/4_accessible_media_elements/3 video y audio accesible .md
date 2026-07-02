# Hacer accesible los videos y audio

El contenido multimedia, especialemente el video, se ha convertido en el formato multimedia
favorito para transmitir informacion online.

Con este aumento de contenido, hay una creciente necesidad de asegurar que todos
puedan acceder y disfrutar de videos y audios online, independiente de sus abilidades o entorno.

Convertir tus audios y videos accesibles no es solo bueno de tener, es escencial
para llegar a una audiencia mas amplia.
Veamos unas formas economicas de hacer tus videos y audios mas accesible.

Un video no es solo visual sino tambien audio,
por lo que primero deberias considerar agregar 'captions' o 'subtitulos'
a tus contenidos de video.

Los 'Captions' entregan la versio escrita de las palabras dichas y sonidos importantes
no-verbales, como musica o risas, sincronizadas con el video.

Los 'subtitulos' por otra parte, son escenciales para personas que no entienden el lenguaje
que estas hablando.
Esto ayuda no solo a personas sordas o con problemas de audicion, sino tambien a esos
usuarios en ambientes ruidosos.

Para agregar 'captions' o 'subtitulos' a tus videos o audios, puedes usar el elemento 'track'
dentro de el elemento 'video' o 'audio'.

```html
<video
  width="400"
  height="300"
  controls
  src="https://cdn.freecodecamp.org/curriculum/labs/what-is-the-map-method-and-how-does-it-work.mp4"
>
  <track
    src="captions.vtt"
    kind="captions"
    srclang="en"
    label="English"
  />
</video>

<audio controls src="sample.mp3">
  <track
    src="captions.vtt"
    kind="captions"
    srclang="en"
    label="English"
  />
</audio>
```
El atributo 'kind' se usa para decirle al elemento 'track' como deberia ser usado.
valores validos para el atributo 'kind' incluyen 'captions', 'subtitle', 'chapters' y 'metadata'.

El atributo 'srclang' representa el lenguaje de el contenido 'track'.
El atributo 'label' es un titulo descriptivo para el texto track que el navegador usa para
identificar y reproducir en la lista de textos track disponibles.

Otra cosa importante a considerar es entregar una transcripcion para tu audio y video.
Una transcripcion es una version en texto de todo lo hablado en tu audio o video.
Como los 'captions', los 'transcriptions' no necesitan estar sincronizados con el medio.
Las transcripciones son usadas por personas sordas o con problemas de audicion.
Estos tambien son beneficiosos para personas que prefieren leer en lugar de ver o escuchar.
Las transcripciones tambien hacen tu contenido buscable, ayudando a usuarios a encontrar
rapidamente partes especificas de tu audio o video.
Si tienes un audio o video en una web, puedes simplemente agregar la transcripcion dentro
de el audio o video:

```html
<audio controls>
  <source src="audio.mp3" />
  Your browser does not support the audio element.
</audio>

<!-- Transcript -->
<h3>Transcript</h3>
<p>
  [Speaker 1]: Welcome to the tutorial on making accessible content
</p>
<p>
  [Speaker 2]: Today, we'll cover captions, transcripts, and more.
</p>

<!-- Rest of transcript -->
```
Si estas publicando videos o en una plataforma de transmision-de-videos como YouTube o Vimeo,
estos tienen 'caption' automaticamente y transcripciones para videos.
Pero si no estas satisfecho, puedes usar servicios como veed.io, Rev, Amara, y Descript.

Otra forma de hacer tus videos y audios accesibles incluyen:

* Añadir una superposición de lenguaje de señas a los vídeos para personas sordas y con discapacidad auditiva. 
* Ofrece controles de volumen y velocidad. 
* Garantiza un buen contraste para el texto en pantalla. 
* Ofrece múltiples formatos.
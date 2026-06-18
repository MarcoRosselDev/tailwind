# Cuales son las mejores practicas para las Tables y Forms ?

Cuando vemos una table, inmediatamente comenzamos a hacer asociaciones visuales
entre la informacion y los encabezados.

Por ejemplo, digamos que tenemos una table representando nuestras mascotas.
Tenemos 2 perros y 2 gatos y la tabla muestra sus nombres y edades.
Si bien una persona con vision normal puede entender las relaciones en la tabla,
hacer las conecciones entre los valores y los encabezados es mucho mas
dificil para personas que usan lectores de pantalla para navegar la table.

Como desarrollador web, estas a cargo de crear estas asociaciones y estructurar
tu HTML haciendolo de una forma facil de interpretar para usuarios de lectores de pantalla.

Entonces veamos como puedes crear tablas asociadas que todos puedan entender.
La primera buena practica que cubriremos es usar "table caption".
Con el elemento "caption", puedes escribir la caption o titulo de la table,
entonces los usuario, especialemente los que usan tecnologia de asistencia,
pueden entender rapidamente el proposito de la table y el contenido.
Deberas ubicar el elemento caption inmediatamente despues del elemento de apertura table.
Esto por que, los lectores de pantalla y otras tecnologias de asociacion pueden
proveer mas contenido al anunciar el caption o titulo antes de el contenido.

```HTML
<table>
  <caption>Our Pets</caption>
  <!-- Table Rows and Columns -->
</table>
```

#

Ahora ablemos sobre los encabezados de filas y columnas.
Los encabezados o headers son celdas especiales, tipicamente encontradas 
en el comienso de la fila o columna, esto describe el tipo de dato
ordenado en la fila o columna.
Puedes definir un encabezado de fila o columna con el elemento header table, 
"th"="table header".

Por ejemplo, el codigo debajo crea una tabla para 2 mascotas.
Cada fila tiene un "row header" (el nombre de la mascota) y cada columna
tiene un "column header", que describe que representa la informacion en 
la columna (edad y tipo).

```HTML
<table>
  <caption>Our Pets</caption>
  <thead>
    <tr>
      <!-- Column Headers -->
      <th>Name</th>
      <th>Age</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nora</th> <!-- Row Header -->
      <td>5</td>
      <td>Dog</td>
    </tr>
    <tr>
      <th>Gino</th> <!-- Row Header -->
      <td>2</td>
      <td>Cat</td>
    </tr>
  </tbody>
</table>
```

Notece que el codigo de arriba tiene un elemento caption inmediatamente despues
del elemento de apertura table.
Entonces, dentro del 'table header' (elemento thead), tiene las columnas headers
 (Name, Age y Type).
En la seguna y tercera fila 'rows', dentro del cuerpo de la table (tbody element),
encontramos la data para cada uno de los animales.
Los nombres de las mascotas son la fila header porque estan dentro de el 
elemento encabezado de la table (th).

Asociar la informacion de las celdas con sus encabezados correspondientes es tambien
muy importante para lectores de pantalla.
El atributo 'scope' determina si un header es un encabezado de fila o 
un encabezado de columna.
Los lectores de pantalla adivinaran esto correctamente por la esctructura de la table,
pero es usualmente recomendado el indicar explicitamente el 'scope' para 
asegurar la claridad o entendimineto.

El atributo 'scope' tiene 4 valores posibles.
Los dos que usaras mas seguido son 'col' por columnas
y 'row' por filas.
En el codigo de abajo, puedes ver que agregamos el atributo 'scope'
a los headers de las columnas y filas.
Las 3 column headers (Name, Age y Type) tienen un 'scope' de 'col', columna.

Las 2 'row headers' (Nora y Gino) tienen un 'scope' de 'row'.

```HTML
<table>
  <caption>Our Pets</caption>
  <thead>
    <tr>
      <!-- Now they have scope -->
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nora</th>
      <td>5</td>
      <td>Dog</td>
    </tr>
    <tr>
      <th scope="row">Gino</th>
      <td>2</td>
      <td>Cat</td>
    </tr>
  </tbody>
</table>
```

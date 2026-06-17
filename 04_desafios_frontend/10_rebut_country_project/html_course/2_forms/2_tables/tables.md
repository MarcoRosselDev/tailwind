# que son las tablas HTML, para que se usan, y para que no deberian ser usadas ?

Las tablas HTML no son muy usadas estos dias como lo solian ser.
Pero, como un desarrollador front-end tu deberias seguir familiarizado con ellas.
Las tablas son una de las primeras formas que los desarrolladores tenian para
mostra datos en un navegador muy atras, en los 1990s.

Aqui un ejemplo de codigo usado para generar una tabla, de el Laboratorio
de estadisticas de U.S Bureau:

```html
<table id="quickfacts">
  <thead>
    <tr>
      <th colspan="2">Quick Facts: Software Developers, Quality Assurance Analysts, and Testers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2023 Median Pay</th>
      <td>
        $130,160 per year
        <br>$62.58 per hour
      </td>
    </tr>
    <tr>
      <th>Typical Entry-Level Education</th>
      <td>Bachelor's degree</td>
    </tr>
    <tr>
      <th>Work Experience in a Related Occupation</th>
      <td>None</td>
    </tr>
    <tr>
      <th>On-the-job Training</th>
      <td>None</td>
    </tr>
    <tr>
      <th>Number of Jobs, 2022</th>
      <td>1,795,300</td>
    </tr>
    <tr>
      <th>Job Outlook, 2022-32</th>
      <td>25% (Much faster than average)</td>
    </tr>
    <tr>
      <th>Employment Change, 2022-32</th>
      <td>451,200</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>If this table had a footer it would be here.</th>
    </tr>
  </tfoot>
</table>
```

Como puede ver, hay un elemento de tabla principal con un "ID" establecido en "quickfacts".
Dentro de él, la tabla tiene 
un elemento de "head", ="thead", 
un elemento de "body", ="tbody", 
y un elemento de "foot" de tabla, ="tfoot".

La elementos tabla head, body, y foot pueden cada uno contener alugnos numeros de filas, "tr".
Y cada "fila=row" puede contener un "header=th" el cual etiqueta los datos en esa fila.
El puede contener tambien algunos numeros de celdas de datos, llamados tabla de datos, "td".

Ahora, ese es un monton de elementos HTML.
Pero no te intimides - Este sigue una simple jerarquia.
Aqui una tabla simple que podemos crear que incluye todos estos elementos:

```html
<table>
  <thead>
    <tr>
      <th>The title of this table</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>First Row</th>
      <td>
        First Data Cell
      </td>
    </tr>
    <tr>
      <th>Second Row</th>
      <td>
        Second Data Cell
      </td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>The footer of this table, which might contain date of publication, author credits, or other meta information.</th>
    </tr>
  </tfoot>
</table>
```

Como puedes ver, el dato en si es siempre dentro de un "tr" - y dentro de ese elemento "tr"
un elemento "th" con un header, y un elemento "td" con datos.

Algunos sitios web escoguen usar "div"s para contruit sus propias tablas en lugar
de usar elementos table mas apropiados.

Mientras que es posible deplegar datos tabulados usando elementos div genericos,
sigue siendo mejor usar los elementos table en su lugar.

Muchos años atras, desarrolladores consideraban usar una tabla para posicionar 
elementos no-data en una webpage.
Esto nunca fue considerado una buena practica. Pero tu puedes encontrar algunas bases de codigo
donde las tablas siguen siendo usados asi.

En estos dias, los desarrolladores usan CSS flexbox y grid para diseñar sus diseños.
Freecodecamp cubrira estas herramientas en profundidad tarde.

Por ahora, solo usa tablas HTML para su propósito original previsto: mostrar datos tabulares.

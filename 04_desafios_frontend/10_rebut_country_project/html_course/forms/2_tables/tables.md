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
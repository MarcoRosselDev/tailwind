# ¿Qué es la biblioteca estándar de Python y cómo se importa un módulo?

En el desarrollo de software, una libreria es como a caja de instrumentos 
para desarrolladores.

En lugar de tener que implementar cada parte del codigo por ti mismo desde cero,
una libreria nos da un codigo reusable pre-escrito, como funciones,
clases, y estructura de datos que puedes usar in tu proyecto.

Python tiene una libreria standar grande con muchas buit-in modulos diferentes.
Estan todas estandarizadas, con soluciones bien contrastadas para muchos de los
problemas y tareas que tu enfrentaras dia a dia como programador, como :

* Interacting with the operating system.
* Working with files.
* Networking.
* Working with date and time.
* Performing mathematical operations.
* Using regular expressions.
* Testing and debugging your code.
* And much more!

Algunos ejemplos de modulos buit-in populares son math,random, 
re (short for 'regular expressions'), y datetime.

El modulo math tiene funciones utiles para ejecutar operaciones matematicas
mas complejas.

El modulo random es util para generar numeros aleatorios.

El modulo re se usa para trabajar con expresiones regulares.

Y el modulo datetime es util para trabajar con fechas y tiempos en Python.

Pero como podemos tener acceso a variables, constantes, funciones, y clases
definidas en estos modulos built-in?

Puedes usar un estandar de importacion.
Este estandar te deja importar en tu script Python.
Importar declaraciones es generalmente escrito al principio del archivo,
puedes personalizarlos basado en tus necesidades.
Primero, usas la declaracion 'import', seguido de el nombre del modulo:

```python
import module_name
```
Digamos que vas a importar el modulo math.
En este caso, deberas escribir en el principio del archivo:

```python
import math
```
Entonces si necesitas llamar a una funcion desde el modulo en tu script python,
deveras usar la notacion de punto, con el nombre del modulo seguido
de el nombre de la funcion:

```python
module_name.funcion_name()
```

Por ejemplo, para obtener la raiz cuadrada de 36, deberas escribir math
seguido de la notacion de punto y sqrt, una abreviacion de square root (raiz cuadrada).
En este caso, solo le pasamos el numero que queremos saber su raiz:

```python
math.sqrt(36)
```

Esto es la version mas basica de una declaracion de importacion, pero hay otras alternativas.

Si necesitas importar el modulo con un nombre diferente (tambien conosido como alias),
puedes usar esta sintaxis, con un 'as' seguido por un alias al final de la imoprtacion:

```python
import module_name as module_alias
```

Esto es usado con frecuencia para acortar nombre de modulo largos, o para evitar
conflicto de nombres.

Por ejemplo, para refereinos al modulo 'math' como 'm' en tu codigo,
puedes asignar un alias a el, asi:

```python
import math as m
```

Entonces, puedes acceder a los elementos del modulo usando el alias 'm'.
como m.sqrt(36)

Pero algunas veces no necesitas importar todo el modulo.
En su lugar necesitas solo dos funciones especificas o clases.
Python  tiene exactamente lo que necesitas en este caso.

Ahora las declaraciones de importacion comiensan con 'from', seguido de
el nombre de el modulo, y entonces la palabra reservada 'import' seguido de 
el nombre de el elemento que queieras importar:

```python
from module_name import name1, name2
```
Entonces puedes usar estos nombres sin los prefijos de modulo.

Si lo que quieres es asignar alias a estos nombres, puedes aserlo al usar
la palabra clave 'as' despues de cada uno,
seguido de el alias que quieras usar:

```python
from module_name import name1 as alias1, name2 as alias2
```

Digamos que solo importaras las funciones 'radians', 'sine', y 'cosine'
provenientes del modulo 'math'.
Deveras escribir:

```python
from math import radians, sin, cos
```

Ahora puedes llamar a estas funciones directamente en tu codigo, sin 
el prefijo de modulo.

Aqui tenemos un ejemplo mas detallado:

Para encontrar el conseno de un angulo espesifico expresado en grados,
podemos llamar a la funcion 'radioans' para convertirlo en radianes,
y entonces llamar a la funcion seno y coseno, pasando el angulo en radianes:

```python
from math import radians, sin, cos

angle_degree = 40
angle_radians = radians(angle_degree)

sine_value = sin(sin_value)
cos_value = cos(angle_radians)

print(sine_value) # 0.6427876096865393
print(cos_value)  # 0.766044443118978
```

Nota que llamamos a la funcion directamente, sin el nombre module como prefijo.
Esto es porque estamos importando la funcion con esta sintxis alternativa.

Esto es util, pero puede resultar en un conflicto de nombres si ahora tienes
una funcion o variable con el mismo nombre definido en el script de Python mismo.
Entonces eso es algo a tener en mente cuando escojas importar con que tipo de
declaracion de importacion usaras.

Y finalmente, nos encontramos con esta declaracion de importacion que
termina con un asterisco '*'.
El asterisco le dice a Python que vas a importar todo en ese modulo,
pero vas a importar eso entonces no necesitas usar el nombre de el modulo como prefijo:

```python
from module_name import *
```

Por ejemplo, si haces esto mientras importas el modulo 'math', seras capas
de llamar cualquier funcion definida en ese modulo sin espesificar el nombre de el
modulo como prefijo.
Aqui un ejemplo:

```python
from math import *
print(sqrt(36))  # 6.0
print(pow(5, 2)) # 25.0
print(exp(1))    # 2.718281828459045
```

Como sea, esto es generalmente desaconsejable porque puede causar coliciones
de espacio de nombre, y hacerlo dificil de saber de donde viene un nombre.

La declaracion de importacion trabaja igual con las funciones, clases, constantes,
variables, y cualquier otro elemento definido en el modulo.

Aqui un ejemplo de una constante de el modulo 'math', el numero 'pi'"

```python
import math
print(math.pi)
```

Y aqui un ejemplo de una clase del modulo 'datetime'.
Creamos un objeto datetime que representa a July 15, 1959.
Entonces, asignamos eset objeto datetime a una variable y accedemos al dia,
mes, y año dindividualmente usando la notacion de punto:

```python
import datetime
birthday = datetime.date(1959, 7, 15)
print(birthday.day)    # 15
print(birthday.month)  # 7
print(birthday.year)   # 1959
```

Puedes encontrar mas informacion hacerca del contenido del modulo en
la decumentacion oficial de Python para ese modulo.

Genial. 
Ahora que sabes más sobre módulos, 
también deberías conocer este modismo tan importante en los scripts de Python, 
porque están muy relacionados.

```python
if __name__ == '__main__':
    # code
```

__name__ es una variable espesifica built-in en Python.

Cuando un archivo Python se ejecuta directamente, Python actualiza el valor
de esta variable a el string '__main__'.

Pero si el archivo Python se importa como un modulo en otro scropt Python,
el valor de la variable __name__ se actualiza a el nombre de el modulo
(usualmente el nombre con el .py como extencion).

Por eso es que a menudo encontrara esta definicion en scripts Python.
Esto contiene el codigo que vas a correr solo si el script Python
esta corriendo como el programa principal:

Pero si el script es importado como un modulo, el codigo dentro de ese block
no corre.

Esto es util porque esto ayuda a los scripts de Python tener dos propositos.
Ellos pueden correr directamente para ejecutar su logica principal, o
pueden ser importados a otros modulos son ejecutar su logica principal.
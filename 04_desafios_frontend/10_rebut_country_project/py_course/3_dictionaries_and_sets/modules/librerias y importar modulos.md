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
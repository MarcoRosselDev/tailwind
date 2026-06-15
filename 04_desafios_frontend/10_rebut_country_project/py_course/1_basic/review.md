# Python basico - review

## Que es python ?

### Introduccion:
  Python es un lenguaje de programacion de proposito-general
  conocido por su simplicidad y facil uso.
  Python es usado en muchos campos como data science y machine learning,
  web development, scripting y automation, sistemas embebidos y loT, y mucho mas.

### Casos de uso comun:
  Python es usado in data science, maching learning, web development, cybersecurity,
  automation y microcomputadores como Raspberry Pi y MicroPython-compatible boards.

## Variables
  - Declarar variables:
    Para declarar una variable, comienzas con el nombre de la variable
    seguido de el operador de asignacion "=" y entonces el valor.
    Este puede ser un numero, string, boleano, etc.
    Aqui algunos ejemplos:
    ```python
    name = "John Doe"
    age= 34
    ```

  - Convencion de nombres para variables:
    Aqui estan las convenciones que deverias usar para nombrar variables:

    - Los nombres de las variables solo deverian comenzar con letras o un underscore "_",
      no un numero.
    - Los nombres de variables pueden solo contener caracteres alphanumericos
      (a-z, A-Z, 0-9) y underscores "_".
    - Los nombres de variable no pueden ser las palabras reservadas de Python
      como if, class, o def.
    - Los nombres de variable con multiples palabras son separadas con underscore.
      Por ejemplo, snake_case.
  
## Comentarios

- Comentarios de una sola linea:
  Estos tipos de comentarios deverian ser usados para notas cortas
  que quieras dejar en tu codigo.
  ```python
  # This is a single line comment.
  ```
- Multi-line Strings:
  Este tipo de strings puedes ser usados para dejar notas largas
  para comentar secciones de codigo.
  ```python
  """
  This is a multi-line string.
  Here is some code commented out.

  name = 'John Doe'
  age = 25
  """
  ```
- Funcion print():
  Para imprimir datos en la consola, puedes usar la funcion print() asi:
  ```python
  print('Hello world!')
  ```
## Tipos de datos en Python

- Introduccion:
  Python es un lenguaje de tipado dinamico como javascript, lo que significa
  que no necesitas declarar explisitamente el tipo de variable.
  El lenguaje sabe el tipo de dato de una variable en base a lo que le asignas
  a la variable.

- Integer:
  Un numero entero, sin decimales.
- Float:
  Un numero con decimales.
- String:
  Una secuencia de caracteres encerrados en comillas.
- Boolean:
  Un valor que representa True o False.
- Set:
  Una coleccion desordenada de elementos unicos:
  ```python
  my_set_var = {7, 5, 8}
  print('Set:', my_set_var) # Set: {7, 5, 8}
  ```
- Dictioary:
  Una coleccion de pares clave-valor (key-value), encerrados en curly braces:
  ```python
  my_dictionary_var = {"name": "Alice", "age": 25}
  print('Dictionary:', my_dictionary_var) # Dictionary: {'name': 'Alice', 'age': 25}
  ```
- Tuple:
  Una coleccion inmutable y ordenada , encerrado en parentesis.
  ```python
  my_tuple_var = (7, 5, 8)
  print('Tuple:', my_tuple_var) # Tuple: (7, 5, 8)
  ```
- Range:
  Una secuencia de numeros, usualmente usados en loops:
- List:
  Una coleccion ordenada de elementos que soporta deferentes tipos de datos:
- None:
  Un valor especial que representa la ausencia de un valor.

## tipos Inmutables y mutables

- tipos inmutables:
  Estos tipos no pueden cambiar una vez son declarados, aun que
  tu puedas apuntar sus variables a algo nuevo, lo que se le llama reasignacion.
  Ellos incluyen integer, float, complex, boolean, string, tuple, range y None.

- tipos mutables:
  Estos tipos pueden cambiar una vez declarados.
  Puedes agregar, remover, o actualizar sus items.
  Ellos incluyen tipos colleccion como list, set, y dictionary.

- Function type():
  Para ver el tipo de una variable, puedes usar la funcion type() asi:

  ```python
  greeting = 'Hello there!'
  age = 21

  print(type(greeting)) # <class 'str'>
  print(type(age)) # <class 'int'>
  ```
- Funcion isinstance():
  Esta es usada para revisar si una variable matchea un tipo de dato:

```python
  greeting = 'Hello world'
  name = 'John Doe'

  print(isinstance(greeting, str)) # True
  print(isinstance(name, int)) # False
```

si lo que quieres es revisar mas de un tipo de dato en la funcion isinstance, do this:

```python
if isinstance(greeting, (tuple, list)):
```
## Trabajando con strings

- Definicion:
  Como recordaras de javascript, los strings son inmutables, lo que significa
  que no pueden cambiar despues de ser creados.
  En Python, puedes usar comillas simples o dobles.
  Es recomendable escojer una y ser consistente en su uso.

- Asociacion de caracteres provenientes de strings:
  Puedes acceder a caracteres de strings usando la notacion de brackets, asi:

  ```python
  my_str = 'Hello world'

  print(my_str[0])  # H
  print(my_str[6])  # w

  print(my_str[-1])  # d
  print(my_str[-2]) # l
  ```

- Escapar strings:
  Puedes usar el "\" si tu string contiene comillas.

- Concatenacion de string:
  Para concatenar o unir strings, puedes usar el operador "+".
  Otra forma de concatenar strings es con el operador "+=".
  Este es usado para ejecutar concatenaciones y asignarlo en el mismo paso.

- f-strings:
  Este es la abreviatura de literales de cadena formateados.
  Este nos ayuda a manejar interpolaciones y tambien realizar algunas
  concatenaciones en una sintaxis legible y compacta.

- string slicing:
  Esto es cuando puedes extraer porciones de un string.
  Aqui la sintaxis basica:
  ```python
  str[start:stop:step]
  ```
  La posicion start representa el indice donde la extraccion comienza.
  La position stop es donde el corte deve terminar.
  Esta posicion no es incluyente.
  La posicion step representa el intervalo para incrementar para el corte.

- Obtener el Lenght de un string:
  La funcion len() se usa para retornar el numero de caracteres en un string.

## Trabajando con el operador IN

- operador IN:
  Este retorna un boleano que espesifica donde un caracter o caracteres excisten
  en un string o no:
  ```python
  my_str = 'Hello world'

  print('Hello' in my_str)  # True
  print('hey' in my_str)    # False
  print('hi' in my_str)    # False
  print('e' in my_str)  # True
  print('f' in my_str)  # False
  ```

## Metodos comunes de strings

- str.upper():
  Este retorna un nuevo string con todos los caracteres convertidos en uppercase.

- str.lower():
  Este retorna un nuevo string con todos los caracterres convertidos a lowercase.

- str.strip():
  Este retorna una copia del string con los caracteres iniciales y finales eliminados,
  (si no se espesifica el caracter, se removeran los espacios en blanco).

- replace():
  Este retorna un nuevo string con todas las ocurrencias de el antiguo string
  reemplazado por uno nuevo.

- split():
  Este es usado para dividir un string en una lista usando un separador espesifico.
  Un separador es un string que espesifica donde deveria ser la division.

- join():
  Este se usa para unir elementos de un iterable convertido a un string con un 
  separador.
  Un iterable es una coleccion de elementos que pueden ser iterables como una lista,
  string o una tupla.

- str.startswith(prefix):
  Este retorna un boleano indicando si un string comienza con un prefijo especifico.

- str.endswith(suffix):
  Este retorna un boleano indicando si un string termina con un sufijo expecifico.

- str.find():
  Este retorna el indice de la primera concurrencia de un substring.
  Si no se encuentra, retorna -1.

- str.count(substring):
  Cuenta cuantas veces un substring aparece en un string.

- str.capitalize():
  Este retorna un nuevo string con el primer caracter en mayuscula y lo demas en minuscula

- str.isupper():
  Este retorna "True" si todos los caracteres en un string son mayusculas y
  "False" de lo contrario.

- str.islower():
  Este retorna "True" si todos los caracteres en un string son minusculas y
  "False" de lo contrario.

- str.title():
  Este retorna un nuevo string con la primera letra de cada palabra en mayuscula.

- str.maketrans():
  Este no lo entiendo y no se para que puede servir.

## Operaciones comunes usando enteros y flotantes

- Operaciones matematicas basicas:
  En python puedes realizar operaciones matematicas basicas con enteros y flotantes
  como la adicion, sustraccion, multiplicacion y division.

  Cuando sumas un flotante y un entero, el resultado es un flotante.

- Operador modulo "%":
  Este retorna el residuo de la division de dos numeros.

- Floor division "//":
  Este operador se usa para dividis dos numeros y redondear hacia abajo el resultado
  hacia el entero mas sercano.

- Operador de exponete "**":
  Este operador eleva un numero a su exponente.

- Funcion float():
  Convierte un numero a flotante.

- Funcion int():
  Puedes usar esta funcion para convertir un flotante a entero.

- Funcion round():
  Este redondea un numero al entero mas sercano.

- Funcion abs():
  Este retorna el valor absoluto del numero.

- Funcion pow():
  Este eleva a la potencia de otro numero.

## Asignacion aumentada

- Definicion:
  Augmented assignment combina una operacion binaria con la 
  asignacion en un solo paso.
  Este toma una variable, aplica una operacion a este con otra variable,
  y lo guarda devuelta en la misma variable.

  Existen otros operadores de asignacion aumentada, como los operadores
  bit a bit.
  Ellos incluyen "&=", "^=", ">>=", y "<<=".

## Trabajando con funciones

- Definicion:
  Las funciones son piezas de codigo reutilizables que toman inputs (argumentos)
  y retorna un output.
  Para llamar una funcion, necesitas referenciarla con un nombre seguido de
  un par de parentecis "()"

  Si una funcion no retorna un valor, el valor por defecto retorna None.

  Tambien puedes suplir valores de parametros con parametros por defecto, asi:

  ```python
  def get_sum(num_1, num_2=2):
    return num_1 + num_2

  result = get_sum(3) 
  print(result) # 5
  ```

  Si llamas una funcion con la cantidad incorrecta de argumentos, resiviras
  un "TypeError"

## Funciones buit-in comunes

- Funcion input():
  Este es usado para resivir un input del usuario por consola.

- Funcion int():
  Se utiliza para convertir un numero, boolean, o string numerico en integer:

## Scope en Python

- Local scope:
  Esto es cuando una variable declarada dentro de una funcion o clase puede
  ser solo accedida dentro de esa fucion o clase.

- Enclosing scope:
  Esta es cuando una funcion que esta encadenada dentro de otra fucion puede
  acceder a variables de la fucion que la encierra.

- Global scope:
  Esta refiere a variables que son declaradas fuera de cualquier funcion o clase
  que puede ser accedida en cualquier programa.

- build-in scope:
  Palabras reservadas en python para funciones predefinidas,
  modulos, palabras clave, o objetos.

## Operadores de comparacion

- Equal (==):
  revisa si dos valores son iguales.

- Not equal (!=):
  revisa si dos valore no son iguales.

- Estrictamente mayor que (>):
  revisa si un valor es mayor que otro.

- Estrictamente menor que (>):
  revisa si un valor es menor que otro.

- Mayor o igual que (>=):
  revisa si un valor es mayor o igual que otro.

- Menor o igual que (<=):
  revisa si un valor es menor o igual que otro.

## Trabajando con delaraciones if, elif, y else

- if:
  Estas son condiciones usadas para determinar si algo es True o no.
  Si una condicion evalua True, entonces el bloque de codigo correra.

- elif:
  Esta es una condicion que biene despues de la declaracion if.
  Una clausula elif corre solo si todas la condiciones previas evaluan en False
  y su condicion evalua en True.

- else:
  Este corre si todas las otras condiciones evaluan en False.

Tambien puedes encadenar declaraciones if dentro de otras declaraciones if.

## Valores Truthy y Falsy

- Definicion:
  En python, cualquier valor tiene un valor booleano por inercia, o 
  un sentido built-in de como debe ser tratado como True o False
  en un contexto logico.
  Muchos valores son considerados truthy, esto es, se evaluan como True
  en un contexto logico.
  Otros son Falsy, aqui unos ejemplos de valores falsy:
  1. None
  2. False
  3. Integer 0
  4. Float 0.0
  5. Empty string ''

  Otros valores como enteros distintos de 0 y strings no vacios son 
  valores truthy.

## Trabajando con la funcion bool()

- Definicion:
  Si quieres revisar si un valore es truthy o falsy, puedes usar la
  funcion built-in bool().
  Esta convierte explicitamente un valor a su equivalente booleano y
  retorna True para valore truthy y False para los falsy.

## Operadores booleanos y short-circuiting (circuitos cortos)

- Definicion:
  Estos son operadores especiales que nos ayudan a combinar multiples
  expresiones para crear deciciones mas complejas y logicas en tu codigo.
  Estos son los operadores boleanos en python: and, or y not.

- and:
  Este operador toma dos operadores y retorna el primero operador
  si es falsy, de lo contrario, retornara el segundo operador.
  Ambos operadores deberian ser true para una expresion para retornar truthy value.

- or:
  Este operador retorna el primer operador si es truthy, de lo contrario,
  retornara el segundo  operador.
  Una expresion or resulta en un valor truthy si al menos uno de sus operadores
  es truthy.

- Short-circuiting:
  Los operadores and y or son conosidos como operadores short-circuit.
  Short-circuiting significa que Python revisa valores desde la izquierda a
  derecha y para lo mas rapido posible cuando determina el resultado final.

- not:
  Este operador toma un operador solitario y lo invierte a su valor booleano.
  Este convierte valores truthy a False y fasly a True.
  A diferencia de los operadores previos, not siempre retorna True o False.
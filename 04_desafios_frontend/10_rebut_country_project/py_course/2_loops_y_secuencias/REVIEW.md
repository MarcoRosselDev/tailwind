# Bucles y Secuencias REPASO (REVIEW) (Loops and Sequences)

## Python Lists

* Introduccion:
  En python, el tipo de dato list es una secuencia ordenada de elementos
  que pueden ser compuesta por strings, numbers y otras listas.
  Las lists son mutables y con indice en base cero.

  cities = ["Los Angeles", "London", "Tokyo"]

* Acceder a elementos de la list:
  Para acceder a un elemento de la list cities, puede referirse
  mediante su indice numerico en la secuencia.

  cities = ["Los Angeles", "London", "Tokyo"]
  cities[0] # Los Angeles

* Acceder a elementos usando indice negativo:
  Podemos acceder al ultimo elemento usando -1

* Los indices negativos son usados para acceder a elementos
  empezando desde el final y terminando en el principio.

* Crear lists usando el constructor list():
  Las lists pueden ser creadas usando el constructor list().
  El constructor list se usa para convertir un iterable en un list:

```python
developer = "Jessica"

print(list(developer)) 
# Result: ['J', 'e', 's', 's', 'i', 'c', 'a']
```

* Largo de una list:
  Podemos saber el largo de una list con la funcion len().

* Mutabilidad de una list:
  Las list son mutables, lo que significa que puedes actualizar
  cualquier elemento en la list si pasas un valor de indice valido.
  Para actualizar la lista a partir del indice, puedes asignar
  un nuevo valor a ese indice:

```python
programming_languages = ['Python', 'Java', 'C++', 'Rust']
programming_languages[0] = 'JavaScript'
print(programming_languages) # ['JavaScript', 'Java', 'C++', 'Rust']
```
* Error de rango al salir del indice:
  si pasas un indice positivo o negativo que este fuera del
  largo de la lista, entonces resiviras un error IndexError.

* Remover elementos de una list:
  Los elementos pueden ser eliminados de una list usando la palabra
  clave "del":

```python
developer = ['Jane Doe', 23, 'Python Developer']
del developer[1]
print(developer) # ['Jane Doe', 'Python Developer']
```
* revisar si un elemento existe en una list:
  La palabra clave "in" puede ser usada para revisar la existencia
  de un elemento en una list.

```python
programming_languages = ['Python', 'Java', 'C++', 'Rust']

'Rust' in programming_languages # True
'JavaScript' in programming_languages # False
```
* Listas encadenadas (nesting lists):
  Las listas pueden estar anidadas dentro de otras

* Para acceder a list encadenadas, necesitaras acceder primero
  al indice de la lista encadenada, y luego acceder al indice dentro de este otro:

```python
developer = ['Alice', 25, ['Python', 'Rust', 'C++']]
developer[2][1] # Rust
```
* Desempacando valores de una list:
  Desempacando valores de una list es una tecnica usada para
  asignar valores de una lista a nuevas variables.
  Aqui un ejemplo de unpack la lista developer en nuevas variables
  llamadas name, age y job asi:

```python
developer = ['Alice', 34, 'Rust Developer']
name, age, job = developer
```
* Si el numero de variables en la izquierda del operador de asignacion (=),
  no coinside con el total de elementos en la list,
  entonces resiviras un error de tipo ValueError.

* Coleccionando items residuos de una list:
  Para recolectar cualquier elemento residuo de una list, podemos usar
  el operador * (asterisco) asi:

```python
developer = ['Alice', 34, 'Rust Developer']
name, *rest = developer
```
* Slicing lists (revanando listas):
  Slicing es el consepto de acceder a porciones de una list usando
  el operador de corte o slicing (:).
  Para cortar una list que comiensa en el indice 1 y termina despues
  del indice 3, puedes usar la siguiente sintaxis:

```python
desserts = ['Cake', 'Cookies', 'Ice Cream', 'Pie']
desserts[1:3] # ['Cookies', 'Ice Cream']
```
* Intervalos de pasos(step intervals):
  Tambien es posible espesificar el intervalo de pasos que determina
  cuanto incrementamos entre el indice.
  Aqui un ejemplo si quieres extraer una lista de solo numero pares:

  numbers = [1, 2, 3, 4, 5, 6]
  numbers[1::2] # [2, 4, 6]

## metodos list

* append():
  Se usa para agregar un elemento el final de una list.
  Aqui un ejemplo de el metodo append para agregar el numero 6 a la list
  numbers:

```python
numbers = [1, 2, 3, 4, 5]
numbers.append(6)
print(numbers) # [1, 2, 3, 4, 5, 6]
```
* Appending list:
  El metodo append() tambien se puede usar para agregar
  una list al final de otra

```python
numbers = [1, 2, 3, 4, 5]
even_numbers = [6, 8, 10]

numbers.append(even_numbers)
print(numbers) # [1, 2, 3, 4, 5, [6, 8, 10]]
```
* extend():
  se usa para agregar multiples items al final de una list.
  Aqui un ejemplo de agregar el numero 6, 8, y 10 al final de una list
  llamada numbers:

```python
numbers = [1, 2, 3, 4, 5]
even_numbers = [6, 8, 10]

numbers.extend(even_numbers)
print(numbers) # [1, 2, 3, 4, 5, 6, 8, 10]
```
* insert():
  Se usa para insertar un elemento en un indice espesifico en la list.
  Aqui un ejemplo usando el metodo insert:

```python
numbers = [1, 2, 3, 4, 5]
numbers.insert(2, 2.5)

print(numbers) # [1, 2, 2.5, 3, 4, 5]
```
* remove():
  Usado para remover un elemento de la list.
  El metodo remove solo removera la primera concurrencia
  de un elemento en una list.

```python
numbers = [1, 2, 3, 4, 5, 5, 5]
numbers.remove(5)

print(numbers) # [1, 2, 3, 4, 5, 5]
```
* pop():
  se usa para remover un item espesifico de una list pero retornandolo:

```python
numbers = [1, 2, 3, 4, 5]
numbers.pop(1) # The number 2 is returned
```
* si no espesificas un elemento para remover en el metodo pop,
  entonces el ultimo elemento se removera.

* clear():
  Se usa para remover todos los items de un elemento

* sort():
  Se usa para ordenar los elementos en el mismo lugar(conserva la misma variable).
  Aqui un ejemplo del ordenamiento en lugar de la list numbers:

```python
numbers = [19, 2, 35, 1, 67, 41]
numbers.sort()

print(numbers) # [1, 2, 19, 35, 41, 67]
```
* sorted():
  Los mismo que sort, pero este deja tranquilo la list inicial y retorna una nueva
  lista ordenada(no modifica la list original).
```python
numbers = [19, 2, 35, 1, 67, 41]
sorted_numbers = sorted(numbers)

print(sorted_numbers) # [1, 2, 19, 35, 41, 67]
print(numbers) # [19, 2, 35, 1, 67, 41]
```
* reverse():
  Se usa para revertir el orden de los elementos de una list:
```python
numbers = [6, 5, 4, 3, 2, 1]
numbers.reverse()

print(numbers) # [1, 2, 3, 4, 5, 6]
```
* index():
  Se usa para encontrar el indice de la primera coincidencia en los
  elementos de una list

  - si ningun elemento en la lista coinside, el metodo index resultara
    en un error de ValueError.

## Tuples en python

* Definition:
  Una tuple en python es un tipo de dato usado para crear una secuencia
  ordenada de valores.
  Tuples pueden contener muchos tipos de datos.

  developer = ('Alice', 34, 'Rust Developer')

  Las tuplas son inputables, lo que significa que los elementos en la tuple
  no pueden cambiar una ves son creados.
  Si tratas de actualizar un item en la tuple, obtendras un error de 
  tipo TypeError

* Acceder a valores en una tuple:
  Se usa la notacion de corchetes, al igual que las lists.

* Constructor tuple():
  Tambien pueden ser creadas mediante el constructor tuple().
  Con el constructor le puedes pasar diferentes items iterables como strings,
  lists y otras tuples.

```python
developer = 'Jessica'

print(tuple(developer)) 
# Result: ('J', 'e', 's', 's', 'i', 'c', 'a')
```
* verificar valores en tuples:
  Para revisar si un elemento esta en una tuple, puedes usar la palabra
  reservada "in" asi:
```python
programming_languages = ('Python', 'Java', 'C++', 'Rust')

'Rust' in programming_languages # True
'JavaScript' in programming_languages # False
```
* Unpacking Tuples:
  Los elementos pueden ser desempacados, igual que las lists.

* slicing tuples:
  Lo mismo que con los list para cortar tuples.

* Eliminar elementos en una tuple:
  No se puede, resiviras un error de tipo TypeError.

* Cuando usar tuples en lugar de lists?
  Si necesitas una coleccion dinamica de elementos donde puedas agregar,
  remover y actualizar elementos, entonces deberias usar list.
  Si sabes que estas trabajando con colecciones de dato inmutables y fijos,
  entonces deberias usar tuples.

## Metodos de tuplas comunes

* count():
  Usada para determinar cuantos elementos aparecen en una tuple.
  Por ejemplo, puedes revisar cuantas veces el lenguaje "Rust"
  aparece en la tuple:
```python
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust')
programming_languages.count('Rust') # 2
```
  - Si el elemento espesificado no se encuentra, el metodo count retornara 0.
  - Si no se pasan argumentos al metodo count, entonces retornara un TypeError.

* index():
  Se usa para encontrar el indice de un elemento.
  Aqui un ejemplo de el metodo index para encontrar el indice del lenguaje "Java":

```python
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust')
programming_languages.index('Java') # 1
```
  - si el elemento espesificado no se encuentra, python retornara un ValueError.
  - puedes pasar un indice start opcional al metodo index.
    Para especificar donde comensar a buscar el elemento en la tuple.
```python
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust', 'Python')
programming_languages.index('Python', 3) # 5
```
  - Tambien puedes pasar un indice opcional end al metodo index.
    Para espesificar donde parar de buscar el elemento en la tuple.

```python
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust', 'Python', 'JavaScript', 'Python')
programming_languages.index('Python', 2, 5) # 2
```
* sorted():
  Se usa para ordenar los elementos en cualquier iterable y retorna
  una nueva lista ordenada.
  Aqui un ejemplo de la creacion de una nueva list de numeros
  usando la fucion sorted():

```python
numbers = (13, 2, 78, 3, 45, 67, 18, 7)
sorted(numbers) # [2, 3, 7, 13, 18, 45, 67, 78]
```
* Modificando el comportamiento de ordenamiento:
  Podemos custmisar el comportamiento de ordenamiento para un iterable
  usando los argumentos reverse y key.
  Aqui un ejemplo usando el argumento opcional key para ordenar
  los elementos de una tuple por el largo (length):

```python
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust', 'Python')
sorted(programming_languages, key=len)

# Result
# ['C++', 'Rust', 'Java', 'Rust', 'Python', 'Python']
```
* Puedes crear una nueva lista de variables en orden reverso,
   usando  el argumento reverse, asi:

```python
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust', 'Python')

print(sorted(programming_languages, reverse=True))

# Result
# ['Rust', 'Rust', 'Python', 'Python', 'Java', 'C++']
```
## Bucles en python (Loops in python)

* Definicion:
  Los bucles se usan para repetir un bloque de codigo por un
  numero customisable de veces.

* Bucle for:
  Se usa para iterar por una secuencia (como una list, tuple o string)
  y ejecutar un bloque de codigo por cada item de la secuencia.
  Aqui un ejemplo de el bucle for para iterar a traves de una list
  y imprimir en consola cada lenguaje:

```python
programming_languages = ['Rust', 'Java', 'Python', 'C++']

for language in programming_languages:
    print(language)

"""
Result 

Rust
Java
Python
C++
"""
```
*   Aqui un ejemplo usando el bucle for para iterar a traves de es string
    "code" e imprimir en consola cada caracter:

```python
for char in 'code':
    print(char)

"""
Result 

c
o
d
e
"""
```
*   Los bucles for pueden ser encadenados.
    Aqui un ejemplo de un bucle encadenado:
```python
categories = ['Fruit', 'Vegetable']
foods = ['Apple', 'Carrot', 'Banana']

for category in categories:
    for food in foods:
        print(category, food)

"""
Result

Fruit Apple
Fruit Carrot
Fruit Banana
Vegetable Apple
Vegetable Carrot
Vegetable Banana
"""
```
*   Bucle while:
    Repite un bloque de codigo mientras la condicion sea False.
    Aqui un ejemplo de un bucle while de un juego de adivinansa:

```python
secret_number = 3
guess = 0

while guess != secret_number:
    guess = int(input('Guess the number (1-5): '))
    if guess != secret_number:
        print('Wrong! Try again.')

print('You got it!')

"""
Result

Guess the number (1-5): 2
Wrong! Try again.
Guess the number (1-5): 1
Wrong! Try again.
Guess the number (1-5): 3
You got it!
"""
```
*   Break y continue:
    Se usan en un bucle para modificar la ejecucion de un bucle.

*   break:
    Se usa para salir de un bucle inmediatamente cuando 
    sierta condicion de cumple.
    Aqui un ejemplo del uso de break de una list "developer_name":

```python
developer_names = ['Jess', 'Naomi', 'Tom']

for developer in developer_names:
    if developer == 'Naomi':
        break
    print(developer)
```
*   continue:
    Se usa para escapar la iteracion de bucle actual y movernos
    a la siguiente iteracion del bucle.
    Aqui un ejemplo de continue en lugar del break:

```python
developer_names = ['Jess', 'Naomi', 'Tom']

for developer in developer_names:
    if developer == 'Naomi':
        continue
    print(developer)
```
*   Ambas for y while pueden ser convinadas con un else,
    el cual se ejecuta solo cuando el bucle no se termina por un break:
```python
words = ['sky', 'apple', 'rhythm', 'fly', 'orange']

for word in words:
    for letter in word:
        if letter.lower() in 'aeiou':
            print(f"'{word}' contains the vowel '{letter}'")
            break
    else:
        print(f"'{word}' has no vowels")
```
## Range y su uso en los Bucles

*   Descripcion:
    Se usa para generar una secuencia de enteros:
    
    range(start, stop, step)

*   El argumento obligatorio "stop" es un entero que representa
    el punto final para la secuencia de numeros a generar.
    Aqui un ejemplo de la funcion range():

```python
for num in range(3):
    print(num)
```
*   Si no se espesifica el argumento "start", el valor por defecto
    sera 0. Por defecto la secuencia de enteros incrementara por 1.
    Puedes usar el argumento opcional "step" para cambiar el incremento por defecto.
    Aqui un ejemplo de la generacion de numeros pares desde el numero 2 asta el 
    11 (el 11 no se incluye, solo hasta el 10):
```python
for num in range(2, 11, 2):
    print(num)
```
*   Si no provees ningun argumento a la funcion range(), entonces
    obtendras un TypeError.
*   La funcion range solo acepta enteros como argumentos y no flotantes.
    Si usas floats tambien resultara en un TypeError.
*   Puedes usar enteros negativos para el argumento step para generar
    una secuencia de enteros en orden desendente
*   La funcion range puede ser usada para crear lists de enteros
    al usar el contructor list().
    El constructor list se usa para convertir un iterable en lista.
    Aqui un ejemplo de crear una list de enteros pares
    entre 2 y 10:

```python
numbers = list(range(2,11,2))
print(numbres) # [2, 4, 6, 8, 10]
```
## Funcion enumerate y zip en python

*   enumerate:
    Se usa para iterar a traves de una secuencia y mantener un reguistro
    del indice de cada elemento en la secuencia.
    La funcion enumerate toma un iterable como argumento y retorna
    un objeto enumerado que consiste en el indice y valor de cada elemento
    en el iterable
```python
languages = ['Spanish', 'English', 'Russian', 'Chinese']

for index, language in enumerate(languages):
    print(f'Index {index} and language {language}')

# Result
# Index 0 and language Spanish
# Index 1 and language English
# Index 2 and language Russian
# Index 3 and language Chinese
```
*   La funcion enumerate puede ser usado tambien fuera de el bucle for:
```python
languages = ['Spanish', 'English', 'Russian', 'Chinese']

print(list(enumerate(languages)))
# [(0, 'Spanish'), (1, 'English'), (2, 'Russian'), (3, 'Chinese')]
```
La funcion enumerate tambien acepta un argumento opcional "start" que
espesifica el valor inicial para el valore count.
Si el argumento se omite, entonces el conteo comensara en 0.

*   zip():
    La funcion zip se usa para iterar a traves de multiples iterables en paralelo.
    Aqui un ejemplo de la funcion zip para iterar a traves
    de "developers" y "ids":

```python
developers = ['Naomi', 'Dario', 'Jessica', 'Tom']
ids = [1, 2, 3, 4]

for name, id in zip(developers, ids):
    print(f'Name: {name}')
    print(f'ID: {id}')


"""
Result

Name: Naomi
ID: 1
Name: Dario
ID: 2
Name: Jessica
ID: 3
Name: Tom
ID: 4
"""
```
## List comprehensions en python

*   Definicion:
    List comprehension nos ayudan a crear una nueva list en una sola linea
    al combinar bucles y condicionales directamente en corchetes rectangulares.
    Esto hace el codigo corto y a menudo facil de leer.

```python
even_numbers = [num for num in range(21) if num % 2 == 0]
print(even_numbers)
```

## Metodos iterables

*   filter():
    Se usa para filtrar elementos de un iterable en base a una condicion.
    Esto retorna un iterador que contiene solo los elementos que satisfacieron
    la condicion.
    Aqui un ejemplo de la creacion de una nueva list de solo palabras
    mas largas que 4 caracteres.

```python
words = ['tree', 'sky', 'mountain', 'river', 'cloud', 'sun']

def is_long_word(word):
    return len(word) > 4

long_words = list(filter(is_long_word, words))
print(long_words) # ['mountain', 'river', 'cloud']
```

*   map():
    Se usa para aplicar una funcion a cada elemento en un iterable
    y retornar un nuevo iterable con el resultado.
    Aqui un ejemplo del uso de la funcion map() para convertir
    una lista de termperaturas celsius a fahrenheit:
```python
celsius = [0, 10, 20, 30, 40]

def to_fahrenheit(temp):
    return (temp * 9/5) + 32

fahrenheit = list(map(to_fahrenheit, celsius))
print(fahrenheit) # [32.0, 50.0, 68.0, 86.0, 104.0]
```
*   sum():
    Se usa para obtener la suma de un iterable como una lista
    o tuple.
    Aqui un ejemplo de la funcion sum:

```python
numbers = [5, 10, 15, 20]
total = sum(numbers)
print(total) # Result: 50
```
*   Puedes tambien pasarle un argumento opcional "start" que
    customisa el valor inicial de la suma.
    Aqui un ejemplo usando el argumento start como argumento posicional:

```python
numbers = [5, 10, 15, 20]
total = sum(numbers, 10) # positional argument
print(total) # 60
```
*   Tambien puedes escoger usar el argumento "start" como
    argumento-clave asi:

```python
numbers = [5, 10, 15, 20]
total = sum(numbers, start=10) # keyword argument
print(total) # 60
```

## Funciones Lambda

*   Definicion:
    Una funcion lambda en python es una manera consisa de crear una
    funcion sin un nombre (funcion anonima).
*   Las funciones lambda son a menudo usadas como argumentos de otras
    funciones. Aqui un ejemplo de funciones lambda:

```python
numbers = [1, 2, 3, 4, 5]

even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4]
```

*   Las buenas practicas de las funciones lambda incluyen no asignarles
    nombres, mantenlas simples y legibles, y usalas para
    funciones cortas de un solo uso.

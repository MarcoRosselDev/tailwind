# que es la comprencion de listas y Cuales son algunas funciones utiles para trabajar con listas ?

En las lecciones pasadas, te estuviste sintiendo comodo trabajando con bucles asi:

```python
even_numbers = []

for num in range(21):
    if num % 2 == 0:
        even_numbers.append(num)

print(even_numbers)
```
Este ejemplo crea una nueva lista vacia llamada "even_numbers" y itera
atraves de una secuencia de numeros entre el 0 y 20.
Dentro del bucle, exciste una condicion que revisa si el valor actual
tiene un residuo de 0 cuando lo dividimos por 2.
Esto es usado para determinar si el numero es par.
Si la condicion es True, entonces el valor actual se agrega al final de la lista "even_numbers".
Finalmente, imprimimos la lista "even_numbers" en la consola.

Mientras este codigo funciona, hay una manera mas consisa de escribir esta logica
usando "list comprehension" (comprencion de listas) en su lugar.
"List comprehension" te ayuda a crear una nueva lista en una sola linea al combinar
un bucle y condicional directamente dentro de parentecis rectangulares.
Esto hace el codigo mas corto y a menudo mas facil de leer.

Aqui una refactorizacion de el codigo usado anteriormente, usando parentecis cuadrados:

```python
even_numbers = [num for num in range(21) if num % 2 == 0]
print(even_numbers)
```
En este ejemplo de codigo refactorisado, la list "even_numbers" se crea usando
una sola linea de codigo.
La "list comprehension" itera a traves de los numeros 0 al 20,
y incluye solo aquellos que son divisibles por 2.
Este asercamiento es mas compacto y elimina la necesidad de una iteracion separada
y el bloque condicional.

Veamos otro ejemplo para entender mejor como trabaja la "list comprehension":

```python
numbers = [1, 2, 3, 4, 5]
result = [(num, 'Even') if num % 2 == 0 else (num, 'Odd') for num in numbers]
print(result)
```
En este ejemplo, tenemos una list de numeros y crearemos una nueva list
de tuples indicando cuales numeros son pares o impares.
En la primera parte de la "list comprehension", usamos una declaracion if
para revisar si el numero es divisible por 2.
Si es, entonces el resultado es una tuple de ese numero seguido por la palabra "Even".
De lo contrario, el resultado es una tuple con el numero seguido de la palabra "Odd".

Aqui como se veria el resultado en la consola:

[(1, 'Odd'), (2, 'Even'), (3, 'Odd'), (4, 'Even'), (5, 'Odd')]

## filter()

Otra forma de crear una list comenzando por un iterable excistente es filter().
Aqui un ejemplo de la creacion de una nueva list de solo palabras mas largas que 4 caracteres:

```python
words = ['tree', 'sky', 'mountain', 'river', 'cloud', 'sun']

def is_long_word(word):
    return len(word) > 4

long_words = list(filter(is_long_word, words))
print(long_words) # ['mountain', 'river', 'cloud']
```

La funcion filter() se usa para seleccionar elementos de un iterable que cumpla una condicion especial.
La funcion filter() acepta una funcion y  un iterable para sus argumentos.
En este ejemplo, estamos pasando una funcion "is_long_word" dentro de la funcion filter() para
revisar si la palabra actual cuenta con 4 o mas caracteres.
Todas las palabras que tienen un conteo de caracteres mayor a 4 son agregadas dentro de
la nueva list y asignadas a la variable "long_words".

Aparte de la funcion filter(), hay una cuantas funciones mas que son utiles cuando 
trabajamos con lists.

## map()

Otra funcion para tener en cuenta es la funcion map(), la cual toma un iterable
y aplica una funcion para cada uno de los elementos.
Aqui un ejemplo de el uso de la funcion map() para convertir una list de temperaturas
de Celsius a Fahrenheit:

```python
celsius = [0, 10, 20, 30, 40]

def to_fahrenheit(temp):
    return (temp * 9/5) + 32

fahrenheit = list(map(to_fahrenheit, celsius))
print(fahrenheit) # [32.0, 50.0, 68.0, 86.0, 104.0]
```
Igual que la funcion filter, map acepta una funcion y un iterable como sus argumentos.
La funcion to_fahrenheit toma una temperatura y lo convierte a de Celcius a fahrenheit.

## sum()

La ultima funcion que veremos es la funcion sum().
Esta funcion se usa para obtener la suma de un iterable como una lista de tuple.
Aqui un ejemplo de usar la funcion sum():

```python
numbers = [5, 10, 15, 20]
total = sum(numbers)
print(total) # Result: 50
```
Tambien puedes pasar un argumento opcional "start" que actualiza el valor inicial
para la sumacion.
Aqui un ejemplo actualizado usando el argumento opcional "start" como argumento posicional:

```python
numbers = [5, 10, 15, 20]
total = sum(numbers, 10) # positional argument
print(total) # 60
```
Tambien puedes escoger usar el argumento "start" como palabra clave (keyword) asi:

```python
numbers = [5, 10, 15, 20]
total = sum(numbers, start=10) # keyword argument
print(total) # 60
```
Ambas versiones produciran el mismo resultado, pero el argumento keyword es
un poco mas explicito.

## conclucion:

List comprehension al igual que otras funciones, como map, filter, y sum pueden parecer
un poco confusas al principio.
Pero con sufisiente practica y tiempo, comenzaras a sentirte mas confiado usando
esto en tus programas Python.

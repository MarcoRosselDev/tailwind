# Cuales son algunos metodos comunes para Tuples ?

En esta leccion, aprenderemos sobre algunos metodos comunes que usaremos
trabajando con tuples.

## count()

El primer metodo que aprenderemos sera count().
Este metodo se usa para determinar cuantas veces un item aparece en una tuple.
Aqui un ejemplo de revision de cuantas veces el string "Rust" aparece
in la tuple nombrada "programming_languages":

```python
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust')
programming_languages.count('Rust') # 2
```

Como "Rust" aparece dos veces en la tuple, el metodo count() retorna
el numero 2.
Si el item espesificado en la funcion count() no esta presente en toda la tuple,
entonces retorna el valor de 0.

Si no se pasa un argumento a la funcion count(), python retorna un error
de tipo "TypeError"

## index()

El siguiente metodo que veremos es el metodo index().
Este metodo se usa para encontrar el indice de un item cuando este esta presente
en una tuple.
Aqui un ejemplo, para encontra el indice de el string "Java":

```python
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust')
programming_languages.index('Java') # 1
```

Si el item espesificado no ese encuentra, python correra un "ValueError".

Otra cosa que puedes hacer con el metodo index() es pasarle un comienzo opcional
y un indice stop como argumentos.
Aqui un ejemplo:

```python
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust', 'Python')
programming_languages.index('Python', 3) # 5
```
En este ejemplo, estamos espesificando donde comenzar a buscar el string "Python".
Al pasarle el numero 3 como segundo argumento a la funcion index(), estamos
espesificando que comience en el indice 3.
Como "Python" aparece dos veces en la tuple, la funcion index() retornara
el indice 5 en lugar de el indice 2, por el argumento opcional de start.

Tambien puedes un tercer argumento opcional stop.
Aqui un ejemplo del uso de los parametros start y stop:

```python
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust', 'Python', 'JavaScript', 'Python')
programming_languages.index('Python', 2, 5) # 2
```

Ahora el resultado es el indice 2 por que comenzamos a buscar desde el indice 2,
y buscamos hacia arriba, pero no incluimos el indice 5.

## sorted()

Otro metodo util y comun en tuples es sorted().
En lecciones previas aprendiste sobre el metodo sort() en lists.
Bueno, la funcion sorted() puede usarce en cualquier iterable, incluyendo tuples.

Aqui un ejemplo , creando una nueva lista de numeros usando la funcion sorted():

```python
numbers = (13, 2, 78, 3, 45, 67, 18, 7)
sorted(numbers) # [2, 3, 7, 13, 18, 45, 67, 78]
```

La funcion sorted siempre creara una nueva list de valores ordenados.
Esto lo diferencia de la funcion sort() que ordena los elementos de una list en el
mismo lugar y no retorna una nueva lista.

Si necesitas customizar el ordenamiento para un iterable, puedes usar 
el parametro opcional "reverse" y "kay".
Aqui un ejemplo usando el argumento opcional "key"
para ordenar los items de una tuple por su largo (length):

```python
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust', 'Python')
sorted(programming_languages, key=len)

# Result
# ['C++', 'Rust', 'Java', 'Rust', 'Python', 'Python']
```

Si necesitas crear una lista de valores en reversa,
puedes usar el argumento "reverse" asi:

```python
programming_languages = ('Rust', 'Java', 'Python', 'C++', 'Rust', 'Python')

print(sorted(programming_languages, reverse=True))

# Result
# ['Rust', 'Rust', 'Python', 'Python', 'Java', 'C++']
```

Conclucion:

Tuples son un tipo de dato comun en Python.
Entender como trabajar con el, junto a algunos metodos utiles y funciones,
nos ayudara a escribir codigo mas eficiente.
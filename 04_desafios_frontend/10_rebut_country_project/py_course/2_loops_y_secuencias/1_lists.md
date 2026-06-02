# Que son las List y como trabajan ?

A trabes de las siguiente lecciones aprenderemos sobre listas, tuples, y renges,
que son tres sequencias de tipos basicos usados en python.

El tipo de dato list es una sequencia ordenada de elementos que puede ser
compuesto de strings, numbers, o incluso otras listas.
Las list son mutables y con indice-cero, lo que significa que el primer elemento
de la lista tiene indice zero.

Para acceder a un elemento de la lista, nos podemos referir a el mediante el indice numerico
en la secuencia. (list[0])

Los indices negativos se usan para acceder a elementos comenzando desde el final asta el
inicio de la lista.
Para acceder al ultimo elemento de la list, podemos usar el indice -1 asi (list[-1]).

Otra forma de crear un list es usando el constructor list().
el constructor list() se usa para combertir un iterable en una lista, asi:

```python
developer = 'Jessica'
list(developer) # ['J', 'e', 's', 's', 'i', 'c', 'a']
```

Un iterable es un tipo especial de objeto que puede ser loopeable a trabes
de un elemento a la vez.
Aprenderemos sobre loops mas tarde.

Para saber el numero total de elementos en un list,
podemos usar la funcion len().

Si quieres actualizar el valor de un indice en particular, puedes hacer algo como esto:

```python
programming_languages = ['Python', 'Java', 'C++', 'Rust']
programming_languages[0] = 'JavaScript'
print(programming_languages) # ['JavaScript', 'Java', 'C++', 'Rust']
```

Como list son mutalbes, puedes actualizar cualquier elemento de la lista
tansolo pasando un numero de indice valido.
Si pasas un numero de indice erroneo (tanto negativo como positivo) Que este
fuera del rango de la list, entonces resiviras un IndexError.

Si lo que quieres es eliminar un elemento de la list, puedes usar
la palabra reservada "del", asi:

```python
developer = ['Jane Doe', 23, 'Python Developer']
del developer[1]
print(developer) # ['Jane Doe', 'Python Developer']
```

Algunas veces es bueno revisar si un elemento esta dentro de la lista.
Para hacer eso puedes usar la palabra reservada "in", asi:

```python
programming_languages = ['Python', 'Java', 'C++', 'Rust']

'Rust' in programming_languages # True
'JavaScript' in programming_languages # False
```

Algunas vecez es comun el tener listan dentro de listas.
En estos casos podemos acceder a la list dentro de otra list asi:
list[2][1].

Otra tecnica comun es usar el unpacking values.
Unpacking values de una list es una tecnica usada para asignar
valores de una list a una variable nueva.
Aqui un ejemplo de un unpacking de la list developer en nuevas
variables llamadas: name, age, y job.

```python
developer = ['Alice', 34, 'Rust Developer']
name, age, job = developer

print(name) # 'Alice'
print(age) # 34
print(job) # 'Rust Developer'
```

Si necesitas coleccionar los elementos restantes de un list, puedes
usar el operador asterisco *, asi:

```python
developer = ['Alice', 34, 'Rust Developer']
name, *rest = developer

print(name) # 'Alice'
print(rest) # [34, 'Rust Developer']
```

Si el numero de variables en la izquierda no coinside con los operadores de
asignacion, entonces resiviras un "ValueError".

# Operador slice :

El ultimo concepto que veremos el el operador :.
Parecido a los string, puedes cortar porciones de una list usando el operador :.
asi:
```python
desserts = ['Cake', 'Cookies', 'Ice Cream', 'Pie', 'Brownies']
desserts[1:4] # ['Cookies', 'Ice Cream', 'Pie']
```

Otra cosa que puedes hacer con el operador : es espesificar los pasos de intervalo
que determina cuanto incrementar entre indices.
Digamos que tienes una lista de numero asi:

numbers = [1, 2, 3, 4, 5, 6]

El primer numero par esta en el indice 1, entonces devemos comenzar en ese.
Mientras vamos hacia el final de la list, entonces omitimios el end.
Finalmente, espesificamos 2 para la opcion step para que incremente por 2 en 
lugar de el default 1.

numbers[1::2] # [2, 4, 6]


# Conclucion

Las lists son un tipo de datos util y flexible que usaremos un monton en los
programas python.
En la siguiente leccion, veremos methodos comunes que podemos usar en lists.
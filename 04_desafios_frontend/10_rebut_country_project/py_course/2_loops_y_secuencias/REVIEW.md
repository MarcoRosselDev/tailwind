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

```python
```
```python
```
```python
```
```python
```
```python
```
```python
```
```python
```
# Cuales son algunos de los methodos mas comunes de uso en lists ?

En la leccion anterior, nos introdusimos a el tipo de dato list y aprendimos como
acceder a elementos de la list y como cortarlo (slice).
En esta lecccion, aprenderemos mas sobre listas y sus metodos mas comunes,
como append(), pop(), y sort().

## append()

El primer metodo que veremos es append().
Este se usa para agregar un elemento al final de una list.
Aqui un ejemplo, agregaremos el numero 6 a la lista de numeros:

```python
numbers = [1, 2, 3, 4, 5]
numbers.append(6)
print(numbers) # [1, 2, 3, 4, 5, 6]
```

Si lo que quieres es agregar una lista al final de otra lista,
puedes usar tambien append() asi:

```python
numbers = [1, 2, 3, 4, 5]
even_numbers = [6, 8, 10]

numbers.append(even_numbers)
print(numbers) # [1, 2, 3, 4, 5, [6, 8, 10]]
```

Nota como la lista even_numbers es incluida dentro de la lista numbers.

Pero y si quieres agregar  todos los numeros individuales de la lista even_numbers
al final de la lista numbres, entonces puedes usar el metodo extend().

## extend()

El metodo extend() es similar al metodo append(), pero con extend()
puedes agregar multiples elementos de una lista a la otra.
Aqui un ejemplo, agregaremos los numero 6, 8, y 10 de una lista al final
de la lista numbres.

```python
numbers = [1, 2, 3, 4, 5]
even_numbers = [6, 8, 10]

numbers.extend(even_numbers)
print(numbers) # [1, 2, 3, 4, 5, 6, 8, 10]
```

Como puedes ver, la lista anidada se fue y solo queda una lista de numeros.

## insert()

Para incertar un elemento a un indice espesifico, puedes usar el metodo insert().
Este metodo acepta dos argumentos:
El indice donde lo quieres ingresar y el intem a insertar.

Aqui un ejemplo del metodo insert():

```python
numbers = [1, 2, 3, 4, 5]
numbers.insert(2, 2.5)

print(numbers) # [1, 2, 2.5, 3, 4, 5]
```

## remove()

Si quieres remover un elemento de una lista, puedes usar el metodo remove()
que toma un valor como argumento de el elemento a remover:

```python
numbers = [10, 20, 30, 40, 50, 50]
numbers.remove(50)

print(numbers) # [10, 20, 30, 40, 50]
```
importante a notar que este metodo eliminara la primera concurrencia que coinsida
con el argumento dado.

## pop()

Para eliminar un elemento de un indice espesifico, puedes usar pop()

```python
numbers = [1, 2, 3, 4, 5]
numbers.pop(1) # The number 2 is returned
```

si no espesificas un elemento en el metodo pop, entonces el ultimo elemento se elimina.

## clear()

Si necesitas limpiar la lista, entonces puedes usar clear(), asi:

```python
numbers = [1, 2, 3, 4, 5]
numbers.clear()

print(numbers) # []
```

## sort()

Este metodo se usa para ordenar los elementos.
Aqui un ejemplo al ordenar una linsta de numeros desordenada:

```python
numbers = [19, 2, 35, 1, 67, 41]
numbers.sort()

print(numbers) # [1, 2, 19, 35, 41, 67]
```

## sorted()

Al contrario de el metodo sort, exciste el metodo sorted, que
al igual que sort ordena la lista, pero no modifica la lista,
sino que retorna una lista ordenada y deja la lista tal cual estaba.

## reverse()

Este metodo, resive una lista de elementos y los invierte en el mismo lugar.

```python
numbers = [6, 5, 4, 3, 2, 1]
numbers.reverse()

print(numbers) # [1, 2, 3, 4, 5, 6]
```

## index()

Este metodo se usa para encontra el primer indice donde el elemento
es encontrado. Aqui un ejemplo que encuentra "Java" en una lista.

```python
programming_languages = ['Rust', 'Java', 'Python', 'C++']
programming_languages.index('Java') # 1
```

Si el elemento no puede ser encontrado, Python lanza un "ValueError".

## conclucion

Hay unos cuantos metodos mas para las listas en python,
pero estos metodos de lista incial es un buen punto de partida.
# que son las tuples y como trabajan ?

Una tuple en python es un tipo de dato usado para crear una secuencia
de valores ordenados.
Tuples pueden contener un mix de tipops de datos, asi:

```python
developer = ("Alice", 34, "Rust Developer")
```

Las tuples son similares a las lists, pero mientras las listas son tipos
de datos mutables, tuples son inmutables.
Esto significa que los elementos en una tupla no pueden ser cambiadas
una vez son creadas.

Si tu tratas de actualizar uno de los items de una tuple, vaz a obtener
un "TypeError".

Para exceder a los elementos de una tuple, es igual que con lists.
Si tratas de pasar un numero de indice que excede al length de la tuple,
vas a recivir un "IndexError".

Otra forma de crear una tuple es usando el contructor tuple():

```python
developer = 'Jessica'
tuple(developer) # ('J', 'e', 's', 's', 'i', 'c', 'a')
```

Para el constructor tuple(), puedes pasar diferentes iterables como
strings, lists e incluso otras tuples.

Para revisar si un item exciste en una tuple, puedes usar la palabra
reservada "in".

Puedes desempacar items de una tuple, asi:

```python
developer = ('Alice', 34, 'Rust Developer')
name, age, job = developer

print(name) # 'Alice'
print(age) # 34
print(job) # 'Rust Developer'
```

Si necesitas recolectar los elementos sobrantes de una tuple,
puedes usar el "*" operador asterisco, asi:

```python
developer = ('Alice', 34, 'Rust Developer')
name, *rest = developer

print(name) # 'Alice'
print(rest) # [34, 'Rust Developer']
```

Igual que las lists, puedes cortar (slice) una porcion de la tuple.
Aqui un ejemplo :

```python
desserts = ('cake', 'pie', 'cookies', 'ice cream')
desserts[1:3] # ('pie', 'cookies')
```

Si necesitas remover un item de una tuple, eso es imposible.
Entonces eso produciria un error, por que son inmutables po.

Entonces, si tu necesitas una coleccion de elementos dinamica, donde
quieras agregar, remover o editar elementos, entonces deverias utilizar una list.
Si sabes que estas trabajando con una lista de elementos inmutables,
entonces deberias utlizar tuples.

En las siguentes lecciones, veremos algunos metodos comunes para
trabajar con tuples.
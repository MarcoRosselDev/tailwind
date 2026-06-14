# que son los Sets, y como trabajarlos ?

Los Sets son uno de las estructura de dato built-in de Python.
Una de las caracteristicas principales es que no almacenan valores duplicados.
Si tratas de agregar un valor duplicado a un set, solo uno de ellos sera
guardado.

Los sets son mutables y desordenados, lo que significa que sus elementos no
son guardados en un orden espesifico, por lo que no puedes usar indices
o claves para acceder a ellos.
Solo pueden contener valores de tipos de dato inmutables como numbers,
strings y tuples.
Y soportan operaciones matematicas, incluyendo uniones, intersecciones, 
diferencias, y diferencias simetricas.

## crear un set

para definir un set, solo necesitas escribir los elementos enserrados en 
corchetes en cursiva o curtl braces y separarlos con comas.
Este es un ejemplo de un set con numeros:

```python
my_set = {1, 2, 3, 4, 5}
```

Una particularidad de trabajar con sets es que, si necesitas definir un
set vacio, deberas usar el constructor set().
Si solo lo escribes con comillas cursivas, como {}, Python automaticamente
creara un dictionary.

```python
set() # Set
{}    # Dictionary
```

## agregar

Puedes agregar un elemento a un set con el metodo .add(),
y pasarle el elemento nuevo:

```python
my_set.add(6)
```
en nuestro ejemplo, el nuevo set sera :

```python
{1, 2, 3, 4, 5, 6}
```

Si tratas de agregar un elemento que actualmente esta en el set,
solo uno se mantendra.
En este caso, ya contamos con el numero 5 en el set.
Entonces el set no cambiara.

## eliminar un elemento

Para remover un elemento de el set, tienes dos opciones.
Puedes usar el metodo .remove() o el metodo .discard(), y pasarle el elemento
que quieres remover como argumento.

El metodo .remove() correra un KeyError si el elemento no se encuentra,
mientras que el metodo .discard() no lo hara:

## vaciar el set

El metodo .clear() remueve todos los elementos de un set:

## operaciones matematicas

Los sets de Python tambien tiene metodos poderosos que ejecutan
operaciones comunes de matematicas.

### set y subset

Los metodos .issubest() y .issuperset() revisan si un set es un
subset o superset de otro set, respectivamente.

Aqui, estamos revisando si your_set es un subset de my_set, que es False
porque no todos los elementos de your_set estan en my_set.

Tambien revisamos si my_set es un superset de your_set.
Esto es False tambien, porque my_set no tiene todos los elementos de your_set:

```python
my_set = {1, 2, 3, 4, 5}
your_set = {2, 3, 4, 6}

print(your_set.issubset(my_set)) # False
print(my_set.issuperset(your_set)) # False
```

### disjoint

El metodo .isdisjoint() revisa si dos sets son disjoint, lo que significa
que ellos no tienen ningun elemento en comun.
En este caso, es False porque my_set y your_set tienen elementos en comun.

### union

El operador union | retorna un nuevo set con todos los elementos de ambos sets:

```python
my_set | your_set # {1, 2, 3, 4, 5, 6}
```

### interseccion

El operador interseccion & retorna un nuevo set con solo los elementos que los sets
tienen en comun:
```python
my_set & your_set # {2, 3, 4}
```

### diferencia '-'

El operador diferencia retorna un nuevo set con los elementos de el primer set
que no estan presentes en el segundo set.
En este ejemplo, el numero 1 y 5 estan en my_set pero no en your_set:

```python
my_set - your_set # {1, 5}
```

### simetria '^' (symmetric difference)

El operador de diferencia simetrica '^' retorna un set con los elementos
que estan en el primero y segundo set, pero no en ambos.
En este caso , 1 y 5 estan en my_set pero no en your_set, entonces
esto estan incluidos.
Y el numero 6 esta en your_set pero no en my_set, entonces tambien esta incluido:

```python
my_set ^ your_set # {1, 5, 6}
```

Cada uno de estos operadores tambien tiene su correspondiente asignador de operacion
si agregas el operador de asignacion al lado de el.
El operador asignara automaticamente el set resultante al primer set 
en la expresion:

```python
|= &= -= ^=
```

Por ejemplo, el operador '-=' encuentra la diferencia entre sets y actualiza
el primer set con el resultado:

```python
my_set -= your_set
```

Despues de esto, my_set se actualizara a {1, 5}

Puedes revisar si un elemento existe en un set o no con el operador 'in'.
Aqui, estamos revisando si 5 esta en my_set.
El resultado sera un booleano True o False:

```python
print(5 in my_set)
```

Y estas son los fundamentos de los sets.
Ellos son vastante utiles cuando no necesitas guardar el valor
en algun orden espesifico, y cuando solo necesitas guardar valores unicos.

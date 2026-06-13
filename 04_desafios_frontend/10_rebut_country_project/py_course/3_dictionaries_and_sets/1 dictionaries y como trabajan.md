# Que son los dictionaries, y como funcionan ?

En Python, los dictionaries son estructuras de datos built-in
que guardan colecciones de pares clave valor.
Estos trabajan muy similar a los diccionarios reales, donde buscas
mediante una palabra para encontrar su significado corespondiente.

Con los dictionaries Python, usas una clave "key" para encontrar
su valor "value" correspondiente.
Deberas usar los dictionaries cuando necesites asociar valores con claves.
Esto es util cuando necesitas encontrar valores rapido basado en una clave,
y cuando necesites representar datos estructurados.

Esta es la sintaxis general de un dictionary en Python:

dictionary = {
    key1: value1,
    key2: value2
}

Primero, encontramos la variable que hospeda el dictionary.
No necesitas asignar el dictionary a una variable, pero
es muy comun hacerlo para mantenerlo en la memoria y usarlo
despues en el codigo.

Entonces se sigue por parentesis curvas (curly brackets = "{}").
Y dentro de los parentesis curvos, pares de key-value o
 clave-valor.

Cada clave o key esta asociada con un value o valor, entonces
puedes usar la clave para acceder a ese valor.
Despues de cada valor, excepto el ultimo, va una coma que
separa los diferentes pares clave-valor.
Las claves deben ser unicas, y deben ser un tipo de dato inmutable.
Como sea, el valor puede ser repetido, y pueden ser de cualquier
tipo de dato.

Aqui un ejemplo de un dictionary que almacena informacion sobre
una pizza desivida por Margherita:

```python
pizza = {
    'name': 'Margherita Pizza',
    'price': 8.9,
    'calories_per_slice': 250,
    'toppings': ['mozzarella', 'basil']
}
```

El dictionary se asigna a la variable pizza.
Este tiene 4 pares de clave-valor.

Otra alternativa puede ser usando el constructor dict(),
el cual construye el dictionary de una secuencia de
pares clave-valor.

Este seria la sintaxis equivalente para el ejemplo de nuesro
dictionary pizza.
Pasamos una list de tuples como argumentos al constructor dict().
Estas tuples contienen la clave como el primer elemento y el
valor como el segundo elemento.

```python
pizza = dict([('name', 'Margherita Pizza'), ('price', 8.9), ('calories_per_slice', 250), ('toppings', ['mozzarella', 'basil'])])
```

Para ecceder al valor de un par clave-valor, puedes usar la 
sintaxis de notacion de corchetes (bracket notation).
Es el nombre de la variable que hospeda al dictionary,
seguido por corchetes cuadrados (square brackets), y
la clave a la que quieres acceder encerrado en comillas dentro
de los corchetes cuadrados.

dictionary[clave]

En nuestro ejemplo de pizza, si quieres acceder al valor name,
deberas escribir el nombre de la variable, pizza,
seguido de corchetes cuadrados, y la calve name, en comillas:

pizza['name']

Esto debera evaluar esto:

'Margherita Pizza'

Para actualizar el valor, solo nesecitas agregar el operador de
asignacion, seguido de un nuevo valor.

Si la clave no esciste en el dictionary, un nuevo par de
clave-valor se creara.
En versiones recientes de Python, los dictionary presentan
el orden de insercion.
Esto es util cuando necesitas iterar por el dictionary:

pizza['name'] = 'Margherita'

Ahora el valor de la calve name es Margherita:

print(pizza['name']) # 'Margherita'

Los dictionary tambien tienen metodos utiles para ejecutar
operaciones comunes.

## .get()

El metodo get recupera el valor asiciado a una clave.
Es similar a la notacion de corchetes que usamos recien,
pero su ventaja es que puedes actualizarla a un valor por defecto,
entonces no obtienes un error cuando no existe la clave:

dictionary.get(key, default)

En este ejemplo, si la clave 'toppings' no existe,
deberia retornar una list vacia, el cual es el valor por defecto
que estamos pasando aqui como segundo argumento.
Pero si 'topping' existe, entonces retornara el valor:

```python
pizza.get('toppings', []) # ['mozzarella', 'basil']
```

Los metodos .keys() y .values() retornan un objeto de vista
con todas las claves y valores en el dictionary:

```python
pizza.keys()
# dict_keys(['name', 'price', 'calories_per_slice'])

pizza.values()
# dict_values(['Margherita Pizza', 8.9, 250])
```
Un objeto de vista es solo una forma de ver el contenido de
un dictionary sin crear una copia separada de la informacion.

El metodo .items() retorna un objeto con todos los pares
clave-valor.

```python
pizza.items()
# dict_items([('name', 'Margherita Pizza'), ('price', 8.9), ('calories_per_slice', 250)])
```

El metodo .clear() remueve todos los pares clave-valor.

pizza.clear()

El metodo .pop() remueve el par clave-valor con la clave
espesificada como el primer argumento y retorna su valor.
Si la calve no existe, este retorna el valor por defecto
que espesificase como el segundo argumento.
Si la cave no existe y no pasaste un valor por defecto,
se correra un 'KeyError'.

En Python 3.7 y versiones mas recientes, 
el metodo .popitem() remueve el ultimo item insertado:

pizza.popitem()

Y finalmente, el metodo .update() que actualiza el
par clave-valor con la clave-valor de otro dictionary.
Si estos tienen claves en comun, sus valores seran 
sobreescritos.

En este ejemplo, estamos actualizando el dictionary pizza.
La clave price existe en los dos,
entonces su valor sera reemplasado con 15.

Pero total_item es nuevo, entonces este sera agregado
al dictionary pizza como un nuevo par clave-valor:

```python
pizza.update({ 'price': 15, 'total_time': 25 })
```
Este es el nuevo dictionary con el price actualizado y 
el nuevo total_time.
Notece como el precio es ahora 15 y total_time es una
nueva clave-valor:

```pyton
{
    'name': 'Margherita Pizza', 
    'price': 15, 
    'calories_per_slice': 250, 
    'toppings': ['mozzarella', 'basil'], 
    'total_time': 25
}
```

Estas son algunos de los metodos de dictionary mas comunes,
pero hay muchos mas.
Escoger el correcto puedes ser util para ejecutar operaciones
complejas con eficiencia.

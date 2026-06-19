# Dictioaries

Dictionaries:
    Los dictionaries son estructuras de dato built-in que almacenan
    colecciones de pares clave-valor.
    Las claves necesitan ser tipos de dato inmutables.
    Esta es la sintaxis general de un dictionary en Python:

```python
dictionary = {
    key1: value1,
    key2: value2
}
```

dict() Constructor:
    El constructor dict es una forma alternativa de construir dictionary.
    Le pasas una list de tuples como argumento.
    Estas tuples contienen la clave como primer elemento y 
    el valor es el segundo elemento.

    Ejemplo:
```python
pizza = dict([('name', 'Margherita Pizza'), ('price', 8.9), ('calories_per_slice', 250), ('toppings', ['mozzarella', 'basil'])])
```

## Metodos comunes de dictionary:

get:
    El metodo get recupera el valor asociado con la clave.
    Es similar a la notacion de corchete,
    pero este te deja actualizar el valor, previniendo errores
    si la clave no existe.
    ejemplo:
    dictionary.get(key, default)

key y value:
    Los metodos key y value retornan un objeto de vista con 
    todas las claves y valores en el dictionary, respectivamente.
    Un objeto de vista es una forma de ver el contenido de un
    dictionary sin crear una copia separada de dato en memoria.

    Codigo de Ejemplo:

```python
pizza = {
    'name': 'Margherita Pizza',
    'price': 8.9,
    'calories_per_slice': 250
}

pizza.keys()
# dict_keys(['name', 'price', 'calories_per_slice'])

pizza.values()
# dict_values(['Margherita Pizza', 8.9, 250])
```

items:
    El metodo items retorna un objeto de vista con todos
    los pares clave-valor en el dictionary, incluyendo ambos,
    la clave y el valor.

    Codigo de ejemplo:

    ```python
    pizza.items()
    dict_items([('name', 'Margherita Pizza'), ('price', 8.9), ('calories_per_slice', 250)])
    clear() Method: The clear() method removes all the.
    ```

clear:
    El metodo clear remueve todos los pares clave-valor de el dictionary.

    ```python
    pizza.clear()
    ```

pop:
    El metodo pop remueve el par clave-valor de la calve espesificada como el
    primer argumento y retorna el valor.
    Si la clave no existe, retorna el valor por defecto espesificado
    en el segundo argumento.
    Si la clave no existe y el valor por defecto no se espesifico,
    correra un 'keyError'.

popitem:
    El metodo popitem en python 3.7 y posteriores,
    remueve el ultimo item insertado.

update:
    El metodo update actualiza el par clave-valor con el par clave-valor
    de otro dictionary.
    Si tienen claves en comun, sus valores son sobreescritos.
    Nuevas claves seran añadidas al dictionary como nuevos
    pares clave-valor.


# Iterando por un dictionary

Iteracion sobre los valores:
    Si necesitas iterar por los valores de un dictionary,
    puedes escribir un bucle 'for' con 'values()' para
    obtener todos los valores de un dictionary.

```py
products = {
    'Laptop': 990,
    'Smartphone': 600,
    'Tablet': 250,
    'Headphones': 70,
}

for price in products.values():
    print(price)
```

output

```
990
600
250
70
```

#

Iteraciones por las claves:
    Si necesitas iteras por las claves puedes escribir
    dictionary.keys() o solo el nombre del dictionary, en este caso 'products':

```py
for product in products.keys():
    print(product)

# Or

for product in products:
    print(product)
```
Output
```py
Laptop
Smartphone
Tablet
Headphones
```
#
Iteracion por pares clave-valor:
    Si necesitas iterar por las claves y sus valores simultaneamente,
    puedes iterar por 'dictionary.items()'.
    Obtendras tuples individuales con la clave y su valor.

```py
for product in products.items():
    print(product)
```
output
```
('Laptop', 990)
('Smartphone', 600)
('Tablet', 250)
('Headphones', 70)
```

Para guardar la clave y valor en variables de iteracion por separado,
necesitas separarlas con una coma.
El primer valor guardado es la clave, y el segundo el valor.

```py
for product, price in products.items():
    print(product, price)
```
#
enumerate:
    La funcion 'enumerate()' se usa, si necesitas iterar por un
    dictionary mientras mantenemos un seguimiento de un conteo,
    puedes llamar la funcion enumerate.
    La funcion retorna un objet enumerate, el cual asigna un entero
    a cada item, como un contador.
    Puedes comenzar contando por cualquier numero, por defecto,
    este comienza por 0.

    Asignar el indice e item por iteraciones separadas es una forma
    comun de usar la funcion enumerate. Por ejemplo,
    con product.items, puedes obtener la entrada clave-valor en adicion
    al indice:

```py
for index, product in enumerate(products.items()):
    print(index, product)
```
output
```
0 ('Laptop', 990)
1 ('Smartphone', 600)
2 ('Tablet', 250)
3 ('Headphones', 70)
```

    Para customizar el valor inicial de el count, puedes pasar un
    segundo argumento a la funcion enumerate.
    Por ejemplo, aqui tenemos comenzando por el count desde 1.

    ```py
    for index, product in enumerate(products.items(), 1):
        print(index, product)
    ```
    Output:
    ```
    1 ('Laptop', 990)
    2 ('Smartphone', 600)
    3 ('Tablet', 250)
    4 ('Headphones', 70)
    ```

# Sets

Sets:
    Los Sets son estructuras de dato built-in en Python que no
    puede guardar valores duplicados.
    Los Sets son mutables y desordenados, lo que significa que 
    sus elementos no son guardados en un orden espesifico,
    por lo que no puedes usar indices o claves para acceder a ellos.
    Tambien los sets pueden solo contener valores de datos inmutables,
    como numbers,strings, y tuples.

Definir un set:
    Para definir un set, necesitas escribir sus elementos dentro
    de llaves curvas 'curly brackets' {} y separarlos con una coma

    my_set = {1,2,3,4,5}

Definir un set vacio:
    Si necesitas un set vacio, deberas usar la funcion set().
    Al escribir solo los 'curly brackets {}' obtendras un dictionary.

    set() = Set
    {} = Dictionary

# Metodos comunes de Sets

add:
    Puedes agregar un elemento a un set con el metodo add, 
    pasando el nuevo elemento como argumento.

remove and discard:
    Para remover un elemento de un set, puedes usar los metodos remove o discard,
    pasando el elemento a remover como argumento.
    El metodo remove correra un 'KeyError' si el elemento no se encuentra
    mientras que discard no.

clear:
    El metodo clear remueve todos los elementos de un set.

# Operaciones Set Matematicas

issubset y issuperset:
    Los metodos issubset y issuperset revisan si un set es
    un subset o superset de otro set, respectivamente.

    ```py
    a = {1,2,3,4,5}
    b= {2,3,4,5}

    a.issubset(b) # True
    b.issuperset(a) # True
    ```

    Significados:
    - Subset significa que los elementos del set seleccionado 
    estan todos en el set entregado como argumento.
    - superset significa que todos los elementos de el set pasado
    como argumento se encuentran en el set seleccionado.

isdisjoint:
    El metodo isdisjoint revisa si dos sets son disjoint, 
    si estos no tienen elementos en comun.

    ```py
    my_set = {1, 2, 3}
    your_set = {4, 5, 6}

    print(my_set.isdisjoint(your_set)) # True
    ```

Operador union (|) :
    El operador union '|' retorna un nuevo set con todos los
    elementos de ambos sets.

    ```py
    my_set = {1, 2, 3}
    your_set = {4, 5, 6}

    my_set | your_set # {1, 2, 3, 4, 5, 6}
    ```

Operador interseccion (&):
    El operador interseccion '&' retorna un nuevo set
    solo con los elementos que ambos sets tengan en comun.

    ```py
    my_set = {1, 2, 3, 4, 5}
    your_set = {2, 3, 4, 6}

    my_set & your_set # {2, 3, 4}
    ```

Operador diferencia (-):
    El operador diferencia '-' retorna un nuevo set con
    los elementos del primer set que no estan en el segundo set

    ```py
    my_set = {1, 2, 3, 4, 5}
    your_set = {2, 3, 4, 6}

    my_set - your_set # {1, 5}
    ```

Operador de diferencia simetrica (^):
    El operador de diferencia simetrica '^' retorna un nuevo set
    con los elementos que estan en o en el primer set o en el segundo
    pero no en ambos.

    ```py
    my_set = {1, 2, 3, 4, 5}
    your_set = {2, 3, 4, 6}

    my_set ^ your_set # {1, 5, 6}
    ```

Operador in:
    Puedes revisar si un elemento esta en un set o no
    con el operador 'in'.

    '5 in my_set'  ---> True

# Libreria Estandar Python
    'Python Standard Library' es una libreria que nos da
    codigo pre-escrito y reusable, como funciones, clases y estructuras de dato,
    que puedes reusar en tu proyecto.
    Python tiene un extensa libreria standart con modulos built-in
    que implementan soluciones estandarisadas para muchos problemas
    y tareas.
    Algunos ejemplos de modulos buit-in populares son 'math', 'random', 're'
    (abreviacion de regular expresions), y 'datetime'.

# Import
    Declaracion de importacion:
        Para acceder a elementos definidos en modulos built-in,
        usaras una declaracion de importacion.
        La declaracion de importacion 'import' es generalmente escrita en la parte
        superior de tu archivo.
        import trabaja igual para funciones, clases, constantes, variable y otros
        elementos definidos en el modulo.

    Estandar de importacion basico:
        Puedes usar la clave reservada 'import' seguido de el nombre del modulo: 

        ```py
        import module_name
        ```

        Entonces, si necesitas llamar a una funcion de ese modulo, deberas usar
        la notacion de punto, con el nombre de el modulo seguido de el nombre de la fucion.

        ```py
        module_name.funcion_name()
        ```

        Por ejemplo, escribiras lo siguiente en tu codigo para importar el modulo math
        y obtener la raiz cuadrada de 36:

        ```py
        import math
        math.sqrt(36)
        ```

    Importar con un nombre diferente:
        Si necesitas importar un modulo con un nombre diferente (tambien conosido como 'alias'),
        puedes usar 'as' seguido por el alias al final de la declaracion de importacion.
        Esto es usado a menudo para modulos con nombres largos o para evitar
        confilictos de nombre.

        ```py
        import module_name as alias
        ```

        Por ejemplo, para referirnos al module 'math' como 'm' en tu codigo,
        puedes usar el alias asi:

        ```py
        import math as m
        ```
        Entonces, puedes acceder al elemento ded el modulo usando el alias:

        ```py
        m.sqrt(36)
        ```

    Importar elementos espesificos:
        si no necesitas todo de un modulo, puedes importar un elemento espesifico
        usando 'from'.
        En este caso, la declaracion import comienza con 'from', seguido por el nombre 
        de el modulo, luego la palabra clave 'import', y finalmente el nombre
        de el elemento que quieres importar.

        ```py
        from module_name import name1, name2

        name1()
        name2()
        ```
        Esto es util, pero puede resultar en un conflicto de nombres si ya cuentas 
        con una funcion o variable con el mismo nombre.
        Manten eso en mente cuando escojas cual tipo de importacion usaras.

        Si necesitas asignar un alias a esos nombres, puedes hacerlo tambien,
        usando la palabra reservada 'as' seguido por el alias.

        ```py
        from module_name import name1 as alias1, name2 as alias2
        ```

    Importar con el asterisco (*):
        El asterisco le dice a python que importaras todo en ese modulo,
        pero vas a importar todo por lo que no necesitas usar el nombre de el prefijo

        Por ejemplo, si importas el modulo math con *, no necesitaras llamar a la funcion
        usando math y la notacion de punto.

        ```py
        from math import *

        sqrt(36)
        ```

        Como sea, esto es generalmente desaconsejado porque puede dejar espacio a una colicion
        de nombres y hacerlo dificil de saber de donde biene el nombre.

# if __name__ == '__main__'

__name__:
    La variable __name__ es una variable especial buit-in de python.
    Cuando un archivo Python se ejecuta directamente,
    Python actualiza esta variable al string '__main__'.
    Pero si el archivo se importa como un module en otoro stript Python,
    el valor de la variable __name__ se actualiza a el nombre de el module.

    Por esto es que veras seguido esta condicion en scripts Python.
    Este contiene el codigo que solo correras si el script es el programa principal.

    ```py
    if __name__ == '__main__':
        # Code
    ```
    
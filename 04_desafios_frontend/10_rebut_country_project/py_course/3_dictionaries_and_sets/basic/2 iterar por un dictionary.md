# Tecnicas comunes para iterar a traves de un Dictionary ?

Puedes iterar a traves de un dictionary si necesitas acceder y procesar
sus pares clave-valor.
Esto es util para actualizar sus valores o aplicar alguna logica a ellos.

Veamos algunas tecnicas que puedes usar.

Digamos que tienes nu dictionary 'products' que asocia
cada producto con su precio:

```python
products = {
    'Laptop': 990,
    'Smartphone': 600,
    'Tablet': 250,
    'Headphones': 70,
}
```

Si vamos a ofreces un descuento del 20% a todos los productos,
podemos iterar a traves de todos los pares clave-valor y modificar el precio.

El metodo  .values(), .keys y .items estan asociados a esta tecnica.
Los cubrimos rapidamente el lecciones pasadas.

Estos retornan un objeto de vista con los valores, claves y pares clave-valor del
dictionary.
Puedes usar este objeto de vista en un bucle for para iterar por los elementos.

Por ejemplo, puedes iterar por todos los valores del dictionary asi.

Escribes el bucle for, la variable es 'price' es este caso,
'products.values()' para obtener todos los valores de el dictionary products,
y el el cuerpo de el bucle, puedes aplicar cualquier logica de el valor.
En este c aso, estamos imprimiendolo en la consola.

```python
for price in products.values():
    print(price)
```

Esto funciona exactamente igual para .keys() si necesitas iterar a traves
de las claves del dictionary.
Solo necesitas iterar a traves de products.keys() o products directamente,
y asignar un nombre descriptivo para la variable iterada.

```python
for product in products.keys():
    print(product)

# Or

for product in products:
    print(product)
```

Este es el output. Cada clave es impresa  en la consola, una a la ves:

Laptop
Smartphone
Tablet
Headphones

Y esto funciona exactamente igual para los pares clave-valor si necesitas iterar
a traves de las claves y sus respectivos valores simiultaneamente.
Solo necesitas iterar por 'products.items()':

```python
for product in products.items():
    print(product)
```

Este es el output:

('Laptop', 990)
('Smartphone', 600)
('Tablet', 250)
('Headphones', 70)

Si lo que quieres es guardar la clave y el valor en variables de bucles por separado,
solo necesitas definirlos por separado con una coma.
Entonces, puedes usarlos en el cuerpo de el bucle.

Aqui, estamos definiendo 'product' como variable de bucle y 'price' como variable de bucle.
Cada uno debera hospedar su valor correspondiente.
Es importante definirlos en orden - la clave primero y luego el valor:

```python
for product, pricec in products.items():
    print(product, price)
```

Este es el output.
Estamo imprimiendolos lado a lado, pero puedes usarlos como necesites en tu codigo.

Laptop 990
Smartphone 600
Tablet 250
Headphones 70

Ahora que sabemos mas hacerca de esto, podemos volver atras, a nuestro ejemplo inicial.
Si necesitamos ofrecer un descuento del 20%, podemos multiplicar cada 'price' por 0.8
y reasignarlo al valor de esa clave.

Podriamos tambien redondear el resultado hacia abajo si queremos trabajar
con enteros:

```python
products = {
    'Laptop': 990,
    'Smartphone': 600,
    'Tablet': 250,
    'Headphones': 70,
}

for product, price in products.items():
    products[product] = round(price * 0.8)

print(products)

# output de products :
# {
#    'Laptop': 792, 
#    'Smartphone': 480, 
#    'Tablet': 200, 
#    'Headphones': 56
# }
```

Y finalmente, si necesitas iterar a trave de los pares clave-valor
y mantener un seguimiento del conteo, podriamos llamar a la funcion enumerate().
Este contador basicamente funciona como un ordenador 'sort' de los indices o conteos
para aque elemento en la interacion.

La funcion restorna un objeto enumerado, que asigna un entero a cada
par clave-valor, como un contador.
Puedes comensar el contador con cualquier numero, pero por defecto, 
comienza desde 0.

Aqui, estamos iterando por las claves del dictionary 'products':

```python
for product in enumerate(products):
    print(product)
```

Pero la funcion enumerate() tambien asinga un entero a cada clave,
entonces obtenemos tuples con el entero y la clave.
Aqui el output:
```python
(0, 'Laptop')
(1, 'Smartphone')
(2, 'Tablet')
(3, 'Headphones')
```

Si lo necesitas, puedes asignar estos valores a iteraciones por separado.
Aqui, tenemos dos variables de iteracion (index y product).
Esto es lo que veras con mas frecuencia y usaras en tu trabajo con enumerate():

```python
for index, product in enumerate(products):
    print(index, product)
```

Si necesitas  iterar por los valores, puedes reemplasar products por
products.values():

```python
for price in enumerate(products.values()):
    print(price)
```

El output tendra el indice y el precio de cada tuple:

```python
(0, 990)
(1, 600)
(2, 250)
(3, 70)
```

Puedes asignarlos a variables de iteraciones separadas tambien:

```python
for index, price in enumerate(products.values()):
    print(index, price)
```

Este es el output.
Puedes usarlos como necesites en tu codigo:

```python
0 990
1 600
2 250
3 70
```

y con products.items(), puedes tener las entradas pares de clave-valor
en agregado a el indice o conteo:

```python
for index, product in enumerate(products.items()):
    print(index, product)
```
En este ejemplo, obtenemos el indice seguido por una tuple que continene
la clave y el valor del correspondiente par clave-valor:

```python
0 ('Laptop', 990)
1 ('Smartphone', 600)
2 ('Tablet', 250)
3 ('Headphones', 70)
```
Para personalizar el valor inicial del conteo, puedes pasar
un segundo argumento a la funcion enumerate().
Por ejemplo, aqui estamo comenzando en conteo en 1:

```python
for index, product in enumerate(products.items(), 1):
    print(index, product)
```
Puedes ver que cambio el output.
Ahora el primer entero es 1 en lugar de 0:

```python
1 ('Laptop', 990)
2 ('Smartphone', 600)
3 ('Tablet', 250)
4 ('Headphones', 70)
```
Esto funciona con cualquier variacion que hemos visto asta ahora.
Solo necesitas pasar el valor inicial como el segundo argumento.

Hay muchas tecnicas para iterar por un dictionary.
Estas son las formas mas comunes, y deveras escojer la mejor para tu proyecto.
# Que son las funciones Lambda y como trabajan ?

A traves de las lecciones previas, has solido definir funciones con la 
palabra clave "def" asi:
```python
def square(num):
    return num ** 2

print(square(4)) # 16
```
Pero cuando comenzamos a trabajar con funciones de alto nivel como map() y filter(),
puedes usar una funcion anonima en linea.
Aqui es donde la funciones lambda entran en juego.

```python
lambda num: num ** 2
```
Como mencionamos anteriormente, las funciones lambda son anonimas, entonces
estas funciones no tienen nombre asociado como "square".
Las funciones lambda son buenas cuando necesitas usarlas en funciones de orden superior asi:

```python
numbers = [1, 2, 3, 4, 5]

even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # [2, 4]
```
En este ejemplo, tenemos una lista de numeros y creamos una nueva list de numero pares.
Entonces le pasamos una funcion lambda como uno de los argumentos del a funcion filter
para tener una nueva list contenedora de los numero 2 y 4.

Cuando trabajamos con funciones lambda es importante tener cuidado de las mejores practicas.
Por ejemplo, no es una buena practica asignar una funcion lambda a variables asi:

```python
numbers = [1, 2, 3, 4, 5]

square = lambda x: x ** 2
squared_numbers = list(map(square, numbers))
print(squared_numbers) # [1, 4, 9, 16, 25]
```
Esto desabilita el proposito de usar funciones anonimas.
En este aso , deverias usar una funcion regular, asi:
```python
numbers = [1, 2, 3, 4, 5]

def square(num):
    return num ** 2

squared_numbers = list(map(square, numbers))
print(squared_numbers) # [1, 4, 9, 16, 25]
```
Tambien deverias evitar crear funciones lambda que son dificiles de leer
o inecesariamente complejas, como esta:

```python
result = (lambda x: (x**2 + 2*x - 1) if x > 0 else (x**3 - x + 4))(3)
print(result)  # 14
```
Mientras que esta funcion corre bien y produce el resultado correcto de 14,
no es facil de leer o revisarla.
En este caso, seria mejor crear una funcion aparte con un if/else, y entonces
llamar a esa funcion:

```python
def calculate_expression(x):
    if x > 0:
        return x**2 + 2*x - 1
    else:
        return x**3 - x + 4

print(calculate_expression(3))  # 14
```
Ambas funciones regulares y lambda tienen sus casos de uso en python.
Si estas manejando una sola linea de expresion, entonces deberias considerar usar
una funcion lambda.
De lo contrario usa una funcion regular.

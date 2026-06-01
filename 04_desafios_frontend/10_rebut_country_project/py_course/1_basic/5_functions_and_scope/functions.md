# 1 Como funcionan las funciones en Python ?

Las funciones son piesas de codigo reutilizables que corren cuando las llamas.
Muchos lenguajes de programacion bienen con funciones built-in que hacen mas facil
el comenzar.
Python no es la excepcion, y asta ahora hemos cuvierto algunas built-in functions como
print() en lecciones previas.

Otra function built-in util es input(), el cual nos deja preguntar al usuario por
un input(ingreso de informacion uo aporte):

```python
name = input("Cual es tu nombre?")
print(f"Hola {name}, buen dia!")
```

Por otra parte, int() convierte a numeros, boleanos, y strings numericos en enteros:

```python
print(int(3.14)) # 3
print(int('42')) # 42
print(int(True)) # 1
print(int(False)) # 0
```

Tu puedes tambien escribir tu propia funcion customizada.
Para hacer eso, debes usar la palabra reservada def, seguido de el nombre de la funcion,
un par de parentecis, y un doble punto : . Entonces en una nueva linea,
escribes el codigo que quieres que corra.
El codigo de la funcion corre se le llama el cuerpo de la funcion.

Aqui un ejemplo de una funcion personalizada llamada hello,
esta imprime el string Hello world en la terminal

```python
def hello():
  print("Hello world")
```

Para correr la funcion, necesitas llamarlo con su nombre seguido de los parentecis:
```python
hello()
```

Notece la indentacion antes del print().
Como recordaras de lecciones anteriores, python utiliza la indentacion para determinar el grupo de declaraciones que van juntas.
Este grupo de declaraciones se le llama bloque de codigo.

Aqui otro ejemplo de una funcion que imprime la suma de dos numeros:

```python
def calculate_sum(a, b):
  print(a + b)
```

Tu puedes ver que la funcion calculate_sum, tiene a y b en los parentecis,
separados por comas. Estos se les conose como parametros.
Piensa en los parametros como contenedores de variables que actuan como slots (espacios)
para el valor que vas a pasar dentro de la funcion cuando lo llames.

Para usar los parametros, debes pasarle argumentos.
Un argumento es un valor que pasas a funciones cuando las llamas.

Aqui como llamar a la funcion calculate_sum dandole como argumentos los numeros 3 y 1

```python
calculate_sum(3,1) # 4
```

Si llamas a la funcion si la cantidad de argumentos requeridos, resiviras un TypeError:

```python
calculate_sum()
# TypeError: calculate_sum() missing 2 required positional arguments: 'a' and 'b'
```

Las funciones tambien usan la palabra reservada return para salir de la funcion y retornar un valor.
Si no necesitas explicitamente retornar , python retornara None por defecto.

Aqui un ejemplo:

```python
def calculate_sum(a, b):
    print(a + b)

my_sum = calculate_sum(3, 1) # 4
print(my_sum) # None
```

Puedes ver que la funcion calculate_sum imprime la suma de a y b, pero no retorna nada explicitamente.
Entonces cuando asignamos el resultado en my_sum, el valor es de hecho None.
Para arreglar esto, puedes retornar el resultado con la palabra reservada return.

```python
def calculate_sum(a, b):
    return a + b

my_sum = calculate_sum(3, 1)
print(my_sum) # 4
```

Ahora calculate_sum retorna la suma de a y b, y queda guardada en la variable my_sum
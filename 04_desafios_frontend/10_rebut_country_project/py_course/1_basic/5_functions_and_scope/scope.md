# 1 que es el scope en python y como funciona ?

En python, el scope determina el punto en donde tu puedes acceder a una variable.
Es lo que controla la vida de una variable y como se resuleve en diferentes partes del codigo.

La correcta determinacion del scope, Python sige la regla LEGB, que significa lo siguiente:

- Local scope (L): Variable definida en funcion o clases
- Enclosing scope (E): Variable definida en funciones envolventes o anidadas.
- Global scope (G): Variables definidas en el nivel alto del modulo o archivo.
- Built-in scope (B): Nombres reservados en Python para funciones, módulos, palabras clave y objetos predefinidos.

Python usa las reglas LEGB para resolver el scope de una variable en tu programa.
Vamos a ver cada una de estas reglas para que tengas un mejor entendimiento del proceso.

# 2 Local scope

Local scope significa que la variable declarada dentro de una funcion o clase pude
ser accedida dentro de la funcion o clase.

Aqui un ejemplo:
```python
def my_func():
  my_Var = 10
  print(my_var)
```

En este caso, la funcion my_func tiene su propio scope que no puede ser accedido
duera de la funcion.
Llamando a my_func deberia imprimir 10, pero imprimir my_var fuera de la funcion
va a arrojar un error tipo NameError:
```python
def my_func():
    my_var = 10 # Locally scoped to my_func
    print(my_var)

my_func() # 10

print(my_var) # NameError: name 'my_var' is not defined
```

# 3 Enclosing scope

Enclosing scope significa que la funcion que esta encadenada dentro de otra funcion puede acceder a las variables de la funcion que esta encadenada.

Por ejemplo:

```python
def outer_func():
    msg = 'Hello there!'

    def inner_func():
        print(msg)

    inner_func()

outer_func() # Hello there!
```

En este ejemplo, la funcion interna, inner_func, puede acceder libremente a la 
variable msg definida en la funcion de fuera.
Como sea, note que fuera de la funcion no puede acceder a variables definidas dentro de
cualquier funcion anidada.

```python
def outer_func():
    msg = 'Hello there!'
    print(res)

    def inner_func():
        res = 'How are you?'
        print(msg)

    inner_func()

outer_func() # NameError: name 'res' is not defined
```

Esto es porque res es localmente scoped dentro de inner_func.
Tambien, notece que outer_func trata de imprimir res antes de inner_func se llame.

Una solucion es inicializar res como un string basio en el scope envolvente,
que es dentro de outer_func.
Entonces dentro de inner_func, convertir res en una variable non-local
con la palabra reservada nonlocal:

```python
def outer_func():
    msg = 'Hello there!'
    res = ""  # Declare res in the enclosing scope

    def inner_func():
        nonlocal res  # Allow modification of an enclosing variable
        res = 'How are you?'
        print(msg)  # Accessing msg from outer_func()

    inner_func()
    print(res)  # Now res is accessible and modified

outer_func()

# Output:
# Hello there!
# How are you?
```

# 4 Global scope

Global scope se refiere a variables que son declaradas fuera de cualquier funcion
o clase que puede ser accedida desde cualquier parte en el programa.
Aqui my_var puede ser accedida en cualquier parte, incluso dentro de la funcion que no esta definida aun:

```python
my_var = 100

def show_var():
    print(my_var)

show_var() # 100
print(my_var) # 100
```
Y si quieres convertir una variable a local scope dentro de una funcion accedida globalmente,
puedes usar la palabra reservada global:

```python
my_var_1 = 7

def show_vars():
    global my_var_2
    my_var_2 = 10
    print(my_var_1)
    print(my_var_2)

show_vars() # 7 10

# my_var_2 is now a global variable and can be accessed anywhere in the program
print(my_var_2) # 10
```
tambien puedes usar la palabra global para modificar una variable global:

```python
my_var = 10  # A global variable

def change_var():
    global my_var  # Allows modification of a global variable
    my_var = 20

change_var()

print(my_var)  # my_var is now modified globally to 20
```

# 5 Built-in scope

Finalmente, built-in scope se refiera a todas las funciones built-in, modulos, y palabras reservadas, y son accesibles en cualquier parte de tu programa:

```python
print(str(45)) # '45'
print(type(3.14)) # <class 'float'>
print(isinstance(3, str)) # False
```
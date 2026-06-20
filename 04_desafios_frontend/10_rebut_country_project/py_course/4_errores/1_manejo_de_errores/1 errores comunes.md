# Algunos mensajes de error comunes en Python ?

Cuando escribimos codigo python, es comun correr errores.
Entender estos errores es la clave para debugging nuestro codigo
rapido y eficasmente.
Estos mensajes nos dicen exactamente porque fallaron, 
si sabes como leerlos.

Los errores Python comunes incluyen 'SyntaxError', 'NameError', 'TypeError',
'IndexError', y 'AttributeError'.
Estos ocurren cuando python no entinede tu codigo, o cuando 
tu logica no encaja con la informacion con la que trabajas.

## SyntaxError
Aqui un ejemplo de un  'SyntaxError':

```py
print('Hello, world'

# SyntaxError: unexpected EOF while parsing
```

Esta linea esta perdiendo un cierre de parentesis.
Python corre un 'SyntaxError' por que el codigo no sigue
reglas de sintaxis apropiadas.

## NameError
Aqui un error de un 'NameError':

```py
print(name)
# NameError: name 'name' is not defined
```

Estas tratando de imprimir una variable que no esta definida aun.
Python corre un 'NameError' cuando no puede encontrar una variable
con ese nombre.

## TypeError
Aqui un ejemplo de un 'TypeError':

```py
5 + "5"
# TypeError: unsupported operand type(s) for +: 'int' and 'str'
```
No puedes sumar un entero y un string.
Python corre un 'TypeError' cuando tratas de ejecutar una
operacion con tipos de datos incompatibles.

## IndexError
Aqui un ejemplo de un 'IndexError':

```py
my_list = [1, 2, 3]
print(my_list[5])
# IndexError: list index out of range
```
Estas tratando de acceder al indice que no exciste en la lista.
Python corre un 'IndexError' cuando quieres ir fuera de el rango.

## AttribueError
Aqui un ejemplo de un AttributeError:
```py
num = 42
num.append(5)
# AttributeError: 'int' object has no attribute 'append'
```
El objeto 'int' no tiene el metodo 'append'.
Python corre un error de 'AttributeError' cuando tratamos 
de usar metodos o propiedades que no existen para ese tipo de dato.

## Conclucion:

Reconoser mensajes de errores Python comunes nos ayudan a 
arreglar problemas rapido.
En lugar de adivinar, leer el error cuidadosamente.
A menudo nos dice exactamente que fue mal y donde mirar.
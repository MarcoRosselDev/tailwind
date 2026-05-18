# 1 como trabajar con condicionales y operadores logicos ?

Las declaraciones condicionales o condicionales, nos permiten controlar el flujo
de tu programa basado en sierta condicion, si es true o false.

Pero antes que veamos todo eso, veamos sobre lo basico construllendo blockes
de condicionales, comenzando con las parametros de comparacion.
Los operadores de comparacion son operadores que nos dejan comparar dos o mas valores,
y retornar un valor boleano.

En una leccion previa, aprendiste que los boleanos son uno de los tipos de dato en Python,
y solo pueden o ser True o ser False.

aqui una tabla con los operadores de comparacion en python:

|operador | nombre  | description |
|---------|---------|-------------|
| == | Equal = igual | Revisa si dos valores son iguales |
| != | Not equal = no igial | revisa si dos valores no son iguales |
| > | Greater than = mayor a | revisa si el valore en la izquierda es mayor que el valore en la derecha | 
| < | Less than = menor a | revisa si el valor en la izquierda es menor que el valor a la derecha |
| >= | Greater than or equal | revisa si el valor a la izquierda es mayor o igual al valor de la derecha |
| <= | Greater than or equal | revisa si el valor a la izquierda es menor o igual al valor de la derecha |

Estos operadores pueden ser usados en condicionales para comprobar valores y correr siertos codigos basado en cual condicion eventualmente es True o False.

# 2 if
En python, el condicional mas basico es la declaracion if.
Aqui la sintaxis basica:

```python
if condition:
  pass # El codigo a ejecutar si la condition es True
```

- if: la declaracion comienza con la palabra reservada if
- condition: si la expresion que se evalua es True o False, seguido por el :
- body: El cuerpo de la declaracion if constituye un bloque de codigo, el cual es un
grupo de instrucciones que ban juntas. En python, el nivel de la indentacion  define el bloque de codigo.

En el ejemplo de arriba, el cuerpo de la condicional if contiene una declaracion pass.
cuando se ejecuta pass, no pasa nada.
Esta es una palabra reservada que se puede usar como un placeholder(marcador de posicion)
para un codigo futuro y es usado un codigo basio no esta avilitado.

El codigo dentro del body en el condicional if solo corre si la condicion es True.
Por ejemplo:

```python
age = 18
if age >= 18:
  print('You are an adult') # You are an adult
```

Notece en la indentacion antes del print().
Mientras que en otros lenguajes de programacion se utilizan caracteres como los corchetes {} para definir bloques de codigo, y solo una indentacion para la legibilidad, 
en Python, los bloques de codigo son determinados por la indentacion.

El siguiente codigo deveria correr un mensaje de error de tipo IndentationError,
el cual es la manera de python de desirnos de decirnos que la indentacion es requerida 
en cierto punto.

```python
age = 18

if age >= 18:
print('You are an adult') # IndentationError: expected an indented block after 'if' statement on line 3
```

Aunque puedes usar cualquier numero de indentacion que desees, mientras seas consistente, para determinar cada nivel de indentacion, en la guia de estilos de Python usan 4 espacios.

Los bloques son usados tambien en loops (repeticiones) y funciones, que se aprenderan en el futuro.

# 3 else
Llendo atras a nuestro ejemplo, si age cualquier cosa menor a 18, no se imprime nada:
Pero que tal si queremos imprimir algo?
Ahi es donde entra la clausula else.
La clausula Else corre cuando la condicion if es false.
Aqui la sintaxis de un if..else:

```python
if condition:
  pass # codigo a ejecutar si la condicion es true
else:
  pass # codigo a ejecutar si la condicion es false
```

por ejemplo:
```python
age = 12

if age >= 18:
  print('You are an adult')
else:
  print('You are not an adult yet') # You are not an adult yet
```

Notece que puedes dejar cualquier codigo entre el bloque if y else.
El siguiente codigo deberia correr un error de sintaxis SyntaxError:

```python
age = 12

if age >= 18:
    print('You are an adult')
print('Almost there!')
else: # SyntaxError: invalid syntax
    print('You are not an adult yet')
```

# 4 elif

Van a aver situaciones en las que necesitaras contar con multiples condiciones.
Para hacer eso, Python deja extender el condicional if con la palabra reservada elif.
Aqui la sintaxis:

```python
if condition1:
  pass
elif condition2:
  pass
else
  pass
```

por ejemplo:
```python
age = 12

if age >= 18:
  print('You are an adult')
elif age >= 13:
  print('You are a teenager')
else:
  print('You are a child') # You are a child
```

Notece que puedes usar los elif que decees.
Ahora que entiendes como trabajan los operadores de comparacion y los condicionales,
puedes comensar a escribir programas que tomen desiciones en base a la logica y entradas (inputs).
Dondecea que compares valores o derivando por multiples condiciones, estas herramientas
son los fundamentos para escribir codigo flexible y responsivo.
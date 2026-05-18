# 1 que son los valores Truthy y Falsy, y como trabajan los operadores boleanos y short-circuiting (circuitos cortos) ?

En la leccion pasada , aprendimos como los operadores de comparacion y condicionales controlan el flujo de un programa.

Mientras que esos dos son muy poderosos, con frecuencia correras en situaciones donde
nesecitas comparar multiples valores de una.
Esto pueden dar lugar a sentencias condicionales anidadas, por ejemplo:

```python
is_citizen = True
age = 25

if is_citizen:
    if age >= 18:
        print('You are eligible to vote') # You are eligible to vote
else:
    print('You are not eligible to vote')
```

El codigo pasado revisara primero si is_citizen es True.
Si lo es, pasara al siguente condicional if y revisara si age es mayor o igual a 18.
Mientras que age es mayor o igual que 18, el mensaje imprime "You are eligible to vote".
si is_citizen fuere false, entonces el mensaje seria el otro.

si estamos trabajando con condicionales mas complejos, entonces puedes usar
los operadores python and, or y not.
Pero antes de entrar en esos operadores, veamos que son los valores truthy y falsy.

# 2 valores Truthy y falsy

En Python, cada valor tiene un valor boleano inherente (inherente significa unido de manera inseparable), o un sentido built-in de como deve ser tratado, si como true o false en un contexto logico.
Muchos valores son tratados como Truthy, eso significa que son evaluados como true en un contexto logico.
Otros son Falsy.

Aqui algunos valores Falsy:

- None
- False
- Integer 0
- Float 0.0
- Empty string ""

Otros valores como un numero no-zero, y un string no-vacio son Truthy.

Si necesitas revisar si un valor es truthy o falsy, puedes usar la built-in funcion bool().
Este convierte explicitamente un valor a su equivalente booleano y retorna True a los valores truthy y False a los falsy.
Aqui algunos ejemplos:

```python
print(bool(False)) # False
print(bool(0))  # False
print(bool('')) # False

print(bool(True)) # True
print(bool(1)) # True
print(bool('Hello')) # True
```

Ahora que puedes entendes los valores Truthy y falsy, podemos ver los operadores boleanos,
que se conocen tambien como operadores logicos o operadores booleanos.
Estos son operadores especiales que te ayudan a convinar multiples expresiones
para crear deciciones mas complejas y logicas en tu codigo.

Aqui estan tres operadores Boleanos en Python: and, or y not.
Veamos primero el operador and.

# 3 And

El operador and toma dos operadores y retorna el primer operador si el es falsy, 
de otro modo, retornara el segundo operador.
Ambos operadores deben ser Truthy para una expresion para resultar en un valor truthy.

Aqui un ejemplo:

```python
is_citizen = True
age = 25

print(is_citizen and age) # 25
```

En el codigo de arriba, se imprime el numero 25 porque el operador and evalua el segundo operador si el primer operador es True.
El operador and se le conoce como operador short-circuit.
Short-circuiting significa que python revisa desde la izquirda a la derecha y para
en cuanto determina el resultado final.

Seguidamente usaras and dentro de un condicional if para revisar multiples condiciones.
Aqui como puedes refactorizar el codigo pasado para usar el operador and en lugar de el
condicional if.

```python
is_citizen = True
age = 25

if is_citizen and age >= 18:
    print('You are eligible to vote') # You are eligible to vote
else:
    print('You are not eligible to vote')
```

En el ejemplo de arriba, is_citizen es True, y age >= 18 se evalua hacia True.
Como los dos operadores del operador and son truthy, la condicion is_citizen and age>=18
se evalua hacia True, y imprime lo que el bloque if ejecuta.

# 4 or

Ahora revisemos el operador or.
Este operador retorna el primer operador si este es truthy,
de lo contrario, retorna el segundo operador.
Una expresion or resulta en valor truthy si almenos un operador es truthy.
El operador or se conoce como un operador short-circuit.
Aqui un ejemplo:

```python
age = 19
is_employed = False

print(age or is_employed) # 19
```
El siguiente codigo deberia imprimir el numero 19 porque el primer oeprador age es true.

Si necesitas revisar si uno o mas expreciones son True, entonces puedes usar el operador or en una condicion, asi:

```python
age = 19
is_student = True

if age < 18 or is_student:
    print('You are eligible for a student discount') # You are eligible for a student discount
else:
    print('You are not eligible for a student discount')
```

En este caso, age < 18 es False, pero is_student es True.
Mientras almenos una condicion es true, el or completo se evalua a True,
Y el mensaje de  descuento es imprimido.

# 5 not

El ultimo operador que veremos es not, el cual toma un solo operador y invierte su valor booleano.
Convierte valores truthy a False y falsy a True.
A diferencia de el operador previo que vimos, not siempre retorna true o false.

aqui algunos ejemplos:
```python
print(not '') # True, because empty string is falsy
print(not 'Hello') # False, because non-empty string is truthy
print(not 0) # True, because 0 is falsy
print(not 1) # False, because 1 is truthy
print(not False) # True, because False is falsy
print(not True) # False, because True is truthy
```

Es comun usar el operador not en condicionales para revisar si algo no es True o False,
como esto:

```python
is_admin = False

if not is_admin:
    print('Access denied for non-administrators.') # Access denied for non-administrators.
else:
    print('Welcome, Administrator!')
```

Ahora que entiendes los valores Truthy y falsy, y los operadores and, or y not, y como
trabajan los short-circuits, puedes escribir codigo mas complejo y legible.
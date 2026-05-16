# 1 Como trabajar con numeros enteros y punto flotante ?

Los enteros y flotantes (decimales) son los tipos de datos numericos en python.
con ellos, tu puedes guardar datos numericos y ejecutar operaciones matematicas.

Veamos que son los enteros y flotantes, como ejecutar operaciones aritmeticas y calcular con ellas, y un monton de methodos que python nos provee para trabajar con ambos.

# 2 Enteros

Los enteros son todos los numeros que no tienen punto decimal, incluyendo positivos y negativos.

para sumarlos solo aplicamos el operador + y la resta con -, para multiplicar el *, para dividir el /.

# 3 Flotantes

Los flotantes son los numeros positivos o negativos con punto decimal, como 2.13 o -3.14.
las operaciones son las mismas, con +-* y /.

# Operar un entero con un flotante

Si sumamos un entero con un flotante, el resultado se convierte automaticamente a flotante.
Esto es True para todas las operaciones aritmeticas basicas.
Python va a retornar un float como resultado.

# Operaciones complejas

Puedes ejecutar operaciones mas complejas, como tener el residuo de dos numeros con el operador modulo, division flotante, y exponentes con dos enteros y flotantes.

El operador % modulo, retorna el residuo cuando el valor de la izquierda es dividido por el valor de la derecha:

```python
my_int_1 = 56
my_int_2 = 12

my_float_1 = 5.4
my_float_2 = 12.0

mod_ints = my_int_1 % my_int_2
mod_floats = my_float_2 % my_float_1

print('Integer Modulo:', mod_ints) # Integer Modulo: 8
print('Float Modulo:', mod_floats) # Float Modulo: 1.1999999999999993
```

La división entera divide dos números y devuelve el mayor entero menor o igual al resultado. Esto se realiza con el operador de doble barra inclinada.

```python
my_int_1 = 56
my_int_2 = 12

my_float_1 = 5.4
my_float_2 = 12.0

floor_div_ints = my_int_1 // my_int_2
floor_div_floats = my_float_2 // my_float_1

print('Integer Floor Division:', floor_div_ints) # Integer Floor Division: 4
print('Float Floor Division:', floor_div_floats) # Float Floor Division: 2.0
```

Exponentes eleva un numero a la potencia de otro, y se hace con el operador ** (doble asterisco).

# 5 resultados inesperados
A veces, puede que observes que el resultado de una operación con números de coma flotante tiene más decimales de los esperados. Por ejemplo, la suma 0.1 + 0.2 es igual a 0.30000000000000004 en lugar de 0.3.

Esto pasa por que los numeros son guardados en formato binario, y algunas fracciones no pueden ser representadas exactamente como binario.
Como resultado, son guardados como aproximaciones finitas, de la misma forma la fraccion
1/3 no puede ser representada con un numero finito de digitos decimales y se trunca despues de una sierta cantidad  de digitos (0.333333...).

Esto nos deja un pequeño error de redondeo.

# 6 int y float build-in functions

Python tambien probee una funcion build-in para convertir datos numericos o string en enteros o flotantes

La funcion float() retorna un numero flotante construido del numero dado.
la funcion int() retorna un entero construido del numero dado.
lo mismo aplica para numeros en formato string.

# 7 round, abs, pow build-in functions

Aqui algunos otros methodos de python para trabajar con enteros y flotantes.

- round(): retorna un numero redondeado al numero espesificado de decimales.
por defecto esta funcion retorna el entero mas sercano, y retorna el numero pelao sin espacios decimales.
- abs(): retorna el valor absoluto del numero
- pow(): eleva un numero a la potencia de otro o realiza exponenciación modular

```python
# pow example:
result_1 = pow(2, 3)  # Equivalent to 2 ** 3
print(result_1)  # 8

result_2 = pow(2, 3, 5)  # (2 ** 3) % 5
print(result_2)  # 3
```
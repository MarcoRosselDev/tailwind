# que son los Ranges y como podemos usarlos en un loop ?

La funcion range() se usa para generar una secuencia de enteros.
Aqui la sintaxis basica para la funcion range():

range(start, stop, step)

El argumento requerido "stop" es un entero que representa el punto final
para la secuencia de numeros que se generaran.
Aqui un ejemplo de la funcion range:

```python
for num in range(3):
    print(num)
```
Este codigo genera una secuencia de numeros entre el 0 y 2.
El entero 3 no es incluido porque el argumento "stop" no es inclusivo.

Si el argumento "start" no se espesifica, entonces por defecto es 0.
De lo contrario, puedes usar el argumento opcional "start" para comensar
la secuencia de enteros en un entero distinto de 0.
Aqui un ejemplo de la generacion de secuencias de enteros entre 1 y 4.

```python
for num in range(1, 5):
    print(num)
```
Por defecto la sequencia de enteros incrementa por 1.
Pero si tu quieres cambiar esto, entonces puedes usar el argumento opcional "step".
Aqui un ejemplo generando una secuencia de enteros pares entre 2 y 10:

```python
for num in range(2,11,2):
    print(num)
```
Como se menciono previamente, solo es requerido un argumento para la funcion range().
Si no provees ningun argumento a range(), entonces resiviras un error "TypeError"

Es importante notar que la funcion range() solo acepta numeros enteros como argumentos,
no numero flotante.
Si tratas de pasar un numero flotante, resiviras un error tipo "TypeError".

Si lo que quieres es generar una secuencia de enteros en orden decreciente,
entonces puedes usar un entero negativo para el argumento "step", asi:

```python
for num in range(40, 0, -10):
    print(num)
```
El codigo previo imprimira los numeros 40, 30, 20 y 10 en ese orden por consola.

Otra cosa que puedes hacer con la funcion range() es crear una lista de enteros
utilizando el constructor list.
El constructor list se usa para convertir un iterable el una lista.
Aqui un ejemplo de generar una lista de enteros pares entre 2 y 10.

```python
numbers = list(range(2, 11, 2))
print(numbers) # [2, 4, 6, 8, 10]
```
La funcion range() es una manera practica de generar una secuencia de enteros
en Python. Una vez lo comprendas, te veras usandolo un monton en tus programas python.

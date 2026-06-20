# Como trabaja la Exception handling?

En Python, exception handling es una parte principal en 
escritura de programas robusta y fault-tolerant.
Nos permite antisipar, atrapar, y responder a errores de
una forma estructurada.

Exception handling es el proceso de atajar y manejar errores
que ocurran durante la ejecucion de un programa, entonces
tu codigo no se rompera inesperadamente.

Python provee los bloques 'try, excepte, else, y finally' para
manejar errores con elegancia.
Aqui un ejemplo basico:

```py
try:
    x = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
```

* 'try': 
        El bloque de codigo donde te anticipas a un error que puede ocurrir.
* 'except': 
        Este bloque corre si un error del tipo especificado se ejecuta 
        dentro del bloque 'try'.
*   En este caso, la divicion por cero lanza un 'ZeroDivisionError',
    el cual es atrapado y manejado.

Y aqui un ejemplo tambien mostrando como usar el bloque 'else' y 'finally':

```py
try:
    x = 10 / 2
except ZeroDivisionError:
    print("You can't divide by zero!")
else:
    print('Division successful:', x)
finally:
    print('This block always runs.')
```

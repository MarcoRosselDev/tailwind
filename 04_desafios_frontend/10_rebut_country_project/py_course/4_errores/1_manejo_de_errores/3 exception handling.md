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

* 'else':
    Corre si no se lanza una excepcion el el bloque try.
* 'finally':
    Corre no importa que, si ocurra o no una excepcion.
    util para limpiar tareas como cerrar archivos o limpiar recursos.

Tambien puedes agarrar multiples excepciones con bloques de
'except' separados:

```py
try:
    number = int('abc')
    result = 10 / number
except ValueError:
    print('That was not a valid number.')
except ZeroDivisionError:
    print("Can't divide by zero.")
```

Al usar la declaracion 'except' por separado, puedes
hacer que tu codigo responda tus errores mas eficientemente y util.

Tambien puedes usar el objeto exception, 
que es tipicamente aliado con otro nombre con la palabra
reservada 'as'.
Aqui estamos usando 'e' como un alias para el object error:

```py
try:
    x = 1 / 0
except ZeroDivisionError as e:
    print(f'Error occurred: {e}')
```

Usando 'e' nos deja acceder al mensaje error actual o
object para depurar o debugiar.

Tambien puedes agarrar multiples excepciones en una sola 'except'
al especificar la excepcion como una 'tuple':

```py
try:
    number = int(input('Enter a number: '))
    result = 10 / number
except (ValueError, ZeroDivisionError) as e:
    print(f'Error occurred: {e}')
```

El manejo de excepciones o Exception handling permite que tu programa
se recupere de los errores con gracia.
Al usar try, except, else y finally, puedes anticipar potenciales
problemas y construir aplicaciones mas resilientes.
# que es el Raise Statement (Declaración de elevación) y como funciona ?

En Python, la declaracion 'raise' es una herramienta poderosa
que te ayuda a disparar manualmente una excepcion en tu codigo.
Este te da control sobre cuando y como un error es generado,
abilitandote a customizar errores condicionados y cumplir
espesificos comportamientos en el programa.

La declaracion 'raise' se usa para arrojar explicitamene una
excpcion en cualquier punto en tu programa,
permitiéndote indicar que se ha producido un error o que 
no se han cumplido ciertos requisitos.

La declaracion 'raise' puede ser usado de muchas formas para
disparar excepciones.
En su forma mas basica, puedes correr una excepcion built-in o 
crear un mensaje de error customizado.
Aqui un ejemplo:

```py
def check_age(age):
    if age < 0:
        raise ValueError('Age cannot be negative')
    return age

try:
    check_age(-5)
except ValueError as e:
    print(f'Error: {e}') # Error: Age cannot be negative
```
Puedes ver aqui que la palabra reservada 'raise' disparo una excepcion.

En este ejemplo, estamos corriendo un 'ValueError' con un mensaje 
personalizado cuando una edad invalida se ingresa.

La instrucción raise también se puede utilizar para volver a lanzar la excepción actual,
 lo cual es particularmente útil en el manejo de excepciones.

```py
def process_data(data):
    try:
        result = int(data)
        return result * 2
    except ValueError:
        print('Logging: Invalid data received')
        raise  # Re-raises the same ValueError

try:
    process_data('abc')
except ValueError:
    print('Handled at higher level')
```

Aqui la palabra 'raise'(sin argumentos) vuelve a lanzar la
excepcion actual que estaba siendo manejada.

Esto permite registrar o realizar tareas de limpieza mientras se sigue propagando 
el error hacia arriba en la pila de llamadas.

Puedes crear y generar excepciones personalizadas definiendo 
tus propias clases de excepción.

```py
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        super().__init__(f'Insufficient funds: ${balance} available, ${amount} requested')

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

try:
    new_balance = withdraw(100, 150)
except InsufficientFundsError as e:
    print(f'Transaction failed: {e}')
```

Aqui, puedes ver una clase de excepcion personalizada heredada de
"Exception" o su subclase.

Aprenderas mas hacerca de clases y herencia en lecciones futuras.
Por ahora, que sepas que esta es una forma de crear tus propias
exceptiones con una logica personalizada.

La declaracion "raise" puede ser usada con la palabra reservada "from"
para encadenar excepciones,
mostrando la relacion entre diferentes errores:

```py
def parse_config(filename):
    try:
        with open(filename, 'r') as file:
            data = file.read()
            return int(data)
    except FileNotFoundError:
        raise ValueError('Configuration file is missing') from None
    except ValueError as e:
        raise ValueError('Invalid configuration format') from e

config = parse_config('config.txt')
```

Aqui puedes ver que "raise ... from None" suprime el contexto de excepción original:

```py
Traceback (most recent call last):
  File "main.py", line 12, in <module>
    config = parse_config('config.txt')
             ^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "main.py", line 7, in parse_config
    raise ValueError('Configuration file is missing') from None
ValueError: Configuration file is missing
```
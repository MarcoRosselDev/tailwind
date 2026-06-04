# Como trabajan los loops ?

Los loops son usados para repetir un bloque de codigo un numero de veces.
En esta leccion aprenderemos a trabajar con diferentes tipos de loops en python.

## for

El primer loop que veremos es el loop "for".
Aqui un ejemplo de uso de un loop "for" para iterar a traves de un list
y imprimir cada item en la consola:

```python
programming_languages = ['Rust', 'Java', 'Python', 'C++']

for language in programming_languages:
    print(language)

""" The result would be:
Rust
Java
Python
C++
  """
```

Notece que el "print(language)" esta indentado dentro del loop.
Sin esa indentacion, obtendras un error tipo "IndentationError".

Tambien puedes usar un bucle "for" para iterar a traves de otros iterables
como strings.
Aqui un ejemplo usando un bucle "for" para iterar a traves del string "code"
e imprimir cara caracter:

```python
for char in 'code'
    print(char)

""" the result would be:
c
o
d
e
 """
```

Al igual que javascript, tambien puedes encadenar un bucle "for" en Python.
Aqui un ejemplo de usar un "for" encadenado:

```python
categories = ['Fruit', 'Vegetable']
foods = ['Apple', 'Carrot', 'Banana']

for category in categories:
    for food in foods:
        print(category, food)

""" the result would be:
Fruit Apple
Fruit Carrot
Fruit Banana
Vegetable Apple
Vegetable Carrot
Vegetable Banana
 """
```

## while

Otro tipo de loop en python es "while".
Este tipo de loop repetira un bloque de codigo mientras una condicion es "False".
Aqui un ejemplo:

```python
secret_number = 3
guess = 0

while guess != secret_number:
    guess = int(input('Guess the number (1-5): '))
    if guess != secret_number:
        print('Wrong! Try again.')

print('You got it!')
```

En este ejemplo tenemos una variable "secret_number" con el valor de 3
y un inicial "guess" con 0.
Entonces usamos la funcion "input" para obtener un input de el usuario,
entonces convertimos el input tipo string en entero con la funcion int(),
y lo asignamos a la variable "guess".
Si el usuario adivina (guesses) correctamente incertando el 3,
el bucle "while" se rompe y el mensaje "You got it!" se imprime en la consola.
De lo contrario, el mensaje "Wrong! try again." se imprime en la consola,
y el loop se repita, preguntandole denuevo al usuario que adivine el numero.

## break y continue

### break
Al igual que javascript, python soporta las declaraciones "break" y "continue".
La declaracion "break" se usa para detener la ejecucion de un loop.
Aqui un ejemplo de "break" para una list de "developer_names":

```python
developer_names = ['Jess', 'Naomi', 'Tom']

for developer in developer_names:
    if developer == 'Naomi':
        break
    print(developer)
```
En este ejemplo, iteramos a traves de un list "developer_names" e imprimimos
cada nombre en la consola.
Si el nombre es igual a "Naomi", entonces nos salimos (break) del bucle.
Esto resulta solo con el nombre "Jess" imprimido en la consola.

### continue

La declaracion "continue" se usa para escapar la iteracion actual de un loop
y se mueve a la siguiente iteracion.
Vamos a modificar el ejemplo anterior para usar "continue" en ves de "break":

```python
developer_names = ['Jess', 'Naomi', 'Tom']

for developer in developer_names:
    if developer == 'Naomi':
        continue
    print(developer)
```
Ahora el resultado en la consola es diferente.
Los nombres "Jess" y "Tom" se imprimen porque la declaracion "continue" escapa la
segunda iteracion de el bucle donde developer es igual a "Naomi",
y por eso no imprime el nombre en la consola.

## conbinacion con else

Ambos "for" y "while" pueden ser combinados con la clausula "else",
el cual se ejecuta solo cualndo el loop no es determinado por la declaracion "break".
Aqui un ejemplo usando "for":

```python
words = ['sky', 'apple', 'rhythm', 'fly', 'orange']

for word in words:
    for letter in word:
        if letter.lower() in 'aeiou':
            print(f"'{word}' contains the vowel '{letter}'")
            break
    else:
        print(f"'{word}' has no vowels")
```
En este ejemplo tenemos una list de palabras aleatorias,
y un bucle "for" se usa a traves de cada palabra, luego tenemos otro 
bucle "for" para iterar a traves de cada caracter de cada palabra.
Si la version minuscula de la letra es una vocal, se imprime la palabra
seguida de la vocal que contiene, entonces se rompe el bucle actual.
Si la palabra no contiene vocales, entonces se imprime el mensaje indicado.
Aqui los resultados vistos en la consola:

```python
'sky' has no vowels
'apple' contains the vowel 'a'
'rhythm' has no vowels
'fly' has no vowels
'orange' contains the vowel 'o'
```

Los loops son muy comunes en python, entonces es importante sentirnos
comodos con ellos.
en las siguientes lecciones, aprenderemos a trabajar con las funciones
enumerate() y range() en loops.
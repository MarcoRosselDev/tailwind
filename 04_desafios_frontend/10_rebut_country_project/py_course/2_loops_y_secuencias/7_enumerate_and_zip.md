# Que hacen las funciones enumerate y zip y como trabajan ?

En lecciones previas aprendiste como trabajar con bucles for,
que se usa para repetir bloques de codigo x cantidad de veces.
Aqui un ejemplo de un bucle for para imprimir los elementos del a lista
de languages en la consola

```python
languages = ['Spanish', 'English', 'Russian', 'Chinese']

for language in languages:
    print(language)
```
## enumerate()
Pero que si quieres tener un registro del indice de cada item?
Entonces, una opcion es crear una variable indice y incrementarla
en 1 por cada iteracion en el bucle, asi:

```python
languages = ['Spanish', 'English', 'Russian', 'Chinese']

index = 0

for language in languages:
    print(f'Index {index} and language {language}')
    index += 1
```
Mientras eso funcione, una forma mas facil para hacer eso es usando la funcion enumerate().
Esta funcion mantiene un registro de el indice de un iterable y retorna un objeto enumerado.

Si pasamos la lista de lenguajes a la funcion enumerate y cubrimos su valor de retorno en una
lista con la funcion list(), luce asi:

```python
languages = ['Spanish', 'English', 'Russian', 'Chinese']

list(enumerate(languages))
# [(0, 'Spanish'), (1, 'English'), (2, 'Russian'), (3, 'Chinese')]
```
Cada entrada en el objeto enumerate (nueva lista) es una tuple conteniendo un conteo,
seguido de el valor del terable pasado a la funcion enumerate().

Ahora, refactorisemos el ejemplo anterior para usar la funcion enumerate():

```python
languages = ['Spanish', 'English', 'Russian', 'Chinese']

for index, language in enumerate(languages):
    print(f'Index {index} and language {language}')
```

Desempacamos el conteo y el valor de cada tuple en el objeto enumerate dentro de
las variables index y language, respectivamente.
Finalmente, hambas variables son usadas en un f-string que imprime en la consola 
cada iteracion del bucle:

Index 0 and language Spanish
Index 1 and language English
Index 2 and language Russian
Index 3 and language Chinese

Esto elimina la necesidad de crear manualmente una variable idex que se actualice.

La funcion enumerate() tambien acepta un argumento opcional "start" que espesifica
el valor inicial para el conteo.
Si este argumento se omite, entonces el conteo comenzara en 0.
Aqui un ejemplo del uso del argumento opcional start:

```python
languages = ['Spanish', 'English', 'Russian', 'Chinese']

for index, language in enumerate(languages, 1):
    print(f'Index {index} and language {language}')
```
y este es el resultado:

Index 1 and language Spanish
Index 2 and language English
Index 3 and language Russian
Index 4 and language Chinese

## zip ()

Asta ahora solo hemos estado iterando por una lista.
Pero que tal si necesitas iterar por multiples iterables en paralelo?
Bueno, entonces puedes usar la funcion zip(), que combina listas en pares de elementos
y retorna un iterados de tuples.

```python
```
```python
```
```python
```
```python
```
```python
```
```python
```
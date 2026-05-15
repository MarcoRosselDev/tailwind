# 1 que son los strings y que es la inmutabilidad de un string ?

Un string es una secuencia de caracteres rodeada por comillas dobles o simple.
En algunos lenguajes de programacion, los caracteres rodeados por comillas simples son tratados diferentemente
que los caracteres rodeadas por comillas dobles, pero en python, las dos son tratadas igual.
Entonces, puedes trabajar con cualquiera.

Si necesitas un string multilineas, puedes usar triple comillas doble o simple :

``````python
my_str_3 = """Multiline
string"""
my_str_4 = '''Another
multiline
string'''
``````

Puedes escapar la comilla dentro del string usando el \ conosido como backslash.

``````python
msg = 'It\'s a sunny day'
quote = "She said, \"Hello!\""
``````

# 2 check si un string contiene otro string

Algunavez, puedes nesecitar checkar si un string contiene uno o mas caracteres.
para eso, Python probee the operador in, el cual retorna un booleano que espesifica
si exsiste o no el caracter en el string.

Aqui un ejemplo:

``````python
my_str = 'Hello world'

print('Hello' in my_str)  # True
print('hey' in my_str)    # False
print('hi' in my_str)    # False
print('e' in my_str)  # True
print('f' in my_str)  # False
``````

# 3 ver el largo de un string

Ahora veamos como tener el largo de un string y trabajar con el caracter individual en un string,
proceso llamado indexing.
Para tener el largo del string, puedes usar la funcion built-in len().
Aqui un ejemplo:

``````python
my_str = 'Hello world'
print(len(my_str))  # 11
``````

Cada caracter en un string tiene una posicion llamada index.
El indice basada en el cero, lo que significa que el indice del primer caracter de un string es 0,
el indice del segundo caracter es 1, y asi.
Para acceder al caracter usando el indice, podemos usar brackets [] con el indice del caracter
que quieres acceder.
Aqui un ejemplo:

``````python
my_str = "Hello world"

print(my_str[0])  # H
print(my_str[6])  # w
``````

Indices negativos tambien se pueden usar, entonces tu puedes tener el ultimo caracter de cualquier string
con el -1, el segundo ultimo caracter con el -2, y asi:

``````python
my_str = 'Hello world'

print(my_str[-1])  # d
print(my_str[-2]) # l
``````

Muchos otros lenguajes de programacion agrupan los tipos de datos como primitivos o de referencia.
Primitive types son simples e inmutables, lo que significa que no pueden ser cambiados una vez declarados.
Los tipo de referencia pueden contener multiples valores, y pueden ser mutables o inmutables.
Pero Python no dibuja un alinea clara entre esos dos grupos.
En cambio, todos los datos se tratan como objetos, y algunos objetos son inmutables mientras que 
otros son mutables.

Los datos Inmutable no pueden ser modificados o alterados una ves declarados.
Solo puedes apuntar sus variables a uno nuevo,  lo que se conose como reasignacion,
pero no puedes cambiar el objeto original en si a trabes de la direccion, remover, o reemplazar ninguno de sus elementos.

Los strings son tipos de datos inmutables en python.
Esto segnifica que tu puedes reasignar un diferente string a una variable:

``````python
greeting = 'hi'
greeting = 'hello'
print(greeting) # hello

# But direct modification of a string isn't allowed:

greeting = 'hi'
greeting[0] = 'H' # TypeError: 'str' object does not support item assignment
``````

Ejemplo de otro tipo de dato inmutable en python son los enteros, flotantes, booleanos, tuplas y rangos.
Conoseremos cada uno en futuras lecciones.
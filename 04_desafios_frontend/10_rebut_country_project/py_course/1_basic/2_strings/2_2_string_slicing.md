# 1 que es el slicing (corte en rebanadas) de strings y como funciona?

En lecciones previas, aprendiste como cada caracter en un string puede ser identificado por el indice (comenzando por el cero), y acceder mediante la notacion de corchetes [].

String slicing nos deja extraer porciones de un string o trabajar con partes espesificas de el.
Aqui un ejemplo basico de la sintaxis.

```python
string[start:stop]
```

Notar que el indice de stop es non-inclusive, osea no requerido u/o obligatorio, entonces [1:4] solo extrae el caracter desde el indice 1, pero no incluye el 1, asta el indice 4.

Puedes tambien omitir el indice  de start y stop, y python utilizara por default el indice 0 o y el final del indice.
Por ejemplo, aqui esta lo que pasa si omites el indice start:

```python
my_str = 'Hello world'
print(my_str[:7])  # Hello w
```
Esto extrae todo desde el indice 0 asta el indice 7 , pero no incluyendo el indice 7.
Y aqui esta lo que pasa si omites el indice stop:

```pytnon
my_str = 'Hello world'
print(my_str[8:])  # rld
```

Esto extraeo todo desde el caracter en el indice 8 asta el final del string.

Notar que slicing un string no modifica el string original:

```python
my_str = 'Hello world'
print(my_str[8:])  # rld
print(my_str)  # Hello world
```

# 2 parametro step (saltos)

Aparete de el indice start y stop, tambien hay una parametro opcional step, que es usado
para especificar la inclucion entre cada idice en el corte (slice).

Aqui la sintaxis:

```python
string[start:stop:step]
```

En el siguiente ejemplo, el corte comienza en el indice 0, para en el indice 11, y extrae cada segundo caracter:

```python
my_str = 'Hello world'
print(my_str[0:11:2])  # Hlowrd
```

Un truco util que puedes hacer con el parametro step es el revertir un string al configurar el parametro step en -1, y dejando start y stop basios:

```python
my_str = 'Hello world'
print(my_str[::-1]) # dlrow olleH
```

# 3 cuales son algunos metodos utiles de strings ?

python provee a numero de metodos build-in que hace trabajar con strings sea pan comido.
Ellos incluyen, pero no estan limitados por, los siguientes:

- upper(): Retorna un nuevo string con todos los caracteres en uppercase.
- lower(): Retorna un nuevo string con todos los caracteres en minusculas.
- strip(): Retrona un nuevo string con los caracteres iniciales y finales especificados eliminados, si no se espesifica un caracter elimina los espacios en blanco.
- replace(old, new): Retorna un nuevo string con todas las ocurrencias de old reemplazadas por new.
- split(separator): Divide un string con el separator espesificado, la divicion la retorna en una lista de strings, si no se espesifica el separator, divide con los espacios en blanco.
- join(iterable): une elementos de un iterable en un string con un separador.
- startswith(prefix): Retorna un boleano indicando si un string comienza con el prefix indicado
- endswith(suffix): Retorna un boleano indicando si el string termina con el prefix indicado
- find(substring): Retorna el indice de la primera ocurrencia del substring, o retorna -1 si no se encontro una ocurrencia.
- count(substring): Retorna el numero de veces que un substring aparece en un string
- capitalize(): Retorna un nuevo string con la primera letra en mayuscula y el resto en minuscula.
- isupper(): Retorna True si todas las letras estan en mayusculas y False si no.
- islower(): Retorna True si todas las letras estan en minusculas y False si no.
- title(): Retorna un nuevo string con la primera letra de cada palabra en mayusculas.


```python
# replace
my_str = 'hello world'
replaced_my_str = my_str.replace('hello', 'hi') # hi world

# split
my_str = "hola mundo"
split_words = my_str.split() # ["hola","mundo"]

# join
my_list = ['hello', 'world']
joined_my_str = ' '.join(my_list) # hello world

# find
my_str = 'hello world'
world_index = my_str.find('world') # 6

# count
my_str = 'hello world'
o_count = my_str.count('o') # 2


```

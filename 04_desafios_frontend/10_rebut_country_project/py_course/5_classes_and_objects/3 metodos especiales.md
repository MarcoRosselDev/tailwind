# que son los metodos especiales y para que se usan?

tambien conosidos como "magic methods o metodos magicos" o "dunder methods (por double underscore _ _ )",
son metodos especiales de python que comienzan y terminan con doble guion bajo.

Pobablemente ya has usado methodos especiales sin saberlo.
Cada vez que escribiste algo como "3 + 4", python silenciosamente corre
"3.__add__(4)" por debajo.
Esos son los metodos especiales en accion.
Así que, si bien puedes llamar a métodos especiales directamente, rara vez lo haces.
Algo como "3 + 4" es mucho mas claro y facil de leer que "3.__add__(4)".

otro metodo especial es "__init__()",ya que es un inicializador de clase.
Tambien estan "__len__()" y "__str__()".

Piensa en los metodos especiales como los directores de las actividades
entre el programador y el interprete del lenguaje python.

Recuerda, no necesitas llamar a los metodos especiales directamente.
En su lugar, python los llama automaticamente cuando siertas acciones pasan.
Estas operaciones incluyen:

* Operaciones aritmeticas
* Operaciones con strings
* Operaciones de comparacion
* Iteraciones

Normalmente, los tipos de datos en python como strings y numbers
ya saben como agregar cosas, hacer concatenaciones, comparar si son iguales,
ser usados en un bucle, y otras cosas.

Pero cuando creas tu propia clase, python no sabe como manejar cosas
automaticamente.

Aqui es donde los metodos especiaells entran - Estos te permiten
personalizar comportamientos built-in.

Digamos que quieres obtener el numero de paginas en un objeto Book
creado con la clase siguiente, o compararlos y obtener
un string leguible desde el objeto.
Esto es lo que pasa con metodos especiales:

```py

```
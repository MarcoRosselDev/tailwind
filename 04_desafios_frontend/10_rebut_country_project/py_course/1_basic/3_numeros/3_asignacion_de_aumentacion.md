# 1 como la aumentacion con asignacion funciona ?

Augmented assignment (tarea ampliada) combinan una operacion binaria con una asignaciono en un paso.
Este toma una variable, aplica una operacion junto con otro valor,
y guarda el resultado devuelta en la misma variable.

Si estas familiarizado con javascript, probablemente oiste de el 
operador de addition assignment (asignacion de adicion) += o la subtraction assignment -=, y otras. Estos excisten en python, tambien.
La unica diferencia es que se les refiere como tareas apliadas o augmented assignments.

La sintaxis basica de una asignacion aumentada luce asi:

variable <operator> = value

lo que es mucho mas eficiente que hacer esto:

variable = variable <operator> value

Por ejemplo, aqui un ejemplo usando la augmented assignment para sumar 5 a la variable excistente.

```python
my_var = 10
my_var += 5 # 15
```

La ventaja es que nos provee una manera consisa y legible  de actualizar una variable sin repetir la variable.

Cada operador puede usar un augmented assignment.
como el -=, *=, /=, //=, %=, **=

# 2 con strings

podemos usar en string solo algunos, como la suma:

```python
pr = "hello"
pr += " world" # hello world
```

y la multiplicacion puede usarse para repetir un string:
```python
pr = 'hello'
pr *= 3 # hellohellohello
```

Los otros arrojan un TypeError cuando los usas en strings.

## 3 operadores ++ y  --

Si te estas preguntando si los operadores ++ y -- excisten en python, pues NO.
Esto por que python deliveradamente evita el estilo de C- con la intencion de hacer el 
lenguaje mas claro y explicito.

en lugar de x++, puedes simplemente escribir x += 1, lo que lo hace mas obvio
que incrementas el valor en 1.

Escribir x++ en python solo aplica la unidad dos veces, y no incrementa nada.

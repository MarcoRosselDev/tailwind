# Algunas buenas tecnicas de debugging en Python ?

Debugging es una skill escencial para un desarrollador python.
Entender tecnicas fundacionales pueden eyudarnos a identificar y 
arreglar problemas con eficiencia.

Debugging es el proceso de identificar y resolver errores o bugs
en tu codigo.
Esto envuelve examinar el codigo, entender el flujo, y usar 
herramientas para identificar la fuente de los problemas.

En esta leccion, iremos por tecnicas comunes de debugging que
puedes usar en tu siguiente proyecto Python.

## Usar la funcion print() y f-strings

Primero, usando la funcion print o f-string en varios puntos 
en tu codigo puede ayudarte a entender el flujo y 
estado de las variables.
Por ejemplo:

```py
def add(a, b):
    result = a + b
    print(f'Adding {a} and {b} gives {result}')
    return result
```
Al imprimir el valor de a, b y result, puedes ver y verificar
que la funcion funciona como esperabas.

## 'Interactive debuggin' con el modulo 'pdb'

Luego, puedes usar el modulo built-in de Python 'pdb' para
un interactive debugging:

```py
import pdb

def divide(a, b):
    pdb.set_trace()
    return a / b

print(divide(10, 2))
```
Al configurar un seguimiento con la funcion set_trace, puedes
seguir los pasos a traves del codigo, inseccionar variables,
y entender el comportamiento del problema.

Si corres el codigo de arriba, veras algunos outputs mostrando 
la locacion del archivo que estas corriendo,
La linea donde llamas la funcion set_trace y el codigo inmediatamente
despues de el,
y un prompt pdb interactivo:

```py
> /Users/fcc/Desktop/debugging.py(5)divide()
-> return a / b
(Pdb)
```

Si ingreas 'help' en el prompt, veras una lista de comandos 
que puedes usar:

```py
(Pdb) help

Documented commands (type help <topic>):
========================================
EOF    c          d        h         list      q        rv       undisplay
a      cl         debug    help      ll        quit     s        unt      
alias  clear      disable  ignore    longlist  r        source   until    
args   commands   display  interact  n         restart  step     up       
b      condition  down     j         next      return   tbreak   w        
break  cont       enable   jump      p         retval   u        whatis   
bt     continue   exit     l         pp        run      unalias  where    

Miscellaneous help topics:
==========================
exec  pdb
```

Entonces, puedes usar los comandos para debuigiar tu codigo.

Por ejemplo, si quieres mirar el tipo del elemento atraves de tu codigo
en ese momento, puedes usar el comando 'whatis':

```py
(Pdb) whatis a
<class 'int'>
(Pdb) whatis divide
Function divide
```
Como puedes ver, por el tiempo que corres set_trace, 
el tipo de el parametro a es in integer, y divide es una funcion.

Entonces para continuar ejecutando el codigo, puedes usar 
el comando 'continue', o una de sus alias, 'cont' o 'c':

```py
(Pdb) continue
5.0
```

## IDE debugging tools

Muchos Ambientes de dessarrollo integrados (IDEs = Integrated Development Environments)
ofrecen herramientas de debugging avansadas, como breakpoints,
step execution, y inspeccionador de variables.

## Using VS Code debugger

Si usas VS Code, puedes actualizar breakpoints en tu codigo
y correr debugger para pausar la ejecucion en esos puntos.
Aqui como debug el la misma funcion 'divide':

1: crear tu codigo
crear un archivo 'main.py' con el siguiente codigo:
```py
def divide(a, b):
    result = a / b
    return result

print(divide(10, 2))
print(divide(15, 3))
```

2: crear un breakpoint
    1-  Click en el 'gutter' (margen izquierdo) al lado de 
        line 2 (result = a / b) para crear un breakpoint
    2-  Un punto rojo debe aparecer, indicando el breakpoint creado.

3: Comenzar el debugging
    1-  Preciona f5 o 'go' para correr > Start Debugging
    2-  Seleccionar 'Python File' cuando pregunte el promp
    3-  El debugger pausara la ejecucion en tu breakpoint

4: Inspeccionar variables
    *   Flotar sobre las variablas para ver sus valores actuales
    *   Usar el panel de variables el la izquierda para ver todas las
        variables locales.
    *   Usar la consola de debug en el fondo  para evaluar expresiones.

5: Step a traves de el codigo

    Usar el debug toolbar para:

    *   Continue (f5): Reanuda la ejecucion asta el siguiente breakpoint
    *   Step Over (f10): Ejecuta la linea actual y se mueve al siguiente
    *   Step Into (f11): Ingresa en llamado de funcion
    *   Step Out (shift + f11): Sale de la funcion actual

    IDE debugging tools proveen una interfas visual para examinar
    el estado de tu programa, haciendolo facil de indentificar y arreglar
    comparado con imprimir estados en solitario.

    Al masterizar estas tecnicas fundamentales de debugging
    (print, modulo pdb, IDE tools), puedes identificar con eficiencia
    y resolver problemas en tu codigo Python.
    Cada tecnica tiene su declaracion print() para una revicion rapida,
    pdb para exploracion interactiva, y IDE debuggers para inspecciones
    visuales.
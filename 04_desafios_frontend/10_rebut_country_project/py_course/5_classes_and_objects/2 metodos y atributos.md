# Que son los metodos y atributos, y como funcionan ?

En la leccion pasada, aprendiste sobre clases y como actuan como plantillas
para crear objetos.

Aqui, veremos atributos y metodos.

Veamos los atributos primero, luego los metodos.

## Atributos:

Los atributos son variables que le perteneces al objeto, por lo que
estos ospedan datos.
Hay dos tipos de atributos:
    atributos de instancia (instence attributes)
    atributos de clase (class attributes)

Los atributos de instancia son unicos para cada objeto creado con una clase,
y usualmente los estableces con el metodo __init__.
Los atrubutos de clase, por otra parte, perteneces a la clase en si y
son compartidas por todas las instancias de la clase.

Para acceder a un atributo, usamos notacion de punto.
Aqui un ejemplo de instancias y atributos de clase, 
y como acceder a ellos en los objetos:

```py
class Dog:
    species = "Frech Bulldog" #atributo de clase

    def __init__(self, name):
        self.name = name # atributo de instancia

print(Dog.species) # French Bulldog

dog1 = Dog("Jack")
print(dog1.name)    # Jack
print(dog1.species) # French Bulldog

dog2 = Dog("Tom")
print(dog2.name)    # Tom
print(dog2.species) # French Bulldog
```

Notar que puedes acceder a los atributos de clase directamente del la clase misma,
pero necesitas crear un objeto y pasarle la informacion primero
antes de que puedas  acceder a los atributos de instancia.

otro buen ejemplo son los coches o Cards, porque todos los coches
tienen modelo y color:

```py
class Car:
    def __init__(self, color, model):
        self.color = color
        self.model = model

car_1 = Car("red", "Toyota Corolla")
car_2 = Car("green", "Lamborghini Revuelto")

print(car_1.model) # Toyota Corolla
print(car_2.model) # Lamborghini Revuelto

print(car_1.color) # red
print(car_2.color) # green
```
## Metodos:
Los metodos son funciones definidas dentro de las clases.
Con ellos, cualquier objeto probeniente de una class puede ejecutar
acciones que operan o modifican su propia informacion.
Tambien puedes acceder a los metodos con notacion de punto.

Por ejemplo, dogs pueden bark(ladrar).
Entonces podemos tener un metodo bark en la clase Dog como se mostro
el ejemplo anterior.

```py
class Dog:
   species = "French Bulldog"

   def __init__(self, name):
     self.name = name

   def bark(self):
       return f"{self.name} says woof woof!"

jack = Dog("Jack")
jill = Dog("Jill")

print(jack.bark()) # Jack says woof woof!
print(jill.bark()) # Jill says woof woof!
```

Una clase Car tambien puede tener un metodo 'describe':
```py
class Car:
    def __init__(self, color, model):
        self.color = color  # Instance attribute
        self.model = model  # Instance attribute

    def describe(self):
        return f"This car is a {self.color} {self.model}"

car_1 = Car("red", "Toyota Corolla")
car_2 = Car("green", "Lamborghini Revuelto")

print(car_1.describe()) # This car is a red Toyota Corolla
print(car_2.describe()) # This car is a green Lamborghini Revuelto
```

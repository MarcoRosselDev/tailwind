class MyClass:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def say_hi(self):
        print(f"{self.name} say: Hi my name's {self.name} and I've {self.age} years old")

marco = MyClass("Marco", 33)
marianella = MyClass("Marianella", 18)

marco.say_hi()
marianella.say_hi()
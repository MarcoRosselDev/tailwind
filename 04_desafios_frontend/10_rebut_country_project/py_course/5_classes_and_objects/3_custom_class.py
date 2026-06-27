""" class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages



book1 = Book("Built Wealth Like a Boss", 420)
book2 = Book("Be Your Own Start", 420)

print(len(book1)) # TypeError: object of type 'Book' has no len()
print(str(book1)) # <__main__.Book object at 0x0000018C6A1986E0>
print(book1 == book2) # False """

class Book:
    # la variable str_txt se hereda a todas las instancias.
    str_txt = "aqui hay un texto por defecto en la clase"
    def __init__(self, text, pages):
        self.text = text
        self.pages = pages
    
    def __len__(self):
        return self.pages
    def __str__(self):
        return str(self.text)
    def __eq__(self, oters):
        return self.pages == oters.pages
    
book1 = Book("Built Wealth Like a Boss", 420)
book2 = Book("Be Your Own Start", 420)
print(len(book1)) # TypeError: object of type 'Book' has no len()
print(str(book1)) # <__main__.Book object at 0x0000018C6A1986E0>
print(book1 == book2)
print(len(book2)) # TypeError: object of type 'Book' has no len()
print(str(book2)) # <__main__.Book object at 0x0000018C6A1986E0>
print(book1.str_txt)
print(book2.str_txt)
def trigger(value):
    try:
        sqr = value ** 2
    except TypeError:
        print("error en el type de valor en la fn trigger")
        raise
    else:
        print(f"el sqr de {value} es :{sqr}")
    finally:
        print("la fn trigger esta finalizada.")

try:
    trigger("abc")
except TypeError as t:
    print(f"Manejar este error aqui as {t}")
finally:
    print("the file is done now!")
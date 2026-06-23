def funcion_iterable(num):
    for n in range(num): # se pudo solucionar si a range le chantamos: range(1, num), pero esto es una prueba para que lance intencionalmente una excepcion
        try:
            divicion = 100 / n
        except ZeroDivisionError:
            print("No se puede dividir por cero amigo!")
        else:
            print(divicion)
        finally:
            print(f"Siguiente iteracion, this was {n}")

funcion_iterable(7)
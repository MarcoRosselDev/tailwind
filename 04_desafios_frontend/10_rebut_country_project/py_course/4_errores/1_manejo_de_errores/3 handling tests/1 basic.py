try:
    ecuation = 5 / 0
except ZeroDivisionError:
    print("No se puede dividir por cero amiguito!")
else:
    print(ecuation)
finally:
    print("aqui podemos cerrar algun archivo o limpiar el espacio en disco de variables")
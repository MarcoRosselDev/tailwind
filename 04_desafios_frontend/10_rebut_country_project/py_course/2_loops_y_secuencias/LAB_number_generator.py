""" def number_pattern(n):
    value = ""
    if isinstance(n, int):
        for num in range(1,n + 1):
            if num == 1:
                value += str(1)
            else:
                value += " " + str(num)
    elif n < 1:
        value = "Argument must be an integer greater than 0."
    else:
        value = "Argument must be an integer value."
    return value """

def number_pattern(n):
    value = ""
    if isinstance(n, int):
        if n > 1:
            for num in range(1,n + 1):
                if num == 1:
                    value += str(1)
                else:
                    value += " " + str(num)
        else:
            value= "Argument must be an integer greater than 0."
    else:
        value = "Argument must be an integer value."
    return value

print(number_pattern(4))
def tst(param):
    try:
        n = int(param)
        print(n ** 2)
    except ValueError as e:
        print(f"error in the type of value: {e}")


tst("abc")
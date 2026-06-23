def check_age(age):
    if age < 0:
        raise ValueError("No puedes tener una edad negativa")
    else:
        print(f"tu edad es {age}")

try:
    check_age(-5)
except ValueError as e:
    print(f"Error: {e}")
finally:
    print("we'r done here!")
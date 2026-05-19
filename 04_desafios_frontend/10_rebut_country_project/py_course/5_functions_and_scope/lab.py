# build an apply discoutn function

def apply_discount(price, discount):
  tipe_price = type(price)
  tipe_discount = type(discount)
  print(tipe_price, tipe_discount)

apply_discount(10, 10.2)
apply_discount(10.2, 10.2)

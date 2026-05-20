# build an apply discoutn function

def apply_discount(price, discount):
  tipe_price = isinstance(price, (int, float))
  tipe_discount = isinstance(discount, (int, float))
  total_price = price

  print(tipe_price, tipe_discount)
  if tipe_price == False :
    return "The price should be a number"
  elif tipe_discount == False:
    return "The discount should be a number"
  elif price <= 0:
    return "The price should be greater than 0"
  elif discount > 100 or discount < 0:
    return "The discount should be between 0 and 100"
  else:
    disc = (price/100) * discount
    total_price = price - disc
    # print("calculate the discount")
    return total_price


apply_discount("10", 10.2)
apply_discount(10.2, 10.2)

arr = [9, 41, 12, 3, 74, 15]

bigest_number = 0

for el in arr:
  if el >= bigest_number:
    bigest_number = el
  print(el)

print("done", bigest_number)
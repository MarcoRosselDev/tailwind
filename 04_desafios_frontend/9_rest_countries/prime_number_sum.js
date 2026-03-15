function sumPrimes(num) {
  if (num<2) {
    return 0
  } else {
    let suma = 2
    for (let i = 3; i <= num; i++) {
      //console.log(i);
      let isDivisible = false
      for (let j = 2; j < i; j++) {
        //console.log(j, i);
        let modulo_de_n_con_todos_los_numeros_divisible_divisibles_por_n = i%j // 
        //console.log(x);
        if (modulo_de_n_con_todos_los_numeros_divisible_divisibles_por_n === 0) {
          isDivisible = true
        }
      }
      if (!isDivisible) suma += i
    }
    return suma
  }
}
// todo esto puede ser manejado con metodos nativos del objeto number,
// pero para mi esto es mas manejable

console.log(sumPrimes(5)); // 10, 10-> 17, 977 -> 73156

function sumFibs(num) {
  let a = 0;
  let b = 1;
  let fib = 0;
  let sumOdds = 0;
  while (num > fib) {
    let isOdd = (a + b) % 2;
    //console.log(isOdd, a, b);

    if (isOdd > 0) {
      fib = a + b;
      a = b;
      b = fib;
      sumOdds = sumOdds + (a + b);
    } else {
      fib = a + b;
      a = b;
      b = fib;
    }
  }
  return sumOdds;
}

console.log(sumFibs(1000));

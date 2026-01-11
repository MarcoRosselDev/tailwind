let num = 4;

function factorialCalculator(num) {
  let count = 1;
  for (let i = 2; i < num + 1; i++) {
    count *= i;
  }
  return count;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
//console.log(factorialCalculator(5));
console.log(resultMsg);

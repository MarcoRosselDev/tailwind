/* function summAll(arr) {
  let sum = 0;
  if (arr[0] > arr[1]) {
    let ln = arr[0] - arr[1];
    console.log(ln, "if arr1 < arr0");
    for (let i = 0; i < ln; i++) {
      sum += i;
    }
  } else {
    let ln = arr[1] - arr[0];
    console.log(ln, "if arr0 < arr1");
    for (let i = 0; i < ln; i++) {
      sum += i;
    }
  }
  return sum;
}

*/

function sumAll(arr) {
  const [a, b] = arr;
  //console.log(a, b);
  let sum = 0;
  if (a >= b) {
    for (let i = b; i <= a; i++) {
      sum += i; // esto es una sumatoria vista en calculo
    }
    return sum;
  } else {
    for (let i = a; i <= b; i++) {
      sum += i; // aqui iria la funcion (polinomio)
    }
    return sum;
  }
}

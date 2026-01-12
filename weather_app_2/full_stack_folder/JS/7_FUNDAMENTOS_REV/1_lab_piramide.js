function pyramid(char, int, bol) {
  let pir = "\n";
  if (!bol) {
    let n = int - 1;
    for (let i = 0; i < int; i++) {
      let chars = char.repeat(1 + 2 * i);
      pir = pir + " ".repeat(n) + chars + "\n";
      --n;
    }
  } else {
    let n = 0;
    for (let i = int; i > 0; i--) {
      let chars = char.repeat(1 + 2 * (i - 1));
      pir = pir + " ".repeat(n) + chars + "\n";
      ++n;
    }
  }
  return pir;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));

/* 
   o
  ooo
 ooooo
ooooooo
*/

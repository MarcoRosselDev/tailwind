function fearNotLetter(str) {
  let abcdario = "abcdefghijklmnopqrstuvwxyz";
  let check = abcdario.includes(str);
  if (check) {
    return undefined;
  } else {
    let indexChar = abcdario.indexOf(str[0]);
    for (let i = 0; i < str.length; i++) {
      //    console.log(abcdario[indexChar], str[i]);
      if (abcdario[indexChar] !== str[i]) {
        return abcdario[indexChar];
      }
      ++indexChar;
    }
  }
}

//fearNotLetter("abce");

console.log(fearNotLetter("abce")); // d
console.log(fearNotLetter("abcdefghjklmno")); // i
console.log(fearNotLetter("stvwx")); // u
console.log(fearNotLetter("bcdf")); // e
console.log(fearNotLetter("bcdef")); // undefined
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // undefined

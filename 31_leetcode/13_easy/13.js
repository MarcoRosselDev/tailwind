var romanToInt = function (s) {
  const roman_int = [1, 5, 10, 50, 100, 500, 1000];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    let n_less_1 = s[i - 1]; // puede ser undefined
    let n = s[i];
    let n_plus_1 = s[i + 1];
    if (n_less_1 != undefined && n_less_1) {
    }
    switch (s[i]) {
      case "I":
        count += 1;
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
        break;
      case "V":
        count += 5;
        break;
      case "X":
        count += 10;
        break;
      case "L":
        count += 50;
        break;
      case "C":
        count += 100;
        break;
      case "D":
        count += 500;
        break;
      case "M":
        count += 1000;
        break;
      default:
        count += 0;
        break;
    }
  }
  console.log(count);
  return count;
};

romanToInt("IIX"); // no 12 sino 8
romanToInt("III");
romanToInt("LVIII");
romanToInt("MCMXCIV");

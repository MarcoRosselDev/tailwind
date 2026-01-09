let year = 2024;

function isLeapYear(num) {
  if (num % 4 === 0) {
    if (num % 100 === 0) {
      if (num % 400 === 0) {
        return `${num} is a leap year.`;
      } else {
        return `${num} is not a leap year.`;
      }
    } else {
      return `${num} is a leap year.`;
    }
  } else {
    return `${num} is not a leap year.`;
  }
}

let result = isLeapYear(year);
console.log(result);

/* let result = isLeapYear(year);
if (str % 400 === 0) {
  str = `${num} es un año bisiesto.`;
} else if (str % 100 === 0) {
  str = `${num} no es un año bisiesto.`;
}
console.log(result); */

/* isLeapYear(2024);
isLeapYear(2000);
isLeapYear(1900); */
console.log(isLeapYear(2024));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));

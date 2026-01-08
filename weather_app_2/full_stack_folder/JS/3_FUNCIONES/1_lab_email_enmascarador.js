function maskEmail(email) {
  const index_of_arroba = email.indexOf("@") - 1;
  let str = email[0];
  for (let i = 1; i < email.length; i++) {
    if (i < index_of_arroba) {
      str += "*";
    } else {
      str += email[i];
    }
  }
  return str;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));

/* tests:

maskEmail("apple.pie@example.com")
maskEmail("freecodecamp@example.com")
maskEmail("info@test.dev")
maskEmail("user@domain.org")
*/

maskEmail("apple.pie@example.com");
maskEmail("freecodecamp@example.com");
maskEmail("info@test.dev");
maskEmail("user@domain.org");

//console.log("XXX".replaceAll("X", "*"));

function generatePassword(ln) {
  // length: 72
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < ln; i++) {
    password += chars[Math.round(Math.random() * 72)];
  }
  return password;
}

let password = generatePassword(6);
console.log("Contraseña generada: " + password);

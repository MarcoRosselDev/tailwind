// como los strings son inmutables replace retorna un nuevo string modificado.

let text = "I love JavaScript!";
console.log(text); // "I love JavaScript!"
let newText = text.replace("JavaScript", "coding");
console.log(newText); // "I love coding!"

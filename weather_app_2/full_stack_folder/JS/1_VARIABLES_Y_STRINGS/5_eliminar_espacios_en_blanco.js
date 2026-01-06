let message = "   Hello!   ";
console.log(message); // "   Hello!   "
let trimmedMessage = message.trim();
console.log(trimmedMessage); // "Hello!"

/* trim start y end consideran solo los espacios que indican sus nombres */
let greeting = "   Hello!   ";
console.log(greeting); // "   Hello!   "
let trimmedStart = greeting.trimStart();
console.log(trimmedStart); // "Hello!   "

let trimmedEnd = greeting.trimEnd();
console.log(trimmedEnd); // "   Hello!"

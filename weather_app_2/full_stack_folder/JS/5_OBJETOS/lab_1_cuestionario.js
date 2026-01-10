let questions = [
  {
    category: "cine",
    question: "cuantos premios oscar gano la pelicula parasite ?",
    choices: ["cuatro", "dos", "tres"],
    answer: "cuatro",
  },
  {
    category: "cultura",
    question: "cual es la capital de chile ?",
    choices: ["Santiago", "Concepción", "Valparaiso"],
    answer: "Santiago",
  },
  {
    category: "arquitectura",
    question: "Cual de estos arquitectos es chileno ?",
    choices: ["Shigeru Ban", "Ludwig Mies van der Rohe", "Alejandro Aravena"],
    answer: "Alejandro Aravena",
  },
  {
    category: "futbol",
    question: "Cual es el pais con mas copas del mundo ?",
    choices: ["Brazil", "Argentina", "Italia"],
    answer: "Brazil",
  },
  {
    category: "cine",
    question: "Cuantas partes tiene la saga Harry Potter?",
    choices: ["8", "6", "7"],
    answer: "8",
  },
];

/* let arr_questions = [];
for (let i = 0; i < questions.length; i++) {
  arr_questions.push(questions[i].question);
}

console.log(arr_questions); */

function getRandomQuestion(arr) {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * 3)];
}

function getResults(obj, answ) {
  if (answ === obj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${obj.answer}`;
  }
}

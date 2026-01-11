function getVowelCount(sentence) {
  let bocales = "aeiouAEIOU";
  let count = 0;
  for (const char of sentence) {
    if (bocales.includes(char)) {
      count += 1;
    }
  }
  return count;
}

//console.log(getVowelCount("askdljaaa"));

function getConsonantCount(sentence) {
  let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let count = 0;
  for (const char of sentence) {
    if (consonantes.includes(char)) {
      count += 1;
    }
  }
  return count;
}

//console.log(getConsonantCount("lllauuusl"));

function getPunctuationCount(sentence) {
  let puntuaciones = `".,;:...¿?¡!''()[]{}«»—-_/\|*@"`;
  let count = 0;
  for (const char of sentence) {
    if (puntuaciones.includes(char)) {
      count += 1;
    }
  }
  return count;
}

function getWordCount(sentence) {
  if (sentence.length > 1) {
    let splt = sentence.split(" ");
    if (splt.length >= 1 && !splt.includes("")) {
      return splt.length;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

console.log(getWordCount(""));
console.log(getWordCount("   "));
console.log(getWordCount("When are you gonna start learning to code?"));

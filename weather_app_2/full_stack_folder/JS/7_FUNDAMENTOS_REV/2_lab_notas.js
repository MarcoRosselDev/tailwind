function getAverage(arr) {
  let count = 0;
  for (const nota of arr) {
    count += nota;
  }
  return count / arr.length;
}

//console.log(getAvarage([7, 6, 5, 7, 7]));

function getGrade(score) {
  let grade = "";
  switch (true) {
    case score === 100:
      grade = "A+";
      break;
    case score >= 90 && score < 100:
      grade = "A";
      break;
    case score >= 80 && score <= 89:
      grade = "B";
      break;
    case score >= 70 && score <= 79:
      grade = "C";
      break;
    case score >= 60 && score <= 69:
      grade = "D";
      break;
    case score >= 0 && score <= 59:
      grade = "F";
      break;
    default:
      break;
  }
  return grade;
}

function hasPassingGrade(score) {
  let grade = getGrade(score);
  if (grade !== "F") {
    return true;
  } else {
    return false;
  }
}

function studentMsg(arrScores, score) {
  let promedioClase = getAverage(arrScores);
  let isPassing = hasPassingGrade(score);
  let grade = getGrade(score);
  if (isPassing) {
    return `Class average: ${promedioClase}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${promedioClase}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

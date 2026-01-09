let lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(str + " added to the end of the lunch menu.");
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(str + " added to the start of the lunch menu.");
  return arr;
}

function removeLastLunch(arr) {
  const check = arr.pop();
  if (check !== undefined) {
    console.log(check + " removed from the end of the lunch menu.");
    return arr;
  } else {
    console.log("No lunches to remove.");
    return arr;
  }
}

function removeFirstLunch(arr) {
  const check = arr.shift();
  if (check !== undefined) {
    console.log(check + " removed from the start of the lunch menu.");
    return arr;
  } else {
    console.log("No lunches to remove.");
    return arr;
  }
}

function getRandomLunch(arr) {
  let rnd = Math.round(Math.random() * (arr.length - 1));
  const check = arr[rnd];

  if (arr.length > 0) {
    console.log("Randomly selected lunch: " + check);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {
  if (arr.length > 0) {
    const lista = arr.join(", ");
    console.log("Menu items: " + lista);
  } else {
    console.log("The menu is empty.");
  }
}

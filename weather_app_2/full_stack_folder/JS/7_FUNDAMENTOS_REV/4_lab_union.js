/* function uniteUnique(...arrs) {
  let arrLen = 0;
  for (const arr of arrs) {
    if (arr.length > arrLen) {
      arrLen = arr.length;
    }
  }

  console.log("this is the max lenth of the arrays :", arrLen);

  let main_arr = [];

  for (let i = 0; i < arrLen; i++) {
    for (const arr of arrs) {
      //console.log(arr[i], "iteration number :" + i);
      let check_arr = main_arr.includes(arr[i]);
      if (!check_arr && arr[i] !== undefined) {
        main_arr.push(arr[i]);
      }
    }
  }
  return main_arr;
}

*/

function uniteUnique(...arrs) {
  let mainArr = [];
  for (const arr of arrs) {
    for (let i = 0; i < arr.length; i++) {
      if (!mainArr.includes(arr[i])) {
        mainArr.push(arr[i]);
      }
    }
  }
  return mainArr;
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);

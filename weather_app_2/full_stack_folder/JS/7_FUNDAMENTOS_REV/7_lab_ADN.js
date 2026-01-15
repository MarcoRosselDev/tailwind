function pairElement(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let match = "";
    switch (str[i]) {
      case "A":
        match = "T";
        break;
      case "T":
        match = "A";
        break;
      case "C":
        match = "G";
        break;
      case "G":
        match = "C";
        break;
      default:
        break;
    }
    arr.push([str[i], match]);
  }
  return arr;
}

console.log(pairElement("ATCG"));

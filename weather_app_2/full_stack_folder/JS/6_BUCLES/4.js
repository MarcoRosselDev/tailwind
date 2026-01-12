for (let i = 0; i < 25; i += 2) {
  if (i % 5 === 0) {
    continue;
  }
  if (i % 13 === 0) {
    break;
  }
  console.log(i);
}

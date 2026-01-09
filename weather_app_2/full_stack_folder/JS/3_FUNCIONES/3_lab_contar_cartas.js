let count = 0;

function cardCounter(card) {
  if (
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A" ||
    card == 10
  ) {
    --count;
  } else {
    let card_number = +card;
    switch (card_number) {
      case 2:
        ++count;
        break;
      case 3:
        ++count;
        break;
      case 4:
        ++count;
        break;
      case 5:
        ++count;
        break;
      case 6:
        ++count;
        break;
      default:
        break;
    }
  }

  return count > 0 ? `${count} Bet` : `${count} Hold`;
}

cardCounter(2);
cardCounter(3);
cardCounter(4);
cardCounter(5);
console.log(cardCounter(6));

/* let count = 0;

function cardCounter(card) {
  if (+card >= 2 || +card <= 6) {
    count++;
  } else {
    switch (card) {
      case "A" || "J" || "K" || "Q" || "10":
        count--;
        break;
      default:
        break;
    }
  }
  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}

console.log(cardCounter("K"));
 */

let inventory = [];

function findProductIndex(productName) {
  return inventory.findIndex((obj) => obj.name === productName.toLowerCase());
}

function addProduct(productObject) {
  let productName = productObject.name.toLowerCase();
  let indexProduct = findProductIndex(productName);
  if (indexProduct === -1) {
    inventory.push({ name: productName, quantity: productObject.quantity });
    console.log(productName + " added to inventory");
  } else {
    inventory[indexProduct].quantity += productObject.quantity;
    console.log(inventory[indexProduct].name + " quantity updated");
  }
}

function removeProduct(productName, quantity) {
  let name = productName.toLowerCase();
  let indexProduct = findProductIndex(name);
  if (indexProduct !== -1) {
    let count = inventory[indexProduct].quantity;
    if (quantity < count) {
      inventory[indexProduct].quantity -= quantity;
      console.log(
        `Remaining ${inventory[indexProduct].name} pieces: ${inventory[indexProduct].quantity}`
      );
    } else if (quantity === count || quantity > count) {
      console.log(
        `Not enough ${inventory[indexProduct].name} available, remaining pieces: ${inventory[indexProduct].quantity}`
      );
      inventory.splice(indexProduct, 1);
    }
  } else {
    console.log(name + " not found");
  }
}

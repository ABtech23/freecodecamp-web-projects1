
let inventory = [];

let findProductIndex = (productName) => {
  return inventory.findIndex(
    product => product.name === productName.toLowerCase()
  );
};

let addProduct = (product) => {
  let productName = product.name.toLowerCase();
  let index = findProductIndex(productName);
  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${productName} quantity updated`);
  } else {
    inventory.push({
      name: productName,
      quantity: product.quantity
    });
    console.log(`${productName} added to inventory`);
  }
};

let removeProduct = (productName, quantity) => {
  let name = productName.toLowerCase();
  let index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  if (inventory[index].quantity < quantity) {
    console.log(
      `Not enough ${name} available, remaining pieces: ${inventory[index].quantity}`
    );
    return;
  }

  inventory[index].quantity -= quantity;

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  } else {
    console.log(
      `Remaining ${name} pieces: ${inventory[index].quantity}`
    );
  }
};

addProduct({ name: "FLOUR", quantity: 5 });
addProduct({ name: "FLOUR", quantity: 5 });

removeProduct("FLOUR", 5);
removeProduct("FLOUR", 5);

removeProduct("FLOUR", 10);
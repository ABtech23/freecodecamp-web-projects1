let lunches = [];

let addLunchToEnd = (arr, lunch) => {
  arr.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return arr;
};

let addLunchToStart = (arr, lunch) => {
  arr.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return arr;
};

let removeLastLunch = (arr) => {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }

  return arr;
};

let removeFirstLunch = (arr) => {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }

  return arr;
};

let getRandomLunch = (arr) => {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    let randomIndex = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
  }
};

let showLunchMenu = (arr) => {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
};

addLunchToEnd(lunches, "Tacos");
showLunchMenu(lunches);

addLunchToEnd(["Pizza", "Tacos"], "Burger");
showLunchMenu(lunches);

addLunchToStart(lunches, "Sushi");
showLunchMenu(lunches);

addLunchToStart(["Burger", "Sushi"], "Pizza");
showLunchMenu(lunches);

removeLastLunch(lunches);
showLunchMenu(lunches);

removeLastLunch(["Stew", "Soup", "Toast"]);
showLunchMenu(lunches);

removeLastLunch(["Sushi", "Pizza", "Noodles"]);
showLunchMenu(lunches);

removeFirstLunch(lunches);
showLunchMenu(lunches);

removeFirstLunch(["Salad", "Eggs", "Cheese"]);
showLunchMenu(lunches);

removeFirstLunch(["Sushi", "Pizza", "Burger"]);
showLunchMenu(lunches);

getRandomLunch(lunches);

showLunchMenu(["Greens", "Corns", "Beans"]);

showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);
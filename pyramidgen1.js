let pyramid = (str1, num1, bool1) => {
  let result = "";

  for (let i = 0; i < num1; i++) {
    let spaces = "";
    let chars = "";

    let row = bool1 ? num1 - i - 1 : i;

    for (let j = 0; j < num1 - row - 1; j++) {
      spaces += " ";
    }
    for (let k = 0; k < 2 * row + 1; k++) {
      chars += str1;
    }

    result += "\n" + spaces + chars;
  }

  return result + "\n";
};

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
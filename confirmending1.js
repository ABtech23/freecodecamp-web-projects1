let confirmEnding = (one, two) => {
  if (one.slice(-two.length) === two) {
    return true;
  }
  else {
    return false;
  }
};

let one1 = "Bastian";
let two1 = "n";
console.log(confirmEnding(one1, two1));

one1 = "Congratulation";
two1 = "on";
console.log(confirmEnding(one1, two1));

one1 = "Connor";
two1 = "n";
console.log(confirmEnding(one1, two1));

one1 = "Walking on water and developing software from a specification are easy if both are frozen";
two1 = "specification";
console.log(confirmEnding(one1, two1));

one1 = "Abstraction";
two1 = "action";
console.log(confirmEnding(one1, two1));
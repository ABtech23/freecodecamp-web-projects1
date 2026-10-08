const convertCtoF = (celsius) => {
  let fahrenheit;
  fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
console.log(convertCtoF(0));
// function convertCtoF(celsius) {
//   let fahrenheit;
//   fahrenheit = celsius*(9/5)+32;
//   return fahrenheit;
// }
// console.log(convertCtoF(0));

let count = 0;

const cardCounter = (card) => {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {

  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  }

  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
};

//let card = [1,2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
let card = 6;
console.log(cardCounter(card));
card = "A"
console.log(cardCounter(card));
card = 7;
console.log(cardCounter(card));
card = 10;
console.log(cardCounter(card));
card = "K";
console.log(cardCounter(card));
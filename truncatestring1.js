const truncateString = (strin, num) => {
  if (strin.length > num) {
    return strin.slice(0, num) + "...";
  } else {
    return strin;
  }
};

let string1 = "A-tisket a-tasket A green and yellow basket";
let num1 = 8;
console.log(truncateString(string1, num1));

string1 = "Peter Piper Picked a peck of pickled peppers";
num1 = 11;
console.log(truncateString(string1, num1));

string1 = "A-tisket a-tasket A green and yellow basket";
num1 = string1.length;
console.log(truncateString(string1, num1));

string1 = "A-tisket a-tasket A green and yellow basket";
num1 = string1.length;
console.log(truncateString(string1, num1));

string1 = "A-";
console.log(truncateString(string1, 1));

string1 = "Absolutely Longer";
console.log(truncateString(string1, 2));


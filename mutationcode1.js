let mutation = (words) => {

  let first = words[0].toLowerCase();
  let second = words[1].toLowerCase();

  for (let char of second) {
    if (!first.includes(char)) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));

let fearNotLetter = (letters) => {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== alpha[alpha.indexOf(letters[0]) + i]) {
      return alpha[alpha.indexOf(letters[0]) + i];
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); 
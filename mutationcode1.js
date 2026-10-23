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
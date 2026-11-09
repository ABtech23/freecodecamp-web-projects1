
let titleCase = (str) => {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() +
      words[i].slice(1).toLowerCase();
  }
  return words.join(" ");
}

console.log(titleCase("I like to code"));
console.log(titleCase("javaScript is fun"));
console.log(titleCase("web development is awesome"));

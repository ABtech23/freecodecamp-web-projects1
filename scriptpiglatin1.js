const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const translatePigLatin = (str) => {
  let vowel = /^[aeiou]/i;
  if (vowel.test(str)) {
    return str + "way";
  }
  if (!/[aeiou]/i.test(str)) {
    return str + "ay";
  }
  let vowelIndex = str.search(/[aeiou]/i);
  return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
}

inputText.addEventListener("input", () => {
  const input = inputText.value;
  const output = translatePigLatin(input);

  outputText.textContent = output;
});

console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("rhythm"));
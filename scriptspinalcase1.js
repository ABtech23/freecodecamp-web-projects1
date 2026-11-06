const inputText = document.getElementById("inputText");
//const convertButton = document.getElementById("convertButton");
const outputText = document.getElementById("outputText");

const spinalCase = (str) => {
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  str = str.replace(/[ _]/g, "-");
  str = str.toLowerCase();
  return str;
}

inputText.addEventListener("input", () => {
  const input = inputText.value;
  const output = spinalCase(input);
  outputText.textContent = output;
});


console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));

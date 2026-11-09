
let pairElement = (element) => {
  let char = "";
  let arr1 = [];
  for (let i = 0; i < element.length; i++) {
    // char = element[i];
    // let matchingpair = element[i+1]
    // arr1.push([char, matchingpair]);
    for (let j = i + 1; j < element.length; j++) {
      char = element[i];
      let matchingpair = element[j];
      arr1.push([char, matchingpair]);
      arr1.push([matchingpair, char]);
    }
  }
  return arr1
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
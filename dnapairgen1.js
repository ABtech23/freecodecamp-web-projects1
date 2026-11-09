
let pairElement = (element) => {
  let char = "";
  let arr1 = [];
  for (let i = 0; i < element.length; i++) {
    char = element[i];
    let matchingpair = "";
    if (char === "A") {
      matchingpair = "T";
    } else if (char === "T") {
      matchingpair = "A"
    } else if (char === "C") {
      matchingpair = "G"
    } else if (char === "G") {
      matchingpair = "C"
    }
    arr1.push([char, matchingpair]);
  }
  return arr1
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

//A – Adenine
// T – Thymine
// C – Cytosine
// G – Guanine

//DNA stands for Deoxyribonucleic Acid.
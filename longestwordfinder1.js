
let findLongestWordLength = (string1) => {
  let words = string1.split(" ");
  let longestLength = 0;

  for (let word of words) {
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }

  return longestLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWordLength("May the force be with you"));

console.log(findLongestWordLength("Googling do a barrel roll"));

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
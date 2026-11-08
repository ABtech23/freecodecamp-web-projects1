
let uniteUnique = (...arr) => {
  let result = [];
  arr.forEach((currentArray) => {
    currentArray.forEach((number) => {
      if (!result.includes(number)) {
        result.push(number);
      }
    });
  });
  return result;
  //return result.sort((a, b) => a - b);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]))
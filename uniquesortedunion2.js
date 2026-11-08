
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

let numbers1 = [1, 3, 2, 3, 8];
let numbers2 = [5, 2, 1, 4, 9];
let numbers3 = [2, 1, 6, 7, 8];

let sortedUnion = (...arr) => {
  let result = [];

  arr.forEach((currentArray) => {
    currentArray.forEach((number) => {
      if (!result.includes(number)) {
        result.push(number);
      }
    });
  });

  return result.sort((a, b) => a - b);
};

console.log(sortedUnion(numbers1, numbers2, numbers3));
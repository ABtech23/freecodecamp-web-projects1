
let sumAll = (arr) => {
  let start = Math.min(arr[0], arr[1]);
  let end = Math.max(arr[0], arr[1]);

  let numbers = Array.from(
    { length: end - start + 1 },
    (_, index) => start + index
  );

  let result = 0;

  numbers.forEach((number) => {
    result += number;
  });

  return result;
};

console.log(sumAll([1, 4])); // 10
console.log(sumAll([4, 1])); // 10
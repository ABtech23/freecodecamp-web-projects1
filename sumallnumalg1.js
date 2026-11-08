
let sumAll = (arr) => {
  let start = Math.min(arr[0], arr[1]);
  let end = Math.max(arr[0], arr[1]);

  let numbers = [];

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  let result = 0;

  numbers.forEach((number) => {
    result += number;
  });

  return result;
};

console.log(sumAll([1, 4]));
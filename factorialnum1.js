let num = 5;

let factorialCalculator = (num1) => {

  if (num1 <= 1) {
    return 1;
  }

  else {
    return num1 * factorialCalculator(num1 - 1);
  }
};

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
// console.log(result); 
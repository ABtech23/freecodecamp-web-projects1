
let sumFibs = (num) => {
  let n1 = 0;
  let n2 = 1;
  let sum = 0;
  let next = 1;
  while (next <= num) {
    if (next % 2 !== 0) {
      sum += next;
    }
    n1 = n2;
    n2 = next;
    next = n1 + n2;
  }

  return sum + 1;
} // 1 1 2 3 5 8 13 21 34 55

console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
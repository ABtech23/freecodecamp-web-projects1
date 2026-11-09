
let sumFibs = (num) => {
  let n1 = 0;
  let n2 = 1;
  // if(num>=1){
  //   console.log(n2);
  // }
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    let next = n1 + n2
    if (next % 2 !== 0) {
      sum += next;
    }
    n1 = n2;
    n2 = next;
  }
  return sum - 1
} // 1 1 2 3 5 8 13 21 34 55

console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
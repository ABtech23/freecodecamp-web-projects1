function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [startNum];
  }

  return rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

console.log(rangeOfNumbers(3, 9));
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));
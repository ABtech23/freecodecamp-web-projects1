
let bouncer = (arr) => {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      arr1.push(arr[i]);
    }
  }

  return arr1;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([null, NaN, 1, 2, undefined]));


const frankenSplice = (arr1,arr2,index) => {
  if (index < 0) {
    return "Invalid index";
  }
  let newArr = arr2.slice();
  newArr.splice(index, 0, ...arr1);
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))
console.log(frankenSplice([], [4, 5], 1));
console.log(frankenSplice([1, 2, 3], [], 0));
console.log(frankenSplice([1, 2], [3, 4], 0));
console.log(frankenSplice([1, 2], [3, 4], 2));
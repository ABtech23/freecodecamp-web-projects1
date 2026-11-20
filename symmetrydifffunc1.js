
const diffArray = (arr1, arr2) => {
  let result = [];
  result.push(arr1);
  result.push(arr2);
  return result.flat().filter((item) => {
    return !(arr1.includes(item) && arr2.includes(item))
  })
}

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]))
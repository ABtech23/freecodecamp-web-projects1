
const steamrollArray = (arr) => {
  let result = [];
  arr.forEach((item)=>{
    if (Array.isArray(item)){
      result.push(...steamrollArray(item));
    }
    else {
      result.push(item)
    }
  });
  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))
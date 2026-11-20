
const destroyer = (arr, ...that) => {
  return arr.filter(item => {
    //return item === that
    return !that.includes(item)
    });
}


console.log( destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) )
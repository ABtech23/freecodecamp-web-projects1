function booWho(a) {
  if (a === true || a === false) {
    return true;
  }
  else if (a == 0) {
    return;
  }
  else if (a == 1) {
    return false;
  }
  else {
    return false;
  }
}
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ "a": 1 }));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho("a"));
console.log(booWho("true"));
console.log(booWho("false"))
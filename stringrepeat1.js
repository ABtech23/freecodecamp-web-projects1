let repeatStringNumTimes = (strin, num) => {

  if (num <= 0) {
    return "";
  }

  return strin + repeatStringNumTimes(strin, num - 1);
};

console.log(repeatStringNumTimes("*", 3)); 
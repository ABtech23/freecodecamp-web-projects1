const isLeapYear = (year) => {
  if (year % 400 === 0) {
    return `${year} is a leap year.`;
  } else if (year % 100 === 0) {
    return `${year} is not a leap year.`;
  } else if (year % 4 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
};

let year = 2024;
let result = isLeapYear(year);

if (result) {
  result = `${year} is a leap year.`;
} else {
  result = `${year} is not a leap year.`;
}

console.log(result);

year = 2000;
result = isLeapYear(year);

if (result) {
  result = `${year} is a leap year.`;
} else {
  result = `${year} is not a leap year.`;
}

console.log(result);

year = 1900;
result = isLeapYear(year);

if (result) {
  result = `${year} is a leap year.`;
} else {
  result = `${year} is not a leap year.`;
}

console.log(result);

year = 1901;
result = isLeapYear(year);

if (result) {
  result = `${year} is a leap year.`;
} else {
  result = `${year} is not a leap year.`;
}

console.log(result);
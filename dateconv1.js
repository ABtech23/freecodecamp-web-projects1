
let currentDate = new Date();

let currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

let formatDateMMDDYYYY = (date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`
}

let formatDateLong = (date) => {
   let day = date.getDate();
  let month = date.toLocaleString("en-US", { month: "long" });
  let year = date.getFullYear();
  return `Formatted Date (Month Day, Year): ${month} ${day}, ${year}`;
}


console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));
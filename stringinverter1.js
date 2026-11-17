
const reverseString = (str) => {
  
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"))
console.log(reverseString("Hello World"));
console.log(reverseString("12345"));


let isPalindrome = (str) => {
  return str === reverseString(str);
}

console.log(isPalindrome("yellowolley"));
console.log(isPalindrome("hello")); 
const myReplace = (str1, str2, str3) => {
  let newWord = str3;

  if (str2[0] === str2[0].toUpperCase()) {
    newWord = str3[0].toUpperCase() + str3.slice(1);
  } else {
    newWord = str3[0].toLowerCase() + str3.slice(1);
  }

  return str1.replace(str2, newWord);
};


console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
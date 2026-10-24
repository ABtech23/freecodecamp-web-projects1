let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

let lookUpProfile = (person, thing) => {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === person) {
      if (contacts[i].hasOwnProperty(thing)) {
        return contacts[i][thing];
      } else {
        return "No such property";
      }
    }
  }

  return "No such contact";
}

console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"))
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Akira", "address"));
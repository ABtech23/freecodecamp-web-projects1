const maskEmail = (email) => {
  const atIndex = email.indexOf("@");

  let username = email.slice(0, atIndex);
  let domain = email.slice(atIndex);

  username =
    username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1];

  return username + domain;
};

let email = "apple.pie@example.com";
console.log(maskEmail(email));
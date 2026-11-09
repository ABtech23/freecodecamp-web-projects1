
let convertHTML = (str) => {
  str = str.replaceAll("&", "&amp;");
  str = str.replaceAll("<", "&lt;");
  str = str.replaceAll(">", "&gt;");
  str = str.replaceAll('"', "&quot;");
  str = str.replaceAll("'", "&apos;");

  return str;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));

console.log(convertHTML('Stuff in "quotation marks"'));

// let convertHTML = (str) => {
//   const entities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;"
//   };

//   return str.replace(/[&<>"']/g, (char) => entities[char]);
// }

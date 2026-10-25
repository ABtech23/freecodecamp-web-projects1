
function chunkArrayInGroups(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

const arrayInput = document.querySelector("#array");
const sizeInput = document.querySelector("#size");
const result = document.querySelector("#result");

document.querySelector("#run").addEventListener("click", () => {
  const arr = arrayInput.value.split(",").map(item => item.trim());
  const size = Number(sizeInput.value);

  result.replaceChildren();

  if (!arr.length || !Number.isInteger(size) || size < 1) {
    result.textContent = "Enter an array and a valid group size.";
    return;
  }

  const chunks = chunkArrayInGroups(arr, size);

  chunks.forEach(chunk => {
    const group = document.createElement("div");
    group.className = "group";

    chunk.forEach(item => {
      const element = document.createElement("span");
      element.className = "item";
      element.textContent = item;
      group.appendChild(element);
    });

    result.appendChild(group);
  });
});

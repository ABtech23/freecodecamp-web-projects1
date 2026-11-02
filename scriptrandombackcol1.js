const darkColorsArr = [
  "#000033", "#00004D", "#000066",
  "#000080", "#000099", "#00004A",
  "#001040", "#00154D", "#001A57",
  "#002060", "#00264D", "#002B5C",
  "#003153", "#003366", "#003B5C",
  "#004080", "#004466", "#004C66",
  "#005073", "#005580", "#003366",
  "#003F5C", "#004D66", "#005F73",
  "#006080", "#064273", "#082567",
  "#0A2351", "#0B1D51", "#0D1B2A",
  "#102A43", "#123456", "#142850",
  "#152238", "#162447", "#191970",
  "#1B263B", "#1C2951", "#1D3557",
  "#1E3A5F", "#202A44", "#212F45",
  "#23395B", "#243B55", "#253858",
  "#273746", "#283747", "#2C3E50"
];

function getRandomIndex() {
  const randomIndex = Math.floor(
    darkColorsArr.length * Math.random()
  );
  return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement =
  document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", changeBackgroundColor);
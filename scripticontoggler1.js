
const buttons = document.querySelectorAll(".favorite-icon");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const isFilled = button.classList.toggle("filled");

    button.innerHTML = isFilled ? "&#10084;" : "&#9825;";
  });
});


console.log("hello world")
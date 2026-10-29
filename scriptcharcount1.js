
const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

const maxCharacters = 50;

textInput.addEventListener("input", function () {
    if (textInput.value.length > maxCharacters) {
        textInput.value = textInput.value.slice(0, maxCharacters);
    }

    const currentCount = textInput.value.length;

    charCount.textContent =
        `Character Count: ${currentCount}/${maxCharacters}`;

    if (currentCount === maxCharacters) {
        charCount.classList.add("limit-reached");
    } else {
        charCount.classList.remove("limit-reached");
    }
});

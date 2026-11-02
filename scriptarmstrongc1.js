const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const isArmStrong = (text) => {
    const digits = text.split("");

    const power = digits.length;

    const sum = digits.reduce((total, current) => {
        return total + Number(current) ** power;
    }, 0);

    return sum === Number(text);
};

checkBtn.addEventListener("click", () => {

    if (textInput.value.trim() === "") {
        alert("Please input a value");
        return;
    }

    const originalText = textInput.value;
    result.textContent = isArmStrong(originalText)
        ? `${originalText} is a armstrong number`
        : `${originalText} is not a armstrong number`;

    textInput.value = "";
});
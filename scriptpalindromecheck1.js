const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (text) => {

    const cleanedText = text.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
    const reversedText = cleanedText.split("").reverse().join("");
    return cleanedText === reversedText;
};

checkBtn.addEventListener("click", () => {

    if (textInput.value.trim() === "") {
        alert("Please input a value");
        return;
    }

    const originalText = textInput.value;
    result.textContent = isPalindrome(originalText)
        ? `${originalText} is a palindrome`
        : `${originalText} is not a palindrome`;

    textInput.value = "";
});
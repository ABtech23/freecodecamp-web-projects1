const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result")

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

let getFlags = (flag) => {
    let flags = "";
    if (caseInsensitiveFlag.checked) {
        flags += "i";
    }
    if (globalFlag.checked) {
        flags += "g";
    }
    return flags;
}

testButton.addEventListener("click", () => {

    const regex = new RegExp(regexPattern.value, getFlags());

    const originalText = stringToTest.textContent;

    const matches = originalText.match(regex);

    if (matches) {

        const foundMatches = regex.global ? matches : [matches[0]];

        testResult.textContent = foundMatches.join(", ");

        stringToTest.innerHTML = originalText.replace(
            regex,
            match => `<span class="highlight">${match}</span>`
        );
    } else {
        testResult.textContent = "no match";
    }
});

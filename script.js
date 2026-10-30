
const helloButton = document.getElementById("hello-btn");
const message = document.getElementById("message");

helloButton.addEventListener("click", () => {
    message.textContent = "Hello! Welcome to my portfolio";
});

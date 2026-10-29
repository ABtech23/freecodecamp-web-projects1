
const closeButton = document.getElementById("close-btn");
const lightBoxImage = document.getElementById("lightbox-image");
const lightbox = document.querySelector(".lightbox");

const clickedImages = document.querySelectorAll(".gallery-item");

clickedImages.forEach((image) => {
    image.addEventListener("click", () => {
        lightBoxImage.src = image.src.replace("-thumbnail", "");
        lightbox.style.display = "flex";
    });
});

closeButton.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

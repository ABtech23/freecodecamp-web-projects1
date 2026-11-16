const drumMachine = document.getElementById("drum-machine");
const padBank = document.getElementById("pad-bank");
const display = document.getElementById("display");
const drumPads = document.querySelectorAll(".drum-pad");
const volume = document.getElementById("volume");
const volumeValue = document.getElementById("volume-value");

drumPads.forEach((pad) => {
    pad.addEventListener("click", () => {
        const audio = pad.querySelector(".clip");

        audio.currentTime = 0;
        audio.play();

        display.textContent = pad.id;
    });
});

document.addEventListener("keydown", (e) => {
    const key = e.key.toUpperCase();
    const audio = document.getElementById(key);

    if (audio && audio.classList.contains("clip")) {
        const pad = audio.closest(".drum-pad");

        audio.currentTime = 0;
        audio.play();

        display.textContent = pad.id;

        pad.classList.add("hover");
    }
});

document.addEventListener("keyup", (e) => {
    const key = e.key.toUpperCase();
    const audio = document.getElementById(key);

    if (audio && audio.classList.contains("clip")) {
        const pad = audio.closest(".drum-pad");

        pad.classList.remove("hover");
    }
});

let volumeTimer;

drumPads.forEach((pad) => {
    const audio = pad.querySelector(".clip");
    audio.volume = Number(volume.value);
});

volume.addEventListener("input", () => {
    drumPads.forEach((pad) => {
        const audio = pad.querySelector(".clip");
        audio.volume = Number(volume.value);
    });

    volumeValue.textContent = `${Math.round(volume.value * 100)}%`;

    clearTimeout(volumeTimer);

    volumeTimer = setTimeout(() => {
        volumeValue.textContent = "";
    }, 1500);
});

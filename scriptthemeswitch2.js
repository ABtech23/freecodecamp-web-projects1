const themeSwitcherBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const status = document.getElementById("status");

const themes = [
  {
    name: "dark",
    message: "Dark theme is on!"
  },
  {
    name: "deepocean",
    message: "Deep Ocean theme is on!"
  },
  {
    name: "light",
    message: "Light theme is on!"
  },
  {
    name: "nord",
    message: "Nord theme is on!"
  }
];

themeSwitcherBtn.addEventListener("click", () => {
  const isHidden = themeDropdown.hasAttribute("hidden");

  if (isHidden) {
    themeDropdown.removeAttribute("hidden");
    themeSwitcherBtn.setAttribute("aria-expanded", "true");
  } else {
    closeDropdown();
  }
});

const closeDropdown = () => {
  themeDropdown.setAttribute("hidden", "");
  themeSwitcherBtn.setAttribute("aria-expanded", "false");
}

themeDropdown.addEventListener("click", (event) => {
  const selectedTheme = event.target.closest("li");

  if (!selectedTheme || !themeDropdown.contains(selectedTheme)) {
    return;
  }

  const themeName = selectedTheme.textContent.trim().toLowerCase();

  const theme = themes.find((item) => item.name === themeName);

  if (!theme) {
    return;
  }

  themes.forEach((item) => {
    const className = "theme-" + item.name.replace(/\s+/g, "-");
    document.body.classList.remove(className);
  });

  const newThemeClass = "theme-" + theme.name.replace(/\s+/g, "-");
  document.body.classList.add(newThemeClass);

  status.textContent = theme.message;

  closeDropdown();
});

themeDropdown.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    const selectedTheme = event.target.closest("li");

    if (selectedTheme) {
      event.preventDefault();
      selectedTheme.click();
    }
  }
});


let themeSwitcherBtn = document.getElementById("theme-switcher-button");
let themeDropdown = document.getElementById("theme-dropdown");
let status = document.getElementById("status");

const themes = [
  {
    name: "dark",
    message: "Dark theme is on!"
  },
  {
    name: "deep ocean",
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
  if (themeDropdown.hasAttribute("hidden")) {
    themeDropdown.removeAttribute("hidden");
    themeSwitcherBtn.setAttribute("aria-expanded", "true");
  } else {
    closeDropdown();
  }
});

const closeDropdown = () => {
  themeDropdown.setAttribute("hidden", "");
  themeSwitcherBtn.setAttribute("aria-expanded", "false");
};

themeDropdown.addEventListener("click", (event) => {

  const selectedTheme = event.target;

  const themeName = selectedTheme.id.replace("theme-", "");

  const theme = themes.find(theme => {
    return theme.name === themeName.replace("-", " ");
  });

  if (!theme) return;

  document.body.className = `theme-${themeName}`;

  status.textContent = theme.message;

  closeDropdown();
});

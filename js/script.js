const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // Show Light Icon
  themeToggleDarkIcon.classList.remove("hidden");
} else {
  themeToggleLightIcon.classList.remove("hidden");
}

// Listen For Toggle Button Click
themeToggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  // Toggle Icon
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // Check To see if Set In Localstorage
  if (localStorage.getItem("color-theme")) {
    // If light, turn to dark and save to local storage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // If not in localstorage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}

btn.addEventListener("click", navToggle);
linkForm.addEventListener("submit", formSubmit);

// Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

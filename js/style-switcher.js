// Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style-switcher
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

window.addEventListener("touchmove", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// Theme colors
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
  localStorage.setItem("preferred-color", color);
}

// Theme light and dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
  localStorage.setItem("preferred-theme", document.body.classList.contains("dark") ? "dark" : "light");
});

window.addEventListener("load", () => {
  const preferredColor = localStorage.getItem("preferred-color") || "color-1";
  const preferredTheme = localStorage.getItem("preferred-theme") || "dark";

  setActiveStyle(preferredColor);

  if (preferredTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

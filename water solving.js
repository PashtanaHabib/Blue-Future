// =====================================================
// WATER SOLVING JAVASCRIPT
// =====================================================

// =====================================================
// PAGE LOAD
// =====================================================

document.addEventListener("DOMContentLoaded", function () {
  // ===================================================
  // SOLUTION CARDS
  // ===================================================

  const cards = document.querySelectorAll(".build-card");

  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
      card.style.transform = "translateY(0)";
    });
  });

  // ===================================================
  // LEARN MORE BUTTONS
  // ===================================================

  const buttons = document.querySelectorAll(".learn-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("More water solutions coming soon!");
    });
  });

  // ===================================================
  // WATER DROPLET ANIMATION
  // ===================================================

  const droplet = document.querySelector(".water-droplet-image");

  if (droplet) {
    let position = 0;

    let direction = 1;

    setInterval(function () {
      position += direction * 0.3;

      if (position >= 5) {
        direction = -1;
      }

      if (position <= 0) {
        direction = 1;
      }

      droplet.style.transform = "translateY(" + position + "px)";
    }, 40);
  }
});
const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");

const html = document.documentElement;

/* ==============================
       LOAD SAVED THEME
    ============================== */

const savedTheme = localStorage.getItem("blue-future-theme");

if (savedTheme === "dark") {
  html.classList.add("darkmode");

  themeIcon.textContent = "☾";
  themeText.textContent = "Dark";
}

/* ==============================
       TOGGLE THEME
    ============================== */

themeBtn.addEventListener("click", () => {
  html.classList.toggle("darkmode");

  /* Check current mode */

  if (html.classList.contains("darkmode")) {
    themeIcon.textContent = "☾";
    themeText.textContent = "Dark";

    localStorage.setItem("blue-future-theme", "dark");
  } else {
    themeIcon.textContent = "☀";
    themeText.textContent = "Light";

    localStorage.setItem("blue-future-theme", "light");
  }
});

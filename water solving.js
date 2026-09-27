document.addEventListener("DOMContentLoaded", function () {
  /* =========================
       BUILD CARDS
    ========================= */

  const cards = document.querySelectorAll(".build-card");

  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", function () {
      card.style.transform = "translateY(0)";
    });
  });

  /* =========================
       LEARN BUTTONS
    ========================= */

  const buttons = document.querySelectorAll(".learn-button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("More water solutions coming soon!");
    });
  });

  /* =========================
       WATER DROPLET ANIMATION
    ========================= */

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

  /* =========================
       DARK / LIGHT MODE
    ========================= */

  const themeBtn = document.getElementById("theme-btn");
  const themeIcon = document.getElementById("theme-icon");
  const themeText = document.getElementById("theme-text");
  const html = document.documentElement;

  const savedTheme = localStorage.getItem("blue-future-theme");

  function applyTheme(theme) {
    if (theme === "dark") {
      html.classList.add("darkmode");

      if (themeIcon) {
        themeIcon.textContent = "☀";
      }

      if (themeText) {
        themeText.textContent = "Light";
      }
    } else {
      html.classList.remove("darkmode");

      if (themeIcon) {
        themeIcon.textContent = "☾";
      }

      if (themeText) {
        themeText.textContent = "Dark";
      }
    }
  }

  /* حالت ذخیره‌شده را اجرا می‌کند */
  if (savedTheme === "dark") {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  /* دکمه تغییر Theme */
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      const isDark = html.classList.toggle("darkmode");

      if (isDark) {
        if (themeIcon) {
          themeIcon.textContent = "☀";
        }

        if (themeText) {
          themeText.textContent = "Light";
        }

        localStorage.setItem("blue-future-theme", "dark");
      } else {
        if (themeIcon) {
          themeIcon.textContent = "☾";
        }

        if (themeText) {
          themeText.textContent = "Dark";
        }

        localStorage.setItem("blue-future-theme", "light");
      }
    });
  }

  /* =========================
       ACTIVE NAV LINK
    ========================= */

  const currentPage =
    decodeURIComponent(window.location.pathname.split("/").pop()) ||
    "index.html";

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

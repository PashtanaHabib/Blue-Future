
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

            localStorage.setItem(
                "blue-future-theme",
                "dark"
            );

        } else {

            themeIcon.textContent = "☀";
            themeText.textContent = "Light";

            localStorage.setItem(
                "blue-future-theme",
                "light"
            );
        }
    });

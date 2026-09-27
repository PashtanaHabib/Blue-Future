/* =====================================
   BLUE FUTURE
   GLOBAL JAVASCRIPT
===================================== */


/* =====================================
   THEME ELEMENTS
===================================== */

const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");

const html = document.documentElement;


/* =====================================
   LOAD SAVED THEME
===================================== */

const savedTheme =
    localStorage.getItem("blue-future-theme");


if (savedTheme === "dark") {

    html.classList.add("darkmode");

    if (themeIcon) {
        themeIcon.textContent = "☾";
    }

    if (themeText) {
        themeText.textContent = "Dark";
    }

}


/* =====================================
   THEME TOGGLE
===================================== */

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        html.classList.toggle("darkmode");


        if (html.classList.contains("darkmode")) {

            if (themeIcon) {
                themeIcon.textContent = "☾";
            }

            if (themeText) {
                themeText.textContent = "Dark";
            }

            localStorage.setItem(
                "blue-future-theme",
                "dark"
            );

        } else {

            if (themeIcon) {
                themeIcon.textContent = "☀";
            }

            if (themeText) {
                themeText.textContent = "Light";
            }

            localStorage.setItem(
                "blue-future-theme",
                "light"
            );

        }

    });

}


/* =====================================
   THERMOMETER ANIMATION
===================================== */

const thermo =
    document.querySelector(".thermo");

const thermoFills =
    document.querySelectorAll(".thermo-fill");


if (thermo && thermoFills.length) {

    const thermoObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        thermoFills.forEach(fill => {

                            fill.style.transform =
                                "scaleY(1)";

                        });

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.3
            }
        );


    thermoObserver.observe(thermo);

}


/* =====================================
   INFORMATION TABS
===================================== */

const infoTabs =
    document.querySelectorAll(".info-tab");

const tabContents =
    document.querySelectorAll(".tab-content");


infoTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target =
            tab.dataset.tab;


        /* Remove active from tabs */

        infoTabs.forEach(item => {

            item.classList.remove("active");

        });


        /* Remove active from contents */

        tabContents.forEach(content => {

            content.classList.remove("active");

        });


        /* Activate clicked tab */

        tab.classList.add("active");


        const selectedContent =
            document.getElementById(target);


        if (selectedContent) {

            selectedContent.classList.add("active");

        }

    });

});


/* =====================================
   LEARN MORE
===================================== */

const learnMore =
    document.getElementById("learnMore");


if (learnMore) {

    learnMore.addEventListener("click", (event) => {

        if (learnMore.getAttribute("href") === "#") {

            event.preventDefault();

        }

    });

}
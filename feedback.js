
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

        themeIcon.textContent = "☀";
        themeText.textContent = "Light";
    }


    /* ==============================
       TOGGLE THEME
    ============================== */

    themeBtn.addEventListener("click", () => {

        html.classList.toggle("darkmode");


        /* Check current mode */

        if (html.classList.contains("darkmode")) {

            themeIcon.textContent = "☀";
            themeText.textContent = "Light";

            localStorage.setItem(
                "blue-future-theme",
                "dark"
            );

        } else {

            themeIcon.textContent = "☾";
            themeText.textContent = "Dark";

            localStorage.setItem(
                "blue-future-theme",
                "light"
            );
        }
    });



     document.addEventListener("DOMContentLoaded", () => {

        /* =====================================================
           ELEMENTS
        ====================================================== */

        const section = document.querySelector(".luxury-contact");
        const panel = document.querySelector(".form-panel");
        const button = document.querySelector(".submit");
        const particles = document.querySelectorAll(".water-particle");
        const fields = document.querySelectorAll(".field");
        const details = document.querySelectorAll(".detail");
        const form = document.getElementById("contactForm");
        const success = document.getElementById("success");


        /* =====================================================
           MOUSE PARALLAX
        ====================================================== */

        let mouseX = 0;
        let mouseY = 0;

        window.addEventListener("mousemove", (event) => {

          mouseX =
            event.clientX / window.innerWidth - 0.5;

          mouseY =
            event.clientY / window.innerHeight - 0.5;


          section.style.setProperty(
            "--mouse-x",
            `${mouseX * 18}px`
          );

          section.style.setProperty(
            "--mouse-y",
            `${mouseY * 18}px`
          );


          particles.forEach((particle, index) => {

            const strength =
              8 + index * 5;

            particle.style.transform = `
              translate(
                ${mouseX * strength}px,
                ${mouseY * strength}px
              )
            `;

          });

        });


        /* =====================================================
           FORM 3D TILT
        ====================================================== */

        if (window.innerWidth > 900) {

          panel.addEventListener(
            "mousemove",
            (event) => {

              const rect =
                panel.getBoundingClientRect();

              const x =
                event.clientX - rect.left;

              const y =
                event.clientY - rect.top;

              const rotateY =
                ((x / rect.width) - 0.5) * 4;

              const rotateX =
                ((y / rect.height) - 0.5) * -4;


              panel.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-4px)
              `;

            }
          );


          panel.addEventListener(
            "mouseleave",
            () => {

              panel.style.transform = `
                perspective(1000px)
                rotateX(0)
                rotateY(0)
                translateY(0)
              `;

            }
          );

        }


        /* =====================================================
           MAGNETIC BUTTON
        ====================================================== */

        if (window.innerWidth > 900) {

          button.addEventListener(
            "mousemove",
            (event) => {

              const rect =
                button.getBoundingClientRect();

              const x =
                event.clientX - rect.left;

              const y =
                event.clientY - rect.top;

              const moveX =
                (x - rect.width / 2) * 0.12;

              const moveY =
                (y - rect.height / 2) * 0.12;


              button.style.transform = `
                translate(${moveX}px, ${moveY}px)
              `;

            }
          );


          button.addEventListener(
            "mouseleave",
            () => {

              button.style.transform =
                "translate(0, 0)";

            }
          );

        }


        /* =====================================================
           BUTTON RIPPLE
        ====================================================== */

        button.addEventListener(
          "click",
          (event) => {

            const ripple =
              document.createElement("span");

            ripple.classList.add("ripple");


            const rect =
              button.getBoundingClientRect();

            ripple.style.left =
              `${event.clientX - rect.left}px`;

            ripple.style.top =
              `${event.clientY - rect.top}px`;


            button.appendChild(ripple);


            setTimeout(() => {
              ripple.remove();
            }, 700);

          }
        );


        /* =====================================================
           INPUT FOCUS
        ====================================================== */

        fields.forEach((field) => {

          const input =
            field.querySelector(
              "input, textarea"
            );


          input.addEventListener(
            "focus",
            () => {

              field.classList.add(
                "active"
              );

            }
          );


          input.addEventListener(
            "blur",
            () => {

              field.classList.remove(
                "active"
              );

            }
          );

        });


        /* =====================================================
           DETAIL HOVER
        ====================================================== */

        details.forEach((detail) => {

          detail.addEventListener(
            "mouseenter",
            () => {

              detail.classList.add(
                "hovered"
              );

            }
          );


          detail.addEventListener(
            "mouseleave",
            () => {

              detail.classList.remove(
                "hovered"
              );

            }
          );

        });


        /* =====================================================
           CONTACT LINK MAGNETIC EFFECT
        ====================================================== */

        const contactLinks =
          document.querySelectorAll(
            ".detail a"
          );


        contactLinks.forEach((link) => {

          link.addEventListener(
            "mousemove",
            (event) => {

              const rect =
                link.getBoundingClientRect();

              const x =
                event.clientX - rect.left;

              const y =
                event.clientY - rect.top;


              const moveX =
                (x - rect.width / 2) * 0.08;

              const moveY =
                (y - rect.height / 2) * 0.08;


              link.style.transform = `
                translate(${moveX}px, ${moveY}px)
              `;

            }
          );


          link.addEventListener(
            "mouseleave",
            () => {

              link.style.transform =
                "translate(0, 0)";

            }
          );

        });


        /* =====================================================
           SCROLL REVEAL
        ====================================================== */

        const observer =
          new IntersectionObserver(
            (entries) => {

              entries.forEach((entry) => {

                if (entry.isIntersecting) {

                  entry.target.classList.add(
                    "visible"
                  );

                }

              });

            },
            {
              threshold: 0.15
            }
          );


        document
          .querySelectorAll(
            ".contact-left, .form-panel"
          )
          .forEach((element) => {

            observer.observe(element);

          });


        /* =====================================================
           FORM SUBMIT
        ====================================================== */

        form.addEventListener(
          "submit",
          (event) => {

            event.preventDefault();


            button.disabled = true;

            button.classList.add(
              "sending"
            );


            button.querySelector(
              "span:first-child"
            ).textContent =
              "Sending...";


            setTimeout(() => {

              button.classList.remove(
                "sending"
              );

              button.classList.add(
                "sent"
              );


              button.querySelector(
                "span:first-child"
              ).textContent =
                "Solution Sent ✓";


              success.classList.add(
                "show"
              );


              form.reset();


              setTimeout(() => {

                button.classList.remove(
                  "sent"
                );

                button.disabled = false;

                button.querySelector(
                  "span:first-child"
                ).textContent =
                  "Submit Solution";

              }, 3000);

            }, 1200);

          }
        );

      });



const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }

});
/* ==========================================
   LIGHT / DARK MODE
========================================== */

const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");

const html = document.documentElement;

/* Load saved theme */
const savedTheme = localStorage.getItem("blue-future-theme");

if (savedTheme === "dark") {

    html.classList.add("darkmode");

    if (themeIcon) {
        themeIcon.textContent = "☀";
    }

    if (themeText) {
        themeText.textContent = " Light";
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


/* Toggle theme */
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

    /* =====================================================
   BLUE FUTURE
   HOME PAGE JAVASCRIPT
===================================================== */


/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */
const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
    document.querySelectorAll(".counter");


let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    counterStarted = true;


    counters.forEach((counter) => {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const duration = 1800;

        const increment =
            target / (duration / 16);


        function updateCounter() {

            current += increment;


            if (current < target) {

                counter.textContent =
                    Math.floor(current);

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.textContent =
                    target;

            }

        }


        updateCounter();

    });

}



/* Detect stats section */

const statsSection =
    document.querySelector(".stats-section");


const statsObserver =
    new IntersectionObserver(

        (entries) => {

            if (entries[0].isIntersecting) {

                startCounters();

                statsObserver.disconnect();

            }

        },

        {
            threshold: 0.3
        }

    );


if (statsSection) {

    statsObserver.observe(statsSection);

}



/* ==========================================
   HERO ORB MOUSE PARALLAX
========================================== */

const heroVisual =
    document.querySelector(".hero-visual");


const orb =
    document.querySelector(".water-orb");


if (heroVisual && orb) {

    heroVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroVisual.getBoundingClientRect();


            const x =
                event.clientX - rect.left;


            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const moveX =
                (x - centerX) / 35;


            const moveY =
                (y - centerY) / 35;


            orb.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            orb.style.transform =
                "translate(0, 0)";

        }
    );

}



/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const navLinks =
    document.querySelectorAll(
        ".navbar .nav-link"
    );


navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            navLinks.forEach((item) => {

                item.classList.remove("active");

            });


            link.classList.add("active");

        }
    );

});



/* ==========================================
   CLOSE MOBILE NAVBAR AFTER CLICK
========================================== */

const mobileLinks =
    document.querySelectorAll(
        ".blue-navbar .nav-link"
    );


const navbarCollapse =
    document.querySelector("#mainNav");


mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            if (
                window.innerWidth < 992 &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(
                        navbarCollapse
                    );


                if (bsCollapse) {

                    bsCollapse.hide();

                }

            }

        }
    );

});



/* ==========================================
   CURRENT YEAR
========================================== */

const year =
    document.querySelector("#year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}



/* ==========================================
   SMOOTH ANCHOR SCROLL
========================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((anchor) => {

    anchor.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                targetId.length < 2
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (!target) return;


            event.preventDefault();


            const navbarHeight =
                navbar.offsetHeight;


            const targetPosition =
                target.getBoundingClientRect().top
                + window.scrollY
                - navbarHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }
    );

});

const navbarHeight = navbar.offsetHeight;



/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(
    ".btn-primary-water, .btn-outline-water, .btn-light-water, .btn-water"
).forEach((button) => {

    button.addEventListener(
        "click",
        function (event) {

            const ripple =
                document.createElement("span");


            const rect =
                this.getBoundingClientRect();


            const size =
                Math.max(
                    rect.width,
                    rect.height
                );


            ripple.style.width =
                `${size}px`;

            ripple.style.height =
                `${size}px`;

            ripple.style.position =
                "absolute";

            ripple.style.left =
                `${event.clientX - rect.left - size / 2}px`;

            ripple.style.top =
                `${event.clientY - rect.top - size / 2}px`;

            ripple.style.borderRadius =
                "50%";

            ripple.style.background =
                "rgba(255,255,255,.25)";

            ripple.style.transform =
                "scale(0)";

            ripple.style.pointerEvents =
                "none";

            ripple.style.animation =
                "ripple .6s ease-out";


            this.style.position =
                "relative";

            this.style.overflow =
                "hidden";


            this.appendChild(ripple);


            setTimeout(() => {

                ripple.remove();

            }, 600);

        }
    );

});


/* Ripple animation */

const rippleStyle =
    document.createElement("style");


rippleStyle.innerHTML = `

@keyframes ripple {

    to {

        transform: scale(2.5);

        opacity: 0;

    }

}

`;


document.head.appendChild(rippleStyle);

/* =====================================================
   IMPACT CARDS SLIDER
===================================================== */

const impactSlider =
    document.getElementById("impactSlider");

const prevSlide =
    document.getElementById("prevSlide");

const nextSlide =
    document.getElementById("nextSlide");

const sliderDots =
    document.getElementById("sliderDots");


if (
    impactSlider &&
    prevSlide &&
    nextSlide &&
    sliderDots
) {

    const slides =
        document.querySelectorAll(
            ".impact-slide"
        );


    let currentSlide = 0;

    let slidesPerView = 3;


    /* --------------------------------
       Detect screen size
    -------------------------------- */

    function updateSlidesPerView() {

        if (window.innerWidth <= 767) {

            slidesPerView = 1;

        } else if (window.innerWidth <= 991) {

            slidesPerView = 2;

        } else {

            slidesPerView = 3;

        }

    }


    /* --------------------------------
       Number of positions
    -------------------------------- */

    function getMaxSlide() {

        return Math.max(
            0,
            slides.length - slidesPerView
        );

    }


    /* --------------------------------
       Create dots
    -------------------------------- */

    function createDots() {

        sliderDots.innerHTML = "";

        const total =
            getMaxSlide() + 1;


        for (
            let i = 0;
            i < total;
            i++
        ) {

            const dot =
                document.createElement("button");


            dot.classList.add(
                "slider-dot"
            );


            if (i === currentSlide) {

                dot.classList.add(
                    "active"
                );

            }


            dot.setAttribute(
                "aria-label",
                `Go to slide ${i + 1}`
            );


            dot.addEventListener(
                "click",
                () => {

                    currentSlide = i;

                    updateSlider();

                }
            );


            sliderDots.appendChild(dot);

        }

    }


    /* --------------------------------
       Move slider
    -------------------------------- */

    function updateSlider() {

        const slideWidth =
            slides[0].getBoundingClientRect()
            .width;


        const gap =
            parseFloat(
                getComputedStyle(
                    impactSlider
                ).gap
            );


        const move =
            currentSlide *
            (slideWidth + gap);


        impactSlider.style.transform =
            `translateX(-${move}px)`;


        /* Update dots */

        const dots =
            document.querySelectorAll(
                ".slider-dot"
            );


        dots.forEach(
            (dot, index) => {

                dot.classList.toggle(
                    "active",
                    index === currentSlide
                );

            }
        );


        /* Disable buttons */

        prevSlide.disabled =
            currentSlide === 0;


        nextSlide.disabled =
            currentSlide === getMaxSlide();


        prevSlide.style.opacity =
            currentSlide === 0
                ? ".4"
                : "1";


        nextSlide.style.opacity =
            currentSlide === getMaxSlide()
                ? ".4"
                : "1";

    }


    /* --------------------------------
       Next
    -------------------------------- */

    nextSlide.addEventListener(
        "click",
        () => {

            if (
                currentSlide <
                getMaxSlide()
            ) {

                currentSlide++;

                updateSlider();

            }

        }
    );


    /* --------------------------------
       Previous
    -------------------------------- */

    prevSlide.addEventListener(
        "click",
        () => {

            if (currentSlide > 0) {

                currentSlide--;

                updateSlider();

            }

        }
    );


    /* --------------------------------
       Responsive
    -------------------------------- */

    window.addEventListener(
        "resize",
        () => {

            const oldSlides =
                slidesPerView;


            updateSlidesPerView();


            if (
                oldSlides !== slidesPerView
            ) {

                currentSlide = Math.min(
                    currentSlide,
                    getMaxSlide()
                );

                createDots();

            }


            updateSlider();

        }
    );


    /* --------------------------------
       Touch / Swipe
    -------------------------------- */

    let touchStartX = 0;

    let touchEndX = 0;


    impactSlider.addEventListener(
        "touchstart",
        (event) => {

            touchStartX =
                event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    impactSlider.addEventListener(
        "touchend",
        (event) => {

            touchEndX =
                event.changedTouches[0].clientX;


            const difference =
                touchStartX - touchEndX;


            /* Swipe left */

            if (
                difference > 50 &&
                currentSlide < getMaxSlide()
            ) {

                currentSlide++;

                updateSlider();

            }


            /* Swipe right */

            if (
                difference < -50 &&
                currentSlide > 0
            ) {

                currentSlide--;

                updateSlider();

            }

        }
    );


    /* --------------------------------
       Auto Play
    -------------------------------- */

    let autoPlay =
        setInterval(
            () => {

                if (
                    currentSlide <
                    getMaxSlide()
                ) {

                    currentSlide++;

                } else {

                    currentSlide = 0;

                }


                updateSlider();

            },
            5000
        );


    /* Stop autoplay on hover */

    impactSlider.addEventListener(
        "mouseenter",
        () => {

            clearInterval(autoPlay);

        }
    );


    impactSlider.addEventListener(
        "mouseleave",
        () => {

            autoPlay =
                setInterval(
                    () => {

                        if (
                            currentSlide <
                            getMaxSlide()
                        ) {

                            currentSlide++;

                        } else {

                            currentSlide = 0;

                        }


                        updateSlider();

                    },
                    5000
                );

        }
    );


    /* --------------------------------
       Initialize
    -------------------------------- */

    updateSlidesPerView();

    createDots();

    updateSlider();

}

const waterSwiper = new Swiper(".waterSwiper", {

    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    effect: "coverflow",

    coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: false,
    },

    slidesPerView: 1,

    spaceBetween: 30,

    pagination: {
        el: ".waterSwiper .swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".waterSwiper .swiper-button-next",
        prevEl: ".waterSwiper .swiper-button-prev",
    },

    breakpoints: {

        768: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 3,
        }

    }

});




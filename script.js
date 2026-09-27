/* =====================================================
   BLUE FUTURE
   HOME PAGE JAVASCRIPT
===================================================== */


/* =====================================================
   LIGHT / DARK MODE
===================================================== */

const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");

const html = document.documentElement;


/* Load saved theme */

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

} else {

    html.classList.remove("darkmode");

    if (themeIcon) {
        themeIcon.textContent = "☀";
    }

    if (themeText) {
        themeText.textContent = "Light";
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
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");


if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

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

} else {

    revealElements.forEach((element) => {

        element.classList.add("show");

    });

}


/* =====================================================
   COUNTER ANIMATION
===================================================== */

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


/* Stats section */

const statsSection =
    document.querySelector(".stats-section");


if (
    statsSection &&
    "IntersectionObserver" in window
) {

    const statsObserver =
        new IntersectionObserver(

            (entries) => {

                if (
                    entries[0].isIntersecting
                ) {

                    startCounters();

                    statsObserver.disconnect();

                }

            },

            {
                threshold: 0.3
            }

        );


    statsObserver.observe(statsSection);

}


/* =====================================================
   HERO ORB MOUSE PARALLAX
===================================================== */

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


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

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


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const mobileLinks =
    document.querySelectorAll(
        ".navbar .nav-link"
    );


mobileLinks.forEach((link) => {

    link.addEventListener(
        "click",
        () => {

            if (window.innerWidth < 992) {

                const navbarCollapse =
                    document.querySelector(
                        "#mainNav"
                    );


                if (
                    navbarCollapse &&
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

        }
    );

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    document.querySelector("#year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =====================================================
   SMOOTH ANCHOR SCROLL
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((anchor) => {

    anchor.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#" ||
                targetId.length < 2
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) return;


            event.preventDefault();


            const navbarHeight =
                navbar
                    ? navbar.offsetHeight
                    : 0;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }
    );

});


/* =====================================================
   BUTTON RIPPLE EFFECT
===================================================== */

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


/* Ripple Animation */

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


    function updateSlidesPerView() {

        if (window.innerWidth <= 767) {

            slidesPerView = 1;

        } else if (window.innerWidth <= 991) {

            slidesPerView = 2;

        } else {

            slidesPerView = 3;

        }

    }


    function getMaxSlide() {

        return Math.max(
            0,
            slides.length - slidesPerView
        );

    }


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


    function updateSlider() {

        if (!slides.length) return;


        const slideWidth =
            slides[0]
                .getBoundingClientRect()
                .width;


        const gap =
            parseFloat(
                getComputedStyle(
                    impactSlider
                ).gap
            ) || 0;


        const move =
            currentSlide *
            (slideWidth + gap);


        impactSlider.style.transform =
            `translateX(-${move}px)`;


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


    prevSlide.addEventListener(
        "click",
        () => {

            if (currentSlide > 0) {

                currentSlide--;

                updateSlider();

            }

        }
    );


    window.addEventListener(
        "resize",
        () => {

            const oldSlides =
                slidesPerView;


            updateSlidesPerView();


            if (
                oldSlides !== slidesPerView
            ) {

                currentSlide =
                    Math.min(
                        currentSlide,
                        getMaxSlide()
                    );


                createDots();

            }


            updateSlider();

        }
    );


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


            if (
                difference > 50 &&
                currentSlide < getMaxSlide()
            ) {

                currentSlide++;

                updateSlider();

            }


            if (
                difference < -50 &&
                currentSlide > 0
            ) {

                currentSlide--;

                updateSlider();

            }

        }
    );


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


    updateSlidesPerView();

    createDots();

    updateSlider();

}


/* =====================================================
   WATER SWIPER
===================================================== */

if (
    typeof Swiper !== "undefined" &&
    document.querySelector(".waterSwiper")
) {

    const waterSwiper =
        new Swiper(
            ".waterSwiper",
            {

                loop: true,

                slidesPerView: 1,

                spaceBetween: 25,


                autoplay: {

                    delay: 3000,

                    disableOnInteraction: false,

                    pauseOnMouseEnter: true

                },


                pagination: {

                    el:
                        ".waterSwiper .swiper-pagination",

                    clickable: true

                },


                navigation: {

                    nextEl:
                        ".waterSwiper .swiper-button-next",

                    prevEl:
                        ".waterSwiper .swiper-button-prev"

                },


                breakpoints: {

                    768: {

                        slidesPerView: 2

                    },


                    1200: {

                        slidesPerView: 3

                    }

                }

            }
        );

}

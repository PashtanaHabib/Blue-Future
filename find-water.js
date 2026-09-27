
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



const options = document.querySelectorAll(".water-option");

const infoNumber = document.querySelector(".water-info span");
const infoTitle = document.querySelector(".water-info h2");
const infoText = document.querySelector(".water-info p");


const waterData = {

    oceans: {
        number: "01",
        title: "Oceans",
        text: "Oceans are the largest and most connected water systems on Earth, covering more than 70 percent of the planet's surface. They are home to an enormous variety of marine life, from microscopic organisms near the surface to creatures living in the deepest parts of the ocean. Ocean currents constantly move heat and nutrients around the planet, influencing weather, climate, and life far beyond the coastline. Although oceans may appear endless and unchanging from the surface, their depths contain mountains, valleys, trenches, underwater volcanoes, and ecosystems that are still being discovered. Explore the world's major oceans and see how these vast bodies of water connect the planet."
    },

    rivers: {
        number: "02",
        title: "Rivers",
        text: "Rivers are natural pathways that carry freshwater across the surface of the Earth. Many begin high in mountains from melting snow, glaciers, springs, or rainfall, then travel through valleys, forests, plains, and cities before eventually reaching a lake, sea, or ocean. As rivers move across the landscape, they slowly shape the land by carrying soil, rocks, and minerals downstream. They also create habitats for countless plants and animals and provide freshwater for people, agriculture, and communities. Some rivers stretch across several countries, connecting landscapes and people along a single continuous journey. Follow these waterways and discover how a small stream can become one of the most important water systems on Earth."
    },

    lakes: {
        number: "03",
        title: "Lakes",
        text: "Lakes are bodies of water surrounded by land, and they can be found in almost every part of the world. Some were created by ancient glaciers, while others formed through volcanic activity, changes in rivers, or natural changes in the Earth's landscape. Lakes can range from tiny pools hidden within forests to enormous freshwater systems that look almost like inland seas. They provide important habitats for fish, birds, plants, and other wildlife, while also storing freshwater that people and ecosystems depend on. Their water levels and conditions can change with seasons, rainfall, temperature, and human activity. Explore these freshwater landscapes and discover the different stories hidden behind Earth's lakes."
    },

    groundwater: {
        number: "04",
        title: "Groundwater",
        text: "Not all of Earth's water can be seen from the surface. Deep beneath our feet, water slowly moves through soil, sand, cracks, and layers of rock, collecting in underground formations known as aquifers. Groundwater can travel incredibly slowly, sometimes remaining beneath the surface for years, decades, or even much longer before reaching another part of the water cycle. Springs, wells, rivers, wetlands, and many ecosystems can depend on this hidden source of freshwater. Because it is stored underground, groundwater can be difficult to observe and protect, while pollution or overuse can affect it for a long time. Explore the hidden world beneath the surface and discover the water system that exists almost entirely out of sight."
    },

    glaciers: {
        number: "05",
        title: "Glaciers",
        text: "Glaciers are enormous masses of ice created when snow accumulates over many years and becomes compressed into solid ice. Although they appear frozen and motionless, glaciers are constantly moving, slowly flowing across mountains and valleys under their own weight. As they move, they carve landscapes, create valleys, transport rocks, and leave behind traces of Earth's changing climate. Glaciers also store a huge amount of the planet's freshwater, releasing meltwater that can feed rivers, lakes, and ecosystems far from the places where the ice formed. From enormous mountain glaciers to vast ice sheets, these frozen water sources show how water can remain part of Earth's cycle for incredibly long periods of time"
    }

};


options.forEach(option => {

    option.addEventListener("click", () => {

        options.forEach(item => {
            item.classList.remove("active");
        });

        option.classList.add("active");

        const type = option.dataset.type;

        infoNumber.textContent = waterData[type].number;

        infoTitle.textContent = waterData[type].title;

        infoText.textContent = waterData[type].text;

    });

});

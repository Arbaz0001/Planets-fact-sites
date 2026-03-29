const data = {
  mercury: {
    name: "Mercury",
    description: "Smallest and closest planet to the Sun.",
    structure: "Metallic core and thin silicate mantle.",
    geology: "Heavily cratered like the Moon.",
    rotation: "58.6 DAYS", revolution: "88 DAYS",
    radius: "2,439.7 KM", temperature: "167°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)"
  },
  venus: {
    name: "Venus",
    description: "Hottest planet with thick clouds of sulfuric acid.",
    structure: "Iron core with rocky mantle.",
    geology: "Volcanic plains and mountains.",
    rotation: "243 DAYS", revolution: "225 DAYS",
    radius: "6,051.8 KM", temperature: "464°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
    source: "https://en.wikipedia.org/wiki/Venus"
  },
  earth: {
    name: "Earth",
    description: "Our home planet, with oceans and life.",
    structure: "Inner solid core and outer liquid core.",
    geology: "Tectonics, volcanoes, oceans, and continents.",
    rotation: "0.99 DAYS", revolution: "365.26 DAYS",
    radius: "6,371 KM", temperature: "16°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    source: "https://en.wikipedia.org/wiki/Earth"
  },
  mars: {
    name: "Mars",
    description: "Red planet with signs of past water.",
    structure: "Iron-rich core and silicate crust.",
    geology: "Largest volcano and canyon in solar system.",
    rotation: "1.03 DAYS", revolution: "687 DAYS",
    radius: "3,389.5 KM", temperature: "-63°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    source: "https://en.wikipedia.org/wiki/Mars"
  },
  jupiter: {
    name: "Jupiter",
    description: "Largest planet with a Great Red Spot storm.",
    structure: "Core possibly rock surrounded by metallic hydrogen.",
    geology: "Gas giant with colorful cloud bands.",
    rotation: "0.41 DAYS", revolution: "4,333 DAYS",
    radius: "69,911 KM", temperature: "-108°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    source: "https://en.wikipedia.org/wiki/Jupiter"
  },
  saturn: {
    name: "Saturn",
    description: "Gas giant famous for its rings.",
    structure: "Similar to Jupiter, less dense.",
    geology: "Atmospheric bands and icy rings.",
    rotation: "0.44 DAYS", revolution: "10,756 DAYS",
    radius: "58,232 KM", temperature: "-139°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    source: "https://en.wikipedia.org/wiki/Saturn"
  },
  uranus: {
    name: "Uranus",
    description: "Ice giant that spins on its side.",
    structure: "Icy mantle with rocky core.",
    geology: "Pale blue atmosphere and faint rings.",
    rotation: "0.72 DAYS", revolution: "30,687 DAYS",
    radius: "25,362 KM", temperature: "-195°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    source: "https://en.wikipedia.org/wiki/Uranus"
  },
  neptune: {
    name: "Neptune",
    description: "Farthest planet, very windy and cold.",
    structure: "Rock/ice core with thick gas atmosphere.",
    geology: "Blue clouds and high-speed winds.",
    rotation: "0.67 DAYS", revolution: "60,190 DAYS",
    radius: "24,622 KM", temperature: "-201°C",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
    source: "https://en.wikipedia.org/wiki/Neptune"
  }
};

let currentPlanet = "earth";
let currentTab = "description";

const planetImage = document.getElementById("planet-image");
const planetName = document.getElementById("planet-name");
const planetDesc = document.getElementById("planet-description");
const planetSource = document.getElementById("planet-source");
const rotation = document.getElementById("rotation");
const revolution = document.getElementById("revolution");
const radius = document.getElementById("radius");
const temperature = document.getElementById("temperature");

function updateUI() {
  const planet = data[currentPlanet];
  if (!planet) return;

  planetImage.style.backgroundImage = `url(${planet.image})`;
  planetName.textContent = planet.name;
  planetDesc.textContent = planet[currentTab];
  planetSource.href = planet.source;
  rotation.textContent = planet.rotation;
  revolution.textContent = planet.revolution;
  radius.textContent = planet.radius;
  temperature.textContent = planet.temperature;

  document.querySelectorAll("[data-planet]").forEach(link => {
    link.classList.remove("active");
    if (link.dataset.planet === currentPlanet) {
      link.classList.add("active");
    }
  });
}

document.querySelectorAll("[data-planet]").forEach(btn => {
  btn.addEventListener("click", () => {
    currentPlanet = btn.dataset.planet;
    updateUI();
  });
});

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentTab = tab.dataset.tab;
    updateUI();
  });
});

const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

updateUI();

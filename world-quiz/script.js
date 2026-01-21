const countriesData = [
  // --- EURÓPA ---
  { id: "al", name_hu: "Albánia", name_en: "Albania", continent: "Europe" },
  { id: "at", name_hu: "Ausztria", name_en: "Austria", continent: "Europe" },
  {
    id: "ba",
    name_hu: "Bosznia-Hercegovina",
    name_en: "Bosnia and Herzegovina",
    continent: "Europe",
  },
  { id: "be", name_hu: "Belgium", name_en: "Belgium", continent: "Europe" },
  { id: "bg", name_hu: "Bulgária", name_en: "Bulgaria", continent: "Europe" },
  {
    id: "by",
    name_hu: "Fehéroroszország",
    name_en: "Belarus",
    continent: "Europe",
  },
  { id: "ch", name_hu: "Svájc", name_en: "Switzerland", continent: "Europe" },
  {
    id: "cz",
    name_hu: "Csehország",
    name_en: "Czech Republic",
    continent: "Europe",
  },
  { id: "de", name_hu: "Németország", name_en: "Germany", continent: "Europe" },
  { id: "dk", name_hu: "Dánia", name_en: "Denmark", continent: "Europe" },
  { id: "ee", name_hu: "Észtország", name_en: "Estonia", continent: "Europe" },
  { id: "es", name_hu: "Spanyolország", name_en: "Spain", continent: "Europe" },
  { id: "fi", name_hu: "Finnország", name_en: "Finland", continent: "Europe" },
  {
    id: "fr",
    name_hu: "Franciaország",
    name_en: "France",
    continent: "Europe",
  },
  {
    id: "gb",
    name_hu: "Egyesült Királyság",
    name_en: "United Kingdom",
    continent: "Europe",
  },
  { id: "gr", name_hu: "Görögország", name_en: "Greece", continent: "Europe" },
  {
    id: "hr",
    name_hu: "Horvátország",
    name_en: "Croatia",
    continent: "Europe",
  },
  {
    id: "hu",
    name_hu: "Magyarország",
    name_en: "Hungary",
    continent: "Europe",
  },
  { id: "ie", name_hu: "Írország", name_en: "Ireland", continent: "Europe" },
  { id: "is", name_hu: "Izland", name_en: "Iceland", continent: "Europe" },
  { id: "it", name_hu: "Olaszország", name_en: "Italy", continent: "Europe" },
  { id: "lt", name_hu: "Litvánia", name_en: "Lithuania", continent: "Europe" },
  {
    id: "lu",
    name_hu: "Luxemburg",
    name_en: "Luxembourg",
    continent: "Europe",
  },
  { id: "lv", name_hu: "Lettország", name_en: "Latvia", continent: "Europe" },
  { id: "md", name_hu: "Moldova", name_en: "Moldova", continent: "Europe" },
  {
    id: "me",
    name_hu: "Montenegró",
    name_en: "Montenegro",
    continent: "Europe",
  },
  {
    id: "mk",
    name_hu: "Észak-Macedónia",
    name_en: "North Macedonia",
    continent: "Europe",
  },
  {
    id: "nl",
    name_hu: "Hollandia",
    name_en: "Netherlands",
    continent: "Europe",
  },
  { id: "no", name_hu: "Norvégia", name_en: "Norway", continent: "Europe" },
  {
    id: "pl",
    name_hu: "Lengyelország",
    name_en: "Poland",
    continent: "Europe",
  },
  { id: "pt", name_hu: "Portugália", name_en: "Portugal", continent: "Europe" },
  { id: "ro", name_hu: "Románia", name_en: "Romania", continent: "Europe" },
  { id: "rs", name_hu: "Szerbia", name_en: "Serbia", continent: "Europe" },
  { id: "ru", name_hu: "Oroszország", name_en: "Russia", continent: "Europe" },
  { id: "se", name_hu: "Svédország", name_en: "Sweden", continent: "Europe" },
  { id: "si", name_hu: "Szlovénia", name_en: "Slovenia", continent: "Europe" },
  { id: "sk", name_hu: "Szlovákia", name_en: "Slovakia", continent: "Europe" },
  { id: "ua", name_hu: "Ukrajna", name_en: "Ukraine", continent: "Europe" },
  { id: "xk", name_hu: "Koszovó", name_en: "Kosovo", continent: "Europe" },

  // --- ÁZSIA ---
  {
    id: "af",
    name_hu: "Afganisztán",
    name_en: "Afghanistan",
    continent: "Asia",
  },
  { id: "am", name_hu: "Örményország", name_en: "Armenia", continent: "Asia" },
  {
    id: "az",
    name_hu: "Azerbajdzsán",
    name_en: "Azerbaijan",
    continent: "Asia",
  },
  { id: "bd", name_hu: "Banglades", name_en: "Bangladesh", continent: "Asia" },
  { id: "bt", name_hu: "Bhután", name_en: "Bhutan", continent: "Asia" },
  { id: "cn", name_hu: "Kína", name_en: "China", continent: "Asia" },
  { id: "ge", name_hu: "Grúzia", name_en: "Georgia", continent: "Asia" },
  { id: "id", name_hu: "Indonézia", name_en: "Indonesia", continent: "Asia" },
  { id: "il", name_hu: "Izrael", name_en: "Israel", continent: "Asia" },
  { id: "in", name_hu: "India", name_en: "India", continent: "Asia" },
  { id: "iq", name_hu: "Irak", name_en: "Iraq", continent: "Asia" },
  { id: "ir", name_hu: "Irán", name_en: "Iran", continent: "Asia" },
  { id: "jp", name_hu: "Japán", name_en: "Japan", continent: "Asia" },
  {
    id: "kg",
    name_hu: "Kirgizisztán",
    name_en: "Kyrgyzstan",
    continent: "Asia",
  },
  { id: "kh", name_hu: "Kambodzsa", name_en: "Cambodia", continent: "Asia" },
  {
    id: "kp",
    name_hu: "Észak-Korea",
    name_en: "North Korea",
    continent: "Asia",
  },
  { id: "kr", name_hu: "Dél-Korea", name_en: "South Korea", continent: "Asia" },
  { id: "kz", name_hu: "Kazahsztán", name_en: "Kazakhstan", continent: "Asia" },
  { id: "la", name_hu: "Laosz", name_en: "Laos", continent: "Asia" },
  { id: "lk", name_hu: "Srí Lanka", name_en: "Sri Lanka", continent: "Asia" },
  { id: "mn", name_hu: "Mongólia", name_en: "Mongolia", continent: "Asia" },
  { id: "my", name_hu: "Malajzia", name_en: "Malaysia", continent: "Asia" },
  { id: "np", name_hu: "Nepál", name_en: "Nepal", continent: "Asia" },
  {
    id: "ph",
    name_hu: "Fülöp-szigetek",
    name_en: "Philippines",
    continent: "Asia",
  },
  { id: "pk", name_hu: "Pakisztán", name_en: "Pakistan", continent: "Asia" },
  {
    id: "sa",
    name_hu: "Szaúd-Arábia",
    name_en: "Saudi Arabia",
    continent: "Asia",
  },
  { id: "sy", name_hu: "Szíria", name_en: "Syria", continent: "Asia" },
  { id: "th", name_hu: "Thaiföld", name_en: "Thailand", continent: "Asia" },
  {
    id: "tj",
    name_hu: "Tádzsikisztán",
    name_en: "Tajikistan",
    continent: "Asia",
  },
  {
    id: "tm",
    name_hu: "Türkmenisztán",
    name_en: "Turkmenistan",
    continent: "Asia",
  },
  { id: "tr", name_hu: "Törökország", name_en: "Turkey", continent: "Asia" },
  { id: "tw", name_hu: "Tajvan", name_en: "Taiwan", continent: "Asia" },
  {
    id: "uz",
    name_hu: "Üzbegisztán",
    name_en: "Uzbekistan",
    continent: "Asia",
  },
  { id: "vn", name_hu: "Vietnám", name_en: "Vietnam", continent: "Asia" },
  { id: "ye", name_hu: "Jemen", name_en: "Yemen", continent: "Asia" },

  // --- ÉSZAK-AMERIKA ---
  {
    id: "bs",
    name_hu: "Bahama-szigetek",
    name_en: "Bahamas",
    continent: "North America",
  },
  {
    id: "bz",
    name_hu: "Belize",
    name_en: "Belize",
    continent: "North America",
  },
  {
    id: "ca",
    name_hu: "Kanada",
    name_en: "Canada",
    continent: "North America",
  },
  {
    id: "cr",
    name_hu: "Costa Rica",
    name_en: "Costa Rica",
    continent: "North America",
  },
  { id: "cu", name_hu: "Kuba", name_en: "Cuba", continent: "North America" },
  {
    id: "do",
    name_hu: "Dominikai Köztársaság",
    name_en: "Dominican Republic",
    continent: "North America",
  },
  {
    id: "gt",
    name_hu: "Guatemala",
    name_en: "Guatemala",
    continent: "North America",
  },
  {
    id: "hn",
    name_hu: "Honduras",
    name_en: "Honduras",
    continent: "North America",
  },
  { id: "ht", name_hu: "Haiti", name_en: "Haiti", continent: "North America" },
  {
    id: "jm",
    name_hu: "Jamaica",
    name_en: "Jamaica",
    continent: "North America",
  },
  {
    id: "mx",
    name_hu: "Mexikó",
    name_en: "Mexico",
    continent: "North America",
  },
  {
    id: "ni",
    name_hu: "Nicaragua",
    name_en: "Nicaragua",
    continent: "North America",
  },
  {
    id: "pa",
    name_hu: "Panama",
    name_en: "Panama",
    continent: "North America",
  },
  {
    id: "sv",
    name_hu: "Salvador",
    name_en: "El Salvador",
    continent: "North America",
  },
  {
    id: "us",
    name_hu: "Egyesült Államok",
    name_en: "United States",
    continent: "North America",
  },

  // --- DÉL-AMERIKA ---
  {
    id: "ar",
    name_hu: "Argentína",
    name_en: "Argentina",
    continent: "South America",
  },
  {
    id: "bo",
    name_hu: "Bolívia",
    name_en: "Bolivia",
    continent: "South America",
  },
  {
    id: "br",
    name_hu: "Brazília",
    name_en: "Brazil",
    continent: "South America",
  },
  { id: "cl", name_hu: "Chile", name_en: "Chile", continent: "South America" },
  {
    id: "co",
    name_hu: "Kolumbia",
    name_en: "Colombia",
    continent: "South America",
  },
  {
    id: "ec",
    name_hu: "Ecuador",
    name_en: "Ecuador",
    continent: "South America",
  },
  {
    id: "gy",
    name_hu: "Guyana",
    name_en: "Guyana",
    continent: "South America",
  },
  { id: "pe", name_hu: "Peru", name_en: "Peru", continent: "South America" },
  {
    id: "py",
    name_hu: "Paraguay",
    name_en: "Paraguay",
    continent: "South America",
  },
  {
    id: "sr",
    name_hu: "Suriname",
    name_en: "Suriname",
    continent: "South America",
  },
  {
    id: "uy",
    name_hu: "Uruguay",
    name_en: "Uruguay",
    continent: "South America",
  },
  {
    id: "ve",
    name_hu: "Venezuela",
    name_en: "Venezuela",
    continent: "South America",
  },

  // --- AFRIKA ---
  { id: "ao", name_hu: "Angola", name_en: "Angola", continent: "Africa" },
  {
    id: "bf",
    name_hu: "Burkina Faso",
    name_en: "Burkina Faso",
    continent: "Africa",
  },
  { id: "bi", name_hu: "Burundi", name_en: "Burundi", continent: "Africa" },
  { id: "bj", name_hu: "Benin", name_en: "Benin", continent: "Africa" },
  { id: "bw", name_hu: "Botswana", name_en: "Botswana", continent: "Africa" },
  {
    id: "cd",
    name_hu: "Kongói Demokratikus Köztársaság",
    name_en: "DR Congo",
    continent: "Africa",
  },
  {
    id: "cf",
    name_hu: "Közép-afrikai Köztársaság",
    name_en: "Central African Republic",
    continent: "Africa",
  },
  {
    id: "cg",
    name_hu: "Kongói Köztársaság",
    name_en: "Republic of the Congo",
    continent: "Africa",
  },
  {
    id: "ci",
    name_hu: "Elefántcsontpart",
    name_en: "Ivory Coast",
    continent: "Africa",
  },
  { id: "cm", name_hu: "Kamerun", name_en: "Cameroon", continent: "Africa" },
  { id: "dz", name_hu: "Algéria", name_en: "Algeria", continent: "Africa" },
  { id: "eg", name_hu: "Egyiptom", name_en: "Egypt", continent: "Africa" },
  { id: "er", name_hu: "Eritrea", name_en: "Eritrea", continent: "Africa" },
  { id: "et", name_hu: "Etiópia", name_en: "Ethiopia", continent: "Africa" },
  { id: "ga", name_hu: "Gabon", name_en: "Gabon", continent: "Africa" },
  { id: "gh", name_hu: "Ghána", name_en: "Ghana", continent: "Africa" },
  { id: "gm", name_hu: "Gambia", name_en: "Gambia", continent: "Africa" },
  { id: "gn", name_hu: "Guinea", name_en: "Guinea", continent: "Africa" },
  { id: "ke", name_hu: "Kenya", name_en: "Kenya", continent: "Africa" },
  { id: "lr", name_hu: "Libéria", name_en: "Liberia", continent: "Africa" },
  { id: "ls", name_hu: "Lesotho", name_en: "Lesotho", continent: "Africa" },
  { id: "ly", name_hu: "Líbia", name_en: "Libya", continent: "Africa" },
  { id: "ma", name_hu: "Marokkó", name_en: "Morocco", continent: "Africa" },
  {
    id: "mg",
    name_hu: "Madagaszkár",
    name_en: "Madagascar",
    continent: "Africa",
  },
  { id: "ml", name_hu: "Mali", name_en: "Mali", continent: "Africa" },
  {
    id: "mr",
    name_hu: "Mauritánia",
    name_en: "Mauritania",
    continent: "Africa",
  },
  { id: "mw", name_hu: "Malawi", name_en: "Malawi", continent: "Africa" },
  { id: "mz", name_hu: "Mozambik", name_en: "Mozambique", continent: "Africa" },
  { id: "na", name_hu: "Namíbia", name_en: "Namibia", continent: "Africa" },
  { id: "ne", name_hu: "Niger", name_en: "Niger", continent: "Africa" },
  { id: "ng", name_hu: "Nigéria", name_en: "Nigeria", continent: "Africa" },
  { id: "rw", name_hu: "Ruanda", name_en: "Rwanda", continent: "Africa" },
  { id: "sd", name_hu: "Szudán", name_en: "Sudan", continent: "Africa" },
  {
    id: "sl",
    name_hu: "Sierra Leone",
    name_en: "Sierra Leone",
    continent: "Africa",
  },
  { id: "sn", name_hu: "Szenegál", name_en: "Senegal", continent: "Africa" },
  { id: "so", name_hu: "Szomália", name_en: "Somalia", continent: "Africa" },
  {
    id: "ss",
    name_hu: "Dél-Szudán",
    name_en: "South Sudan",
    continent: "Africa",
  },
  { id: "sz", name_hu: "Szváziföld", name_en: "Eswatini", continent: "Africa" },
  { id: "td", name_hu: "Csád", name_en: "Chad", continent: "Africa" },
  { id: "tg", name_hu: "Togo", name_en: "Togo", continent: "Africa" },
  { id: "tn", name_hu: "Tunézia", name_en: "Tunisia", continent: "Africa" },
  { id: "tz", name_hu: "Tanzánia", name_en: "Tanzania", continent: "Africa" },
  { id: "ug", name_hu: "Uganda", name_en: "Uganda", continent: "Africa" },
  {
    id: "za",
    name_hu: "Dél-afrikai Köztársaság",
    name_en: "South Africa",
    continent: "Africa",
  },
  { id: "zm", name_hu: "Zambia", name_en: "Zambia", continent: "Africa" },
  { id: "zw", name_hu: "Zimbabwe", name_en: "Zimbabwe", continent: "Africa" },

  // --- OCEÁNIA ---
  {
    id: "au",
    name_hu: "Ausztrália",
    name_en: "Australia",
    continent: "Oceania",
  },
  {
    id: "fj",
    name_hu: "Fidzsi-szigetek",
    name_en: "Fiji",
    continent: "Oceania",
  },
  {
    id: "nz",
    name_hu: "Új-Zéland",
    name_en: "New Zealand",
    continent: "Oceania",
  },
  {
    id: "pg",
    name_hu: "Pápua Új-Guinea",
    name_en: "Papua New Guinea",
    continent: "Oceania",
  },
  {
    id: "sb",
    name_hu: "Salamon-szigetek",
    name_en: "Solomon Islands",
    continent: "Oceania",
  },
  { id: "vu", name_hu: "Vanuatu", name_en: "Vanuatu", continent: "Oceania" },
];

let currentMatches = [];
let currentFocus = -1;

const continentNames = {
  Europe: "Európa",
  "North America": "Észak-Amerika",
  "South America": "Dél-Amerika",
  Asia: "Ázsia",
  Africa: "Afrika",
  Oceania: "Oceánia",
  Antarctica: "Antarktisz",
};

let foundCountries = [];
let lastFoundId = null;

const inputField = document.getElementById("country-input");
const suggestionsBox = document.getElementById("suggestions");
const scoreDisplay = document.getElementById("score");
const totalDisplay = document.getElementById("total-count");
const progressBar = document.getElementById("progress-bar");
const resultsContainer = document.getElementById("results-container");
const mapContainer = document.getElementById("map-container");
const mapContent = document.getElementById("map-content");
const tooltip = document.getElementById("tooltip");

let scale = 1;
let pointX = 0;
let pointY = 0;
let isDragging = false;
let startX = 0;
let startY = 0;

function init() {
  totalDisplay.textContent = countriesData.length;
  renderContinents();
  setupZoomAndPan();

  inputField.addEventListener("input", handleInput);

  inputField.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      if (currentMatches.length > 0) {
        currentFocus++;
        if (currentFocus >= currentMatches.length) currentFocus = 0;
        setActiveSuggestion();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (currentFocus > -1 && currentMatches[currentFocus]) {
        countryFound(currentMatches[currentFocus]);
      } else if (currentMatches.length === 1) {
        countryFound(currentMatches[0]);
      } else {
        const exactMatch = currentMatches.find(
          (c) =>
            c.name_hu.toLowerCase() === inputField.value.trim().toLowerCase(),
        );
        if (exactMatch) {
          countryFound(exactMatch);
        }
      }
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target !== inputField && e.target !== suggestionsBox) {
      suggestionsBox.innerHTML = "";
      currentFocus = -1;
    }
  });
}

function handleInput(e) {
  const value = e.target.value.trim().toLowerCase();
  suggestionsBox.innerHTML = "";
  currentMatches = [];
  currentFocus = -1;

  if (value.length < 1) return;

  currentMatches = countriesData.filter((country) => {
    if (foundCountries.includes(country.id)) return false;
    return country.name_hu.toLowerCase().includes(value);
  });

  currentMatches.forEach((match, index) => {
    const div = document.createElement("div");
    div.classList.add("suggestion-item");
    div.textContent = match.name_hu;
    div.id = "suggestion-" + index;

    div.addEventListener("click", () => {
      countryFound(match);
    });

    suggestionsBox.appendChild(div);
  });
}

function setActiveSuggestion() {
  const items = suggestionsBox.querySelectorAll(".suggestion-item");
  items.forEach((item) => item.classList.remove("active"));

  if (currentFocus > -1 && items[currentFocus]) {
    items[currentFocus].classList.add("active");
    items[currentFocus].scrollIntoView({ block: "nearest" });
  }
}

function countryFound(country) {
  foundCountries.push(country.id);
  currentMatches = [];
  currentFocus = -1;

  if (lastFoundId) {
    const prevElement = document.getElementById(lastFoundId);
    if (prevElement) {
      prevElement.classList.remove("last-found");
    }
  }

  lastFoundId = country.id;

  const mapElement = document.getElementById(country.id);

  if (mapElement) {
    mapElement.classList.add("found");
    mapElement.classList.add("last-found");
  }

  inputField.value = "";
  suggestionsBox.innerHTML = "";
  inputField.focus();

  updateStats();
  addToList(country);
}

function updateStats() {
  const count = foundCountries.length;
  scoreDisplay.textContent = count;
  const percentage = (count / countriesData.length) * 100;
  progressBar.style.width = percentage + "%";
}

function addToList(country) {
  const listId = "list-" + country.continent.replace(/\s+/g, "-");
  const ul = document.getElementById(listId);

  if (ul) {
    const li = document.createElement("li");
    li.textContent = country.name_hu;
    ul.appendChild(li);
  }
}

function renderContinents() {
  const continents = [...new Set(countriesData.map((c) => c.continent))].sort();

  resultsContainer.innerHTML = "";

  continents.forEach((contKey) => {
    const col = document.createElement("div");
    col.className = "continent-column";

    const h3 = document.createElement("h3");
    h3.textContent = continentNames[contKey] || contKey;

    const ul = document.createElement("ul");
    ul.id = "list-" + contKey.replace(/\s+/g, "-");

    col.appendChild(h3);
    col.appendChild(ul);
    resultsContainer.appendChild(col);
  });
}

function setupZoomAndPan() {
  mapContainer.addEventListener("wheel", (e) => {
    e.preventDefault();

    const zoomIntensity = 0.2;
    const minScale = 1;
    const maxScale = 8;

    const rect = mapContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const direction = e.deltaY > 0 ? -1 : 1;
    const factor = direction > 0 ? 1 + zoomIntensity : 1 / (1 + zoomIntensity);

    let newScale = scale * factor;

    if (newScale < minScale) newScale = minScale;
    if (newScale > maxScale) newScale = maxScale;

    pointX = mouseX - (mouseX - pointX) * (newScale / scale);
    pointY = mouseY - (mouseY - pointY) * (newScale / scale);

    if (newScale === minScale) {
      pointX = 0;
      pointY = 0;
    }

    scale = newScale;
    updateTransform();
  });

  mapContainer.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDragging = true;
    startX = e.clientX - pointX;
    startY = e.clientY - pointY;
    mapContainer.style.cursor = "grabbing";
  });

  mapContainer.addEventListener("mousemove", (e) => {
    if (isDragging) {
      e.preventDefault();
      pointX = e.clientX - startX;
      pointY = e.clientY - startY;
      updateTransform();
      return;
    }

    const target = e.target;
    let isHoveringCountry = false;

    if (
      (target.tagName === "path" || target.tagName === "g") &&
      (target.classList.contains("found") || target.closest(".found"))
    ) {
      const id = target.id || target.closest("g").id;
      const countryData = countriesData.find((c) => c.id === id);

      if (countryData) {
        isHoveringCountry = true;
        tooltip.style.display = "block";
        tooltip.textContent = countryData.name_hu;
        tooltip.style.left = e.clientX + 15 + "px";
        tooltip.style.top = e.clientY + 15 + "px";
      }
    }

    if (!isHoveringCountry) {
      tooltip.style.display = "none";
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      mapContainer.style.cursor = "grab";
    }
  });

  document.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      mapContainer.style.cursor = "grab";
    }
  });
}

function updateTransform() {
  mapContent.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
}

init();

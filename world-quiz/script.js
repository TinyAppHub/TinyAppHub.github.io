const countriesData = [
  // --- EURÓPA ---
  { id: "al", name_hu: "Albánia", continent: "Europe" },
  { id: "ad", name_hu: "Andorra", continent: "Europe" },
  { id: "at", name_hu: "Ausztria", continent: "Europe" },
  { id: "ba", name_hu: "Bosznia-Hercegovina", continent: "Europe" },
  { id: "be", name_hu: "Belgium", continent: "Europe" },
  { id: "bg", name_hu: "Bulgária", continent: "Europe" },
  { id: "by", name_hu: "Fehéroroszország", continent: "Europe" },
  { id: "ch", name_hu: "Svájc", continent: "Europe" },
  { id: "cy", name_hu: "Ciprus", continent: "Europe" },
  { id: "cz", name_hu: "Csehország", continent: "Europe" },
  { id: "de", name_hu: "Németország", continent: "Europe" },
  { id: "dk", name_hu: "Dánia", continent: "Europe" },
  { id: "ee", name_hu: "Észtország", continent: "Europe" },
  { id: "es", name_hu: "Spanyolország", continent: "Europe" },
  { id: "fi", name_hu: "Finnország", continent: "Europe" },
  { id: "fr", name_hu: "Franciaország", continent: "Europe" },
  { id: "gb", name_hu: "Egyesült Királyság", continent: "Europe" },
  { id: "gr", name_hu: "Görögország", continent: "Europe" },
  { id: "hr", name_hu: "Horvátország", continent: "Europe" },
  { id: "hu", name_hu: "Magyarország", continent: "Europe" },
  { id: "ie", name_hu: "Írország", continent: "Europe" },
  { id: "is", name_hu: "Izland", continent: "Europe" },
  { id: "it", name_hu: "Olaszország", continent: "Europe" },
  { id: "li", name_hu: "Liechtenstein", continent: "Europe" },
  { id: "lt", name_hu: "Litvánia", continent: "Europe" },
  { id: "lu", name_hu: "Luxemburg", continent: "Europe" },
  { id: "lv", name_hu: "Lettország", continent: "Europe" },
  { id: "mc", name_hu: "Monaco", continent: "Europe" },
  { id: "md", name_hu: "Moldova", continent: "Europe" },
  { id: "me", name_hu: "Montenegró", continent: "Europe" },
  { id: "mk", name_hu: "Észak-Macedónia", continent: "Europe" },
  { id: "mt", name_hu: "Málta", continent: "Europe" },
  { id: "nl", name_hu: "Hollandia", continent: "Europe" },
  { id: "no", name_hu: "Norvégia", continent: "Europe" },
  { id: "pl", name_hu: "Lengyelország", continent: "Europe" },
  { id: "pt", name_hu: "Portugália", continent: "Europe" },
  { id: "ro", name_hu: "Románia", continent: "Europe" },
  { id: "rs", name_hu: "Szerbia", continent: "Europe" },
  { id: "ru", name_hu: "Oroszország", continent: "Europe" },
  { id: "se", name_hu: "Svédország", continent: "Europe" },
  { id: "si", name_hu: "Szlovénia", continent: "Europe" },
  { id: "sk", name_hu: "Szlovákia", continent: "Europe" },
  { id: "sm", name_hu: "San Marino", continent: "Europe" },
  { id: "ua", name_hu: "Ukrajna", continent: "Europe" },
  { id: "va", name_hu: "Vatikán", continent: "Europe" },
  { id: "xk", name_hu: "Koszovó", continent: "Europe" },

  // --- ÁZSIA ---
  { id: "ae", name_hu: "Egyesült Arab Emírségek", continent: "Asia" },
  { id: "af", name_hu: "Afganisztán", continent: "Asia" },
  { id: "am", name_hu: "Örményország", continent: "Asia" },
  { id: "az", name_hu: "Azerbajdzsán", continent: "Asia" },
  { id: "bd", name_hu: "Banglades", continent: "Asia" },
  { id: "bh", name_hu: "Bahrein", continent: "Asia" },
  { id: "bn", name_hu: "Brunei", continent: "Asia" },
  { id: "bt", name_hu: "Bhután", continent: "Asia" },
  { id: "cn", name_hu: "Kína", continent: "Asia" },
  { id: "ge", name_hu: "Grúzia", continent: "Asia" },
  { id: "id", name_hu: "Indonézia", continent: "Asia" },
  { id: "il", name_hu: "Izrael", continent: "Asia" },
  { id: "in", name_hu: "India", continent: "Asia" },
  { id: "iq", name_hu: "Irak", continent: "Asia" },
  { id: "ir", name_hu: "Irán", continent: "Asia" },
  { id: "jo", name_hu: "Jordánia", continent: "Asia" },
  { id: "jp", name_hu: "Japán", continent: "Asia" },
  { id: "kg", name_hu: "Kirgizisztán", continent: "Asia" },
  { id: "kh", name_hu: "Kambodzsa", continent: "Asia" },
  { id: "kp", name_hu: "Észak-Korea", continent: "Asia" },
  { id: "kr", name_hu: "Dél-Korea", continent: "Asia" },
  { id: "kw", name_hu: "Kuvait", continent: "Asia" },
  { id: "kz", name_hu: "Kazahsztán", continent: "Asia" },
  { id: "la", name_hu: "Laosz", continent: "Asia" },
  { id: "lb", name_hu: "Lebanon", continent: "Asia" },
  { id: "lk", name_hu: "Srí Lanka", continent: "Asia" },
  { id: "mm", name_hu: "Mianmar", continent: "Asia" },
  { id: "mn", name_hu: "Mongólia", continent: "Asia" },
  { id: "mv", name_hu: "Maldív-szigetek", continent: "Asia" },
  { id: "my", name_hu: "Malajzia", continent: "Asia" },
  { id: "np", name_hu: "Nepál", continent: "Asia" },
  { id: "om", name_hu: "Omán", continent: "Asia" },
  { id: "ph", name_hu: "Fülöp-szigetek", continent: "Asia" },
  { id: "pk", name_hu: "Pakisztán", continent: "Asia" },
  { id: "ps", name_hu: "Palesztina", continent: "Asia" },
  { id: "qa", name_hu: "Katar", continent: "Asia" },
  { id: "sa", name_hu: "Szaúd-Arábia", continent: "Asia" },
  { id: "sg", name_hu: "Szingapúr", continent: "Asia" },
  { id: "sy", name_hu: "Szíria", continent: "Asia" },
  { id: "th", name_hu: "Thaiföld", continent: "Asia" },
  { id: "tj", name_hu: "Tádzsikisztán", continent: "Asia" },
  { id: "tl", name_hu: "Kelet-Timor", continent: "Asia" },
  { id: "tm", name_hu: "Türkmenisztán", continent: "Asia" },
  { id: "tr", name_hu: "Törökország", continent: "Asia" },
  { id: "tw", name_hu: "Tajvan", continent: "Asia" },
  { id: "uz", name_hu: "Üzbegisztán", continent: "Asia" },
  { id: "vn", name_hu: "Vietnám", continent: "Asia" },
  { id: "ye", name_hu: "Jemen", continent: "Asia" },

  // --- ÉSZAK-AMERIKA ---
  { id: "ag", name_hu: "Antigua és Barbuda", continent: "North America" },
  { id: "bb", name_hu: "Barbados", continent: "North America" },
  { id: "bs", name_hu: "Bahama-szigetek", continent: "North America" },
  { id: "bz", name_hu: "Belize", continent: "North America" },
  { id: "ca", name_hu: "Kanada", continent: "North America" },
  { id: "cr", name_hu: "Costa Rica", continent: "North America" },
  { id: "cu", name_hu: "Kuba", continent: "North America" },
  { id: "dm", name_hu: "Dominikai Közösség", continent: "North America" },
  { id: "do", name_hu: "Dominikai Köztársaság", continent: "North America" },
  { id: "gd", name_hu: "Grenada", continent: "North America" },
  { id: "gl", name_hu: "Grönland", continent: "North America" },
  { id: "gt", name_hu: "Guatemala", continent: "North America" },
  { id: "hn", name_hu: "Honduras", continent: "North America" },
  { id: "ht", name_hu: "Haiti", continent: "North America" },
  { id: "jm", name_hu: "Jamaica", continent: "North America" },
  { id: "kn", name_hu: "Saint Kitts és Nevis", continent: "North America" },
  { id: "lc", name_hu: "Saint Lucia", continent: "North America" },
  { id: "mx", name_hu: "Mexikó", continent: "North America" },
  { id: "ni", name_hu: "Nicaragua", continent: "North America" },
  { id: "pa", name_hu: "Panama", continent: "North America" },
  { id: "pr", name_hu: "Puerto Rico", continent: "North America" },
  { id: "sv", name_hu: "Salvador", continent: "North America" },
  { id: "tt", name_hu: "Trinidad és Tobago", continent: "North America" },
  { id: "us", name_hu: "Egyesült Államok", continent: "North America" },
  {
    id: "vc",
    name_hu: "Saint Vincent és a Grenadine-szigetek",
    continent: "North America",
  },

  // --- DÉL-AMERIKA ---
  { id: "ar", name_hu: "Argentína", continent: "South America" },
  { id: "bo", name_hu: "Bolívia", continent: "South America" },
  { id: "br", name_hu: "Brazília", continent: "South America" },
  { id: "cl", name_hu: "Chile", continent: "South America" },
  { id: "co", name_hu: "Kolumbia", continent: "South America" },
  { id: "ec", name_hu: "Ecuador", continent: "South America" },
  { id: "fk", name_hu: "Falkland-szigetek", continent: "South America" },
  { id: "gy", name_hu: "Guyana", continent: "South America" },
  { id: "pe", name_hu: "Peru", continent: "South America" },
  { id: "py", name_hu: "Paraguay", continent: "South America" },
  { id: "sr", name_hu: "Suriname", continent: "South America" },
  { id: "uy", name_hu: "Uruguay", continent: "South America" },
  { id: "ve", name_hu: "Venezuela", continent: "South America" },

  // --- AFRIKA ---
  { id: "_somaliland", name_hu: "Szomáliföld", continent: "Africa" },
  { id: "ao", name_hu: "Angola", continent: "Africa" },
  { id: "bf", name_hu: "Burkina Faso", continent: "Africa" },
  { id: "bi", name_hu: "Burundi", continent: "Africa" },
  { id: "bj", name_hu: "Benin", continent: "Africa" },
  { id: "bw", name_hu: "Botswana", continent: "Africa" },
  { id: "cd", name_hu: "Kongói Demokratikus Köztársaság", continent: "Africa" },
  { id: "cf", name_hu: "Közép-afrikai Köztársaság", continent: "Africa" },
  { id: "cg", name_hu: "Kongói Köztársaság", continent: "Africa" },
  { id: "ci", name_hu: "Elefántcsontpart", continent: "Africa" },
  { id: "cm", name_hu: "Kamerun", continent: "Africa" },
  { id: "cv", name_hu: "Zöld-foki Köztársaság", continent: "Africa" },
  { id: "dj", name_hu: "Dzsibuti", continent: "Africa" },
  { id: "dz", name_hu: "Algéria", continent: "Africa" },
  { id: "eg", name_hu: "Egyiptom", continent: "Africa" },
  { id: "er", name_hu: "Eritrea", continent: "Africa" },
  { id: "et", name_hu: "Etiópia", continent: "Africa" },
  { id: "ga", name_hu: "Gabon", continent: "Africa" },
  { id: "gh", name_hu: "Ghána", continent: "Africa" },
  { id: "gm", name_hu: "Gambia", continent: "Africa" },
  { id: "gn", name_hu: "Guinea", continent: "Africa" },
  { id: "gq", name_hu: "Egyenlítői-Guinea", continent: "Africa" },
  { id: "gw", name_hu: "Bissau-Guinea", continent: "Africa" },
  { id: "ke", name_hu: "Kenya", continent: "Africa" },
  { id: "km", name_hu: "Comore-szigetek", continent: "Africa" },
  { id: "lr", name_hu: "Libéria", continent: "Africa" },
  { id: "ls", name_hu: "Lesotho", continent: "Africa" },
  { id: "ly", name_hu: "Líbia", continent: "Africa" },
  { id: "ma", name_hu: "Marokkó", continent: "Africa" },
  { id: "mg", name_hu: "Madagaszkár", continent: "Africa" },
  { id: "ml", name_hu: "Mali", continent: "Africa" },
  { id: "mr", name_hu: "Mauritánia", continent: "Africa" },
  { id: "mu", name_hu: "Mauritius", continent: "Africa" },
  { id: "mw", name_hu: "Malawi", continent: "Africa" },
  { id: "mz", name_hu: "Mozambik", continent: "Africa" },
  { id: "na", name_hu: "Namíbia", continent: "Africa" },
  { id: "ne", name_hu: "Niger", continent: "Africa" },
  { id: "ng", name_hu: "Nigéria", continent: "Africa" },
  { id: "rw", name_hu: "Ruanda", continent: "Africa" },
  { id: "sc", name_hu: "Seychelle-szigetek", continent: "Africa" },
  { id: "sd", name_hu: "Szudán", continent: "Africa" },
  { id: "sl", name_hu: "Sierra Leone", continent: "Africa" },
  { id: "sn", name_hu: "Szenegál", continent: "Africa" },
  { id: "so", name_hu: "Szomália", continent: "Africa" },
  { id: "ss", name_hu: "Dél-Szudán", continent: "Africa" },
  { id: "st", name_hu: "São Tomé és Príncipe", continent: "Africa" },
  { id: "sz", name_hu: "Szváziföld", continent: "Africa" },
  { id: "td", name_hu: "Csád", continent: "Africa" },
  { id: "tg", name_hu: "Togo", continent: "Africa" },
  { id: "tn", name_hu: "Tunézia", continent: "Africa" },
  { id: "tz", name_hu: "Tanzánia", continent: "Africa" },
  { id: "ug", name_hu: "Uganda", continent: "Africa" },
  { id: "za", name_hu: "Dél-afrikai Köztársaság", continent: "Africa" },
  { id: "zm", name_hu: "Zambia", continent: "Africa" },
  { id: "zw", name_hu: "Zimbabwe", continent: "Africa" },

  // --- OCEÁNIA ---
  { id: "au", name_hu: "Ausztrália", continent: "Oceania" },
  { id: "fj", name_hu: "Fidzsi-szigetek", continent: "Oceania" },
  { id: "ki", name_hu: "Kiribati", continent: "Oceania" },
  { id: "mh", name_hu: "Marshall-szigetek", continent: "Oceania" },
  { id: "nc", name_hu: "Új-Kaledónia", continent: "Oceania" },
  { id: "nr", name_hu: "Nauru", continent: "Oceania" },
  { id: "nz", name_hu: "Új-Zéland", continent: "Oceania" },
  { id: "pg", name_hu: "Pápua Új-Guinea", continent: "Oceania" },
  { id: "sb", name_hu: "Salamon-szigetek", continent: "Oceania" },
  { id: "vu", name_hu: "Vanuatu", continent: "Oceania" },
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
const zoomInBtn = document.getElementById("zoom-in");
const zoomOutBtn = document.getElementById("zoom-out");
const giveUpBtn = document.getElementById("give-up-btn");

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

  if (giveUpBtn) {
    giveUpBtn.addEventListener("click", giveUp);
  }

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
  function performZoom(direction, originX, originY) {
    const zoomIntensity = 0.2;
    const minScale = 1;
    const maxScale = 8;

    const factor = direction > 0 ? 1 + zoomIntensity : 1 / (1 + zoomIntensity);
    let newScale = scale * factor;

    if (newScale < minScale) newScale = minScale;
    if (newScale > maxScale) newScale = maxScale;

    pointX = originX - (originX - pointX) * (newScale / scale);
    pointY = originY - (originY - pointY) * (newScale / scale);

    if (newScale === minScale) {
      pointX = 0;
      pointY = 0;
    }

    scale = newScale;
    updateTransform();
  }

  mapContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    const rect = mapContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const direction = e.deltaY > 0 ? -1 : 1;
    performZoom(direction, mouseX, mouseY);
  });

  if (zoomInBtn && zoomOutBtn) {
    zoomInBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const rect = mapContainer.getBoundingClientRect();
      performZoom(1, rect.width / 2, rect.height / 2);
    });

    zoomOutBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const rect = mapContainer.getBoundingClientRect();
      performZoom(-1, rect.width / 2, rect.height / 2);
    });
  }

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

      if (countryData && tooltip) {
        isHoveringCountry = true;
        tooltip.style.display = "block";
        tooltip.textContent = countryData.name_hu;
        tooltip.style.left = e.clientX + 15 + "px";
        tooltip.style.top = e.clientY + 15 + "px";
      }
    }

    if (!isHoveringCountry && tooltip) {
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

  mapContainer.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX - pointX;
        startY = e.touches[0].clientY - pointY;
      }
    },
    { passive: false },
  );

  mapContainer.addEventListener(
    "touchmove",
    (e) => {
      if (isDragging && e.touches.length === 1) {
        e.preventDefault();
        pointX = e.touches[0].clientX - startX;
        pointY = e.touches[0].clientY - startY;
        updateTransform();
      }
    },
    { passive: false },
  );

  mapContainer.addEventListener("touchend", () => {
    isDragging = false;
  });
}

function updateTransform() {
  mapContent.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
}

function giveUp() {
  countriesData.forEach((country) => {
    if (!foundCountries.includes(country.id)) {
      const mapElement = document.getElementById(country.id);
      if (mapElement) {
        mapElement.classList.add("missed");
      }
    }
  });

  inputField.disabled = true;
  giveUpBtn.disabled = true;
  inputField.value = "Játék vége";
  suggestionsBox.innerHTML = "";
}

function setupZoomAndPan() {
  function performZoom(direction, originX, originY) {
    const zoomIntensity = 0.2;
    const minScale = 1;
    const maxScale = 8;

    const factor = direction > 0 ? 1 + zoomIntensity : 1 / (1 + zoomIntensity);
    let newScale = scale * factor;

    if (newScale < minScale) newScale = minScale;
    if (newScale > maxScale) newScale = maxScale;

    pointX = originX - (originX - pointX) * (newScale / scale);
    pointY = originY - (originY - pointY) * (newScale / scale);

    if (newScale === minScale) {
      pointX = 0;
      pointY = 0;
    }

    scale = newScale;
    updateTransform();
  }

  mapContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    const rect = mapContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const direction = e.deltaY > 0 ? -1 : 1;
    performZoom(direction, mouseX, mouseY);
  });

  if (zoomInBtn && zoomOutBtn) {
    zoomInBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const rect = mapContainer.getBoundingClientRect();
      performZoom(1, rect.width / 2, rect.height / 2);
    });

    zoomOutBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const rect = mapContainer.getBoundingClientRect();
      performZoom(-1, rect.width / 2, rect.height / 2);
    });
  }

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
      (target.classList.contains("found") ||
        target.closest(".found") ||
        target.classList.contains("missed") ||
        target.closest(".missed"))
    ) {
      const id = target.id || target.closest("g").id;
      const countryData = countriesData.find((c) => c.id === id);

      if (countryData && tooltip) {
        isHoveringCountry = true;
        tooltip.style.display = "block";
        tooltip.textContent = countryData.name_hu;
        tooltip.style.left = e.clientX + 15 + "px";
        tooltip.style.top = e.clientY + 15 + "px";
      }
    }

    if (!isHoveringCountry && tooltip) {
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

  mapContainer.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX - pointX;
        startY = e.touches[0].clientY - pointY;
      }
    },
    { passive: false },
  );

  mapContainer.addEventListener(
    "touchmove",
    (e) => {
      if (isDragging && e.touches.length === 1) {
        e.preventDefault();
        pointX = e.touches[0].clientX - startX;
        pointY = e.touches[0].clientY - startY;
        updateTransform();
      }
    },
    { passive: false },
  );

  mapContainer.addEventListener("touchend", () => {
    isDragging = false;
  });
}

init();

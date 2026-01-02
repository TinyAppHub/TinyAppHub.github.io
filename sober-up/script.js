const texts = {
    en: {
        title: "Sober Up", subtitle: "Worst-case scenario estimator",
        secPersonal: "1. Personal Info", gender: "Gender", male: "Male", female: "Female",
        weight: "Weight (kg)", phWeight: "e.g. 80",
        stopTime: "When did you stop?", timeHint: "Leave empty if 'Right Now'",
        secDrinks: "2. What did you drink?", selectLabel: "Select Drink Type:",
        optCustom: "-- Custom --", optBeerS: "Small Beer (330ml, 5%)", optBeerL: "Large Beer (500ml, 5%)",
        optWine: "Glass of Wine (100ml, 12%)", optWineL: "Large Wine (150ml, 12%)",
        optShot: "Shot / Spirit (40ml, 40%)", optCocktail: "Strong Cocktail (200ml, 10%)",
        btnAdd: "+ Add Drink", btnCalc: "CALCULATE SAFE TIME",
        resTitle: "Safe to Drive Estimate", resTime: "Time remaining:", h: "h", m: "m",
        discTitle: "⚠️ LEGAL DISCLAIMER",
        discText1: "Calculations use the Widmark formula with a conservative 0.10 ‰/h elimination rate to reach 0.00‰.",
        discText2: "This tool is for educational purposes only. It is NOT a medical device.",
        discWarn: "KNOW YOUR LOCAL LAWS. If in doubt, do not drive."
    },
    hu: {
        title: "Józanság", subtitle: "Legrosszabb esetre számolva",
        secPersonal: "1. Személyes Adatok", gender: "Nemed", male: "Férfi", female: "Nő",
        weight: "Testsúly (kg)", phWeight: "pl. 80",
        stopTime: "Mikor hagytad abba?", timeHint: "Hagyd üresen, ha 'Most'",
        secDrinks: "2. Mit ittál?", selectLabel: "Ital kiválasztása:",
        optCustom: "-- Egyéni --", optBeerS: "Kis Sör (330ml, 5%)", optBeerL: "Nagy Sör (500ml, 5%)",
        optWine: "Pohár Bor (100ml, 12%)", optWineL: "Nagy Bor (150ml, 12%)",
        optShot: "Feles / Rövid (40ml, 40%)", optCocktail: "Erős Koktél (200ml, 10%)",
        btnAdd: "+ Ital Hozzáadása", btnCalc: "MIKOR VEZETHETEK?",
        resTitle: "Legkorábban ekkor:", resTime: "Hátralévő idő:", h: "óra", m: "perc",
        discTitle: "⚠️ JOGI NYILATKOZAT",
        discText1: "A számítás a Widmark-képleten alapul, 0.10 ‰/óra (lassú) lebontással a 0.00‰ eléréséig.",
        discText2: "Ez az eszköz csak tájékoztató jellegű. NEM orvosi műszer és nem garancia.",
        discWarn: "ISMERD A HELYI TÖRVÉNYEKET! Ha bizonytalan vagy, ne vezess."
    }
};

let lang = localStorage.getItem('userLang') || 'en';

function renderLang() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.getAttribute('data-key');
        if (texts[lang][k]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = texts[lang][k];
            } else {
                el.innerText = texts[lang][k];
            }
        }
    });
}
document.getElementById('langBtn').addEventListener('click', () => { 
    lang = lang==='hu'?'en':'hu'; 
    localStorage.setItem('userLang', lang); 
    renderLang(); 
});
renderLang();

const PRESETS = {
    'beer_small': { vol: 330, alc: 5, name: 'Small Beer (0.33l)' },
    'beer_large': { vol: 500, alc: 5, name: 'Large Beer (0.5l)' },
    'wine': { vol: 100, alc: 12, name: 'Wine (Standard)' },
    'wine_large': { vol: 150, alc: 12, name: 'Wine (Large)' },
    'shot': { vol: 40, alc: 40, name: 'Shot / Spirit' },
    'cocktail': { vol: 200, alc: 10, name: 'Cocktail' }
};

let consumedDrinks = [];

const drinkPreset = document.getElementById('drinkPreset');
const customVol = document.getElementById('customVol');
const customAlc = document.getElementById('customAlc');
const addDrinkBtn = document.getElementById('addDrinkBtn');
const drinkList = document.getElementById('drinkList');
const calculateBtn = document.getElementById('calculateBtn');
const resultSection = document.getElementById('resultSection');

drinkPreset.addEventListener('change', () => {
    const key = drinkPreset.value;
    if (PRESETS[key]) {
        customVol.value = PRESETS[key].vol;
        customAlc.value = PRESETS[key].alc;
    } else {
        customVol.value = '';
        customAlc.value = '';
    }
});

addDrinkBtn.addEventListener('click', () => {
    let vVal = String(customVol.value).replace(',', '.');
    let aVal = String(customAlc.value).replace(',', '.');
    
    const vol = parseFloat(vVal);
    const alc = parseFloat(aVal);
    
    let name = "";
    if (drinkPreset.value === 'custom') {
        name = `${vol}ml / ${alc}%`;
    } else {
        name = drinkPreset.options[drinkPreset.selectedIndex].text;
    }

    if (isNaN(vol) || isNaN(alc) || vol <= 0) {
        alert(lang === 'hu' ? "Kérlek add meg a mennyiséget és százalékot!" : "Please enter volume and alcohol %!");
        return;
    }

    consumedDrinks.push({ vol, alc, name });
    renderDrinks();
});

function renderDrinks() {
    drinkList.innerHTML = '';
    consumedDrinks.forEach((drink, index) => {
        const li = document.createElement('li');
        li.className = 'drink-item';
        li.innerHTML = `
            <span>${drink.name}</span>
            <button onclick="removeDrink(${index})" style="color: #cf6679; background:none; border:none; font-size:1.5rem; cursor:pointer;">&times;</button>
        `;
        drinkList.appendChild(li);
    });
}

window.removeDrink = (index) => {
    consumedDrinks.splice(index, 1);
    renderDrinks();
};

calculateBtn.addEventListener('click', () => {
    try {
        const weightInput = document.getElementById('weight').value;
        const weight = parseFloat(weightInput.replace(',', '.'));
        const genderRatio = parseFloat(document.getElementById('gender').value);
        const startTimeInput = document.getElementById('startTime').value;

        if (!weight || isNaN(weight)) {
            alert(lang === 'hu' ? "Add meg a súlyodat!" : "Please enter a valid weight!");
            return;
        }
        if (consumedDrinks.length === 0) {
            alert(lang === 'hu' ? "Adj hozzá legalább egy italt!" : "Please add at least one drink!");
            return;
        }

        let totalAlcoholGrams = 0;
        consumedDrinks.forEach(d => {
            totalAlcoholGrams += d.vol * (d.alc / 100) * 0.8;
        });

        const peakBAC = totalAlcoholGrams / (weight * genderRatio);
        const eliminationRate = 0.10;
        const hoursNeeded = (peakBAC / eliminationRate) + 0.5;

        const now = new Date();
        let drinkTime = new Date(); 

        if (startTimeInput) {
            const [h, m] = startTimeInput.split(':');
            drinkTime.setHours(h, m, 0, 0);
            if (drinkTime > now) {
                drinkTime.setDate(drinkTime.getDate() - 1);
            }
        }

        const safeDate = new Date(drinkTime.getTime() + (hoursNeeded * 60 * 60 * 1000));
        
        let diffMs = safeDate - now;
        if (diffMs < 0) diffMs = 0;

        const hoursLeft = Math.floor(diffMs / (1000 * 60 * 60));
        const minsLeft = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('safeTimeDisplay').innerText = 
            safeDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        document.getElementById('hoursLeft').innerText = hoursLeft;
        document.getElementById('minsLeft').innerText = minsLeft;
        document.getElementById('peakBac').innerText = peakBAC.toFixed(2);
        document.getElementById('totalAlcohol').innerText = totalAlcoholGrams.toFixed(1);

        resultSection.classList.remove('hidden');
        resultSection.scrollIntoView({behavior: "smooth"});

    } catch (error) {
        console.error(error);
        alert("Error in calculation.");
    }
});
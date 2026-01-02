const PRESETS = {
    'beer_small': { vol: 330, alc: 5, name: 'Small Beer (0.33l)' },
    'beer_large': { vol: 500, alc: 5, name: 'Large Beer (0.5l)' },
    'wine': { vol: 100, alc: 12, name: 'Wine (Standard Pour)' },
    'wine_large': { vol: 150, alc: 12, name: 'Wine (Large Pour)' },
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
    
    let name = drinkPreset.options[drinkPreset.selectedIndex].text;

    if (isNaN(vol) || isNaN(alc) || vol <= 0) {
        alert("Please select a drink OR enter volume and alcohol % correctly!");
        return;
    }

    if (drinkPreset.value === 'custom') {
        name = `Custom (${vol}ml, ${alc}%)`;
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
            alert("Please enter a valid weight (kg)!");
            return;
        }
        if (consumedDrinks.length === 0) {
            alert("Please add at least one drink by clicking '+ Add Drink'!");
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
        alert("Calculation error. Check inputs.");
    }
});
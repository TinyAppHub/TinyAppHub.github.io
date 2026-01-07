const translations = {
    hu: {
        title: "Konyhai Mérleg",
        subtitle: "Mérleg nélkül is pontosan.",
        amountLabel: "Mennyi?",
        unitLabel: "Miben van?",
        materialLabel: "Mit mérsz?",
        opt_water: "Normál folyadék (Víz, Tej, Üdítő)",
        opt_oil: "Olajos (Étolaj, Olíva, Szószok)",
        opt_syrup: "Sűrű (Méz, Szirup, Melasz)",
        opt_light: "Könnyű por (Protein, Kakaó, Kókusz)",
        opt_flour: "Lisztszerű (Liszt, Porcukor)",
        opt_crystal: "Kristályos (Cukor, Rizs, Izotóniás)",
        opt_med: "Közepes (Morzsa, Creatine)",
        opt_heavy: "Nehéz / Tömör (Só)",
        u_cup: "bögre",
        u_tbsp: "ek.",
        u_tsp: "tk."
    },
    en: {
        title: "Kitchen Scale",
        subtitle: "Precise cooking without a scale.",
        amountLabel: "Amount?",
        unitLabel: "Unit?",
        materialLabel: "Ingredient type?",
        opt_water: "Standard Fluid (Water, Milk, Soda)",
        opt_oil: "Oily (Oil, Dressing)",
        opt_syrup: "Syrup (Honey, Molasses)",
        opt_light: "Light Powder (Protein, Cocoa)",
        opt_flour: "Flour-like (Flour, Icing Sugar)",
        opt_crystal: "Crystalline (Sugar, Rice, Iso)",
        opt_med: "Medium (Crumbs, Creatine)",
        opt_heavy: "Heavy (Salt)",
        u_cup: "cup",
        u_tbsp: "tbsp",
        u_tsp: "tsp"
    }
};

let currentLang = localStorage.getItem('userLang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
    calculate(); 

    document.getElementById('amount').addEventListener('input', calculate);
    document.getElementById('unit').addEventListener('change', calculate);
    document.getElementById('density').addEventListener('change', calculate);
});

function toggleLanguage() {
    currentLang = currentLang === 'hu' ? 'en' : 'hu';
    
    localStorage.setItem('userLang', currentLang);
    
    updateLanguage();
    calculate(); 
}

function updateLanguage() {
    const t = translations[currentLang];
    
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (t[key]) {
            elem.textContent = t[key];
        }
    });
}

function calculate() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromUnit = document.getElementById('unit').value;
    const density = parseFloat(document.getElementById('density').value);
    const resultsDiv = document.getElementById('results');

    if (isNaN(amount) || amount === 0) {
        resultsDiv.innerHTML = '<div style="grid-column: 1/-1; color: #555; font-style: italic;">...</div>';
        return;
    }

    const volFactors = { ml: 1, dl: 100, l: 1000, cup: 240, tbsp: 15, tsp: 5 };
    const massFactors = { g: 1, dkg: 10, kg: 1000 };
    
    let mlBase = 0;

    if (massFactors[fromUnit]) {
        mlBase = (amount * massFactors[fromUnit]) / density;
    } else if (volFactors[fromUnit]) {
        mlBase = amount * volFactors[fromUnit];
    }

    const t = translations[currentLang];

    const outputs = [
        { unit: 'g', val: mlBase * density },
        { unit: 'dkg', val: (mlBase * density) / 10 },
        { unit: 'kg', val: (mlBase * density) / 1000 },
        { unit: 'ml', val: mlBase },
        { unit: 'dl', val: mlBase / 100 },
        { unit: t.u_cup, val: mlBase / 240 },
        { unit: t.u_tbsp, val: mlBase / 15 },
        { unit: t.u_tsp, val: mlBase / 5 }
    ];

    resultsDiv.innerHTML = '';
    outputs.forEach(item => {
        let displayVal = item.val >= 10 ? Math.round(item.val) : parseFloat(item.val.toFixed(2));
        
        if (displayVal > 0) {
             resultsDiv.innerHTML += `
                <div class="result-card">
                    <span class="result-value">${displayVal}</span>
                    <span class="result-unit">${item.unit}</span>
                </div>
            `;
        }
    });
}
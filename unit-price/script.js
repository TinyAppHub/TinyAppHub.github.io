const texts = {
    en: { 
        title: "Price Winner", 
        prodA: "Product A", 
        prodB: "Product B", 
        btnCalc: "COMPARE", 
        winA: "A is cheaper!", 
        winB: "B is cheaper!", 
        save: "Savings:",
        phPrice: "Price",
        phQty: "Qty (g/ml/db)"
    },
    hu: { 
        title: "Ár-Összehasonlító", 
        prodA: "A Termék", 
        prodB: "B Termék", 
        btnCalc: "ÖSSZEHASONLÍTÁS", 
        winA: "Az 'A' az olcsóbb!", 
        winB: "A 'B' az olcsóbb!", 
        save: "Spórolás:",
        phPrice: "Ár",
        phQty: "Mennyiség"
    }
};

let lang = localStorage.getItem('userLang') || 'en';

function renderLang() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.getAttribute('data-key'); 
        if(texts[lang][k]) {
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

document.getElementById('calcBtn').addEventListener('click', () => {
    const pA = parseFloat(document.getElementById('pA').value);
    const qA = parseFloat(document.getElementById('qA').value);
    const pB = parseFloat(document.getElementById('pB').value);
    const qB = parseFloat(document.getElementById('qB').value);

    if(!pA || !qA || !pB || !qB) return;

    const uA = pA/qA;
    const uB = pB/qB;
    const colA = document.getElementById('colA');
    const colB = document.getElementById('colB');
    const winTxt = document.getElementById('winText');
    const saveTxt = document.getElementById('saveText');

    colA.className = 'prod-col'; colB.className = 'prod-col';

    if(uA < uB) {
        colA.classList.add('winner'); colB.classList.add('loser');
        winTxt.innerText = texts[lang].winA;
        saveTxt.innerText = `${texts[lang].save} ${(((uB-uA)/uB)*100).toFixed(1)}%`;
    } else {
        colB.classList.add('winner'); colA.classList.add('loser');
        winTxt.innerText = texts[lang].winB;
        saveTxt.innerText = `${texts[lang].save} ${(((uA-uB)/uA)*100).toFixed(1)}%`;
    }
    document.getElementById('result').classList.remove('hidden');
});
const texts = {
    en: { 
        mainTitle: "MyTinyTools", 
        subTitle: "Everyday utilities for smart people.", 
        soberup: "Sober Up", 
        unitprice: "Price Winner", 
        lifecost: "Should I Buy?",
        evakviz: "EVA Quiz",
        kitchenconv: "Kitchen Scale"
    },
    hu: { 
        mainTitle: "Eszközeim", 
        subTitle: "Hasznos dolgok okos embereknek.", 
        soberup: "Józanság", 
        unitprice: "Ár-Összehasonlító", 
        lifecost: "Megvegyem?",
        evakviz: "EVA Kvíz",
        kitchenconv: "Konyhai Mérleg"
    }
};

let lang = localStorage.getItem('userLang') || 'en';

function setLang(newLang) {
    lang = newLang;
    localStorage.setItem('userLang', lang);
    
    const mainTitle = document.getElementById('mainTitle');
    const subTitle = document.getElementById('subTitle');
    
    if (mainTitle && texts[lang].mainTitle) mainTitle.innerText = texts[lang].mainTitle;
    if (subTitle && texts[lang].subTitle) subTitle.innerText = texts[lang].subTitle;
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (texts[lang][key]) el.innerText = texts[lang][key];
    });
}

const langBtn = document.getElementById('langBtn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        setLang(lang === 'hu' ? 'en' : 'hu');
    });
}

setLang(lang);
const texts = {
    en: { mainTitle: "MyTinyTools", subTitle: "Everyday utilities for smart people.", soberup: "Sober Up", unitprice: "Price Winner", lifecost: "Should I Buy?" },
    hu: { mainTitle: "Eszközeim", subTitle: "Hasznos dolgok okos embereknek.", soberup: "Józanság", unitprice: "Ár-Összehasonlító", lifecost: "Megyvegyem?" }
};

let lang = localStorage.getItem('userLang') || 'en';

function setLang(newLang) {
    lang = newLang;
    localStorage.setItem('userLang', lang);
    
    document.getElementById('mainTitle').innerText = texts[lang].mainTitle;
    document.getElementById('subTitle').innerText = texts[lang].subTitle;
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (texts[lang][key]) el.innerText = texts[lang][key];
    });
}

document.getElementById('langBtn').addEventListener('click', () => {
    setLang(lang === 'hu' ? 'en' : 'hu');
});

setLang(lang);
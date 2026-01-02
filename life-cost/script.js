const texts = {
    en: { title: "Should I Buy?", salary: "Net Salary", mo: "Month", hr: "Hour", saved: "Saved automatically", price: "Product Price", btn: "CALCULATE TIME", resText: "Cost in time:" },
    hu: { title: "Megvegyem?", salary: "Nettó Fizetés", mo: "Havi", hr: "Óra", saved: "Automatikusan mentve", price: "Termék Ára", btn: "MENNYI IDŐ?", resText: "Ennyi munkaidő:" }
};

let lang = localStorage.getItem('userLang') || 'en';
function renderLang() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.getAttribute('data-key'); if(texts[lang][k]) el.innerText = texts[lang][k];
    });
}
document.getElementById('langBtn').addEventListener('click', () => { lang = lang==='hu'?'en':'hu'; localStorage.setItem('userLang', lang); renderLang(); });

if(localStorage.getItem('ls_sal')) document.getElementById('salary').value = localStorage.getItem('ls_sal');
if(localStorage.getItem('ls_type')) document.getElementById('type').value = localStorage.getItem('ls_type');

document.getElementById('salary').addEventListener('input', (e) => localStorage.setItem('ls_sal', e.target.value));
document.getElementById('type').addEventListener('change', (e) => localStorage.setItem('ls_type', e.target.value));

renderLang();

document.getElementById('calcBtn').addEventListener('click', () => {
    const sal = parseFloat(document.getElementById('salary').value);
    const price = parseFloat(document.getElementById('price').value);
    const type = document.getElementById('type').value;

    if(!sal || !price) return;

    let hourly = (type === 'month') ? sal / 160 : sal;
    let hoursNeeded = price / hourly;

    let days = Math.floor(hoursNeeded / 8);
    let remHours = Math.floor(hoursNeeded % 8);
    let mins = Math.round((hoursNeeded - Math.floor(hoursNeeded)) * 60);

    let resStr = "";
    if(days > 0) resStr += `${days}d `;
    if(remHours > 0) resStr += `${remHours}h `;
    resStr += `${mins}m`;

    if(lang === 'hu') {
        resStr = resStr.replace('d', ' nap').replace('h', ' óra').replace('m', ' perc');
    }

    document.getElementById('timeDisplay').innerText = resStr;
    document.getElementById('result').classList.remove('hidden');
});
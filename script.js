const texts = {
  en: {
    mainTitle: "MyTinyTools",
    subTitle: "Everyday utilities for smart people.",
    soberup: "Sober Up",
    unitprice: "Price Winner",
    lifecost: "Should I Buy?",
    evakviz: "EVA Quiz",
    concurentquiz: "Concurent Quiz",
    kitchenconv: "Kitchen Scale",
    wordlessclone: "Wordless Clone",
    algo2words: "Alogo2 Words",
    learntimer: "Learn Timer",
    sleeptuner: "Sleep Tuner",
    cyberpass: "Password Generator",
    worldquiz: "Countries Quiz",
    flashlight: "Flashlight",
  },
  hu: {
    mainTitle: "Eszközeim",
    subTitle: "Hasznos dolgok okos embereknek.",
    soberup: "Józanság",
    unitprice: "Ár-Összehasonlító",
    lifecost: "Megvegyem?",
    evakviz: "EVA Kvíz",
    concurentquiz: "Concurent Kvíz",
    kitchenconv: "Konyhai Mérleg",
    wordlessclone: "Wordless Klón",
    algo2words: "Alogo2 Szavak",
    learntimer: "Tanulás Időzítő",
    sleeptuner: "Alvás Elősegítő",
    cyberpass: "Jelszó Generátor",
    worldquiz: "Ország Kvíz",
    flashlight: "Zsebámpa",
  },
};

let lang = localStorage.getItem("userLang") || "en";

function setLang(newLang) {
  lang = newLang;
  localStorage.setItem("userLang", lang);

  const mainTitle = document.getElementById("mainTitle");
  const subTitle = document.getElementById("subTitle");

  if (mainTitle && texts[lang].mainTitle)
    mainTitle.innerText = texts[lang].mainTitle;
  if (subTitle && texts[lang].subTitle)
    subTitle.innerText = texts[lang].subTitle;

  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (texts[lang][key]) el.innerText = texts[lang][key];
  });
}

const langBtn = document.getElementById("langBtn");
if (langBtn) {
  langBtn.addEventListener("click", () => {
    setLang(lang === "hu" ? "en" : "hu");
  });
}

setLang(lang);

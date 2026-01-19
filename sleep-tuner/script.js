document.addEventListener("DOMContentLoaded", () => {
  const displayHours = document.getElementById("display-hours");
  const displayMins = document.getElementById("display-mins");
  const btnPlus = document.getElementById("btn-plus");
  const btnMinus = document.getElementById("btn-minus");
  const toggleBtn = document.getElementById("toggle-btn");
  const statusText = document.getElementById("status-text");
  const sleepCircle = document.querySelector(".sleep-circle");
  const blackoutEl = document.getElementById("blackout");
  const langBtn = document.getElementById("langBtn");

  const texts = {
    en: {
      title: "Sleep Tuner",
      subtitle: "Set your wind-down time",
      unitHour: "hours",
      unitMin: "mins",
      statusReady: "Ready to sleep?",
      statusRunning: "Sweet dreams... 🎵",
      statusDone: "Sleep time ended.",
      statusStopped: "Interrupted.",
      btnStart: "START",
      btnStop: "STOP SLEEP",
      errorFile: "Error: 'lofi.mp3' not found in folder or autoplay blocked!",
    },
    hu: {
      title: "Sleep Tuner",
      subtitle: "Állítsd be a hangolódás idejét",
      unitHour: "óra",
      unitMin: "perc",
      statusReady: "Készen állsz az alvásra?",
      statusRunning: "Kellemes pihenést... 🎵",
      statusDone: "Alvásidő lejárt.",
      statusStopped: "Megszakítva.",
      btnStart: "START",
      btnStop: "ALVÁS MEGSZAKÍTÁSA",
      errorFile:
        "Hiba: Nem találom a 'lofi.mp3' fájlt a mappában, vagy a böngésző letiltotta az automatikus lejátszást!",
    },
  };

  let lang = localStorage.getItem("userLang") || "hu";

  function renderLang() {
    document.querySelectorAll("[data-key]").forEach((el) => {
      const k = el.getAttribute("data-key");
      if (texts[lang][k] && !["statusReady", "btnStart"].includes(k)) {
        el.innerText = texts[lang][k];
      }
    });

    if (isRunning) {
      toggleBtn.textContent = texts[lang].btnStop;
      statusText.textContent = texts[lang].statusRunning;
    } else {
      toggleBtn.textContent = texts[lang].btnStart;
      if (
        statusText.textContent ===
        texts[lang === "hu" ? "en" : "hu"].statusStopped
      ) {
        statusText.textContent = texts[lang].statusStopped;
      } else if (
        statusText.textContent === texts[lang === "hu" ? "en" : "hu"].statusDone
      ) {
        statusText.textContent = texts[lang].statusDone;
      } else if (
        statusText.textContent ===
        texts[lang === "hu" ? "en" : "hu"].statusReady
      ) {
        statusText.textContent = texts[lang].statusReady;
      }
    }
  }

  let setTimeMinutes = 60;
  let remainingSeconds = 0;
  let isRunning = false;
  let timerInterval = null;

  const audio = new Audio("lofi.mp3");
  audio.loop = true;

  let fadeInterval = null;

  function fadeIn() {
    audio.volume = 0;
    audio.play().catch((error) => {
      alert(texts[lang].errorFile);
      manualStop();
    });

    let vol = 0;
    clearInterval(fadeInterval);
    fadeInterval = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        audio.volume = Math.min(vol, 1);
      } else {
        clearInterval(fadeInterval);
      }
    }, 150);
  }

  function fadeOutAndStop() {
    let vol = audio.volume;
    clearInterval(fadeInterval);
    fadeInterval = setInterval(() => {
      if (vol > 0.05) {
        vol -= 0.05;
        audio.volume = vol;
      } else {
        audio.volume = 0;
        audio.pause();
        audio.currentTime = 0;
        clearInterval(fadeInterval);
      }
    }, 250);
  }

  function updateDisplay() {
    let h = Math.floor(setTimeMinutes / 60);
    let m = setTimeMinutes % 60;
    displayHours.textContent = h;
    displayMins.textContent = m < 10 ? "0" + m : m;
  }

  btnPlus.addEventListener("click", () => {
    if (isRunning) return;
    if (setTimeMinutes < 720) {
      setTimeMinutes += 15;
      updateDisplay();
    }
  });

  btnMinus.addEventListener("click", () => {
    if (isRunning) return;
    if (setTimeMinutes > 15) {
      setTimeMinutes -= 15;
      updateDisplay();
    }
  });

  function startTimer() {
    isRunning = true;
    remainingSeconds = setTimeMinutes * 60;

    fadeIn();

    toggleBtn.textContent = texts[lang].btnStop;
    statusText.textContent = texts[lang].statusRunning;

    toggleBtn.classList.add("stop-mode");
    sleepCircle.classList.add("breathing");

    btnPlus.style.opacity = 0.3;
    btnMinus.style.opacity = 0.3;

    timerInterval = setInterval(() => {
      remainingSeconds--;

      let h = Math.floor(remainingSeconds / 3600);
      let m = Math.floor((remainingSeconds % 3600) / 60);
      displayHours.textContent = h;
      displayMins.textContent = m < 10 ? "0" + m : m;

      if (remainingSeconds === 60) {
        startLongFadeOut();
      }

      if (remainingSeconds <= 0) {
        finishSleep();
      }
    }, 1000);
  }

  function startLongFadeOut() {
    let vol = audio.volume;
    let step = vol / 60;

    let longFade = setInterval(() => {
      if (audio.volume > step) {
        audio.volume -= step;
      } else {
        audio.volume = 0;
        clearInterval(longFade);
      }
    }, 1000);
  }

  function finishSleep() {
    clearInterval(timerInterval);
    audio.pause();
    isRunning = false;

    blackoutEl.classList.remove("hidden");
    setTimeout(() => {
      blackoutEl.classList.add("active");
    }, 10);

    toggleBtn.textContent = texts[lang].btnStart;
    statusText.textContent = texts[lang].statusDone;

    toggleBtn.classList.remove("stop-mode");
    sleepCircle.classList.remove("breathing");
  }

  function manualStop() {
    clearInterval(timerInterval);
    isRunning = false;

    fadeOutAndStop();

    toggleBtn.textContent = texts[lang].btnStart;
    statusText.textContent = texts[lang].statusStopped;

    toggleBtn.classList.remove("stop-mode");
    sleepCircle.classList.remove("breathing");

    btnPlus.style.opacity = 1;
    btnMinus.style.opacity = 1;

    updateDisplay();
  }

  toggleBtn.addEventListener("click", () => {
    if (!isRunning) {
      startTimer();
    } else {
      manualStop();
    }
  });

  blackoutEl.addEventListener("click", () => {
    blackoutEl.classList.remove("active");
    setTimeout(() => {
      blackoutEl.classList.add("hidden");
    }, 2000);
    manualStop();
  });

  langBtn.addEventListener("click", () => {
    lang = lang === "hu" ? "en" : "hu";
    localStorage.setItem("userLang", lang);
    renderLang();
  });

  renderLang();
});

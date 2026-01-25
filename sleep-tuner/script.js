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
      remaining: "Remaining: ",
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
      remaining: "Hátralévő idő: ",
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
  let isRunning = false;
  let timerInterval = null;
  let endTime = 0;

  let lastDisplayedMinute = -1;

  const audio = new Audio("lofi.mp3");
  audio.loop = true;

  let fadeInterval = null;

  function updateMediaSessionMetadata() {
    if ("mediaSession" in navigator && isRunning) {
      const now = Date.now();
      const timeLeftMs = Math.max(0, endTime - now);
      const timeLeftMins = Math.ceil(timeLeftMs / 60000);

      navigator.mediaSession.metadata = new MediaMetadata({
        title: "Sleep Tuner",
        artist: `${texts[lang].remaining}${timeLeftMins} ${texts[lang].unitMin}`,
        album: "Sleep Timer",
        artwork: [
          { src: "cover.jpg?v=3", sizes: "96x96", type: "image/jpeg" },
          { src: "cover.jpg?v=3", sizes: "128x128", type: "image/jpeg" },
          { src: "cover.jpg?v=3", sizes: "192x192", type: "image/jpeg" },
          { src: "cover.jpg?v=3", sizes: "256x256", type: "image/jpeg" },
          { src: "cover.jpg?v=3", sizes: "384x384", type: "image/jpeg" },
          { src: "cover.jpg?v=3", sizes: "512x512", type: "image/jpeg" },
        ],
      });
    }
  }

  function setupMediaSession() {
    if ("mediaSession" in navigator) {
      lastDisplayedMinute = -1;
      updateMediaSessionMetadata();

      navigator.mediaSession.setActionHandler("pause", () => {
        manualStop();
      });
      navigator.mediaSession.setActionHandler("stop", () => {
        manualStop();
      });

      navigator.mediaSession.setActionHandler("previoustrack", () => {
        adjustTime(-15);
      });
      navigator.mediaSession.setActionHandler("nexttrack", () => {
        adjustTime(15);
      });

      navigator.mediaSession.setActionHandler("seekbackward", () => {
        adjustTime(-15);
      });
      navigator.mediaSession.setActionHandler("seekforward", () => {
        adjustTime(15);
      });
    }
  }

  function adjustTime(minutes) {
    if (!isRunning) return;

    endTime += minutes * 60 * 1000;
    setTimeMinutes += minutes;

    const now = Date.now();
    if (endTime < now) {
      endTime = now;
      finishSleep();
      return;
    }

    if (setTimeMinutes > 720) {
      setTimeMinutes = 720;
      endTime = now + 720 * 60 * 1000;
    }

    lastDisplayedMinute = -1;
    updateVisualTimer();
  }

  function fadeIn() {
    audio.volume = 0;
    audio
      .play()
      .then(() => {
        setupMediaSession();
      })
      .catch((error) => {
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

    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = null;
    }

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

  function updateVisualTimer() {
    const now = Date.now();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
      displayHours.textContent = 0;
      displayMins.textContent = "00";
      return;
    }

    let remainingMins = Math.ceil(timeLeft / 60000);

    if (remainingMins !== lastDisplayedMinute) {
      lastDisplayedMinute = remainingMins;
      updateMediaSessionMetadata();
    }

    let seconds = Math.ceil(timeLeft / 1000);
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);

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

  audio.addEventListener("timeupdate", () => {
    if (!isRunning) return;

    const now = Date.now();
    const timeLeft = endTime - now;

    if (timeLeft <= 60000 && timeLeft > 0) {
      let newVol = timeLeft / 60000;
      if (newVol > 1) newVol = 1;
      if (newVol < 0) newVol = 0;
      audio.volume = newVol;
    }

    if (timeLeft <= 0) {
      finishSleep();
    }
  });

  function startTimer() {
    isRunning = true;
    endTime = Date.now() + setTimeMinutes * 60 * 1000;

    lastDisplayedMinute = -1;

    fadeIn();

    toggleBtn.textContent = texts[lang].btnStop;
    statusText.textContent = texts[lang].statusRunning;

    toggleBtn.classList.add("stop-mode");
    sleepCircle.classList.add("breathing");

    btnPlus.style.opacity = 0.3;
    btnMinus.style.opacity = 0.3;

    clearInterval(timerInterval);
    updateVisualTimer();
    timerInterval = setInterval(updateVisualTimer, 1000);
  }

  function finishSleep() {
    clearInterval(timerInterval);
    audio.pause();
    isRunning = false;

    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = null;
    }

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

    lastDisplayedMinute = -1;
    updateMediaSessionMetadata();
  });

  renderLang();
});

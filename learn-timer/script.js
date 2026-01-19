document.addEventListener("DOMContentLoaded", () => {
  const setupPanel = document.getElementById("setup-panel");
  const timerPanel = document.getElementById("timer-panel");
  const startBtn = document.getElementById("start-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const stopBtn = document.getElementById("stop-btn");
  const modeLabel = document.getElementById("mode-label");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const totalLeftEl = document.getElementById("total-left");
  const inputTotalHours = document.getElementById("total-hours");
  const inputFocusMins = document.getElementById("focus-mins");
  const inputBreakMins = document.getElementById("break-mins");
  const langBtn = document.getElementById("langBtn");

  const sessionRing = document.getElementById("session-ring");
  const totalRing = document.getElementById("total-ring");

  const radiusSession = sessionRing.r.baseVal.value;
  const radiusTotal = totalRing.r.baseVal.value;

  const circumferenceSession = 2 * Math.PI * radiusSession;
  const circumferenceTotal = 2 * Math.PI * radiusTotal;

  sessionRing.style.strokeDasharray = `${circumferenceSession} ${circumferenceSession}`;
  sessionRing.style.strokeDashoffset = circumferenceSession;

  totalRing.style.strokeDasharray = `${circumferenceTotal} ${circumferenceTotal}`;
  totalRing.style.strokeDashoffset = circumferenceTotal;

  const texts = {
    en: {
      title: "FlowTimer",
      lblTotal: "Study Goal Today (hours)",
      lblFocus: "Focus (mins)",
      lblBreak: "Break (mins)",
      btnStart: "START SESSION",
      btnPause: "PAUSE",
      btnResume: "RESUME",
      btnStop: "END SESSION",
      statusFocus: "FOCUS MODE",
      statusBreak: "BREAK TIME",
      lblRemaining: "Total time remaining:",
      alertTotal: "Please enter a valid total time!",
      alertFocus: "Please enter a valid focus time!",
      alertBreak: "Please enter a valid break time!",
      alertFinish: "Congrats! Today's study goal completed.",
    },
    hu: {
      title: "FlowTimer",
      lblTotal: "Mennyit akarsz ma tanulni? (óra)",
      lblFocus: "Fókusz (perc)",
      lblBreak: "Pihenő (perc)",
      btnStart: "INDÍTÁS",
      btnPause: "SZÜNET",
      btnResume: "FOLYTATÁS",
      btnStop: "VÉGE",
      statusFocus: "FÓKUSZ MÓD",
      statusBreak: "PIHENŐ IDŐ",
      lblRemaining: "Hátralévő teljes idő:",
      alertTotal: "Kérlek adj meg érvényes teljes időt!",
      alertFocus: "Kérlek adj meg érvényes fókusz időt!",
      alertBreak: "Kérlek adj meg érvényes szünet időt!",
      alertFinish: "Gratulálok! A mai tanulási cél teljesítve.",
    },
  };

  let lang = localStorage.getItem("userLang") || "hu";

  let totalGoalSeconds = 0;
  let totalTimeSeconds = 0;
  let focusTimeSeconds = 0;
  let breakTimeSeconds = 0;

  let currentMode = "focus";
  let currentTime = 0;
  let isRunning = false;
  let timerInterval = null;
  let audioContext = null;

  function renderLang() {
    document.querySelectorAll("[data-key]").forEach((el) => {
      const k = el.getAttribute("data-key");
      if (k === "btnPause") {
        updatePauseButtonText();
      } else if (k === "statusFocus" || k === "statusBreak") {
        if (!setupPanel.classList.contains("hidden")) {
        } else {
          el.innerText =
            currentMode === "focus"
              ? texts[lang].statusFocus
              : texts[lang].statusBreak;
        }
      } else if (texts[lang][k]) {
        el.innerText = texts[lang][k];
      }
    });
  }

  function initAudio() {
    if (!audioContext)
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  function playNotification(type = "blip") {
    if (!audioContext) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    if (type === "finish") {
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        1046.5,
        audioContext.currentTime + 0.1,
      );
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 1.5,
      );
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 1.5);
    } else {
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + 0.8,
      );
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.8);
    }
  }

  function startSession() {
    initAudio();
    const totalHours = parseInt(inputTotalHours.value);
    const focusMins = parseInt(inputFocusMins.value);
    const breakMins = parseInt(inputBreakMins.value);

    if (isNaN(totalHours) || totalHours <= 0)
      return alert(texts[lang].alertTotal);
    if (isNaN(focusMins) || focusMins <= 0)
      return alert(texts[lang].alertFocus);
    if (isNaN(breakMins) || breakMins <= 0)
      return alert(texts[lang].alertBreak);

    totalGoalSeconds = totalHours * 3600;
    totalTimeSeconds = totalGoalSeconds;
    focusTimeSeconds = focusMins * 60;
    breakTimeSeconds = breakMins * 60;

    setupPanel.classList.add("hidden");
    timerPanel.classList.remove("hidden");

    currentMode = "focus";
    currentTime = focusTimeSeconds;
    modeLabel.textContent = texts[lang].statusFocus;

    updateUIColors();
    updateDisplay();
    startTimer();
  }

  function startTimer() {
    if (isRunning) return;
    isRunning = true;
    updatePauseButtonText();

    timerInterval = setInterval(() => {
      if (currentTime > 0) {
        currentTime--;
        if (totalTimeSeconds > 0) totalTimeSeconds--;
      } else {
        switchMode();
      }

      if (totalTimeSeconds <= 0) {
        finishAll();
      }

      updateDisplay();
    }, 1000);
  }

  function pauseTimer() {
    if (!isRunning) {
      startTimer();
    } else {
      clearInterval(timerInterval);
      isRunning = false;
      updatePauseButtonText();
    }
  }

  function updatePauseButtonText() {
    if (isRunning) {
      pauseBtn.textContent = texts[lang].btnPause;
    } else {
      pauseBtn.textContent = texts[lang].btnResume;
    }
  }

  function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timerPanel.classList.add("hidden");
    setupPanel.classList.remove("hidden");
  }

  function switchMode() {
    playNotification("blip");
    if (currentMode === "focus") {
      currentMode = "break";
      currentTime = breakTimeSeconds;
      modeLabel.textContent = texts[lang].statusBreak;
    } else {
      currentMode = "focus";
      currentTime = focusTimeSeconds;
      modeLabel.textContent = texts[lang].statusFocus;
    }
    updateUIColors();
  }

  function updateUIColors() {
    if (currentMode === "focus") {
      modeLabel.style.color = "#10b981";
      modeLabel.style.borderColor = "rgba(16, 185, 129, 0.3)";
      modeLabel.style.boxShadow = "0 0 15px rgba(16, 185, 129, 0.2)";
      sessionRing.setAttribute("stroke", "url(#gradient-focus)");
    } else {
      modeLabel.style.color = "#8b5cf6";
      modeLabel.style.borderColor = "rgba(139, 92, 246, 0.3)";
      modeLabel.style.boxShadow = "0 0 15px rgba(139, 92, 246, 0.2)";
      sessionRing.setAttribute("stroke", "url(#gradient-break)");
    }
  }

  function finishAll() {
    clearInterval(timerInterval);
    playNotification("finish");
    setTimeout(() => {
      alert(texts[lang].alertFinish);
      stopTimer();
    }, 500);
  }

  function updateDisplay() {
    const mins = Math.floor(currentTime / 60);
    const secs = currentTime % 60;
    minutesEl.textContent = mins < 10 ? `0${mins}` : mins;
    secondsEl.textContent = secs < 10 ? `0${secs}` : secs;

    const totalH = Math.floor(totalTimeSeconds / 3600);
    const totalM = Math.floor((totalTimeSeconds % 3600) / 60);
    totalLeftEl.textContent = `${totalH} ${lang === "hu" ? "óra" : "h"} ${totalM} ${lang === "hu" ? "p" : "m"}`;

    let maxSession =
      currentMode === "focus" ? focusTimeSeconds : breakTimeSeconds;
    let sessionRatio = currentTime / maxSession;
    if (maxSession <= 0) sessionRatio = 0;

    const offsetSession = circumferenceSession * (1 - sessionRatio);
    sessionRing.style.strokeDashoffset = offsetSession;

    let timeElapsed = totalGoalSeconds - totalTimeSeconds;
    let totalRatio = timeElapsed / totalGoalSeconds;
    if (totalGoalSeconds <= 0) totalRatio = 0;

    const offsetTotal = circumferenceTotal - totalRatio * circumferenceTotal;
    totalRing.style.strokeDashoffset = offsetTotal;
  }

  langBtn.addEventListener("click", () => {
    lang = lang === "hu" ? "en" : "hu";
    localStorage.setItem("userLang", lang);
    renderLang();

    if (!setupPanel.classList.contains("hidden")) {
    } else {
      modeLabel.textContent =
        currentMode === "focus"
          ? texts[lang].statusFocus
          : texts[lang].statusBreak;
      updatePauseButtonText();
      updateDisplay();
    }
  });

  if (startBtn) startBtn.addEventListener("click", startSession);
  if (pauseBtn) pauseBtn.addEventListener("click", pauseTimer);
  if (stopBtn) stopBtn.addEventListener("click", stopTimer);

  renderLang();
});

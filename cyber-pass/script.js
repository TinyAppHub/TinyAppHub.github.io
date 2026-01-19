document.addEventListener("DOMContentLoaded", () => {
  const passwordEl = document.getElementById("password-output");
  const lengthRange = document.getElementById("length-range");
  const lengthVal = document.getElementById("length-val");
  const incUpper = document.getElementById("inc-upper");
  const incNumbers = document.getElementById("inc-numbers");
  const incSymbols = document.getElementById("inc-symbols");
  const generateBtn = document.getElementById("generate-btn");
  const copyBtn = document.getElementById("copy-btn");
  const copyMsg = document.getElementById("copy-msg");
  const strengthFill = document.getElementById("strength-fill");
  const langBtn = document.getElementById("langBtn");

  const texts = {
    en: {
      title: "CYBERPASS",
      placeholder: "GENERATE!",
      msgCopied: "Copied to clipboard!",
      lblLength: "Length:",
      lblUpper: "Uppercase (A-Z)",
      lblNumbers: "Numbers (0-9)",
      lblSymbols: "Symbols (!@#)",
      btnGenerate: "GENERATE PASSWORD",
    },
    hu: {
      title: "CYBERPASS",
      placeholder: "GENERÁLJ!",
      msgCopied: "Vágólapra másolva!",
      lblLength: "Hossz:",
      lblUpper: "Nagybetűk (A-Z)",
      lblNumbers: "Számok (0-9)",
      lblSymbols: "Szimbólumok (!@#)",
      btnGenerate: "GENERÁLÁS",
    },
  };

  let lang = localStorage.getItem("userLang") || "hu";

  function renderLang() {
    const titleEl = document.querySelector("h1");
    if (titleEl) {
      titleEl.innerText = texts[lang].title;
      titleEl.setAttribute("data-text", texts[lang].title);
    }

    document.querySelectorAll("[data-key]").forEach((el) => {
      const k = el.getAttribute("data-key");
      if (k === "placeholder") {
        if (
          el.innerText === texts["hu"].placeholder ||
          el.innerText === texts["en"].placeholder
        ) {
          el.innerText = texts[lang].placeholder;
        }
      } else if (texts[lang][k] && k !== "title") {
        el.innerText = texts[lang][k];
      }
    });
  }

  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  lengthRange.addEventListener("input", (e) => {
    lengthVal.innerText = e.target.value;
    generatePassword();
  });

  [incUpper, incNumbers, incSymbols].forEach((el) => {
    el.addEventListener("change", generatePassword);
  });

  function generatePassword() {
    let length = +lengthRange.value;
    let chars = lower;

    if (incUpper.checked) chars += upper;
    if (incNumbers.checked) chars += numbers;
    if (incSymbols.checked) chars += symbols;

    if (chars === "") chars = lower;

    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }

    animatePassword(password);
    updateStrength(
      length,
      incUpper.checked,
      incNumbers.checked,
      incSymbols.checked,
    );
  }

  function animatePassword(finalPassword) {
    let iterations = 0;
    const interval = setInterval(() => {
      passwordEl.innerText = finalPassword
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return finalPassword[index];
          }
          return String.fromCharCode(33 + Math.floor(Math.random() * 94));
        })
        .join("");

      if (iterations >= finalPassword.length) {
        clearInterval(interval);
        passwordEl.innerText = finalPassword;
      }

      iterations += 1 / 2;
    }, 30);
  }

  function updateStrength(len, hasUp, hasNum, hasSym) {
    let strength = 0;
    if (len >= 8) strength += 1;
    if (len >= 12) strength += 1;
    if (len >= 16) strength += 1;
    if (hasUp) strength += 1;
    if (hasNum) strength += 1;
    if (hasSym) strength += 1;

    let percent = (strength / 6) * 100;
    strengthFill.style.width = `${percent}%`;

    if (percent < 40) strengthFill.style.backgroundColor = "#ef4444";
    else if (percent < 70) strengthFill.style.backgroundColor = "#eab308";
    else strengthFill.style.backgroundColor = "#00ff9d";
  }

  function copyToClipboard() {
    const pass = passwordEl.innerText;
    if (
      !pass ||
      pass === texts["en"].placeholder ||
      pass === texts["hu"].placeholder
    )
      return;

    navigator.clipboard.writeText(pass).then(() => {
      copyMsg.classList.remove("hidden");
      setTimeout(() => {
        copyMsg.classList.add("hidden");
      }, 2000);
    });
  }

  generateBtn.addEventListener("click", generatePassword);
  copyBtn.addEventListener("click", copyToClipboard);

  langBtn.addEventListener("click", () => {
    lang = lang === "hu" ? "en" : "hu";
    localStorage.setItem("userLang", lang);
    renderLang();
  });

  renderLang();
  generatePassword();
});

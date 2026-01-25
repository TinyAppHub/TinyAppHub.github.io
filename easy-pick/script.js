const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");
const modal = document.getElementById("modal");
const winnerResult = document.getElementById("winnerResult");
const closeModal = document.getElementById("closeModal");
const langBtn = document.getElementById("langBtn");

const texts = {
  hu: {
    title: "Döntéskerék",
    placeholder: "Írd be az opciót...",
    spin: "PÖRGETÉS",
    winnerTitle: "A győztes:",
    close: "OK",
    alertMin: "Legalább 2 opció kell!",
  },
  en: {
    title: "Decision Wheel",
    placeholder: "Type an option...",
    spin: "SPIN",
    winnerTitle: "The winner is:",
    close: "OK",
    alertMin: "You need at least 2 options!",
  },
};

let lang = localStorage.getItem("userLang") || "hu";

function renderLang() {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const k = el.getAttribute("data-key");
    if (texts[lang][k]) {
      if (el.tagName === "INPUT") {
        el.placeholder = texts[lang][k];
      } else {
        el.innerText = texts[lang][k];
      }
    }
  });
}

langBtn.addEventListener("click", () => {
  lang = lang === "hu" ? "en" : "hu";
  localStorage.setItem("userLang", lang);
  renderLang();
});

let items = ["Pizza", "Hamburger", "Gyros"];
let currentDeg = 0;
let isSpinning = false;
const colors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#F1948A",
];

function drawWheel() {
  const numItems = items.length;
  const arcSize = (2 * Math.PI) / numItems;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = canvas.width / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < numItems; i++) {
    const angle = i * arcSize - Math.PI / 2;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, angle, angle + arcSize);
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.stroke();

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle + arcSize / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#fff";
    ctx.font = "bold 20px Arial";
    ctx.fillText(items[i], radius - 20, 10);
    ctx.restore();
  }
}

function renderList() {
  itemList.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.addEventListener("click", () => {
      if (isSpinning) return;
      items.splice(index, 1);
      renderList();
      drawWheel();
    });
    itemList.appendChild(li);
  });
}

function addItem() {
  const text = itemInput.value.trim();
  if (text && !isSpinning) {
    items.push(text);
    itemInput.value = "";
    renderList();
    drawWheel();
  }
}

function spin() {
  if (isSpinning || items.length < 2) {
    if (items.length < 2) alert(texts[lang].alertMin);
    return;
  }

  isSpinning = true;
  spinBtn.disabled = true;

  const randomDeg = Math.floor(2000 + Math.random() * 3000);
  currentDeg += randomDeg;

  canvas.style.transform = `rotate(-${currentDeg}deg)`;
}

canvas.addEventListener("transitionend", () => {
  isSpinning = false;
  spinBtn.disabled = false;

  const actualDeg = currentDeg % 360;
  const sliceDeg = 360 / items.length;
  const index = Math.floor(actualDeg / sliceDeg);

  winnerResult.textContent = items[index];
  modal.classList.remove("hidden");
  createConfetti();
});

function createConfetti() {
  for (let i = 0; i < 50; i++) {
    const conf = document.createElement("div");
    conf.style.position = "fixed";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-10px";
    conf.style.width = "10px";
    conf.style.height = "10px";
    conf.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    conf.style.zIndex = "1000";
    conf.style.transition = "top 1s ease-in, transform 1s ease-in";
    document.body.appendChild(conf);

    setTimeout(() => {
      conf.style.top = "100vh";
      conf.style.transform = `rotate(${Math.random() * 360}deg)`;
    }, 10);

    setTimeout(() => conf.remove(), 1000);
  }
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

addBtn.addEventListener("click", addItem);
itemInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addItem();
});
spinBtn.addEventListener("click", spin);

renderLang();
renderList();
drawWheel();

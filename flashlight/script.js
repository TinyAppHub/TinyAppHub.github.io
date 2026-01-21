const body = document.body;
const powerBtn = document.getElementById("power-btn");
const redBtn = document.getElementById("red-btn");

let isOn = false;
let isRed = false;
let wakeLock = null;

powerBtn.addEventListener("click", async () => {
  isOn = !isOn;
  updateDisplay();

  if (isOn) {
    await requestWakeLock();
  } else {
    releaseWakeLock();
  }
});

redBtn.addEventListener("click", () => {
  isRed = !isRed;
  updateDisplay();
});


function updateDisplay() {
  if (isRed) {
    redBtn.classList.add("red-active");
  } else {
    redBtn.classList.remove("red-active");
  }

  if (isOn) {
    body.classList.add("light-on");

    if (isRed) {
      body.classList.add("red-mode");
    } else {
      body.classList.remove("red-mode");
    }

    powerBtn.textContent = "OFF";
  } else {
    body.classList.remove("light-on", "red-mode");
    powerBtn.textContent = "ON";
  }
}

async function requestWakeLock() {
  try {
    if ("wakeLock" in navigator) {
      wakeLock = await navigator.wakeLock.request("screen");
      console.log("Képernyő ébren tartása: AKTÍV");

      wakeLock.addEventListener("release", () => {
        console.log("Wake Lock feloldva");
      });
    }
  } catch (err) {
    console.log("Wake Lock hiba:", err);
  }
}

function releaseWakeLock() {
  if (wakeLock !== null) {
    wakeLock.release().then(() => {
      wakeLock = null;
    });
  }
}

document.addEventListener("visibilitychange", async () => {
  if (wakeLock !== null && document.visibilityState === "visible" && isOn) {
    await requestWakeLock();
  }
});

const dictionary = [
  { eng: "vertex", hun: "csúcs" },
  { eng: "vertices", hun: "csúcsok" },
  { eng: "edge", hun: "él" },
  { eng: "directed acyclic graph (DAG)", hun: "irányított, körmentes gráf" },
  { eng: "adjacency matrix", hun: "szomszédsági mátrix" },
  { eng: "adjacency list", hun: "szomszédsági lista" },
  { eng: "breadth-first search (BFS)", hun: "szélességi gráfkeresés" },
  { eng: "breadth-first tree (BFT)", hun: "szélességi fa" },
  { eng: "depth-first search (DFS)", hun: "mélységi gráfkeresés" },
  { eng: "discovery time", hun: "elérési idő" },
  { eng: "finishing time", hun: "befejezési idő" },
  { eng: "depth-first forest (DFT)", hun: "mélységi feszítő erdő" },
  { eng: "classification of edges", hun: "élek osztályozása" },
  { eng: "tree edge", hun: "fa-él" },
  { eng: "back edge", hun: "vissza-él" },
  { eng: "forward edge", hun: "előre-él" },
  { eng: "cross edge", hun: "kereszt-él" },
  { eng: "balance", hun: "egyensúly" },
  { eng: "left/right rotation", hun: "balra/jobbra forgatás" },
  { eng: "minimum spanning tree (MST)", hun: "minimális feszítőfa" },
  { eng: "safe for A", hun: "biztonságos A-hoz" },
  { eng: "relaxation", hun: "közelítés" },
  { eng: "queue-based", hun: "sor-alapú" },
  { eng: "breadth-first scanning", hun: "QBF eredeti neve" },
  { eng: "start", hun: "forrás" },
  { eng: "alphabet", hun: "ábécé" },
  { eng: "text", hun: "szöveg" },
  { eng: "pattern", hun: "minta" },
  { eng: "occurrence", hun: "előfordulás" },
  { eng: "string-matching", hun: "mintaillesztés" },
  { eng: "notation", hun: "jelölés" },
  { eng: "possible shift", hun: "lehetséges eltolás" },
  { eng: "valid shift", hun: "érvényes eltolás" },
  { eng: "invalid shift", hun: "érvénytelen eltolás" },
  { eng: "naive string-matching", hun: "egyszerű mintaillesztés" },
  { eng: "brute-force", hun: "nyers erő" },
  { eng: "proper prefix/suffix", hun: "valódi prefix/szuffix" },
  {
    eng: "transitivity of suffix relation",
    hun: "szuffixum reláció tranzitivitása",
  },
  { eng: "overlapping-suffix", hun: "átfedő szuffix" },
  { eng: "suffix-extension", hun: "szuffix kiterjesztés" },
  { eng: "transitive closure", hun: "tranzitív lezárt" },
];

const questionEl = document.getElementById("question-word");
const inputEl = document.getElementById("answer-input");
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const feedbackEl = document.getElementById("feedback");
const totalCountEl = document.getElementById("total-count");
const modeRadios = document.querySelectorAll('input[name="mode"]');

let currentWordObj = null;

function init() {
  totalCountEl.innerText = dictionary.length;
  loadRandomWord();

  checkBtn.addEventListener("click", checkAnswer);
  nextBtn.addEventListener("click", loadRandomWord);

  inputEl.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      if (nextBtn.classList.contains("hidden")) {
        checkAnswer();
      } else {
        loadRandomWord();
      }
    }
  });

  modeRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      loadRandomWord();
    });
  });
}

function getCurrentMode() {
  let selectedMode = "eng_hun";
  modeRadios.forEach((radio) => {
    if (radio.checked) {
      selectedMode = radio.value;
    }
  });
  return selectedMode;
}

function loadRandomWord() {
  feedbackEl.classList.add("hidden");
  feedbackEl.className = "feedback hidden";
  nextBtn.classList.add("hidden");
  checkBtn.classList.remove("hidden");
  inputEl.value = "";
  inputEl.disabled = false;
  inputEl.focus();

  const randomIndex = Math.floor(Math.random() * dictionary.length);
  currentWordObj = dictionary[randomIndex];

  const mode = getCurrentMode();
  if (mode === "eng_hun") {
    questionEl.innerText = currentWordObj.eng;
    inputEl.placeholder = "Írd ide a magyar jelentést...";
  } else {
    questionEl.innerText = currentWordObj.hun;
    inputEl.placeholder = "Írd ide az angol jelentést...";
  }
}

function getColoredFeedback(userAttempt, correctAnswer) {
  const n = userAttempt.length;
  const m = correctAnswer.length;

  const dp = Array(n + 1)
    .fill()
    .map(() => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (userAttempt[i - 1] === correctAnswer[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = n;
  let j = m;
  let resultHtml = "";

  let charArray = [];

  while (i > 0 && j > 0) {
    if (userAttempt[i - 1] === correctAnswer[j - 1]) {
      charArray.unshift(
        `<span class="char-correct">${userAttempt[i - 1]}</span>`,
      );
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      charArray.unshift(
        `<span class="char-wrong">${userAttempt[i - 1]}</span>`,
      );
      i--;
    } else {
      j--;
    }
  }

  while (i > 0) {
    charArray.unshift(`<span class="char-wrong">${userAttempt[i - 1]}</span>`);
    i--;
  }

  return charArray.join("");
}
function getColoredFeedback(userAttempt, correctAnswer) {
  const n = userAttempt.length;
  const m = correctAnswer.length;

  const dp = Array(n + 1)
    .fill()
    .map(() => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (userAttempt[i - 1] === correctAnswer[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = n;
  let j = m;
  let resultHtml = "";

  let charArray = [];

  while (i > 0 && j > 0) {
    if (userAttempt[i - 1] === correctAnswer[j - 1]) {
      charArray.unshift(
        `<span class="char-correct">${userAttempt[i - 1]}</span>`,
      );
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      charArray.unshift(
        `<span class="char-wrong">${userAttempt[i - 1]}</span>`,
      );
      i--;
    } else {
      j--;
    }
  }

  while (i > 0) {
    charArray.unshift(`<span class="char-wrong">${userAttempt[i - 1]}</span>`);
    i--;
  }

  return charArray.join("");
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/\s*\(.*?\)\s*/g, "")
    .trim();
}

function checkAnswer() {
  const userAnswer = normalizeText(inputEl.value);
  const mode = getCurrentMode();

  let correctAnswerRaw = "";

  if (mode === "eng_hun") {
    correctAnswerRaw = currentWordObj.hun;
  } else {
    correctAnswerRaw = currentWordObj.eng;
  }

  const correctAnswerClean = normalizeText(correctAnswerRaw);

  const isCorrect =
    userAnswer === correctAnswerClean ||
    (userAnswer.length > 2 &&
      correctAnswerRaw.toLowerCase().includes(userAnswer));

  feedbackEl.classList.remove("hidden");

  if (isCorrect && userAnswer !== "") {
    feedbackEl.innerText = "Helyes! ✅";
    feedbackEl.classList.remove("wrong");
    feedbackEl.classList.add("correct");
    handleCorrectState();
  } else {
    const coloredDiff = getColoredFeedback(userAnswer, correctAnswerClean);

    feedbackEl.innerHTML = `
      Nem jó. ❌ <br>
      Ezt írtad: ${coloredDiff} <br>
      A helyes válasz: <strong>${correctAnswerRaw}</strong>
    `;

    feedbackEl.classList.remove("correct");
    feedbackEl.classList.add("wrong");
    handleCorrectState();
  }
}

function handleCorrectState() {
  inputEl.disabled = true;
  checkBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  nextBtn.focus();
}

init();

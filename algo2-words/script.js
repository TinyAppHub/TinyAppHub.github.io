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
  let questionText = "";

  if (mode === "eng_hun") {
    correctAnswerRaw = currentWordObj.hun;
    questionText = currentWordObj.eng;
  } else {
    correctAnswerRaw = currentWordObj.eng;
    questionText = currentWordObj.hun;
  }

  const correctAnswerClean = normalizeText(correctAnswerRaw);

  const isCorrect =
    userAnswer === correctAnswerClean ||
    (userAnswer.length > 2 &&
      correctAnswerRaw.toLowerCase().includes(userAnswer));

  feedbackEl.classList.remove("hidden");

  if (isCorrect && userAnswer !== "") {
    feedbackEl.innerText = "Helyes! ✅";
    feedbackEl.classList.add("correct");
    handleCorrectState();
  } else {
    feedbackEl.innerHTML = `Nem jó. ❌ <br>A helyes válasz: <strong>${correctAnswerRaw}</strong>`;
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

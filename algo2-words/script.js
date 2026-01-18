const dictionary = [
  { eng: "vertex", hun: "csúcs" },
  { eng: "vertices", hun: "csúcsok" },
  { eng: "edge", hun: "él" },
  { eng: "directed acyclic graph (DAG)", hun: "irányított, körmentes gráf" },
  { eng: "adjacency matrix", hun: "szomszédsági mátrix" },
  { eng: "adjacency list", hun: "szomszédsági lista" },
  { eng: "breadth first search (BFS)", hun: "szélességi gráfkeresés" },
  { eng: "breadth first tree (BFT)", hun: "szélességi fa" },
  { eng: "depth first search (DFS)", hun: "mélységi gráfkeresés" },
  { eng: "discovery time", hun: "elérési idő" },
  { eng: "finishing time", hun: "befejezési idő" },
  { eng: "depth first forest (DFT)", hun: "mélységi feszítő erdő" },
  { eng: "classification of edges", hun: "élek osztályozása" },
  { eng: "tree edge", hun: "fa él" },
  { eng: "back edge", hun: "vissza él" },
  { eng: "forward edge", hun: "előre él" },
  { eng: "cross edge", hun: "kereszt él" },
  { eng: "balance", hun: "egyensúly" },
  { eng: "left/right rotation", hun: "balra/jobbra forgatás" },
  { eng: "minimum spanning tree (MST)", hun: "minimális feszítőfa" },
  { eng: "safe for A", hun: "biztonságos A hoz" },
  { eng: "relaxation", hun: "közelítés" },
  { eng: "queue based", hun: "sor alapú" },
  { eng: "breadth first scanning", hun: "QBF eredeti neve" },
  { eng: "start", hun: "forrás" },
  { eng: "alphabet", hun: "ábécé" },
  { eng: "text", hun: "szöveg" },
  { eng: "pattern", hun: "minta" },
  { eng: "occurrence", hun: "előfordulás" },
  { eng: "string matching", hun: "mintaillesztés" },
  { eng: "notation", hun: "jelölés" },
  { eng: "possible shift", hun: "lehetséges eltolás" },
  { eng: "valid shift", hun: "érvényes eltolás" },
  { eng: "invalid shift", hun: "érvénytelen eltolás" },
  { eng: "naive string matching", hun: "egyszerű mintaillesztés" },
  { eng: "brute force", hun: "nyers erő" },
  { eng: "proper prefix/suffix", hun: "valódi prefix/szuffix" },
  {
    eng: "transitivity of suffix relation",
    hun: "szuffixum reláció tranzitivitása",
  },
  { eng: "overlapping suffix", hun: "átfedő szuffix" },
  { eng: "suffix extension", hun: "szuffix kiterjesztés" },
  { eng: "transitive closure", hun: "tranzitív lezárt" },
];

const questionEl = document.getElementById("question-word");
const inputEl = document.getElementById("answer-input");
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const feedbackEl = document.getElementById("feedback");
const modeRadios = document.querySelectorAll('input[name="mode"]');

const quizCard = document.getElementById("quiz-card");
const resultCard = document.getElementById("result-card");
const progressText = document.getElementById("progress-text");
const scoreText = document.getElementById("score-text");

const finalScoreDisplay = document.getElementById("final-score-display");
const totalQuestionsDisplay = document.getElementById(
  "total-questions-display",
);
const evaluationText = document.getElementById("evaluation-text");
const restartBtn = document.getElementById("restart-btn");

let quizQueue = [];
let currentWordObj = null;
let score = 0;
let totalQuestions = 0;
let currentQuestionIndex = 0;

function init() {
  restartBtn.addEventListener("click", startQuiz);
  checkBtn.addEventListener("click", checkAnswer);
  nextBtn.addEventListener("click", nextQuestion);

  inputEl.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      if (nextBtn.classList.contains("hidden")) {
        checkAnswer();
      } else {
        nextQuestion();
      }
    }
  });

  modeRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      startQuiz();
    });
  });

  startQuiz();
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

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  quizCard.classList.remove("hidden");
  resultCard.classList.add("hidden");

  score = 0;
  quizQueue = shuffleArray([...dictionary]);
  totalQuestions = dictionary.length;
  currentQuestionIndex = 0;

  updateStats();
  loadWordFromQueue();
}

function updateStats() {
  let displayIndex =
    currentQuestionIndex < totalQuestions
      ? currentQuestionIndex + 1
      : totalQuestions;
  progressText.innerText = `${displayIndex} / ${totalQuestions}`;
  scoreText.innerText = score;
}

function loadWordFromQueue() {
  if (quizQueue.length === 0) {
    showResults();
    return;
  }

  currentWordObj = quizQueue.pop();

  feedbackEl.classList.add("hidden");
  feedbackEl.className = "feedback hidden";
  nextBtn.classList.add("hidden");
  checkBtn.classList.remove("hidden");

  inputEl.value = "";
  inputEl.disabled = false;
  inputEl.focus();

  const mode = getCurrentMode();
  if (mode === "eng_hun") {
    questionEl.innerText = currentWordObj.eng;
    inputEl.placeholder = "Írd ide a magyar jelentést...";
  } else {
    questionEl.innerText = currentWordObj.hun;
    inputEl.placeholder = "Írd ide az angol jelentést...";
  }
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
    (userAnswer.length > 2 && correctAnswerClean.includes(userAnswer));

  feedbackEl.classList.remove("hidden");

  if (isCorrect && userAnswer !== "") {
    score++;
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

  updateStats();
}

function nextQuestion() {
  currentQuestionIndex++;
  updateStats();
  loadWordFromQueue();
}

function showResults() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  finalScoreDisplay.innerText = score;
  totalQuestionsDisplay.innerText = totalQuestions;

  const percentage = (score / totalQuestions) * 100;
  let text = "";
  if (percentage === 100) text = "Tökéletes! Profi vagy! 🏆";
  else if (percentage >= 80) text = "Nagyon szép teljesítmény! 🔥";
  else if (percentage >= 50) text = "Nem rossz, de van még hova fejlődni. 👍";
  else text = "Gyakorolj még egy kicsit! 💪";

  evaluationText.innerText = text;
}

function handleCorrectState() {
  inputEl.disabled = true;
  checkBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  nextBtn.focus();
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/\s*\(.*?\)\s*/g, "")
    .trim();
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

init();

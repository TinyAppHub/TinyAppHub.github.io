const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const questionCounterElement = document.getElementById("question-counter");
const scoreCounterElement = document.getElementById("score-counter");
const finalScoreElement = document.getElementById("final-score");
const resultMessageElement = document.getElementById("result-message");

let shuffledQuestions, currentQuestionIndex;
let score = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
restartButton.addEventListener("click", startGame);

function startGame() {
  startScreen.classList.add("hide");
  resultScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  updateScore();
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  questionCounterElement.innerText = `Kérdés: ${currentQuestionIndex + 1} / ${shuffledQuestions.length}`;
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn-answer");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    score++;
    updateScore();
    selectedButton.classList.add("selected", "correct");
  } else {
    selectedButton.classList.add("selected", "wrong");
  }

  Array.from(answerButtonsElement.children).forEach((button) => {
    button.disabled = true;

    if (button.dataset.correct === "true" && button !== selectedButton) {
      button.classList.add("correct-reveal");
    }
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    setTimeout(showResults, 1500);
  }
}

function updateScore() {
  scoreCounterElement.innerText = `Pont: ${score}`;
}

function showResults() {
  quizScreen.classList.add("hide");
  resultScreen.classList.remove("hide");
  finalScoreElement.innerText = `${shuffledQuestions.length} / ${score} pontot értél el!`;

  let message = "";
  const percentage = (score / shuffledQuestions.length) * 100;

  if (percentage === 100) {
    message = "Fantastico! Te egy igazi olasz vagy lélekben! 🍕🍷";
  } else if (percentage >= 80) {
    message = "Molto bene! Nagyon jól ismered Olaszországot! 🇮🇹";
  } else if (percentage >= 50) {
    message = "Nem rossz! De talán egy kis pizzázás még ráfér a tudásra. 😉";
  } else {
    message = "Mamma mia! Irány vissza az utikönyvekhez! 📖";
  }
  resultMessageElement.innerText = message;
}

const questions = [
  {
    question: "Melyik városban található a híres Colosseum?",
    answers: [
      { text: "Milánó", correct: false },
      { text: "Róma", correct: true },
      { text: "Nápoly", correct: false },
      { text: "Verona", correct: false },
    ],
  },
  {
    question: "Melyik Olaszország leghosszabb folyója?",
    answers: [
      { text: "Tevere", correct: false },
      { text: "Arno", correct: false },
      { text: "Pó", correct: true },
      { text: "Adige", correct: false },
    ],
  },
  {
    question:
      "Hivatalosan mikor ihatnak cappuccinót az olaszok az illem szerint?",
    answers: [
      { text: "Bármikor", correct: false },
      { text: "Csak reggel 11 előtt", correct: true },
      { text: "Csak ebéd után", correct: false },
      { text: "Vacsora mellé", correct: false },
    ],
  },
  {
    question: "Melyik divatház szimbóluma a Medúza-fej?",
    answers: [
      { text: "Gucci", correct: false },
      { text: "Versace", correct: true },
      { text: "Armani", correct: false },
      { text: "Dolce & Gabbana", correct: false },
    ],
  },
  {
    question: "Hány tartománya (regione) van Olaszországnak?",
    answers: [
      { text: "18", correct: false },
      { text: "20", correct: true },
      { text: "22", correct: false },
      { text: "15", correct: false },
    ],
  },
  {
    question: "Hol található az 'Utolsó vacsora' című festmény?",
    answers: [
      { text: "Róma, Vatikán", correct: false },
      { text: "Firenze, Uffizi", correct: false },
      { text: "Milánó, Santa Maria delle Grazie", correct: true },
      { text: "Velence, Dózse-palota", correct: false },
    ],
  },
  {
    question: "Melyik sajtot készítik juhtejből?",
    answers: [
      { text: "Parmigiano Reggiano", correct: false },
      { text: "Mozzarella", correct: false },
      { text: "Pecorino", correct: true },
      { text: "Gorgonzola", correct: false },
    ],
  },
  {
    question: "Melyik évben egyesült hivatalosan Olaszország (Risorgimento)?",
    answers: [
      { text: "1848", correct: false },
      { text: "1861", correct: true },
      { text: "1900", correct: false },
      { text: "1789", correct: false },
    ],
  },
  {
    question: "Melyik városban rendezik meg a híres 'Palio' lovasversenyt?",
    answers: [
      { text: "Siena", correct: true },
      { text: "Firenze", correct: false },
      { text: "Bologna", correct: false },
      { text: "Perugia", correct: false },
    ],
  },
  {
    question: "Melyik a Chianti borvidék fő szőlőfajtája?",
    answers: [
      { text: "Merlot", correct: false },
      { text: "Nebbiolo", correct: false },
      { text: "Sangiovese", correct: true },
      { text: "Primitivo", correct: false },
    ],
  },
  {
    question: "Ki rendezte a 'La Dolce Vita' (Az édes élet) című filmet?",
    answers: [
      { text: "Federico Fellini", correct: true },
      { text: "Sergio Leone", correct: false },
      { text: "Paolo Sorrentino", correct: false },
      { text: "Roberto Benigni", correct: false },
    ],
  },
  {
    question: "Melyik sziget NEM tartozik Olaszországhoz?",
    answers: [
      { text: "Elba", correct: false },
      { text: "Korzika", correct: true },
      { text: "Capri", correct: false },
      { text: "Ischia", correct: false },
    ],
  },
  {
    question: "Mit jelent a 'Tiramisu' szó szerinti fordítása?",
    answers: [
      { text: "Édes álom", correct: false },
      { text: "Húzz fel / Dobj fel", correct: true },
      { text: "Kávés csók", correct: false },
      { text: "Reggeli ébredés", correct: false },
    ],
  },
  {
    question:
      "Melyik autómárka emblémája a 'Cavallino Rampante' (Ágaskodó ló)?",
    answers: [
      { text: "Lamborghini", correct: false },
      { text: "Maserati", correct: false },
      { text: "Ferrari", correct: true },
      { text: "Alfa Romeo", correct: false },
    ],
  },
  {
    question: "Melyik város a pizzájáról híres?",
    answers: [
      { text: "Nápoly", correct: true },
      { text: "Róma", correct: false },
      { text: "Bari", correct: false },
      { text: "Genova", correct: false },
    ],
  },
  {
    question: "Hogyan hívják a Velencében használt tradicionális csónakot?",
    answers: [
      { text: "Vaporetto", correct: false },
      { text: "Gondola", correct: true },
      { text: "Traghetto", correct: false },
      { text: "Motoscafo", correct: false },
    ],
  },
  {
    question: "Melyik vulkán található Szicíliában?",
    answers: [
      { text: "Vezúv", correct: false },
      { text: "Etna", correct: true },
      { text: "Stromboli", correct: false },
      { text: "Vulcano", correct: false },
    ],
  },
  {
    question:
      "Mi a 'carbonara' tészta eredeti összetevője a tojáson és sajton kívül?",
    answers: [
      { text: "Tejszín", correct: false },
      { text: "Guanciale (tokaszalonna)", correct: true },
      { text: "Csirkemell", correct: false },
      { text: "Gomba", correct: false },
    ],
  },
  {
    question: "Melyik építész tervezte a Szent Péter-bazilika kupoláját?",
    answers: [
      { text: "Bernini", correct: false },
      { text: "Michelangelo", correct: true },
      { text: "Brunelleschi", correct: false },
      { text: "Donatello", correct: false },
    ],
  },
  {
    question:
      "Mi Olaszország nemzeti légitársasága (a megszűnt Alitalia utódja)?",
    answers: [
      { text: "Lufthansa Italia", correct: false },
      { text: "ITA Airways", correct: true },
      { text: "Air Dolomiti", correct: false },
      { text: "Ryanair", correct: false },
    ],
  },
  {
    question:
      "Melyik városban játszódik Shakespeare 'Rómeó és Júlia' című műve?",
    answers: [
      { text: "Verona", correct: true },
      { text: "Velence", correct: false },
      { text: "Padova", correct: false },
      { text: "Mantova", correct: false },
    ],
  },
  {
    question: "Milyen színű az olasz labdarúgó-válogatott meze?",
    answers: [
      { text: "Piros", correct: false },
      { text: "Zöld", correct: false },
      { text: "Kék (Azzurri)", correct: true },
      { text: "Fehér", correct: false },
    ],
  },
  {
    question: "Melyik régió központja Torino?",
    answers: [
      { text: "Lombardia", correct: false },
      { text: "Piemont", correct: true },
      { text: "Liguria", correct: false },
      { text: "Veneto", correct: false },
    ],
  },
  {
    question: "Mi volt a fizetőeszköz az euró előtt?",
    answers: [
      { text: "Peseta", correct: false },
      { text: "Frank", correct: false },
      { text: "Líra", correct: true },
      { text: "Márka", correct: false },
    ],
  },
  {
    question: "Melyik tésztafajta hasonlít kis fülekre?",
    answers: [
      { text: "Penne", correct: false },
      { text: "Farfalle", correct: false },
      { text: "Orecchiette", correct: true },
      { text: "Fusilli", correct: false },
    ],
  },
  {
    question: "Hol található a híres 'Kék Barlang' (Grotta Azzurra)?",
    answers: [
      { text: "Szardínia", correct: false },
      { text: "Capri", correct: true },
      { text: "Elba", correct: false },
      { text: "Lipari", correct: false },
    ],
  },
  {
    question: "Melyik zeneszerző írta a 'Traviata' és az 'Aida' operákat?",
    answers: [
      { text: "Puccini", correct: false },
      { text: "Vivaldi", correct: false },
      { text: "Verdi", correct: true },
      { text: "Rossini", correct: false },
    ],
  },
  {
    question:
      "Melyik város híres a San Gennaro (Szent Januáriusz) vércsodáról?",
    answers: [
      { text: "Nápoly", correct: true },
      { text: "Róma", correct: false },
      { text: "Torino", correct: false },
      { text: "Palermo", correct: false },
    ],
  },
  {
    question: "Mit jelent a 'Dolce far niente' kifejezés?",
    answers: [
      { text: "Édes semmittevés", correct: true },
      { text: "Gyors munka", correct: false },
      { text: "Finom vacsora", correct: false },
      { text: "Fájdalmas búcsú", correct: false },
    ],
  },
  {
    question: "Melyik tenger határolja Olaszországot keletről?",
    answers: [
      { text: "Tirrén-tenger", correct: false },
      { text: "Jón-tenger", correct: false },
      { text: "Adriai-tenger", correct: true },
      { text: "Ligur-tenger", correct: false },
    ],
  },
  {
    question: "Melyik híres likőr készül Sorrentóban és az Amalfi-parton?",
    answers: [
      { text: "Grappa", correct: false },
      { text: "Limoncello", correct: true },
      { text: "Amaretto", correct: false },
      { text: "Sambuca", correct: false },
    ],
  },
  {
    question: "Melyik városban van a dőlt torony?",
    answers: [
      { text: "Pisa", correct: true },
      { text: "Lucca", correct: false },
      { text: "Livorno", correct: false },
      { text: "Siena", correct: false },
    ],
  },
  {
    question: "Ki volt az a híres olasz felfedező, akiről Amerikát elnevezték?",
    answers: [
      { text: "Cristoforo Colombo", correct: false },
      { text: "Amerigo Vespucci", correct: true },
      { text: "Marco Polo", correct: false },
      { text: "Giovanni Caboto", correct: false },
    ],
  },
  {
    question: "Melyik város a reneszánsz bölcsője?",
    answers: [
      { text: "Róma", correct: false },
      { text: "Milánó", correct: false },
      { text: "Firenze", correct: true },
      { text: "Velence", correct: false },
    ],
  },
  {
    question: "Melyik divatmárka alapítója Guccio?",
    answers: [
      { text: "Prada", correct: false },
      { text: "Gucci", correct: true },
      { text: "Fendi", correct: false },
      { text: "Armani", correct: false },
    ],
  },
  {
    question: "Melyik hegység vonul végig Olaszország gerincén?",
    answers: [
      { text: "Alpok", correct: false },
      { text: "Dolomitok", correct: false },
      { text: "Appenninek", correct: true },
      { text: "Kárpátok", correct: false },
    ],
  },
  {
    question: "Milyen állat volt a Római Birodalom egyik fő jelképe?",
    answers: [
      { text: "Oroszlán", correct: false },
      { text: "Sas", correct: true },
      { text: "Medve", correct: false },
      { text: "Farkas", correct: false },
    ],
  },
  {
    question: "Mit jelent a 'Ciao' köszönés eredetileg?",
    answers: [
      { text: "Szolgájára (vagyok)", correct: true },
      { text: "Jó napot", correct: false },
      { text: "Béke veled", correct: false },
      { text: "Barátom", correct: false },
    ],
  },
  {
    question: "Melyik városban gyártják a legtöbb Balsamico ecetet?",
    answers: [
      { text: "Modena", correct: true },
      { text: "Bologna", correct: false },
      { text: "Parma", correct: false },
      { text: "Ferrara", correct: false },
    ],
  },
  {
    question: "Ki írta az 'Isteni színjátékot' (Divina Commedia)?",
    answers: [
      { text: "Petrarca", correct: false },
      { text: "Dante Alighieri", correct: true },
      { text: "Boccaccio", correct: false },
      { text: "Machiavelli", correct: false },
    ],
  },
  {
    question: "Melyik olasz régióban találhatók a Trullik (kúpos tetős házak)?",
    answers: [
      { text: "Toszkána", correct: false },
      { text: "Szicília", correct: false },
      { text: "Puglia", correct: true },
      { text: "Umbria", correct: false },
    ],
  },
  {
    question: "Mi a 'panna cotta' fő összetevője?",
    answers: [
      { text: "Tojásfehérje", correct: false },
      { text: "Tejszín", correct: true },
      { text: "Ricotta", correct: false },
      { text: "Joghurt", correct: false },
    ],
  },
  {
    question: "Melyik évszázadban élte virágkorát a reneszánsz?",
    answers: [
      { text: "12-13. század", correct: false },
      { text: "15-16. század", correct: true },
      { text: "18-19. század", correct: false },
      { text: "10-11. század", correct: false },
    ],
  },
  {
    question:
      "Melyik szigetcsoport található Velencében az üveggyártásról híresen?",
    answers: [
      { text: "Burano", correct: false },
      { text: "Murano", correct: true },
      { text: "Torcello", correct: false },
      { text: "Lido", correct: false },
    ],
  },
  {
    question: "Hány dombra épült Róma a legenda szerint?",
    answers: [
      { text: "5", correct: false },
      { text: "7", correct: true },
      { text: "9", correct: false },
      { text: "12", correct: false },
    ],
  },
  {
    question: "Melyik márka NEM olasz?",
    answers: [
      { text: "Ducati", correct: false },
      { text: "Piaggio", correct: false },
      { text: "Seat", correct: true },
      { text: "Lancia", correct: false },
    ],
  },
  {
    question: "Melyik tészta jelentése 'kis férgek'?",
    answers: [
      { text: "Spaghetti", correct: false },
      { text: "Vermicelli", correct: true },
      { text: "Linguine", correct: false },
      { text: "Tagliatelle", correct: false },
    ],
  },
  {
    question: "Melyik városban van a San Siro stadion?",
    answers: [
      { text: "Róma", correct: false },
      { text: "Torino", correct: false },
      { text: "Milánó", correct: true },
      { text: "Nápoly", correct: false },
    ],
  },
  {
    question: "Melyik pápáról kapta a nevét a Gergely-naptár?",
    answers: [
      { text: "XIII. Gergely", correct: true },
      { text: "I. Gergely", correct: false },
      { text: "VII. Gergely", correct: false },
      { text: "XVI. Gergely", correct: false },
    ],
  },
  {
    question: "Mi a 'prosciutto'?",
    answers: [
      { text: "Szalámi", correct: false },
      { text: "Sonka", correct: true },
      { text: "Kolbász", correct: false },
      { text: "Sajt", correct: false },
    ],
  },
  {
    question: "Melyik tó Olaszország legnagyobb tava?",
    answers: [
      { text: "Comói-tó", correct: false },
      { text: "Garda-tó", correct: true },
      { text: "Maggiore-tó", correct: false },
      { text: "Trasimeno-tó", correct: false },
    ],
  },
  {
    question: "Melyik város híres a San Marco térről?",
    answers: [
      { text: "Velence", correct: true },
      { text: "Firenze", correct: false },
      { text: "Róma", correct: false },
      { text: "Milánó", correct: false },
    ],
  },
  {
    question: "Milyen ízű az 'Amaretto' likőr?",
    answers: [
      { text: "Narancs", correct: false },
      { text: "Mandula", correct: true },
      { text: "Citrom", correct: false },
      { text: "Ánizs", correct: false },
    ],
  },
  {
    question: "Ki volt Róma első császára?",
    answers: [
      { text: "Julius Caesar", correct: false },
      { text: "Nero", correct: false },
      { text: "Augustus", correct: true },
      { text: "Traianus", correct: false },
    ],
  },
  {
    question: "Melyik városban található a 'Mole Antonelliana' (magas torony)?",
    answers: [
      { text: "Torino", correct: true },
      { text: "Genova", correct: false },
      { text: "Bologna", correct: false },
      { text: "Verona", correct: false },
    ],
  },
  {
    question: "Melyik étel származik Emilia-Romagna régióból?",
    answers: [
      { text: "Pizza", correct: false },
      { text: "Lasagne", correct: true },
      { text: "Cannoli", correct: false },
      { text: "Pesto", correct: false },
    ],
  },
  {
    question: "Melyik sziget híres a smaragd partról (Costa Smeralda)?",
    answers: [
      { text: "Szicília", correct: false },
      { text: "Szardínia", correct: true },
      { text: "Elba", correct: false },
      { text: "Ischia", correct: false },
    ],
  },
  {
    question: "Ki tervezte a római Trevi-kutat?",
    answers: [
      { text: "Bernini", correct: false },
      { text: "Nicola Salvi", correct: true },
      { text: "Borromini", correct: false },
      { text: "Maderno", correct: false },
    ],
  },
  {
    question: "Mit jelent, ha egy kávé 'macchiato'?",
    answers: [
      { text: "Hosszú", correct: false },
      { text: "Foltos (kevés tejhabbal)", correct: true },
      { text: "Erős", correct: false },
      { text: "Jeges", correct: false },
    ],
  },
  {
    question: "Melyik város a divatvilág egyik fővárosa?",
    answers: [
      { text: "Róma", correct: false },
      { text: "Milánó", correct: true },
      { text: "Nápoly", correct: false },
      { text: "Palermo", correct: false },
    ],
  },
  {
    question: "Melyik tésztaszósz alapja a bazsalikom és fenyőmag?",
    answers: [
      { text: "Bolognese", correct: false },
      { text: "Carbonara", correct: false },
      { text: "Pesto Genovese", correct: true },
      { text: "Arrabbiata", correct: false },
    ],
  },
  {
    question: "Melyik család uralta Firenzét a reneszánsz idején?",
    answers: [
      { text: "Borgia", correct: false },
      { text: "Sforza", correct: false },
      { text: "Medici", correct: true },
      { text: "Orsini", correct: false },
    ],
  },
  {
    question: "Melyik a legkisebb független állam Olaszország területén belül?",
    answers: [
      { text: "San Marino", correct: false },
      { text: "Vatikán", correct: true },
      { text: "Monaco", correct: false },
      { text: "Liechtenstein", correct: false },
    ],
  },
  {
    question: "Milyen húsból készül a 'Bistecca alla Fiorentina'?",
    answers: [
      { text: "Sertés", correct: false },
      { text: "Marha", correct: true },
      { text: "Bárány", correct: false },
      { text: "Csirke", correct: false },
    ],
  },
  {
    question: "Melyik zeneszerző műve a 'Négy évszak'?",
    answers: [
      { text: "Antonio Vivaldi", correct: true },
      { text: "Giuseppe Verdi", correct: false },
      { text: "Giacomo Puccini", correct: false },
      { text: "Gioachino Rossini", correct: false },
    ],
  },
  {
    question: "Melyik városban alapították az első nyugati egyetemet?",
    answers: [
      { text: "Padova", correct: false },
      { text: "Bologna", correct: true },
      { text: "Pisa", correct: false },
      { text: "Róma", correct: false },
    ],
  },
  {
    question: "Melyik olasz kifejezés jelenti: 'Viszontlátásra'?",
    answers: [
      { text: "Buonasera", correct: false },
      { text: "Arrivederci", correct: true },
      { text: "Prego", correct: false },
      { text: "Scusi", correct: false },
    ],
  },
  {
    question: "Mi a 'Gnocchi'?",
    answers: [
      { text: "Krumpligombóc", correct: true },
      { text: "Rizottó", correct: false },
      { text: "Húsleves", correct: false },
      { text: "Kenyérfajta", correct: false },
    ],
  },
  {
    question: "Melyik vulkán temette maga alá Herculaneumot is?",
    answers: [
      { text: "Etna", correct: false },
      { text: "Vezúv", correct: true },
      { text: "Stromboli", correct: false },
      { text: "Santorini", correct: false },
    ],
  },
  {
    question: "Melyik híres olasz tenorista vak?",
    answers: [
      { text: "Luciano Pavarotti", correct: false },
      { text: "Plácido Domingo", correct: false },
      { text: "Andrea Bocelli", correct: true },
      { text: "Enrico Caruso", correct: false },
    ],
  },
  {
    question: "Melyik szigeten játszódik 'A Keresztapa' nagy része?",
    answers: [
      { text: "Szardínia", correct: false },
      { text: "Szicília", correct: true },
      { text: "Korzika", correct: false },
      { text: "Capri", correct: false },
    ],
  },
  {
    question: "Melyik városban található a 'Scala' operaház?",
    answers: [
      { text: "Verona", correct: false },
      { text: "Milánó", correct: true },
      { text: "Róma", correct: false },
      { text: "Velence", correct: false },
    ],
  },
  {
    question: "Mi a 'Focaccia'?",
    answers: [
      { text: "Egyfajta sajt", correct: false },
      { text: "Egyfajta lepénykenyér", correct: true },
      { text: "Egyfajta bor", correct: false },
      { text: "Egyfajta sonka", correct: false },
    ],
  },
  {
    question: "Melyik évben lett Róma Olaszország fővárosa?",
    answers: [
      { text: "1861", correct: false },
      { text: "1871", correct: true },
      { text: "1922", correct: false },
      { text: "1946", correct: false },
    ],
  },
  {
    question: "Melyik hegycsúcs a legmagasabb Olaszországban (és az Alpokban)?",
    answers: [
      { text: "Monte Rosa", correct: false },
      { text: "Matterhorn", correct: false },
      { text: "Mont Blanc (Monte Bianco)", correct: true },
      { text: "Gran Paradiso", correct: false },
    ],
  },
  {
    question: "Melyik olasz márka gyártja a 'Vespa' robogókat?",
    answers: [
      { text: "Aprilia", correct: false },
      { text: "Piaggio", correct: true },
      { text: "Ducati", correct: false },
      { text: "Moto Guzzi", correct: false },
    ],
  },
  {
    question: "Melyik híres szobrász alkotta a 'Dávid' szobrot?",
    answers: [
      { text: "Donatello", correct: false },
      { text: "Michelangelo", correct: true },
      { text: "Bernini", correct: false },
      { text: "Canova", correct: false },
    ],
  },
  {
    question: "Mit ünnepelnek a 'Ferragosto' napján (augusztus 15)?",
    answers: [
      { text: "A köztársaság napját", correct: false },
      { text: "Mária mennybemenetelét", correct: true },
      { text: "A felszabadulást", correct: false },
      { text: "Karácsonyt", correct: false },
    ],
  },
  {
    question: "Melyik városban született Kolumbusz Kristóf?",
    answers: [
      { text: "Genova", correct: true },
      { text: "Nápoly", correct: false },
      { text: "Pisa", correct: false },
      { text: "Velence", correct: false },
    ],
  },
  {
    question: "Melyik a leghíresbb olasz kékpenészes sajt?",
    answers: [
      { text: "Taleggio", correct: false },
      { text: "Gorgonzola", correct: true },
      { text: "Fontina", correct: false },
      { text: "Ricotta", correct: false },
    ],
  },
  {
    question: "Melyik város híres a San Pietro (Szent Péter) térről?",
    answers: [
      { text: "Róma (Vatikán)", correct: true },
      { text: "Firenze", correct: false },
      { text: "Assisi", correct: false },
      { text: "Padova", correct: false },
    ],
  },
  {
    question: "Mi a 'grappa' alapanyaga?",
    answers: [
      { text: "Gabona", correct: false },
      { text: "Szőlőtörköly", correct: true },
      { text: "Burgonya", correct: false },
      { text: "Alma", correct: false },
    ],
  },
  {
    question: "Melyik autómárkát alapították Bolognában?",
    answers: [
      { text: "Ferrari", correct: false },
      { text: "Maserati", correct: true },
      { text: "Fiat", correct: false },
      { text: "Lancia", correct: false },
    ],
  },
  {
    question: "Melyik városban van a Pantheon?",
    answers: [
      { text: "Athén", correct: false },
      { text: "Róma", correct: true },
      { text: "Nápoly", correct: false },
      { text: "Milánó", correct: false },
    ],
  },
  {
    question: "Melyik tészta hasonlít hosszú, lapos szalagokra?",
    answers: [
      { text: "Penne", correct: false },
      { text: "Tagliatelle", correct: true },
      { text: "Fusilli", correct: false },
      { text: "Rigatoni", correct: false },
    ],
  },
  {
    question: "Hol található a Cinque Terre?",
    answers: [
      { text: "Toszkána", correct: false },
      { text: "Liguria", correct: true },
      { text: "Campania", correct: false },
      { text: "Calabria", correct: false },
    ],
  },
  {
    question: "Ki a védőszentje Olaszországnak?",
    answers: [
      { text: "Szent Ferenc és Szent Katalin", correct: true },
      { text: "Szent Péter", correct: false },
      { text: "Szent Pál", correct: false },
      { text: "Szent Márk", correct: false },
    ],
  },
  {
    question: "Melyik városban látható a 'Torinói lepel'?",
    answers: [
      { text: "Milánó", correct: false },
      { text: "Torino", correct: true },
      { text: "Verona", correct: false },
      { text: "Róma", correct: false },
    ],
  },
  {
    question: "Melyik évben nyerte Olaszország legutóbb a foci VB-t?",
    answers: [
      { text: "1990", correct: false },
      { text: "2006", correct: true },
      { text: "2010", correct: false },
      { text: "2020", correct: false },
    ],
  },
  {
    question: "Mi az a 'trattoria'?",
    answers: [
      { text: "Kávézó", correct: false },
      { text: "Családias kisvendéglő", correct: true },
      { text: "Pékség", correct: false },
      { text: "Benzinkút", correct: false },
    ],
  },
  {
    question: "Melyik épület Róma jelképe, ahol gladiátorjátékok voltak?",
    answers: [
      { text: "Forum Romanum", correct: false },
      { text: "Colosseum", correct: true },
      { text: "Pantheon", correct: false },
      { text: "Circus Maximus", correct: false },
    ],
  },
  {
    question:
      "Melyik híres olasz csillagász mondta: 'Eppur si muove' (Mégis mozog)?",
    answers: [
      { text: "Giordano Bruno", correct: false },
      { text: "Galileo Galilei", correct: true },
      { text: "Copernicus", correct: false },
      { text: "Kepler", correct: false },
    ],
  },
  {
    question: "Melyik tengerparti szakasz híres a citromjairól?",
    answers: [
      { text: "Adriai part", correct: false },
      { text: "Amalfi-part", correct: true },
      { text: "Toszkán part", correct: false },
      { text: "Ligur part", correct: false },
    ],
  },
  {
    question: "Mi a 'Risotto' alapja?",
    answers: [
      { text: "Rizs (Arborio)", correct: true },
      { text: "Tészta", correct: false },
      { text: "Krumpli", correct: false },
      { text: "Kukorica", correct: false },
    ],
  },
  {
    question: "Melyik városban temették el Dantét?",
    answers: [
      { text: "Firenze", correct: false },
      { text: "Ravenna", correct: true },
      { text: "Róma", correct: false },
      { text: "Bologna", correct: false },
    ],
  },
  {
    question: "Melyik híres olasz családhoz tartozott Lucrezia?",
    answers: [
      { text: "Medici", correct: false },
      { text: "Borgia", correct: true },
      { text: "Sforza", correct: false },
      { text: "Visconti", correct: false },
    ],
  },
  {
    question: "Melyik szín nincs az olasz zászlóban?",
    answers: [
      { text: "Zöld", correct: false },
      { text: "Fehér", correct: false },
      { text: "Kék", correct: true },
      { text: "Piros", correct: false },
    ],
  },
  {
    question: "Melyik városban van a híres 'Ponte Vecchio' (Öreg híd)?",
    answers: [
      { text: "Velence", correct: false },
      { text: "Firenze", correct: true },
      { text: "Róma", correct: false },
      { text: "Verona", correct: false },
    ],
  },
  {
    question:
      "Melyik édesség szicíliai eredetű (ricottával töltött tésztahenger)?",
    answers: [
      { text: "Tiramisu", correct: false },
      { text: "Cannoli", correct: true },
      { text: "Panna Cotta", correct: false },
      { text: "Gelato", correct: false },
    ],
  },
  {
    question: "Melyik évben rendezték Rómában a nyári olimpiát?",
    answers: [
      { text: "1960", correct: true },
      { text: "1980", correct: false },
      { text: "1956", correct: false },
      { text: "2004", correct: false },
    ],
  },
];

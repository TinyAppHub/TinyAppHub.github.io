const wordLists = {
    3: [
        "ACE", "ACT", "ADD", "AGE", "AIM", "AIR", "ANT", "ARM", "ART", "ASK", 
        "BAD", "BAG", "BAR", "BAT", "BED", "BEE", "BET", "BIG", "BIN", "BIT", 
        "BOX", "BOY", "BUS", "BUY", "CAN", "CAP", "CAR", "CAT", "COW", "CRY", 
        "CUP", "CUT", "DAD", "DAY", "DOG", "DRY", "EAR", "EAT", "EGG", "END", 
        "EYE", "FAN", "FAR", "FAT", "FEW", "FIT", "FLY", "FOG", "FOR", "FOX", 
        "FUN", "GAP", "GAS", "GET", "GOD", "GYM", "HAT", "HIT", "HOT", "HUG", 
        "ICE", "INK", "JAM", "JAR", "JAW", "JET", "JOB", "JOY", "KEY", "KID", 
        "KIT", "LAB", "LAW", "LAY", "LEG", "LIE", "LOW", "MAD", "MAN", "MAP", 
        "MIX", "MOM", "MUD", "NET", "NEW", "NOD", "NOW", "NUT", "OFF", "OIL", 
        "OLD", "ONE", "OUT", "OWN", "PAN", "PAY", "PEN", "PET", "PIE", "PIG", 
        "PIN", "POT", "PUT", "RAT", "RED", "RUN", "SAD", "SEA", "SEE", "SET", 
        "SIT", "SKY", "SON", "SUN", "TAX", "TEA", "TEN", "TIE", "TIP", "TOE", 
        "TOP", "TOY", "TRY", "TWO", "USE", "VAN", "VET", "WAR", "WAY", "WEB", 
        "WET", "WHO", "WIN", "YES", "YET", "ZIP", "ZOO"
    ],
    4: [
        "ABLE", "ACID", "AGED", "ALSO", "AREA", "ARMY", "AUNT", "AWAY", "BABY", 
        "BACK", "BALL", "BAND", "BANK", "BASE", "BATH", "BEAR", "BEAT", "BEER", 
        "BELL", "BELT", "BEST", "BIRD", "BLUE", "BOAT", "BODY", "BOND", "BONE", 
        "BOOK", "BOOM", "BORN", "BOSS", "BOWL", "BULK", "BURN", "BUSH", "BUSY", 
        "CAKE", "CALL", "CALM", "CAMP", "CARD", "CARE", "CASE", "CASH", "CAST", 
        "CELL", "CHAT", "CHEF", "CITY", "CLUB", "COAL", "COAT", "CODE", "COLD", 
        "COME", "COOK", "COOL", "COPY", "CORE", "CORN", "COST", "CREW", "CROP", 
        "DARK", "DATA", "DATE", "DAWN", "DEAD", "DEAL", "DEAR", "DEBT", "DEEP", 
        "DESK", "DIET", "DISC", "DISK", "DOOR", "DOWN", "DRAW", "DROP", "DRUG", 
        "DUAL", "DUKE", "DUST", "DUTY", "EACH", "EARN", "EARP", "EAST", "EASY", 
        "EDGE", "ELSE", "EVEN", "EVER", "EVIL", "EXIT", "FACE", "FACT", "FAIL", 
        "FAIR", "FALL", "FARM", "FAST", "FEAR", "FEED", "FEEL", "FILE", "FILM", 
        "FIND", "FINE", "FIRE", "FIRM", "FISH", "FIVE", "FLAT", "FLOW", "FOOD", 
        "FOOT", "FORD", "FORM", "FORT", "FOUR", "FREE", "FROM", "FUEL", "FULL", 
        "FUND", "GAIN", "GAME", "GATE", "GEAR", "GENE", "GIFT", "GIRL", "GIVE", 
        "GLAD", "GOAL", "GOLD", "GOOD", "GRAY", "GROW", "HAIR", "HALF", "HALL", 
        "HAND", "HANG", "HARD", "HATE", "HAVE", "HEAD", "HEAR", "HEAT", "HELL", 
        "HELP", "HIGH", "HILL", "HIRE", "HOLD", "HOLE", "HOLY", "HOME", "HOPE", 
        "HOST", "HOUR", "HUGE", "HUNT", "HURT", "IDEA", "INCH", "IRON", "ITEM", 
        "JACK", "JAZZ", "JOIN", "JUMP", "JUST", "KEEP", "KICK", "KILL", "KIND", 
        "KING", "KISS", "KNEE", "KNOW", "LACK", "LADY", "LAKE", "LAND", "LAST", 
        "LATE", "LEAD", "LEFT", "LESS", "LIFE", "LIFT", "LIKE", "LINE", "LINK", 
        "LIST", "LIVE", "LOAD", "LOAN", "LOCK", "LOGO", "LONG", "LOOK", "LORD", 
        "LOSE", "LOSS", "LOST", "LOVE", "LUCK", "LUNCH"
    ],
    5: [
        "ABOUT", "ABOVE", "ACTOR", "ACUTE", "ADMIT", "ADOPT", "ADULT", "AFTER", 
        "AGAIN", "AGENT", "AGREE", "AHEAD", "ALARM", "ALBUM", "ALERT", "ALIKE", 
        "ALIVE", "ALLOW", "ALONE", "ALONG", "ALTER", "AMONG", "ANGER", "ANGLE", 
        "ANGRY", "APART", "APPLE", "APPLY", "ARENA", "ARGUE", "ARISE", "ARRAY", 
        "ASIDE", "ASSET", "AUDIO", "AUDIT", "AVOID", "AWARD", "AWARE", "BADLY", 
        "BAKER", "BASES", "BASIC", "BASIS", "BEACH", "BEGAN", "BEGIN", "BEGUN", 
        "BEING", "BELOW", "BENCH", "BILLY", "BIRTH", "BLACK", "BLAME", "BLIND", 
        "BLOCK", "BLOOD", "BOARD", "BOOST", "BOOTH", "BOUND", "BRAIN", "BRAND", 
        "BREAD", "BREAK", "BREED", "BRIEF", "BRING", "BROAD", "BROWN", "BRUSH", 
        "BUILD", "BUILT", "BUYER", "CABLE", "CALIF", "CARRY", "CATCH", "CAUSE", 
        "CHAIN", "CHAIR", "CHART", "CHASE", "CHEAP", "CHECK", "CHEST", "CHIEF", 
        "CHILD", "CHINA", "CHOSE", "CIVIL", "CLAIM", "CLASS", "CLEAN", "CLEAR", 
        "CLICK", "CLOCK", "CLOSE", "COACH", "COAST", "COULD", "COUNT", "COURT", 
        "COVER", "CRAFT", "CRASH", "CREAM", "CRIME", "CROSS", "CROWD", "CROWN", 
        "CURVE", "CYCLE", "DAILY", "DANCE", "DATED", "DEALT", "DEATH", "DEBUG", 
        "DELAY", "DEPTH", "DOING", "DOUBT", "DOZEN", "DRAFT", "DRAMA", "DRAWN", 
        "DREAM", "DRESS", "DRILL", "DRINK", "DRIVE", "DROVE", "DYING", "EAGER", 
        "EARLY", "EARTH", "EIGHT", "ELITE", "EMPTY", "ENEMY", "ENJOY", "ENTER", 
        "ENTRY", "EQUAL", "ERROR", "EVENT", "EVERY", "EXACT", "EXIST", "EXTRA", 
        "FAITH", "FALSE", "FAULT", "FIBER", "FIELD", "FIFTH", "FIFTY", "FIGHT", 
        "FINAL", "FIRST", "FIXED", "FLASH", "FLEET", "FLOOR", "FLUID", "FOCUS", 
        "FORCE", "FORUM", "FOUND", "FRAME", "FRANK", "FRAUD", "FRESH", "FRONT", 
        "FRUIT", "FULLY", "FUNNY", "GIANT", "GIVEN", "GLASS", "GLOBE", "GOING", 
        "GRACE", "GRADE", "GRAND", "GRANT", "GRASS", "GREAT", "GREEN", "GROSS", 
        "GROUP", "GROWN", "GUARD", "GUESS", "GUEST", "GUIDE", "HAPPY", "HARRY", 
        "HEART", "HEAVY", "HENCE", "HELLO", "HORSE", "HOTEL", "HOUSE", "HUMAN", 
        "IDEAL", "IMAGE", "INDEX", "INNER", "INPUT", "ISSUE", "JAPAN", "JOINT", 
        "JUDGE", "KNOWN", "LABEL", "LARGE", "LASER", "LATER", "LAUGH", "LAYER", 
        "LEARN", "LEASE", "LEAST", "LEAVE", "LEGAL", "LEVEL", "LIGHT", "LIMIT", 
        "LOCAL", "LOGIC", "LOOSE", "LOWER", "LUCKY", "LUNCH", "LYING", "MAGIC", 
        "MAJOR", "MAKER", "MARCH", "MARIA", "MATCH", "MAYBE", "MAYOR", "MEANT", 
        "MEDIA", "METAL", "MIGHT", "MINOR", "MINUS", "MIXED", "MODEL", "MONEY", 
        "MONTH", "MORAL", "MOTOR", "MOUNT", "MOUSE", "MOUTH", "MOVIE", "MUSIC", 
        "NEEDS", "NEVER", "NEWLY", "NIGHT", "NOISE", "NORTH", "NOTED", "NOVEL", 
        "NURSE", "OCEAN", "OFFER", "OFTEN", "ORDER", "OTHER", "OUGHT", "PAINT", 
        "PANEL", "PAPER", "PARTY", "PEACE", "PETER", "PHASE", "PHONE", "PHOTO", 
        "PIECE", "PILOT", "PITCH", "PLACE", "PLAIN", "PLANE", "PLANT", "PLATE", 
        "POINT", "POUND", "POWER", "PRESS", "PRICE", "PRIDE", "PRIME", "PRINT", 
        "PRIOR", "PRIZE", "PROOF", "PROUD", "PROVE", "QUEEN", "QUICK", "QUIET", 
        "QUITE", "RADIO", "RAISE", "RANGE", "RAPID", "RATIO", "REACH", "READY", 
        "REFER", "RIGHT", "RIVAL", "RIVER", "ROBIN", "ROGER", "ROMAN", "ROUGH", 
        "ROUND", "ROUTE", "ROYAL", "RURAL", "SCALE", "SCENE", "SCOPE", "SCORE", 
        "SENSE", "SERVE", "SEVEN", "SHALL", "SHAPE", "SHARE", "SHARP", "SHEET", 
        "SHELF", "SHELL", "SHIFT", "SHIRT", "SHOCK", "SHOOT", "SHORT", "SHOWN", 
        "SIGHT", "SINCE", "SIXTH", "SKILL", "SLEEP", "SLIDE", "SMALL", "SMART", 
        "SMILE", "SMITH", "SMOKE", "SOLID", "SOLVE", "SORRY", "SOUND", "SOUTH", 
        "SPACE", "SPARE", "SPEAK", "SPEED", "SPEND", "SPENT", "SPLIT", "SPOKE", 
        "SPORT", "STAFF", "STAGE", "STAKE", "STAND", "START", "STATE", "STEAM", 
        "STEEL", "STICK", "STILL", "STOCK", "STONE", "STOOD", "STORE", "STORM", 
        "STORY", "STRIP", "STUCK", "STUDY", "STUFF", "STYLE", "SUGAR", "SUITE", 
        "SUPER", "SWEET", "TABLE", "TAKEN", "TASTE", "TAXES", "TEACH", "TEETH", 
        "TERRY", "TEXAS", "THANK", "THEFT", "THEIR", "THEME", "THERE", "THESE", 
        "THICK", "THING", "THINK", "THIRD", "THOSE", "THREE", "THREW", "THROW", 
        "TIGHT", "TIMES", "TIRED", "TITLE", "TODAY", "TOPIC", "TOTAL", "TOUCH", 
        "TOUGH", "TOWER", "TRACK", "TRADE", "TRAIN", "TREAT", "TRUCK", "TRUST", 
        "TRUTH", "UNCLE", "UNDER", "UNION", "UNITY", "UNTIL", "UPPER", "UPSET", 
        "URBAN", "USAGE", "USUAL", "VALID", "VALUE", "VIDEO", "VIRUS", "VISIT", 
        "VITAL", "VOICE", "WASTE", "WATCH", "WATER", "WHEEL", "WHERE", "WHICH", 
        "WHILE", "WHITE", "WHOLE", "WHOSE", "WOMAN", "WOMEN", "WORLD", "WORRY", 
        "WORSE", "WORST", "WORTH", "WOULD", "WOUND", "WRITE", "WRONG", "WROTE", 
        "YIELD", "YOUNG", "YOUTH"
    ],
    6: [
        "ABROAD", "ACCEPT", "ACCESS", "ACROSS", "ACTING", "ACTION", "ACTIVE", 
        "ACTUAL", "ADVICE", "ADVISE", "AFFECT", "AFFORD", "AFRAID", "AGENCY", 
        "AGENDA", "ALMOST", "ALWAYS", "AMOUNT", "ANIMAL", "ANNUAL", "ANSWER", 
        "ANYONE", "ANYWAY", "APPEAL", "APPEAR", "AROUND", "ARRIVE", "ARTIST", 
        "ASPECT", "ASSESS", "ASSIST", "ASSUME", "ATTACK", "ATTEND", "AUGUST", 
        "AUTHOR", "AVENUE", "BACKED", "BARELY", "BATTLE", "BEAUTY", "BECAME", 
        "BECOME", "BEFORE", "BEHALF", "BEHIND", "BELIEF", "BELONG", "BERLIN", 
        "BETTER", "BEYOND", "BISHOP", "BORDER", "BOTTLE", "BOTTOM", "BOUGHT", 
        "BRANCH", "BREATH", "BRIDGE", "BRIGHT", "BROKEN", "BUDGET", "BURDEN", 
        "BUREAU", "BUTTON", "CAMERA", "CANCER", "CANNOT", "CARBON", "CAREER", 
        "CASTLE", "CASUAL", "CAUGHT", "CENTER", "CENTRE", "CHANCE", "CHANGE", 
        "CHARGE", "CHOICE", "CHOOSE", "CHOSEN", "CHURCH", "CIRCLE", "CLIENT", 
        "CLOSED", "CLOSER", "COFFEE", "COLUMN", "COMBAT", "COMING", "COMMON", 
        "COMPLY", "COPPER", "CORNER", "COSTLY", "COUNTY", "COUPLE", "COURSE", 
        "COVERS", "CREATE", "CREDIT", "CRISIS", "CUSTOM", "DAMAGE", "DANGER", 
        "DEALER", "DEBATE", "DECADE", "DECIDE", "DEFEAT", "DEFEND", "DEFINE", 
        "DEGREE", "DEMAND", "DEPEND", "DEPUTY", "DESERT", "DESIGN", "DESIRE", 
        "DETAIL", "DETECT", "DEVICE", "DIFFER", "DINNER", "DIRECT", "DOCTOR", 
        "DOLLAR", "DOMAIN", "DOUBLE", "DRIVEN", "DRIVER", "DURING", "EASILY", 
        "EATING", "EDITOR", "EFFECT", "EFFORT", "EIGHTH", "EITHER", "ELEVEN", 
        "EMERGE", "EMPIRE", "EMPLOY", "ENABLE", "ENDING", "ENERGY", "ENGAGE", 
        "ENGINE", "ENOUGH", "ENSURE", "ENTIRE", "ENTITY", "EQUITY", "ESCAPE", 
        "ESTATE", "ETHICS", "ETHNIC", "EXCEED", "EXCEPT", "EXCESS", "EXPAND", 
        "EXPECT", "EXPERT", "EXPORT", "EXTEND", "EXTENT", "FABRIC", "FACING", 
        "FACTOR", "FAILED", "FAIRLY", "FALLEN", "FAMILY", "FAMOUS", "FATHER", 
        "FELLOW", "FEMALE", "FIGURE", "FILING", "FINGER", "FINISH", "FISCAL", 
        "FLIGHT", "FLYING", "FOLLOW", "FORCED", "FOREST", "FORGET", "FORMAL", 
        "FORMAT", "FORMER", "FOSTER", "FOUGHT", "FOURTH", "FRENCH", "FRIEND", 
        "FUTURE", "GARDEN", "GATHER", "GENDER", "GERMAN", "GLOBAL", "GOLDEN", 
        "GROUND", "GROWTH", "GUILTY", "HANDED", "HANDLE", "HAPPEN", "HARDLY", 
        "HEADED", "HEALTH", "HEIGHT", "HIDDEN", "HOLDER", "HONEST", "IMPACT", 
        "IMPORT", "INCOME", "INDEED", "INJURY", "INSIDE", "INTEND", "INTENT", 
        "INVEST", "ISLAND", "ITSELF", "JERSEY", "JUNIOR", "KILLED", "LABOUR", 
        "LATEST", "LAUNCH", "LAWYER", "LEADER", "LEAGUE", "LEAVES", "LEGACY", 
        "LENGTH", "LESSON", "LETTER", "LIGHTS", "LIKELY", "LINKED", "LIQUID", 
        "LISTEN", "LITTLE", "LIVING", "LOCATE", "LONDON", "LOOKED", "LOSING", 
        "LOVELY", "LUXURY", "MAINLY", "MAKING", "MANAGE", "MANNER", "MANUAL", 
        "MARGIN", "MARINE", "MARKED", "MARKET", "MARTIN", "MASTER", "MATTER", 
        "MATURE", "MEDIUM", "MEMBER", "MEMORY", "MENTAL", "MERELY", "MERGER", 
        "METHOD", "MIDDLE", "MILLER", "MINING", "MINUTE", "MIRROR", "MOBILE", 
        "MODERN", "MODEST", "MODULE", "MOMENT", "MORRIS", "MOSTLY", "MOTHER", 
        "MOTION", "MOVING", "MUSEUM", "MUTUAL", "MYSELF", "NARROW", "NATION", 
        "NATIVE", "NATURE", "NEARBY", "NEARLY", "NIGHTS", "NOBODY", "NORMAL", 
        "NOTICE", "NOTION", "NUMBER", "OBJECT", "OBTAIN", "OFFICE", "OFFSET", 
        "ONLINE", "OPTION", "ORANGE", "ORIGIN", "OUTPUT", "OXFORD", "PACKED", 
        "PALACE", "PARENT", "PARTLY", "PATENT", "PEOPLE", "PERIOD", "PERMIT", 
        "PERSON", "PHRASE", "PICKED", "PLANET", "PLAYER", "PLEASE", "PLENTY", 
        "POCKET", "POLICE", "POLICY", "PREFER", "PRETTY", "PRINCE", "PRISON", 
        "PROFIT", "PROPER", "PROVEN", "PUBLIC", "PURSUE", "RAISED", "RANDOM", 
        "RARELY", "RATHER", "RATING", "READER", "REALLY", "REASON", "RECALL", 
        "RECENT", "RECORD", "REDUCE", "REFORM", "REGARD", "REGIME", "REGION", 
        "RELATE", "RELIEF", "REMAIN", "REMOTE", "REMOVE", "REPAIR", "REPEAT", 
        "REPLAY", "REPORT", "RESCUE", "RESORT", "RESULT", "RETAIL", "RETAIN", 
        "RETURN", "REVEAL", "REVIEW", "RHYTHM", "RIDING", "RISING", "ROBUST", 
        "ROCKET", "ROLLER", "SAFETY", "SALARY", "SAMPLE", "SAVING", "SCHEME", 
        "SCHOOL", "SCREEN", "SEARCH", "SEASON", "SECOND", "SECRET", "SECTOR", 
        "SECURE", "SEEING", "SELECT", "SELLER", "SENIOR", "SERIES", "SERVER", 
        "SETTLE", "SEVERE", "SEXUAL", "SHOULD", "SIGNAL", "SIGNED", "SILENT", 
        "SILVER", "SIMPLE", "SIMPLY", "SINGLE", "SISTER", "SLIGHT", "SMOOTH", 
        "SOCIAL", "SOLELY", "SOUGHT", "SOURCE", "SOVIET", "SPEECH", "SPIRIT", 
        "SPOKEN", "SPREAD", "SPRING", "SQUARE", "STABLE", "STATUS", "STEADY", 
        "STOLEN", "STRAIN", "STREAM", "STREET", "STRESS", "STRICT", "STRIKE", 
        "STRING", "STRONG", "STRUCK", "STUDIO", "SUBMIT", "SUDDEN", "SUFFER", 
        "SUMMER", "SUMMIT", "SUPPLY", "SURELY", "SURVEY", "SWITCH", "SYMBOL", 
        "SYSTEM", "TAKING", "TALENT", "TARGET", "TAUGHT", "TENANT", "TENDER", 
        "TENNIS", "THANKS", "THEORY", "THIRTY", "THOUGH", "THREAT", "THROWN", 
        "TICKET", "TIMELY", "TIMING", "TISSUE", "TOWARD", "TRAVEL", "TREATY", 
        "TRYING", "TWELVE", "TWENTY", "UNABLE", "UNIQUE", "UNITED", "UNLESS", 
        "UNLIKE", "UPDATE", "USEFUL", "VALLEY", "VARYING", "VENDOR", "VENUE", 
        "VICTIM", "VISION", "VISUAL", "VOLUME", "WALKER", "WANTED", "WARNING", 
        "WEEKLY", "WEIGHT", "WHEELS", "WHOLLY", "WINDOW", "WINNER", "WINTER", 
        "WITHIN", "WONDER", "WORKER", "WRIGHT", "WRITER", "YELLOW"
    ]
};

const keyboardLayout = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"]
];

let currentLength = 5;
let secretWord = "";
let guessRows = 6;
let currentRow = 0;
let currentTile = 0;
let isGameOver = false;
let letterStates = {}; 

const board = document.getElementById("game-board");
const keyboardContainer = document.getElementById("keyboard-container");
const messageArea = document.getElementById("message-area");
const lengthSelect = document.getElementById("word-length");
const newGameBtn = document.getElementById("new-game-btn");

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, type, duration, delay = 0) {
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);
    
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime + delay);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + delay + duration);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start(audioCtx.currentTime + delay);
    osc.stop(audioCtx.currentTime + delay + duration);
}

function playSound(effect) {
    switch (effect) {
        case 'type':
            playTone(600, 'sine', 0.1);
            break;
        case 'delete':
            playTone(400, 'sine', 0.1);
            break;
        case 'error':
            playTone(150, 'sawtooth', 0.2);
            break;
        case 'reveal':
            playTone(800, 'triangle', 0.1);
            break;
        case 'win':
            playTone(523.25, 'sine', 0.2, 0);
            playTone(659.25, 'sine', 0.2, 0.2);
            playTone(783.99, 'sine', 0.4, 0.4);
            playTone(1046.50, 'sine', 0.8, 0.6);
            break;
    }
}

function initGame() {
    board.innerHTML = "";
    messageArea.textContent = "";
    currentRow = 0;
    currentTile = 0;
    isGameOver = false;
    letterStates = {};
    
    currentLength = parseInt(lengthSelect.value);
    const list = wordLists[currentLength];
    secretWord = list[Math.floor(Math.random() * list.length)];
    console.log(secretWord);

    createBoard();
    createKeyboard();
}

function createBoard() {
    board.style.gridTemplateColumns = `repeat(${currentLength}, 1fr)`;
    for (let i = 0; i < guessRows * currentLength; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.setAttribute("id", `tile-${i}`);
        board.appendChild(tile);
    }
}

function createKeyboard() {
    keyboardContainer.innerHTML = "";
    keyboardLayout.forEach(row => {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("keyboard-row");
        row.forEach(keyChar => {
            const keyBtn = document.createElement("button");
            keyBtn.textContent = keyChar === "DEL" ? "⌫" : keyChar;
            keyBtn.classList.add("key");
            if (keyChar === "ENTER" || keyChar === "DEL") keyBtn.classList.add("wide");
            keyBtn.setAttribute("data-key", keyChar);
            
            keyBtn.addEventListener("click", () => handleInput(keyChar));
            rowDiv.appendChild(keyBtn);
        });
        keyboardContainer.appendChild(rowDiv);
    });
}

document.addEventListener("keydown", (e) => {
    let key = e.key.toUpperCase();
    if (key === "BACKSPACE") key = "DEL";
    handleInput(key);
});

function handleInput(key) {
    if (isGameOver) return;

    if (key === "ENTER") {
        checkRow();
    } else if (key === "DEL") {
        deleteLetter();
    } else if (/^[A-Z]$/.test(key)) {
        addLetter(key);
    }
}

function addLetter(letter) {
    if (currentTile < currentLength && currentRow < guessRows) {
        const tileIndex = currentRow * currentLength + currentTile;
        const tile = document.getElementById(`tile-${tileIndex}`);
        tile.textContent = letter;
        tile.setAttribute("data-status", "filled");
        tile.style.borderColor = "#818384";
        
        playSound('type');
        
        currentTile++;
    }
}

function deleteLetter() {
    if (currentTile > 0) {
        currentTile--;
        const tileIndex = currentRow * currentLength + currentTile;
        const tile = document.getElementById(`tile-${tileIndex}`);
        tile.textContent = "";
        tile.removeAttribute("data-status");
        tile.style.borderColor = "";
        
        playSound('delete');
    }
}

function checkRow() {
    if (currentTile < currentLength) {
        showMessage("Not enough character!");
        shakeRow();
        playSound('error');
        return;
    }

    const start = currentRow * currentLength;
    let guess = "";
    for (let i = 0; i < currentLength; i++) {
        guess += document.getElementById(`tile-${start + i}`).textContent;
    }

    const secretArr = secretWord.split("");
    const guessArr = guess.split("");
    const colors = new Array(currentLength).fill("gray");

    guessArr.forEach((char, i) => {
        if (char === secretArr[i]) {
            colors[i] = "green";
            secretArr[i] = null;
            guessArr[i] = null;
            updateLetterState(char, "green");
        }
    });

    guessArr.forEach((char, i) => {
        if (char !== null && secretArr.includes(char)) {
            colors[i] = "yellow";
            secretArr[secretArr.indexOf(char)] = null;
            updateLetterState(char, "yellow");
        } else if (char !== null) {
            updateLetterState(char, "gray");
        }
    });

    colors.forEach((color, i) => {
        const tile = document.getElementById(`tile-${start + i}`);
        setTimeout(() => {
            tile.classList.add(color);
            tile.style.borderColor = "";
            playSound('reveal');
        }, i * 250);
    });

    currentRow++;
    currentTile = 0;

    setTimeout(() => {
        updateKeyboardColors();
        
        if (guess === secretWord) {
            showMessage("You Won! 🎉", 5000);
            playSound('win');
            isGameOver = true;
        } else if (currentRow >= guessRows) {
            showMessage(`Game Over! The word is: ${secretWord}`, 5000);
            playSound('error');
            isGameOver = true;
        }
    }, currentLength * 250 + 100);
}

function updateLetterState(letter, color) {
    const currentState = letterStates[letter];
    if (currentState === "green") return;
    if (currentState === "yellow" && color === "gray") return;
    letterStates[letter] = color;
}

function updateKeyboardColors() {
    for (const [letter, color] of Object.entries(letterStates)) {
        const keyBtn = document.querySelector(`.key[data-key="${letter}"]`);
        if (keyBtn) {
            keyBtn.classList.remove("green", "yellow", "gray");
            keyBtn.classList.add(color);
        }
    }
}

function showMessage(msg, duration = 2000) {
    messageArea.textContent = msg;
    setTimeout(() => {
        if (messageArea.textContent === msg) messageArea.textContent = "";
    }, duration);
}

function shakeRow() {
    const start = currentRow * currentLength;
    for (let i = 0; i < currentLength; i++) {
        const tile = document.getElementById(`tile-${start + i}`);
        tile.style.animation = "shake 0.5s";
        setTimeout(() => tile.style.animation = "", 500);
    }
}

newGameBtn.addEventListener("click", initGame);
lengthSelect.addEventListener("change", initGame);

initGame();
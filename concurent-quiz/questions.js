const questions = [
    // --- 1. ELŐADÁS: Alapfogalmak ---
    {
        category: "Konkurencia Alapok",
        type: "single",
        question: "Mi a konkurens programozás definíciója a jegyzet szerint?",
        options: [
            "Olyan szoftver készítése, amely csak egy processzoron fut.",
            "Olyan szoftver, melyben több tevékenység működik egyszerre, és ezek kommunikálnak egymással.",
            "Olyan programozás, amely kizárólag elosztott rendszerekre vonatkozik.",
            "Grafikus felületek eseménykezelésének programozása."
        ],
        correct: [1]
    },
    {
        category: "Konkurencia Alapok",
        type: "single",
        question: "Melyik állítás igaz a szálakra (thread) a folyamatokkal (process) szemben?",
        options: [
            "A szálak nehézsúlyúak (heavyweight), saját memóriával.",
            "A szálak pehelysúlyúak (lightweight), és osztoznak a heap memórián.",
            "A szálak közötti váltás lassabb, mint a folyamatok közötti.",
            "A szálak teljesen izoláltak egymástól."
        ],
        correct: [1]
    },
    {
        category: "Kommunikációs modellek",
        type: "single",
        question: "Melyik memóriamodellt használja a Java a szálak közötti kommunikációra?",
        options: [
            "Elosztott memória (Distributed memory)",
            "Üzenetküldés (Message passing)",
            "Megosztott memória (Shared memory)",
            "Actor modell"
        ],
        correct: [2]
    },
    {
        category: "Determinisztikusság",
        type: "single",
        question: "Mi jellemző a konkurens programok futására?",
        options: [
            "Mindig determinisztikusak (ugyanaz a bemenet -> ugyanaz a kimenet).",
            "Nem-determinisztikusak, az eredmény függhet az ütemezéstől.",
            "Csak a processzor hőmérsékletétől függenek.",
            "Mindig hibásan futnak."
        ],
        correct: [1]
    },
    // --- 2. ELŐADÁS: Szálkezelés Java-ban ---
    {
        category: "Szálkezelés",
        type: "single",
        question: "Hogyan indítunk el helyesen egy új szálat Java-ban?",
        options: [
            "A run() metódus meghívásával.",
            "A start() metódus meghívásával.",
            "A create() metódus meghívásával.",
            "A Thread konstruktorának meghívásával."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mi történik, ha a start() helyett a run() metódust hívjuk meg egy Thread objektumon?",
        options: [
            "Fordítási hibát kapunk.",
            "Kivételt dob (RuntimeException).",
            "Nem indul el új szál, a kód az aktuális szálon fut le szinkron módon.",
            "A JVM automatikusan kijavítja és elindítja az új szálat."
        ],
        correct: [2]
    },
    {
        category: "Implementáció",
        type: "single",
        question: "Miért előnyösebb a Runnable interfész implementálása a Thread osztályból való származtatásnál?",
        options: [
            "Mert a Runnable gyorsabban fut.",
            "Mert a Java csak egyszeres öröklődést támogat, így nem 'használjuk el' az ősosztályt.",
            "Mert a Thread osztály deprecated.",
            "Mert a Runnable automatikusan szinkronizált."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mire szolgál a Thread.join() metódus?",
        options: [
            "Összefűz két szálat egyetlen szállá.",
            "A hívó szál megvárja, amíg a célzott szál befejezi a futását.",
            "Azonnal leállítja a célzott szálat.",
            "Felébreszt egy várakozó szálat."
        ],
        correct: [1]
    },
    // --- 3. ELŐADÁS: Interferencia és Szinkronizáció ---
    {
        category: "Interferencia",
        type: "single",
        question: "Mi a 'race condition' (versenyhelyzet)?",
        options: [
            "Amikor két szál versenyez, hogy ki ér előbb a processzorhoz.",
            "Amikor a szálak sebessége túl gyors.",
            "Amikor a konkurens program működése az ütemezéstől függően néha hibás eredményt ad.",
            "Amikor a garbage collector túl lassan fut."
        ],
        correct: [2]
    },
    {
        category: "Szinkronizáció",
        type: "single",
        question: "Mit biztosít a `synchronized` kulcsszó Java-ban?",
        options: [
            "Kölcsönös kizárást (mutex) egy kritikus szakaszra.",
            "Hogy a metódus aszinkron módon fusson le.",
            "Hogy a változó értéke ne kerüljön a cache-be.",
            "Hogy a szál soha ne blokkolódjon."
        ],
        correct: [0]
    },
    {
        category: "Monitor",
        type: "single",
        question: "Mihez tartozik a monitor kulcs (lock) Java-ban?",
        options: [
            "Csak a Thread osztályhoz.",
            "Minden Java objektumhoz tartozik egy kulcs (intrinsic lock).",
            "Csak a primitív típusokhoz.",
            "Csak a String típushoz."
        ],
        correct: [1]
    },
    {
        category: "Szinkronizáció",
        type: "single",
        question: "Hogyan működik a reentráns zárolás (reentrant locking) Java-ban?",
        options: [
            "Ha egy szál már birtokolja a kulcsot, újra megszerezheti anélkül, hogy blokkolódna.",
            "Egy kulcsot csak egyszer lehet megszerezni, másodszorra kivételt dob.",
            "A kulcsot minden metódushívásnál újra kell példányosítani.",
            "A szálak kicserélhetik egymás között a kulcsokat."
        ],
        correct: [0]
    },
    // --- 4. ELŐADÁS: Holtpont ---
    {
        category: "Deadlock",
        type: "single",
        question: "Melyik a klasszikus példa a holtpont (deadlock) szemléltetésére?",
        options: [
            "Az alvó fodrász problémája.",
            "Az étkező filozófusok problémája.",
            "A termelő-fogyasztó probléma.",
            "Az utazó ügynök probléma."
        ],
        correct: [1]
    },
    {
        category: "Deadlock",
        type: "single",
        question: "Mi okozhat holtpontot a szinkronizáció során?",
        options: [
            "Túl kevés szinkronizáció.",
            "Ha a szálak eltérő sorrendben próbálják megszerezni ugyanazokat a zárakat (lock ordering).",
            "A `volatile` kulcsszó használata.",
            "A `Thread.yield()` hívása."
        ],
        correct: [1]
    },
    {
        category: "Livelock",
        type: "single",
        question: "Mi a különbség a deadlock és a livelock között?",
        options: [
            "Nincs különbség.",
            "Deadlocknál a szálak blokkolva várnak, livelocknál aktívan dolgoznak (állapotot váltanak), de nem haladnak előre.",
            "Livelock csak adatbázisoknál fordulhat elő.",
            "Deadlock esetén a program kilép, livelock esetén nem."
        ],
        correct: [1]
    },
    // --- 5-6. ELŐADÁS: Memória és Immutability ---
    {
        category: "Memória",
        type: "single",
        question: "Mely változók vannak biztonságban a versenyhelyzettől (race condition) szinkronizáció nélkül is?",
        options: [
            "Minden heap-en tárolt objektum.",
            "A lokális változók (stack), mivel ezek szálhoz kötöttek.",
            "A statikus mezők.",
            "A publikus példányváltozók."
        ],
        correct: [1]
    },
    {
        category: "Immutability",
        type: "single",
        question: "Miért hasznosak az immutábilis (módosíthatatlan) objektumok konkurens környezetben?",
        options: [
            "Mert kevesebb memóriát foglalnak.",
            "Mert állapotuk nem változhat, így szinkronizáció nélkül is szálbiztosak.",
            "Mert gyorsabban példányosíthatók.",
            "Mert automatikusan garbage collectálódnak."
        ],
        correct: [1]
    },
    {
        category: "Láthatóság",
        type: "single",
        question: "Melyik kulcsszó garantálja a változók láthatóságát (visibility), de az atomicitást nem?",
        options: [
            "synchronized",
            "volatile",
            "final",
            "static"
        ],
        correct: [1]
    },
    // --- 7. ELŐADÁS: Szálbiztos osztályok ---
    {
        category: "Kollekciók",
        type: "single",
        question: "Melyik NEM szálbiztos (thread-safe) az alábbiak közül?",
        options: [
            "java.util.Vector",
            "java.util.ArrayList",
            "java.util.Hashtable",
            "java.util.concurrent.ConcurrentHashMap"
        ],
        correct: [1]
    },
    {
        category: "Szálbiztosság",
        type: "single",
        question: "Mi a `Collections.synchronizedList` hátránya iteráláskor?",
        options: [
            "Nem lehet bele elemet tenni.",
            "Az iteráció során manuálisan kell szinkronizálni a listára, különben `ConcurrentModificationException` lehet.",
            "Túl lassú a lista létrehozása.",
            "Csak Integer típusokat fogad el."
        ],
        correct: [1]
    },
    {
        category: "ConcurrentHashMap",
        type: "single",
        question: "Miben jobb a `ConcurrentHashMap` a `Collections.synchronizedMap`-nél?",
        options: [
            "Kevesebb memóriát fogyaszt.",
            "Nem zárolja az egész térképet minden műveletnél, hanem finomabb szemcséjű zárolást (lock striping) használ.",
            "Nem enged null kulcsokat.",
            "Támogatja a rendezést."
        ],
        correct: [1]
    },
    // --- 8-9. ELŐADÁS: Executorok és Feladatok ---
    {
        category: "ExecutorService",
        type: "single",
        question: "Mi az `ExecutorService` fő célja?",
        options: [
            "Hogy grafikus felületet rajzoljon.",
            "Hogy leválassza a feladatok (Runnable/Callable) benyújtását azok végrehajtási mechanizmusáról (szálkezelés).",
            "Hogy növelje a memóriahasználatot.",
            "Hogy helyettesítse a `wait` és `notify` hívásokat."
        ],
        correct: [1]
    },
    {
        category: "Thread Pool",
        type: "single",
        question: "Mit csinál a `Executors.newFixedThreadPool(10)`?",
        options: [
            "Létrehoz 10 processzort.",
            "Létrehoz egy thread pool-t, amely egyszerre maximum 10 szálat használ a feladatok végrehajtására.",
            "Létrehoz 10 feladatot, de nem indítja el őket.",
            "Létrehoz egy pool-t, ami 10 másodperc után leáll."
        ],
        correct: [1]
    },
    {
        category: "Callable",
        type: "single",
        question: "Miben különbözik a `Callable` a `Runnable`-től?",
        options: [
            "A Callable nem futtatható szálon.",
            "A Callable-nek van visszatérési értéke és dobhat ellenőrzött kivételt, a Runnable-nek nincs.",
            "A Callable egy absztrakt osztály, a Runnable interfész.",
            "A Runnable elavult, a Callable az új szabvány."
        ],
        correct: [1]
    },
    {
        category: "Future",
        type: "single",
        question: "Mire szolgál a `Future.get()` metódus?",
        options: [
            "Azonnal visszaadja az eredményt, ha nincs kész, null-t ad.",
            "Blokkolja a hívó szálat, amíg a számítás be nem fejeződik és az eredmény elérhetővé nem válik.",
            "Törli a feladatot.",
            "Újraindítja a számítást."
        ],
        correct: [1]
    },
    // --- 10. ELŐADÁS: Termelő-Fogyasztó ---
    {
        category: "BlockingQueue",
        type: "single",
        question: "Melyik kollekció a legalkalmasabb a Termelő-Fogyasztó probléma megoldására?",
        options: [
            "ArrayList",
            "HashSet",
            "BlockingQueue (pl. ArrayBlockingQueue)",
            "TreeMap"
        ],
        correct: [2]
    },
    {
        category: "BlockingQueue",
        type: "single",
        question: "Mit tesz a `BlockingQueue.take()` metódus, ha a sor üres?",
        options: [
            "Null értéket ad vissza.",
            "Kivételt dob.",
            "Blokkolja a hívó szálat, amíg nem kerül elem a sorba.",
            "Leállítja a JVM-et."
        ],
        correct: [2]
    },
    // --- 11. ELŐADÁS: Wait és Notify ---
    {
        category: "Wait/Notify",
        type: "single",
        question: "Melyik objektumon hívható meg a `wait()` metódus?",
        options: [
            "Csak a Thread példányokon.",
            "Bármely Java objektumon (Object osztály része).",
            "Csak a Condition objektumokon.",
            "Csak a Runnable példányokon."
        ],
        correct: [1]
    },
    {
        category: "Wait/Notify",
        type: "single",
        question: "Mi a `wait()` helyes használati mintája a 'spurious wakeup' (ok nélküli ébredés) elkerülésére?",
        options: [
            "if (feltétel) { wait(); }",
            "while (feltétel) { wait(); }",
            "try { wait(); } catch (Exception e) {}",
            "wait(1000);"
        ],
        correct: [1]
    },
    {
        category: "Wait/Notify",
        type: "single",
        question: "Mi történik a monitor kulccsal (lock), amikor egy szál `wait()`-et hív?",
        options: [
            "A szál megtartja a kulcsot alvás közben is.",
            "A szál elengedi a kulcsot, így más szálak megszerezhetik azt.",
            "A kulcs törlődik.",
            "A kulcs értéke null lesz."
        ],
        correct: [1]
    },
    {
        category: "Wait/Notify",
        type: "single",
        question: "Mikor dob `IllegalMonitorStateException`-t a `wait()` vagy `notify()`?",
        options: [
            "Ha a szál nem birtokolja az adott objektum monitorát (nincs synchronized blokkban).",
            "Ha túl sokáig várakozik.",
            "Ha a `notifyAll()` helyett `notify()`-t hívunk.",
            "Ha a paraméter negatív."
        ],
        correct: [0]
    },
    // --- 12. ELŐADÁS: Megszakítás és Lockok ---
    {
        category: "Megszakítás",
        type: "single",
        question: "Leállítja-e azonnal a szálat a `thread.interrupt()` metódus?",
        options: [
            "Igen, azonnal megöli a szálat (mint a stop).",
            "Nem, csak beállít egy jelzőbitet (flag), amit a szálnak kell figyelnie és lekezelnie.",
            "Csak akkor, ha a szál alvó állapotban van.",
            "Igen, de csak daemon szálak esetén."
        ],
        correct: [1]
    },
    {
        category: "Lock Interface",
        type: "single",
        question: "Miben nyújt többet a `ReentrantLock` a `synchronized` blokknál?",
        options: [
            "Automatikusan elengedi a zárat kivétel esetén.",
            "Lehetőséget ad időközhöz kötött várakozásra (`tryLock`) és megszakítható várakozásra (`lockInterruptibly`).",
            "Gyorsabb minden esetben.",
            "Nem kell hozzá `finally` blokk."
        ],
        correct: [1]
    },
    {
        category: "Lock Interface",
        type: "single",
        question: "Mi a helyes minta a `Lock` használatára?",
        options: [
            "lock.lock(); ... lock.unlock();",
            "lock.lock(); try { ... } finally { lock.unlock(); }",
            "try { lock.lock(); ... } catch (Exception e) { lock.unlock(); }",
            "synchronized(lock) { ... }"
        ],
        correct: [1]
    },
    {
        category: "Atomicitás",
        type: "single",
        question: "Mire jók az `AtomicInteger`, `AtomicBoolean` osztályok?",
        options: [
            "Szinkronizáció nélkül (lock-free) tesznek lehetővé atomi műveleteket (pl. növelés).",
            "Csak olvasható változókat hoznak létre.",
            "Helyettesítik az Integer osztályt mindenhol.",
            "Automatikusan perzisztálják az adatokat."
        ],
        correct: [0]
    },
    // --- 13. ELŐADÁS: Egyéb eszközök ---
    {
        category: "CountDownLatch",
        type: "single",
        question: "Mire használható a `CountDownLatch`?",
        options: [
            "Szálak sorba állítására.",
            "Egy vagy több szál várakoztatására, amíg egy adott számú művelet be nem fejeződik.",
            "Ciklikus gát létrehozására.",
            "Adatok cseréjére két szál között."
        ],
        correct: [1]
    },
    {
        category: "GUI Konkurencia",
        type: "single",
        question: "Mi az Event Dispatch Thread (EDT) szerepe Swing/AWT-ben?",
        options: [
            "A háttérszámítások végzése.",
            "Kizárólag ezen a szálon szabad manipulálni a grafikus felület komponenseit.",
            "A hálózati kommunikáció kezelése.",
            "A szemétgyűjtés futtatása."
        ],
        correct: [1]
    },
    {
        category: "Leállítás",
        type: "single",
        question: "Miért 'deprecated' (elavult) a `Thread.stop()`?",
        options: [
            "Mert túl lassú.",
            "Mert nem biztonságos: inkonzisztens állapotban hagyhatja az objektumokat a zárak kényszerített elengedése miatt.",
            "Mert csak Windows-on működik.",
            "Mert a neve nem követi a konvenciókat."
        ],
        correct: [1]
    },
    // --- BÓNUSZ: Kód elemzés ---
    {
        category: "Kód elemzés",
        type: "single",
        question: "Mi a probléma az alábbi kóddal: `if (!list.isEmpty()) { return list.get(0); }` többszálú környezetben?",
        options: [
            "Nincs probléma.",
            "Check-then-Act hiba: a lista kiürülhet az `isEmpty` ellenőrzés és a `get` hívás között.",
            "A `get(0)` mindig kivételt dob.",
            "A lista mérete nem kérdezhető le."
        ],
        correct: [1]
    },
    {
        category: "Volatile",
        type: "single",
        question: "Elégséges-e a `volatile` kulcsszó a `count++` művelet szálbiztossá tételére?",
        options: [
            "Igen, a volatile garantálja az atomicitást.",
            "Nem, mert a `++` művelet nem atomi (olvasás-módosítás-írás), a volatile csak a láthatóságot garantálja.",
            "Csak 64 bites rendszereken.",
            "Igen, ha a változó int típusú."
        ],
        correct: [1]
    },
    {
        category: "Thread States",
        type: "single",
        question: "Milyen állapotba kerül a szál a `Thread.sleep()` meghívásakor?",
        options: [
            "BLOCKED",
            "TIMED_WAITING",
            "RUNNABLE",
            "TERMINATED"
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mi történik, ha egy szál 'run' metódusából nem elkapott kivétel (uncaught exception) lép ki?",
        options: [
            "A teljes JVM leáll.",
            "A szál terminál, és a kivétel kinyomtatásra kerül a konzolra (stack trace), de a többi szál fut tovább.",
            "A kivétel elkapódik a main szálban.",
            "A szál újraindul."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mit jelent a 'time slicing' (időosztásos) ütemezés?",
        options: [
            "Minden szál addig fut, amíg be nem fejeződik (run to completion).",
            "A szálak egy meghatározott ideig kapnak futási jogot (kvantum), majd az ütemező elveszi tőlük a vezérlést.",
            "Csak valós idejű rendszerekben használják.",
            "A szálak véletlenszerűen kapnak processzoridőt."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mi a 'daemon' szál sajátossága a Java-ban?",
        options: [
            "Magasabb prioritással fut, mint a normál szálak.",
            "Soha nem állhat le.",
            "A JVM nem várja meg a befejeződését kilépéskor (ha csak daemon szálak futnak, a program leáll).",
            "Csak I/O műveleteket végezhet."
        ],
        correct: [2]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mire való a `Thread.yield()` metódus?",
        options: [
            "Azonnal leállítja a szálat.",
            "Jelzi az ütemezőnek, hogy a szál hajlandó lemondani a vezérlésről, de nem garantált, hogy ez megtörténik.",
            "Blokkolja a szálat 100 milliszekundumra.",
            "Törli a szál prioritását."
        ],
        correct: [1]
    },
    {
        category: "Metódusok",
        type: "single",
        question: "Miért veszélyes a `Thread.suspend()` és `resume()` használata (amik deprecated-ek)?",
        options: [
            "Mert túl sok CPU-t fogyasztanak.",
            "Mert a suspendelt szál nem engedi el a lock-okat, így könnyen holtpont (deadlock) alakulhat ki.",
            "Mert nem működnek Windows-on.",
            "Mert törlik a szál memóriáját."
        ],
        correct: [1]
    },
    // --- 3. ELŐADÁS: Szinkronizáció részletei ---
    {
        category: "Szinkronizáció",
        type: "single",
        question: "Mire szinkronizál egy `static synchronized` metódus?",
        options: [
            "Az adott példányra (this).",
            "Az osztályhoz tartozó Class objektumra.",
            "A JVM globális lockjára.",
            "Semmire, a static metódusok nem szinkronizálhatók."
        ],
        correct: [1]
    },
    {
        category: "Szinkronizáció",
        type: "single",
        question: "Mi a 'kliensoldali zárolás' (client-side locking)?",
        options: [
            "Amikor a böngészőben zárolunk egy erőforrást.",
            "Amikor egy nem szálbiztos osztályt úgy teszünk biztonságossá, hogy a hívó kódban (kliens) tesszük synchronized blokkba a műveleteit.",
            "Amikor az adatbázis zárolja a rekordokat.",
            "Amikor a szerver küld lock-ot a kliensnek."
        ],
        correct: [1]
    },
    {
        category: "Szinkronizáció",
        type: "single",
        question: "Mi az 'atomi művelet' jellemzője?",
        options: [
            "Nagyon gyorsan lefut.",
            "Oszthatatlan, vagy teljesen végrehajtódik, vagy semennyire; közben más szál nem láthatja a részeredményt.",
            "Csak atomi típusokon (int, boolean) végezhető.",
            "Mindig synchronized blokkban van."
        ],
        correct: [1]
    },
    {
        category: "Szinkronizáció",
        type: "single",
        question: "Lehet-e null referenciára szinkronizálni (`synchronized(null)`)?",
        options: [
            "Igen, ilyenkor globális lock jön létre.",
            "Nem, `NullPointerException`-t kapunk.",
            "Igen, de hatástalan.",
            "Fordítási hibát okoz."
        ],
        correct: [1]
    },
    // --- 4. ELŐADÁS: Holtpont és éhezés ---
    {
        category: "Deadlock",
        type: "single",
        question: "Hogyan lehet elkerülni a holtpontot az erőforrások sorrendbe állításával?",
        options: [
            "Minden szál véletlenszerű sorrendben kéri el az erőforrásokat.",
            "Minden szál mindig globálisan meghatározott, azonos sorrendben (pl. ID szerint növekvő) kéri el a lockokat.",
            "Csak egy szál futhat egyszerre.",
            "Időzítőt használunk minden lockolásnál."
        ],
        correct: [1]
    },
    {
        category: "Starvation",
        type: "single",
        question: "Mi a 'kiéheztetés' (starvation)?",
        options: [
            "Amikor elfogy a memória (OOM).",
            "Amikor egy szál soha nem kap hozzáférést a szükséges erőforráshoz, mert más (pl. magasabb prioritású) szálak mindig megelőzik.",
            "Amikor a garbage collector túl gyakran fut.",
            "Amikor a thread pool üres."
        ],
        correct: [1]
    },
    {
        category: "Filozófusok",
        type: "single",
        question: "Az étkező filozófusok problémájánál mi okozza a holtpontot a naiv megoldásban?",
        options: [
            "A villák túl rövidek.",
            "Minden filozófus egyszerre veszi fel a bal villát, és vár a jobbra (ciklikus várakozás).",
            "A filozófusok túl sokat gondolkodnak.",
            "Nincs elég étel."
        ],
        correct: [1]
    },
    // --- 5-6. ELŐADÁS: Memória és láthatóság ---
    {
        category: "Memória",
        type: "single",
        question: "Hol tárolódnak a metódusok lokális változói?",
        options: [
            "A Heap-en.",
            "A Metaspace-ben.",
            "A szál saját Stack-jén (Execution Stack).",
            "A CPU regiszterekben kizárólag."
        ],
        correct: [2]
    },
    {
        category: "Memória",
        type: "single",
        question: "Okozhat-e memóriaszivárgást egy szál?",
        options: [
            "Nem, a Java-ban van GC.",
            "Igen, például ha a `ThreadLocal` változókat nem takarítjuk ki, vagy a szál referenciát tart nagy objektumokra és sosem áll le.",
            "Csak daemon szálak okozhatnak.",
            "Nem, a szálak megszűnésekor minden heap adat törlődik."
        ],
        correct: [1]
    },
    {
        category: "Final",
        type: "single",
        question: "Melyik állítás igaz a `final` referenciákra?",
        options: [
            "Az általuk hivatkozott objektum belső állapota sem módosítható.",
            "A referencia nem állítható át másik objektumra, de a hivatkozott objektum állapota módosulhat (ha az mutábilis).",
            "Automatikusan volatile-ként viselkednek.",
            "Csak a konstruktorban kaphatnak értéket, később olvashatatlanok."
        ],
        correct: [1]
    },
    {
        category: "Closure",
        type: "single",
        question: "Mit jelent az 'effectively final' a lambda kifejezések kontextusában?",
        options: [
            "A változót kötelező final kulcsszóval ellátni.",
            "A változó nem final, de az értéke a inicializálás után nem változik, így használható lambdában.",
            "A változó értéke megváltoztatható a lambdán belül.",
            "A változó statikus."
        ],
        correct: [1]
    },
    {
        category: "Safe Publication",
        type: "single",
        question: "Mi a 'safe publication' (biztonságos közzététel) célja?",
        options: [
            "Hogy az objektumot titkosítva küldjük át a hálózaton.",
            "Hogy egy objektum inicializált állapota helyesen és teljesen látható legyen más szálak számára a referenciája publikálásakor.",
            "Hogy publikus legyen minden adattag.",
            "Hogy elkerüljük a private konstruktorokat."
        ],
        correct: [1]
    },
    // --- 7. ELŐADÁS: Kollekciók részletei ---
    {
        category: "Kollekciók",
        type: "single",
        question: "Mit jelent a 'fail-fast' iterátor?",
        options: [
            "Gyorsan iterál, de pontatlan.",
            "Ha iterálás közben módosítják a kollekciót (nem az iterátoron keresztül), azonnal `ConcurrentModificationException`-t dob.",
            "Soha nem dob kivételt.",
            "Automatikusan kijavítja a hibákat."
        ],
        correct: [1]
    },
    {
        category: "ConcurrentHashMap",
        type: "single",
        question: "Dobhat-e `ConcurrentModificationException`-t a `ConcurrentHashMap` iterátora?",
        options: [
            "Igen, mindig.",
            "Nem, az iterátora 'weakly consistent' (gyengén konzisztens), elviseli a konkurenst módosításokat.",
            "Csak ha null kulcsot teszünk bele.",
            "Csak ha remove-ot hívunk."
        ],
        correct: [1]
    },
    {
        category: "CopyOnWrite",
        type: "single",
        question: "Mikor érdemes `CopyOnWriteArrayList`-et használni?",
        options: [
            "Ha nagyon sok írás és kevés olvasás történik.",
            "Ha nagyon sok olvasás és ritka írás történik (mert az írás költséges másolással jár).",
            "Ha memóriát akarunk spórolni.",
            "Ha rendezett listára van szükség."
        ],
        correct: [1]
    },
    {
        category: "Collections",
        type: "single",
        question: "Mi történik, ha `Collections.unmodifiableList`-re hívunk `add` metódust?",
        options: [
            "Hozzáadja az elemet.",
            "Fordítási hiba.",
            "Futásidejű `UnsupportedOperationException` kivétel.",
            "Semmi nem történik (silent fail)."
        ],
        correct: [2]
    },
    // --- 8. ELŐADÁS: Executorok típusai ---
    {
        category: "Executors",
        type: "single",
        question: "Hogyan működik a `newCachedThreadPool`?",
        options: [
            "Mindig fix számú szálat tart fent.",
            "Szükség esetén új szálakat hoz létre (korlátlanul), de ha van szabad szál, azt újrahasznosítja; a tétlen szálakat idővel leállítja.",
            "Csak egyetlen szálat használ.",
            "A feladatokat diszkre menti."
        ],
        correct: [1]
    },
    {
        category: "Executors",
        type: "single",
        question: "Mi a `newSingleThreadExecutor` előnye a sima `Thread`-hez képest?",
        options: [
            "Semmi.",
            "Garantálja, hogy a feladatok sorrendben (szekvenciálisan) hajtódnak végre, és ha a szál elszáll hibával, indít egy újat helyette.",
            "Párhuzamosan futtatja a feladatokat.",
            "Gyorsabb."
        ],
        correct: [1]
    },
    {
        category: "Optimálás",
        type: "single",
        question: "Hány szálat érdemes indítani tisztán CPU-intenzív feladathoz (pl. számítás)?",
        options: [
            "Minél többet (pl. 100-at).",
            "Kb. annyit, ahány processzormag elérhető (N vagy N+1).",
            "Pontosan egyet.",
            "A memória méretétől függ."
        ],
        correct: [1]
    },
    {
        category: "Optimálás",
        type: "single",
        question: "Hány szálat érdemes indítani IO-intenzív feladathoz (pl. hálózati kérések)?",
        options: [
            "Csak annyit, ahány mag van.",
            "Sokkal többet, mint a magok száma (mivel a szálak sokat várakoznak IO-ra).",
            "Nullát.",
            "Mindig fixen 10-et."
        ],
        correct: [1]
    },
    // --- 9. ELŐADÁS: ExecutorService Lifecycle & Future ---
    {
        category: "ExecutorService",
        type: "single",
        question: "Mit ad vissza a `shutdownNow()` metódus?",
        options: [
            "Void-ot.",
            "Azon feladatok listáját (`List<Runnable>`), amelyek még nem kezdődtek el (a queue-ban maradtak).",
            "A sikeresen befejezett feladatok számát.",
            "Egy Future objektumot."
        ],
        correct: [1]
    },
    {
        category: "ExecutorService",
        type: "single",
        question: "Mi a különbség a `submit(Runnable)` és `execute(Runnable)` között?",
        options: [
            "Semmi.",
            "A `submit` visszaad egy `Future`-t (amin lekérdezhető a státusz/hiba), az `execute` (ami az Executor interfész része) nem ad vissza semmit.",
            "Az `execute` gyorsabb.",
            "A `submit` nem dob kivételt."
        ],
        correct: [1]
    },
    {
        category: "ExecutorService",
        type: "single",
        question: "Mit csinál az `invokeAny` metódus?",
        options: [
            "Lefuttatja az összes feladatot.",
            "Elindítja a feladatokat, és visszatér annak az EGYNEK az eredményével, amelyik először sikeresen befejeződik (a többit cancelleli).",
            "Véletlenszerűen kiválaszt egy feladatot és lefuttatja.",
            "Vár, amíg bármelyik szál szabad lesz."
        ],
        correct: [1]
    },
    {
        category: "ExecutorService",
        type: "single",
        question: "Mit csinál az `invokeAll` metódus?",
        options: [
            "Azonnal visszatér.",
            "Megvárja, amíg az ÖSSZES átadott feladat befejeződik, és visszaadja a `Future` listát.",
            "Csak elindítja a feladatokat.",
            "Leállítja a szálakat."
        ],
        correct: [1]
    },
    {
        category: "Future",
        type: "single",
        question: "Hogyan kezeljük a kivételeket `ExecutorService` használatakor?",
        options: [
            "A program összeomlik.",
            "A kivétel 'becsomagolódik' egy `ExecutionException`-be, amit a `Future.get()` hívásakor kapunk meg.",
            "A kivétel elveszik.",
            "A konzolra íródik automatikusan."
        ],
        correct: [1]
    },
    // --- 10. ELŐADÁS: BlockingQueue & Producer-Consumer ---
    {
        category: "BlockingQueue",
        type: "single",
        question: "Melyik metódus blokkol, ha a sor tele van (és be akarunk tenni)?",
        options: [
            "add()",
            "offer()",
            "put()",
            "set()"
        ],
        correct: [2]
    },
    {
        category: "BlockingQueue",
        type: "single",
        question: "Mit csinál az `offer(e, time, unit)` metódus?",
        options: [
            "Végtelen ideig vár.",
            "Megpróbálja betenni az elemet; ha tele a sor, várakozik a megadott ideig, majd ha még mindig nem sikerül, `false`-szal tér vissza.",
            "Kivételt dob timeout esetén.",
            "Felülírja a legrégebbi elemet."
        ],
        correct: [1]
    },
    {
        category: "BlockingQueue",
        type: "single",
        question: "Melyik metódus NEM blokkoló és dob kivételt, ha üres sorból akarunk kivenni?",
        options: [
            "take()",
            "poll()",
            "remove()",
            "element()"
        ],
        correct: [2]
    },
    {
        category: "BlockingQueue",
        type: "single",
        question: "Miért jobb korlátos (bounded) buffert használni a termelő-fogyasztó problémánál?",
        options: [
            "Mert gyorsabb.",
            "Mert megakadályozza a memória betelését (`OutOfMemory`), ha a termelő sokkal gyorsabb, mint a fogyasztó (backpressure).",
            "Mert a Java csak ezt támogatja.",
            "Mert így nem kell szinkronizálni."
        ],
        correct: [1]
    },
    {
        category: "IO",
        type: "single",
        question: "Mire használható a `PipedInputStream` és `PipedOutputStream`?",
        options: [
            "Fájlok olvasására.",
            "Két szál közötti közvetlen bájt-alapú kommunikációra (csővezeték).",
            "Hálózati kommunikációra.",
            "Képfeldolgozásra."
        ],
        correct: [1]
    },
    // --- 11. ELŐADÁS: Wait/Notify részletek ---
    {
        category: "Wait/Notify",
        type: "single",
        question: "Mi a 'spurious wakeup' (fantom ébredés)?",
        options: [
            "Amikor a szál soha nem ébred fel.",
            "Amikor a szál `notify` hívás nélkül ébred fel a `wait`-ből (ezért kell ciklusban ellenőrizni a feltételt).",
            "Amikor szellem szálak indulnak.",
            "Amikor a processzor hibázik."
        ],
        correct: [1]
    },
    {
        category: "Wait/Notify",
        type: "single",
        question: "Mi történik, ha `notify()`-t hívunk, de senki nem várakozik (wait-set üres)?",
        options: [
            "Kivételt kapunk.",
            "A jelzés elveszik (semmi nem történik).",
            "A jelzés eltárolódik későbbre.",
            "A program lefagy."
        ],
        correct: [1]
    },
    {
        category: "Wait/Notify",
        type: "single",
        question: "Mi a 'Thundering Herd' probléma `notifyAll()` használatakor?",
        options: [
            "Az összes várakozó szál felébred, versengeni kezdenek a lockért, de csak egy szerezheti meg; a többi visszaalszik, ami felesleges kontextusváltásokkal jár.",
            "A szálak összeütköznek.",
            "A memória megtelik.",
            "A lock beragad."
        ],
        correct: [1]
    },
    {
        category: "Wait/Notify",
        type: "single",
        question: "A `notify()` hívás után azonnal elengedi a szál a lockot?",
        options: [
            "Igen, azonnal.",
            "Nem, csak miután kilépett a szinkronizált blokkból/metódusból.",
            "Csak ha `wait()` követi.",
            "Csak Linuxon."
        ],
        correct: [1]
    },
    // --- 12. ELŐADÁS: Lock és Interrupt ---
    {
        category: "Interrupt",
        type: "single",
        question: "Mit csinál a `Thread.interrupted()` statikus metódus?",
        options: [
            "Csak lekérdezi a megszakítási jelzőt.",
            "Lekérdezi a jelzőt ÉS törli azt (visszaállítja false-ra).",
            "Megszakítja az aktuális szálat.",
            "Kivételt dob."
        ],
        correct: [1]
    },
    {
        category: "Interrupt",
        type: "single",
        question: "Mit csinál a `thread.isInterrupted()` példánymetódus?",
        options: [
            "Lekérdezi a jelzőt ÉS törli azt.",
            "Csak lekérdezi a jelzőt, nem módosítja.",
            "Leállítja a szálat.",
            "Visszaadja a szál nevét."
        ],
        correct: [1]
    },
    {
        category: "Interrupt",
        type: "single",
        question: "Hogyan reagál a `sleep()` vagy `wait()` az interruptra?",
        options: [
            "Sehogy.",
            "Felébrednek és `InterruptedException`-t dobnak (törölve az interrupt flag-et).",
            "Leállítják a JVM-et.",
            "False értéket adnak vissza."
        ],
        correct: [1]
    },
    {
        category: "Lock",
        type: "single",
        question: "Mi a `tryLock()` előnye?",
        options: [
            "Blokkol, amíg meg nem szerzi a zárat.",
            "Nem blokkol: ha a zár szabad, megszerzi és true-t ad; ha foglalt, azonnal false-al tér vissza.",
            "Automatikusan szinkronizál.",
            "Megjavítja a deadlocked szálakat."
        ],
        correct: [1]
    },
    {
        category: "Condition",
        type: "single",
        question: "Melyik Lock metódus hoz létre `Condition` objektumot (ami a wait-notify kiváltója)?",
        options: [
            "newCondition()",
            "createCondition()",
            "getCondition()",
            "waitCondition()"
        ],
        correct: [0]
    },
    {
        category: "ReadWriteLock",
        type: "single",
        question: "Hogyan működik a `ReentrantReadWriteLock`?",
        options: [
            "Csak egy szál olvashat egyszerre.",
            "Több szál olvashat egyszerre (ha senki nem ír), de íráskor kizárólagos jogot ad (senki más nem írhat/olvashat).",
            "Több szál írhat egyszerre.",
            "Nincs benne lock."
        ],
        correct: [1]
    },
    {
        category: "ReadWriteLock",
        type: "single",
        question: "Mikor érdemes ReadWriteLock-ot használni?",
        options: [
            "Mindig.",
            "Ha az adatstruktúrát sokkal többen olvassák, mint írják (read-heavy).",
            "Ha az írás nagyon gyakori.",
            "Ha kevés a memória."
        ],
        correct: [1]
    },
    // --- 13. ELŐADÁS: Cancellation és egyebek ---
    {
        category: "Future",
        type: "single",
        question: "Mit jelent a `Future.cancel(true)` paramétere?",
        options: [
            "Törli a feladatot az adatbázisból.",
            "MayInterruptIfRunning: ha a feladat már fut, megkísérli megszakítani (interrupt) a futtató szálat.",
            "Csak akkor törli, ha még nem indult el.",
            "Véglegesen törli a Future objektumot."
        ],
        correct: [1]
    },
    {
        category: "Future",
        type: "single",
        question: "Mit ad vissza a `isCancelled()` ha a feladat normálisan lefutott?",
        options: [
            "True",
            "False",
            "Null",
            "Kivételt dob."
        ],
        correct: [1]
    },
    {
        category: "GUI",
        type: "single",
        question: "Miért nem szabad hosszú műveletet végezni az Event Dispatch Thread-en (EDT)?",
        options: [
            "Mert a processzor túlmelegszik.",
            "Mert lefagy a grafikus felület (nem reagál az egérre/billentyűzetre), amíg a művelet fut.",
            "Mert az EDT nem tud számolni.",
            "Mert hálózati hibát okoz."
        ],
        correct: [1]
    },
    {
        category: "CountDownLatch",
        type: "single",
        question: "Lehet-e újrahasznosítani a `CountDownLatch`-t miután a számláló elérte a nullát?",
        options: [
            "Igen, a reset() metódussal.",
            "Nem, ez egy egyszer használatos szinkronizációs eszköz (a CyclicBarrier újrahasznosítható).",
            "Igen, automatikusan újraindul.",
            "Csak ha újra példányosítjuk."
        ],
        correct: [1]
    },
    {
        category: "Szemafor",
        type: "single",
        question: "Mire jó a `Semaphore`?",
        options: [
            "Csak egy szálat enged be.",
            "Korlátozza, hogy egyszerre hány szál férhet hozzá egy erőforráshoz (engedélyek száma).",
            "Sorba rendezi a szálakat.",
            "Adatot tárol."
        ],
        correct: [1]
    },
    // --- VEGYES / TOVÁBBI RÉSZLETEK ---
    {
        category: "Atomicitás",
        type: "single",
        question: "Mi a 'check-then-act' hiba?",
        options: [
            "Amikor ellenőrzünk egy feltételt (pl. map.containsKey), majd cselekszünk, de a kettő között egy másik szál megváltoztatja az állapotot.",
            "Amikor rosszul írjuk a kódot.",
            "Amikor a tesztek nem futnak le.",
            "Amikor a szál túl gyorsan fut."
        ],
        correct: [0]
    },
    {
        category: "Láthatóság",
        type: "single",
        question: "Miért nem elég a `volatile` egy `long` vagy `double` típusú változó írásához 32 bites rendszeren (ha nem volatile)?",
        options: [
            "Mert a 64 bites írás két 32 bites lépésben történhet (word tearing), így inkonzisztens adat látszódhat.",
            "Mert túl nagy a szám.",
            "Mert a Java nem támogatja.",
            "Mert negatív szám lehet."
        ],
        correct: [0]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mi a `ThreadLocal` célja?",
        options: [
            "Hogy globális változókat hozzon létre.",
            "Hogy olyan változókat hozzon létre, amelyekből minden szálnak saját, független példánya van.",
            "Hogy szinkronizálja a szálakat.",
            "Hogy lokális változókat mentsen fájlba."
        ],
        correct: [1]
    },
    {
        category: "Executors",
        type: "single",
        question: "Mi a `ScheduledExecutorService` feladata?",
        options: [
            "Adatbázis mentések ütemezése.",
            "Feladatok késleltetett vagy periodikus (ismétlődő) futtatása.",
            "A rendszer óra átállítása.",
            "Szálak rendezése."
        ],
        correct: [1]
    },
    {
        category: "BlockingQueue",
        type: "single",
        question: "Mit jelent a `SynchronousQueue`?",
        options: [
            "Egy végtelen nagy sor.",
            "Egy 0 kapacitású sor: minden betevő szálnak meg kell várnia egy kivevő szálat (randevú).",
            "Egy szinkronizált ArrayList.",
            "Egy prioritásos sor."
        ],
        correct: [1]
    },
    {
        category: "Kivételkezelés",
        type: "single",
        question: "Mi a `Thread.UncaughtExceptionHandler`?",
        options: [
            "Egy interfész, amit implementálva elkaphatjuk a szálakból kirepülő kezeletlen kivételeket (pl. logolásra).",
            "A try-catch blokk másik neve.",
            "Egy kivétel típus.",
            "A fordító része."
        ],
        correct: [0]
    },
    {
        category: "Szinkronizáció",
        type: "single",
        question: "Használható-e a `String` literál lockolásra (`synchronized('lock')`)?",
        options: [
            "Igen, és ajánlott.",
            "Nem ajánlott, mert a String pool miatt (internálás) más, független kód is ugyanarra a literálra lockolhat, ami deadlockhoz vezethet.",
            "Tilos, fordítási hiba.",
            "Csak Java 8 előtt."
        ],
        correct: [1]
    },
    {
        category: "Állapotok",
        type: "single",
        question: "Milyen állapotban van a szál, ha `synchronized` blokkra vár?",
        options: [
            "WAITING",
            "BLOCKED",
            "TIMED_WAITING",
            "NEW"
        ],
        correct: [1]
    },
    {
        category: "Állapotok",
        type: "single",
        question: "Milyen állapotban van a szál, ha `Object.wait()`-et hívott?",
        options: [
            "BLOCKED",
            "WAITING",
            "RUNNABLE",
            "TERMINATED"
        ],
        correct: [1]
    },
    {
        category: "Teljesítmény",
        type: "single",
        question: "Mi a 'context switch' (kontextusváltás) hátránya?",
        options: [
            "Nincs hátránya.",
            "Jelentős CPU időbe kerül (regiszterek mentése/betöltése, cache ürülés), ami csökkenti a hasznos teljesítményt.",
            "Növeli a memória méretét.",
            "Csökkenti a lemezterületet."
        ],
        correct: [1]
    },
    {
        category: "Amdahl törvénye",
        type: "single",
        question: "Mit mond ki Amdahl törvénye (a jegyzet logikája alapján)?",
        options: [
            "Minél több processzorunk van, annál gyorsabb a program lineárisan.",
            "A gyorsítás mértékét korlátozza a program azon része, amit muszáj szekvenciálisan (sorosan) végrehajtani.",
            "Minden program párhuzamosítható.",
            "A Java programok lassúak."
        ],
        correct: [1]
    },
    {
        category: "Executors",
        type: "single",
        question: "Mi történik, ha egy fix méretű thread pool összes szála foglalt, és új feladat érkezik?",
        options: [
            "Kivételt dob.",
            "A feladat bekerül egy várakozási sorba (queue), és vár, amíg egy szál felszabadul.",
            "Létrehoz egy ideiglenes szálat.",
            "Eldobja a feladatot."
        ],
        correct: [1]
    },
    {
        category: "Szinkronizáció",
        type: "single",
        question: "Mi a 'spin waiting' (pörögve várakozás)?",
        options: [
            "Amikor a lemez pörög.",
            "Amikor a szál egy ciklusban folyamatosan ellenőriz egy feltételt anélkül, hogy átadná a vezérlést (égeti a CPU-t).",
            "A wait() metódus szinonimája.",
            "A thread pool működése."
        ],
        correct: [1]
    },
    {
        category: "Java Memory Model",
        type: "single",
        question: "Mi a 'happens-before' reláció lényege?",
        options: [
            "Időben előbb történik.",
            "Garanciát ad arra, hogy egy utasítás memóriaműveletei láthatóak lesznek egy másik utasítás számára (pl. volatile írás happens-before volatile olvasás).",
            "Csak a konstruktorra vonatkozik.",
            "Az eseménykezelők sorrendje."
        ],
        correct: [1]
    },
    {
        category: "Thread",
        type: "single",
        question: "Melyik metódus NEM statikus a Thread osztályban?",
        options: [
            "sleep()",
            "yield()",
            "interrupted()",
            "start()"
        ],
        correct: [3]
    },
    {
        category: "Collections",
        type: "single",
        question: "A `Vector` osztály minden metódusa szinkronizált. Ez garantálja a teljes szálbiztonságot összetett műveleteknél (pl. check-then-act)?",
        options: [
            "Igen, teljesen biztonságos.",
            "Nem, összetett műveleteknél (pl. if !contains then add) továbbra is kliensoldali zárolás vagy külső szinkronizáció szükséges.",
            "Csak olvasásnál.",
            "Csak írásnál."
        ],
        correct: [1]
    },
    {
        category: "Concurrent",
        type: "single",
        question: "Melyik Queue implementáció NEM blokkoló, de szálbiztos?",
        options: [
            "ArrayBlockingQueue",
            "ConcurrentLinkedQueue",
            "PriorityQueue",
            "LinkedList"
        ],
        correct: [1]
    },
    {
        category: "Deadlock",
        type: "single",
        question: "Hogyan segíthet a 'tryLock(time)' a deadlock feloldásában/elkerülésében?",
        options: [
            "Nem segít.",
            "Ha nem sikerül megszerezni a zárat adott időn belül, a szál visszaléphet (back off), elengedheti a saját zárait, és később újrapróbálkozhat.",
            "Automatikusan megszünteti a deadlockot.",
            "Növeli a lock idejét."
        ],
        correct: [1]
    },
    {
        category: "Interrupt",
        type: "single",
        question: "Miért rossz gyakorlat 'lenyelni' (üres catch blokk) az `InterruptedException`-t?",
        options: [
            "Mert a fordító hibát jelez.",
            "Mert elveszítjük a megszakítási kérést, és a hívó kód/szál nem fog tudni róla, hogy le kéne állnia.",
            "Mert a program kifogy a memóriából.",
            "Mert lassítja a futást."
        ],
        correct: [1]
    },
    {
        category: "Interrupt",
        type: "single",
        question: "Mit kell tenni, ha nem tudjuk lekezelni az `InterruptedException`-t (pl. Runnable-ben vagyunk)?",
        options: [
            "Kinyomtatni a konzolra.",
            "Visszaállítani az interrupt státuszt (`Thread.currentThread().interrupt()`), hogy a hívó lánc feljebb érzékelhesse.",
            "Kilépni a rendszerből (`System.exit`).",
            "Semmit."
        ],
        correct: [1]
    },
    {
        category: "Lock",
        type: "single",
        question: "Mi a `Condition.signal()` feladata?",
        options: [
            "Leállítja a szálat.",
            "Felébreszt egy, az adott Condition-ön várakozó szálat (hasonlóan a notify-hoz).",
            "Jelzi a hibát.",
            "Módosítja a változót."
        ],
        correct: [1]
    },
    {
        category: "Atomic",
        type: "single",
        question: "Hogyan működnek az `Atomic` osztályok (pl. `AtomicInteger`) a motorháztető alatt?",
        options: [
            "Mindig synchronized blokkot használnak.",
            "CAS (Compare-And-Swap) hardveres utasításokat használnak, ami lock-free (zármentes) működést tesz lehetővé.",
            "Fájlba írnak.",
            "Hálózaton keresztül szinkronizálnak."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mi a prioritása (priority) egy Java szálnak alapértelmezetten?",
        options: [
            "1 (MIN_PRIORITY)",
            "5 (NORM_PRIORITY)",
            "10 (MAX_PRIORITY)",
            "0"
        ],
        correct: [1]
    },
    {
        category: "API",
        type: "single",
        question: "Melyik interfész NEM funkcionális interfész (SAM) az alábbiak közül?",
        options: [
            "Runnable",
            "Callable",
            "Comparator",
            "Collection" // Ennek sok metódusa van
        ],
        correct: [3]
    },
    {
        category: "GUI",
        type: "single",
        question: "Mire való a `SwingUtilities.invokeLater(Runnable)`?",
        options: [
            "Hogy azonnal lefuttasson egy kódot.",
            "Hogy beütemezzen egy feladatot az Event Dispatch Thread-re (aszinkron módon), ami majd frissíti a felületet.",
            "Hogy új szálat indítson.",
            "Hogy leállítsa a GUI-t."
        ],
        correct: [1]
    },
    {
        category: "BlockingQueue",
        type: "single",
        question: "Melyik BlockingQueue implementáció alapul láncolt listán?",
        options: [
            "ArrayBlockingQueue",
            "LinkedBlockingQueue",
            "PriorityBlockingQueue",
            "SynchronousQueue"
        ],
        correct: [1]
    },
    {
        category: "Collections",
        type: "single",
        question: "Melyik Map implementáció rendezett a kulcsok szerint?",
        options: [
            "HashMap",
            "ConcurrentHashMap",
            "TreeMap (vagy ConcurrentSkipListMap)",
            "Hashtable"
        ],
        correct: [2]
    },
    {
        category: "Future",
        type: "single",
        question: "Dobhat-e kivételt a `Future.get(timeout, unit)`?",
        options: [
            "Nem.",
            "Igen, `TimeoutException`-t, ha az idő lejárt és az eredmény még nincs kész.",
            "Csak null-t ad vissza.",
            "Megöli a szálat."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Hozzá lehet-e adni egy szálat egy ThreadGroup-hoz a létrehozása után?",
        options: [
            "Igen.",
            "Nem, a ThreadGroup-ot a konstruktorban kell megadni.",
            "Csak ha a szál még nem indult el.",
            "Csak adminisztrátorként."
        ],
        correct: [1]
    },
    {
        category: "Objektum",
        type: "single",
        question: "Minden Java objektum használható monitorként?",
        options: [
            "Igen, mert az Object osztályból származnak.",
            "Csak a Thread osztály leszármazottai.",
            "Csak a Lock interfészt implementálók.",
            "Csak a Serializable objektumok."
        ],
        correct: [0]
    },
    {
        category: "Szálbiztosság",
        type: "single",
        question: "Mi a 'Thread Confinement' (szálhoz kötés)?",
        options: [
            "Amikor egy objektumot kizárólag egyetlen szál használ, így nem kell szinkronizálni (pl. Swing komponensek vagy JDBC Connection).",
            "Amikor a szálak be vannak zárva.",
            "Amikor deadlock van.",
            "Amikor a szál memóriája elfogy."
        ],
        correct: [0]
    },
    {
        category: "Jegyzet",
        type: "single",
        question: "A jegyzet szerint mi a 'monitor' két fő összetevője?",
        options: [
            "Lock (kölcsönös kizárás) és Wait Set (várakozók halmaza).",
            "CPU és RAM.",
            "Billentyűzet és Egér.",
            "Start és Stop metódusok."
        ],
        correct: [0]
    },
    {
        category: "Wait",
        type: "single",
        question: "Hány szálat ébreszt fel a `notify()`?",
        options: [
            "Az összeset.",
            "Pontosan egyet (de nem definiált, hogy melyiket).",
            "Kettőt.",
            "A legrégebben várakozót."
        ],
        correct: [1]
    },
    {
        category: "Wait",
        type: "single",
        question: "Hány szálat ébreszt fel a `notifyAll()`?",
        options: [
            "Egyet.",
            "Az összeset, ami az adott objektum wait-setjében van.",
            "Csak a magas prioritásúakat.",
            "Véletlenszerű számút."
        ],
        correct: [1]
    },
    // --- ÚJABB KÖR (hogy meglegyen a 109) ---
    {
        category: "API",
        type: "single",
        question: "Mi a `Runtime.getRuntime().availableProcessors()` szerepe?",
        options: [
            "Megadja a szabad memóriát.",
            "Visszaadja a JVM számára elérhető processzormagok számát (segít a thread pool méretezésében).",
            "Lefoglal egy processzort.",
            "Megadja a processzor típusát."
        ],
        correct: [1]
    },
    {
        category: "Exception",
        type: "single",
        question: "Melyik kivétel ellenőrzött (checked) a thread metódusoknál?",
        options: [
            "NullPointerException",
            "IllegalArgumentException",
            "InterruptedException",
            "RuntimeException"
        ],
        correct: [2]
    },
    {
        category: "Thread",
        type: "single",
        question: "Mi a `Thread.currentThread()`?",
        options: [
            "Egy konstruktor.",
            "Egy statikus metódus, ami visszaadja a referenciát arra a szálra, amelyik éppen végrehajtja a kódot.",
            "Egy változó.",
            "A main szál."
        ],
        correct: [1]
    },
    {
        category: "Sync",
        type: "single",
        question: "Lehet-e szinkronizálni primitív típusra (pl. `int`)?",
        options: [
            "Igen.",
            "Nem, csak objektumokra lehet (ezért kell az Integer wrapper, ha nagyon muszáj).",
            "Csak 64 bites rendszeren.",
            "Csak volatile int-re."
        ],
        correct: [1]
    },
    {
        category: "Deadlock",
        type: "single",
        question: "Mi a 'lock ordering' (zárrendezés) lényege?",
        options: [
            "Hogy minden zárat ABC sorrendben nevezzünk el.",
            "Hogy minden szál ugyanabban a globális sorrendben szerezze meg a több zárat, így elkerülhető a körkörös várakozás (deadlock).",
            "Hogy a zárakat listában tároljuk.",
            "Hogy a zárakat időzítővel lássuk el."
        ],
        correct: [1]
    },
    {
        category: "Executors",
        type: "single",
        question: "Mi a `ThreadFactory` feladata?",
        options: [
            "Szálak gyártása (létrehozása) az Executorok számára (itt lehet pl. nevet adni a szálaknak, daemonná tenni őket).",
            "Szálak törlése.",
            "Szálak szinkronizálása.",
            "A thread pool felügyelete."
        ],
        correct: [0]
    },
    {
        category: "State",
        type: "single",
        question: "Melyik állapotból NEM jöhet vissza a szál?",
        options: [
            "BLOCKED",
            "WAITING",
            "TERMINATED",
            "TIMED_WAITING"
        ],
        correct: [2]
    },
    {
        category: "Queue",
        type: "single",
        question: "Mit jelent, ha egy BlockingQueue kapacitása korlátos (bounded)?",
        options: [
            "Hogy csak Stringeket fogad el.",
            "Hogy van egy maximális elemszám, amin felül a `put` blokkol.",
            "Hogy sosem telik meg.",
            "Hogy lassú."
        ],
        correct: [1]
    },
    {
        category: "Liveness",
        type: "single",
        question: "Mi a különbség a deadlock és a starvation között?",
        options: [
            "Deadlocknál senki nem halad, starvationnál egyesek haladnak, de valaki(k) soha nem jutnak sorra.",
            "Nincs különbség.",
            "A starvation csak adatbázisban fordul elő.",
            "A deadlock csak linuxon van."
        ],
        correct: [0]
    },
    {
        category: "Sync",
        type: "single",
        question: "Szükséges-e szinkronizáció immutable objektumok olvasásához?",
        options: [
            "Igen, mindig.",
            "Nem, mivel állapotuk nem változik.",
            "Csak ha sok szál olvassa.",
            "Csak ha szerializáljuk."
        ],
        correct: [1]
    },
    {
        category: "Jegyzet",
        type: "single",
        question: "Mit javasol a jegyzet: `ArrayList` helyett mit használjunk többszálú környezetben?",
        options: [
            "Sima tömböt.",
            "Collections.synchronizedList vagy CopyOnWriteArrayList (szituációtól függően).",
            "LinkedList.",
            "HashMap."
        ],
        correct: [1]
    },
    {
        category: "Volatile",
        type: "single",
        question: "Használható-e a `volatile` tömbökre?",
        options: [
            "Igen, de csak a tömb referenciája lesz volatile, az elemei NEM.",
            "Igen, és minden eleme volatile lesz.",
            "Nem, fordítási hiba.",
            "Csak byte tömbre."
        ],
        correct: [0]
    },
    {
        category: "Atomic",
        type: "single",
        question: "Mi az `AtomicReference`?",
        options: [
            "Egy referencia, ami atomi módon frissíthető (pl. pointer cseréje).",
            "Egy atomreaktor szimuláció.",
            "Egy String referencia.",
            "Egy final változó."
        ],
        correct: [0]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Hogyan lehet nevet adni egy szálnak?",
        options: [
            "Nem lehet.",
            "A konstruktorban vagy a `setName()` metódussal.",
            "Automatikusan kapja az OS-től.",
            "Annotation-nel."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mi a `ThreadGroup`?",
        options: [
            "Szálak csoportosítására szolgáló (mára kissé elavult) mechanizmus.",
            "A thread pool új neve.",
            "A processzor magok csoportja.",
            "Egy kollekció típus."
        ],
        correct: [0]
    },
    {
        category: "Sync",
        type: "single",
        question: "Mi a 'lock striping' (sávos zárolás) példája?",
        options: [
            "ConcurrentHashMap (ahol a map szegmensekre van osztva, és külön lock védi őket).",
            "Hashtable (ahol egy lock véd mindent).",
            "Vector.",
            "SynchronizedMap."
        ],
        correct: [0]
    },
    {
        category: "Future",
        type: "single",
        question: "Mit jelent az aszinkron végrehajtás?",
        options: [
            "A hívó nem várja meg a hívott fél befejezését, hanem tovább halad, és az eredményt (ha van) később kezeli.",
            "A hívó blokkol.",
            "A hívó leáll.",
            "A kód hibás."
        ],
        correct: [0]
    },
    {
        category: "Jegyzet",
        type: "single",
        question: "A jegyzet szerint miért 'drága' a szál létrehozása?",
        options: [
            "Mert memóriát kell foglalni a stack-nek és regisztrálni kell az OS-nél.",
            "Mert fizetni kell érte.",
            "Mert a Java licensz tiltja.",
            "Mert csak egy lehet belőle."
        ],
        correct: [0]
    },
    {
        category: "Pool",
        type: "single",
        question: "Mi a baj a `newCachedThreadPool`-lal, ha extrém sok feladat jön be?",
        options: [
            "Semmi.",
            "Túl sok szálat hozhat létre, ami elfogyasztja a memóriát (OOM) és a CPU-t (context switch).",
            "Túl lassú.",
            "Nem fogadja el a feladatokat."
        ],
        correct: [1]
    },
    {
        category: "Pool",
        type: "single",
        question: "Mi a baj a `newFixedThreadPool`-lal, ha a feladatok lassan futnak és újak jönnek?",
        options: [
            "A várakozási sor (queue) végtelenre nőhet, ami OOM-et okozhat.",
            "Leáll a pool.",
            "Törli a régi feladatokat.",
            "Kivételt dob."
        ],
        correct: [0]
    },
    {
        category: "Sync",
        type: "single",
        question: "Mi a 'monitor exit' feltétele?",
        options: [
            "A szinkronizált blokk elhagyása (akár normálisan, akár kivétellel).",
            "A gép kikapcsolása.",
            "A wait hívása.",
            "A notify hívása."
        ],
        correct: [0]
    },
    {
        category: "Jegyzet",
        type: "single",
        question: "Mit javasol a jegyzet a `System.out.println` használatáról konkurens környezetben?",
        options: [
            "Nincs vele gond.",
            "Mivel szinkronizált és lassú IO művelet, torzíthatja az időzítést és elfedheti a race condition-öket (Heisenbug).",
            "Gyorsítja a programot.",
            "Deadlockot okoz."
        ],
        correct: [1]
    },
    {
        category: "Debug",
        type: "single",
        question: "Mi a Heisenbug?",
        options: [
            "Egy kémiai elem.",
            "Olyan hiba, ami eltűnik vagy megváltozik, ha megpróbáljuk megfigyelni (pl. debuggerrel vagy printeléssel megváltoztatjuk az időzítést).",
            "Fordítási hiba.",
            "Vírus."
        ],
        correct: [1]
    },
    {
        category: "Jegyzet",
        type: "single",
        question: "Melyik állítás igaz a 'pre-emptive' ütemezésre?",
        options: [
            "A rendszer kényszerítheti a szálváltást.",
            "A szálnak önként kell átadnia a vezérlést.",
            "Soha nem szakítja meg a szálat.",
            "Csak DOS alatt működik."
        ],
        correct: [0]
    },
    {
        category: "Jegyzet",
        type: "single",
        question: "Melyik nem javasolt szinkronizációs megoldás a jegyzet szerint?",
        options: [
            "Lock",
            "Synchronized",
            "Atomic változók",
            "Busy waiting (pörgetés) yield nélkül hosszú ideig."
        ],
        correct: [3]
    },
    {
        category: "Interface",
        type: "single",
        question: "Melyik metódus van a `Runnable` interfészben?",
        options: [
            "void run()",
            "int run()",
            "void start()",
            "void execute()"
        ],
        correct: [0]
    },
    {
        category: "Interface",
        type: "single",
        question: "Melyik metódus van a `Callable` interfészben?",
        options: [
            "V call() throws Exception",
            "void run()",
            "V execute()",
            "void call()"
        ],
        correct: [0]
    },
    {
        category: "Kivétel",
        type: "single",
        question: "Dobhat-e ellenőrzött kivételt a `Runnable.run()`?",
        options: [
            "Igen.",
            "Nem, a szignatúrája nem engedi (csak unchecked exception jöhet ki).",
            "Csak IOException-t.",
            "Csak InterruptedException-t."
        ],
        correct: [1]
    },
    {
        category: "Executor",
        type: "single",
        question: "Hogyan lehet leállítani egy `ExecutorService`-t úgy, hogy megvárjuk a futó feladatokat?",
        options: [
            "shutdown() majd awaitTermination().",
            "stop().",
            "cancel().",
            "kill()."
        ],
        correct: [0]
    },
    {
        category: "Jegyzet",
        type: "single",
        question: "Milyen memóriaterület közös a szálak között?",
        options: [
            "Heap",
            "Stack",
            "Regiszterek",
            "PC (Program Counter)"
        ],
        correct: [0]
    },
    {
        category: "Jegyzet",
        type: "single",
        question: "Milyen memóriaterület privát a szálak számára?",
        options: [
            "Stack",
            "Heap",
            "Method Area",
            "Constant Pool"
        ],
        correct: [0]
    },
    {
        category: "Szinkronizáció",
        type: "single",
        question: "Mi a 'mutual exclusion' rövidítése?",
        options: [
            "Mutex",
            "Mux",
            "Mex",
            "Multi"
        ],
        correct: [0]
    },
    {
        category: "Jegyzet",
        type: "single",
        question: "A 'producer-consumer' problémánál mit csinál a consumer, ha üres a buffer?",
        options: [
            "Várakozik (wait/block).",
            "Kivételt dob.",
            "Leáll.",
            "Új buffert gyárt."
        ],
        correct: [0]
    }
];
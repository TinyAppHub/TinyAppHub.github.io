const questions = [
    {
        category: "C# Alapok",
        type: "single",
        question: "Melyik láthatóság szint nem létezik C#-ban?",
        options: ["internal", "package", "public", "private"],
        correct: [1]
    },
    {
        category: "Kivételkezelés",
        type: "single",
        question: "Mely esetben hajtódik végre a kivételkezelő finally ága?",
        options: [
            "A finally ág minden esetben lefut.",
            "Csak abban az esetben, ha a try ágban kivétel váltódik ki.",
            "Csak abban az esetben, ha a try ágban nem váltódik ki kivétel.",
            "Csak abban az esetben, ha a catch végrehajtása során újabb kivétel váltódik ki."
        ],
        correct: [0]
    },
    {
        category: "Interfészek",
        type: "single",
        question: "Melyik állítás igaz az alábbiak közül az interfészekre?",
        options: [
            "Egy osztály legfeljebb egy másik osztályból és egy interfészből származhat le.",
            "Az interfészek minden tartalmazott eleme publikus vagy internal láthatóságú.",
            "Az interfészek nem tartalmazhatnak adattagokat.",
            "Az interfészek neve kötelezően I (nagy i) prefixszel kezdődik"
        ],
        correct: [2]
    },
    {
        category: "Típusok",
        type: "single",
        question: "Melyik típusnak felel meg C#-ban az int kulcsszóval rövidített típus?",
        options: ["Implementáció (fordító) függő.", "System.Int64", "System.UInt32", "System.Int32"],
        correct: [3]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Az alábbiak közül melyik állítás helyes a C# nyelvre?",
        options: [
            "A C# nyelvben egy osztály implementálhat több interfészt.",
            "Az osztály alapértelmezett láthatósága public.",
            "A C# nyelv támogatja a többszörös öröklődést.",
            "A struktúra referencia szerint kezelt."
        ],
        correct: [0]
    },
    {
        category: "Lambda",
        type: "single",
        question: "Melyik típus lehet helyes a lambda változóra? var lambda = x => {x=x*x; return x % 2==0; };",
        options: ["Func<double, bool>", "Func<bool, double>", "Func<double>", "Func<bool>"],
        correct: [0]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik állítás igaz a C# nyelvre az alábbiak közül?",
        options: [
            "AC# nyelv és a .NET keretrendszer kezdetben elsődlegesen a C/C++ nyelvekből nyert inspirációt.",
            "A C# megvalósítja a többszörös öröklődést.",
            "A C# nyelv gyengén típusos.",
            "A C# szemétgyűjtéssel (garbage collection) valósítja meg a biztonságos memóriakezelést."
        ],
        correct: [3]
    },
    {
        category: "Tulajdonságok",
        type: "single",
        question: "Mit nevezünk tulajdonságoknak (property) C#-ban?",
        options: [
            "Az objektumok osztály szintű adattagjait.",
            "Olyan objektumokat, amelyekkel entitásokat jelölhetünk meg.",
            "Az osztályok statikus adattagjait.",
            "A lekérdező és beállító műveletek (getter / setter) speciális nyelvi absztrakcióját."
        ],
        correct: [3]
    },
    {
        category: "Típusok",
        type: "single",
        question: "Melyik nem beépített (bulit-in) típus C#-ban?",
        options: ["System.Single", "string", "short", "System.Numerics.BigInteger"],
        correct: [3]
    },
    // --- 2. OLDAL ---
    {
        category: "Algoritmusok",
        type: "single",
        question: "Az alábbi kódrészletek közül melyik alkalmas 2 egész szám felcserélésére?",
        options: [
            "void swap(ref int a, ref int b) { int tmp = a; a = b; b = tmp; }",
            "void swap(in int a, in int b) { int tmp = a; a = b; b = tmp; }",
            "void swap(int a, int b) { int tmp = a; a = b; b = tmp; }",
            "void swap(out int a, out int b) { int tmp = a; a = b; b = tmp; }"
        ],
        correct: [0]
    },
    {
        category: "Események",
        type: "single",
        question: "Melyik állítás hamis az alábbiak közül az eseményekre C#-ban?",
        options: [
            "Egy eseménykezelő több eseményre is feliratkoztatható.",
            "Egy eseményre több eseménykezelő is feliratkozhat",
            "Az eseményeket nyelvi szinten valósítja meg a C# nyelv.",
            "Az eseményekre különböző szignatúrájú eseménykezelők is feliratkoztathatóak."
        ],
        correct: [3]
    },
    {
        category: "Delegáltak",
        type: "single",
        question: "Mi az a delegált (delegate)?",
        options: [
            "Metódus szignatúra definíció, amellyel az esményekre feliratkoztatható eljárások is definiálhatóak.",
            "Az eseménykezelők.",
            "Egy primitív típus."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mi az a modális dialógusablak Windows Formsban?",
        options: [
            "Olyan alkalmazás ablak, amely leválasztott modell réteggel rendelkezik.",
            "Az alkalmazás összeomlása esetén megjelenő hibaüzenet ablak.",
            "A MessageBox osztállyal létrehozott felugró ablak",
            "Olyan alkalmazás ablak, amelynek bezárásig az őt megnyitó eljárás nem folytatódhat."
        ],
        correct: [3]
    },
    // --- 3. OLDAL ---
    {
        category: "WinForms",
        type: "single",
        question: "Mi a feladata a Windows Forms Designer használatával létrejövő InitializeComponent() metódusnak?",
        options: [
            "Inicializálja az ablakot, a meghívása nélkül mindenképpen fordítási hibát kapunk.",
            "Inicializálja az alkalmazást, a meghívása nélkül nem indítható el az alkalmazás",
            "Inicializálja a tervezőfelületen hozzáadott vezérlőket és tulajdonságaikat.",
            "Inicializálja az ablakot, a meghívása nélkül mindenképpen futási idejű hibát kapunk."
        ],
        correct: [2]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mit nevezünk parciális osztályoknak C#-ban?",
        options: [
            "Az interfészeket",
            "Az absztrakt osztályokat",
            "A Visual Studio felülettervezője által generált osztályokat.",
            "Azon osztályokat, amelyek definícióját több forrásfájlban adjuk meg."
        ],
        correct: [3]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik nem építőeleme a Windows Forms alkalmazásonak?",
        options: [
            "vezérlők (controls)",
            "alkalmazás (application)",
            "ablakok (forms)",
            "oldalak (pages)"
        ],
        correct: [3]
    },
    {
        category: "LINQ",
        type: "single",
        question: "Mi lesz a következő LINQ lekérdezés eredménye? people.Where(p => p.Age >= 18).Select(p => p.Name).OrderBy(p => p);",
        options: [
            "A tartalmazott nagykorú személyek nevei, név szerint rendezve.",
            "A tartalmazott nagykorú személyek nevei, életkor szerint rendezve.",
            "Fordítási hiba.",
            "A tartalmazott nagykorú személyek objektumai."
        ],
        correct: [0]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Melyik nem a modell réteg feladata modell-nézet (MV) architektúrában?",
        options: [
            "állapotkezelés",
            "üzleti logika",
            "megjelenítési logika",
            "adatkezelés"
        ],
        correct: [2]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik nem billentyűzetkezelési esemény Windows Forms keretrendszerben?",
        options: [
            "KeyPush",
            "KeyPress",
            "KeyDown",
            "KeyUp"
        ],
        correct: [0]
    },
    {
        category: "Események",
        type: "single",
        question: "Mikor példányosul egy esemény?",
        options: [
            "nem példányosul, mert az event primitív típus",
            "deklarációkor",
            "eseménykezelő hozzárendelésekor",
            "a konstruktor explicit meghívásakor"
        ],
        correct: [2]
    },
    // --- 4. OLDAL ---
    {
        category: "Architektúra",
        type: "single",
        question: "Melyik állítás igaz a szoftver architektúrára?",
        options: [
            "A szoftver architektúra a rendszer magas szintű komponenseinek és kapcsolataiknak meghatározása.",
            "A szoftver architektúrát a program osztálydiagramja alapján határozzuk meg.",
            "A szoftver architektúra jellemzően folyamatosan változik, fejlődik a projekt fejlesztése folyamán.",
            "A szoftver architektúra célja a feladat megoldásához leginkább alkalmas programozási nyelv meghatározása."
        ],
        correct: [0]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Melyik állítás igaz a modell-nézet (MV) architektúra helyes felépítésére?",
        options: [
            "A modell ismeri a nézetet, de nézet nem ismeri a modellt.",
            "A nézet ismeri a modellt, de a modell nem ismeri a nézetet.",
            "A nézet és a modell nem ismerheti egymást.",
            "A nézet és a modell kölcsönösen ismeri egymást."
        ],
        correct: [1]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mikor kerül megjelenítésre egy vezérlő Windows Formsban?",
        options: [
            "Amikor hozzáadásra kerül a tartalmazó ablak vagy elrendező vezérlő Controls gyűjteményéhez.",
            "A vezérlő Dispose() metódusának meghívásakor.",
            "Amikor a vezérlő példányosításra kerül.",
            "A tartalmazó ablak Load eseményének kiváltásakor."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik állítás igaz a vezérlőkre Windows Formsban?",
        options: [
            "Az ablakok (formok) nem a Control osztály leszármazottai.",
            "Saját vezérlőt csak a UserControl osztályból származtathatunk.",
            "A vezérlők teljes leszármazási hierarchiába szerveződnek, amelynek ösosztálya a Control.",
            "Az elrendező vezérlők nem ágyazhatóak egymásba."
        ],
        correct: [2]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik nem egérkezelési esemény Windows Forms keretrendszerben?",
        options: [
            "MouseDown",
            "MouseExit",
            "MouseEnter",
            "MouseLeave"
        ],
        correct: [1]
    },
    {
        category: "Grafika",
        type: "single",
        question: "Melyik állítás hamis az elemi grafikai műveletekre Windows Formsban?",
        options: [
            "Bármely vezérlőre rajzolhatunk.",
            "Az ecsetek (Brush) területek kitöltésére használható.",
            "A grafikai műveletek végrehajtásának sebessége függ a grafikus kártyától.",
            "A tollak (Pen) vonalak rajzolására használható."
        ],
        correct: [2]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik állítás igaz a Windows Forms használatára?",
        options: [
            "A Windows Forms Designerben tervezésekor hozzáadott vezérlők az ablakhoz tartozó resx állományban kerülnek definiálásra.",
            "A Designerben hozzáadott vezérlők állapotát futásidőben már nem módosíthatjuk.",
            "A Windows Forms Designerrel elkészített ablakokhoz is adhatunk dinamikusan hozzá vezérlőket futási időben."
        ],
        correct: [2]
    },
    // --- 5. OLDAL ---
    {
        category: "Tesztelés",
        type: "single",
        question: "Az alábbi állítások közül melyik hamis a mockolás vonatkozásában?",
        options: [
            "A Moq lehetőséget nyújt a hívások nyomkövetésére.",
            "A Moq esetén a mock objektumok előállításához nincs szükség a függőséggel rendelkező programegység osztályára vagy interfészére.",
            "A függőséget helyettesítjük annak szimulációjával (mock objektum).",
            "A mock objektum megvalósítja a függőség interfészét."
        ],
        correct: [1]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Az alábbí, alkalmazások architektúrájára vonatkozó állítások közül melyik hamis?",
        options: [
            "A függőségeket úgy kell megvalósítani, hogy a konkrét megvalósítástól függjenek.",
            "A befecskendezésnek különböző módjai lehetnek (például: konstruktor, metódus).",
            "A dependency injection jelentése, hogy a rétegek a függőségeknek csak az absztrakcióját látják.",
            "Az egyes rétegek között függőségek alakulnak ki."
        ],
        correct: [0]
    },
    {
        category: "Tesztelés",
        type: "single",
        question: "Milyen tesztelés nem létezik?",
        options: [
            "Egységteszt",
            "Integrációs teszt",
            "Rendszerteszt",
            "Dekompozíciós teszt"
        ],
        correct: [3]
    },
    {
        category: "Tesztelés",
        type: "single",
        question: "Melyik párosítás nem helyes a teszt attribútumoknál (MSTest - xUnit)?",
        options: [
            "[TestMethod] - [Fact]",
            "[TestCleanup] - Dispose",
            "[TestInitialize] - Konstruktor",
            "[TestClass] - [Theory]"
        ],
        correct: [3]
    },
    {
        category: ".NET",
        type: "single",
        question: "Az alábbi, C# nyelvre és .NET keretrendszerre vonatkozó állítások közül melyik hamis?",
        options: [
            "A szerelvényekre történő felbontást célszerű a rétegek és függőségek mentén elvégezni.",
            "A StreamReader nem implementálja az IDisposable interfészt.",
            "Az egységteszt lehetőséget nyújt osztályok viselkedésének ellenőrzésére.",
            "A C# tartalmaz using blokkot a Dispose automatikus lefutására."
        ],
        correct: [1]
    },
    {
        category: "Tesztelés",
        type: "single",
        question: "Mi az egységteszt?",
        options: [
            "Az alkalmazás komponensei (egységei) közötti integráció tesztelése.",
            "Egyes osztályok és objektumok önálló viselkedésének tesztelése.",
            "A teljes alkalmazás egy egységben történő tesztelése.",
            "A forráskód egységes kódolási stílusának ellenőrzése."
        ],
        correct: [1]
    },
    {
        category: "Tesztelés",
        type: "single",
        question: "Mely keretrendszer nem használható egységtesztek írásához?",
        options: [
            "NUnit",
            "xUnit",
            "MSTest",
            "MSUnit"
        ],
        correct: [3]
    },
    {
        category: "Tesztelés",
        type: "single",
        question: "Milyen attribútummal jelöljük a unit tesztesetek eljárásait MSTest keretrendszer alatt?",
        options: [
            "IsTrue",
            "TestClass",
            "TestMethod",
            "Test"
        ],
        correct: [2]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mi a különbség a folyamat (process) és a szál (thread) között?",
        options: [
            "Egy szál több folyamatot is tartalmazhat.",
            "A folyamatokat Linux operációs rendszeren szálaknak hívjuk",
            "A folyamatoknak saját végrehajtási kömyezetük (pl. memória) van, a szálak osztozkodnak ezen.",
            "Nincs különbség, a kettő egymás szinonimája."
        ],
        correct: [2]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mely állítás hamis az aszinkron tevékenységekkel kapcsolatban?",
        options: [
            "A tevékenység külön szálon fut.",
            "Az eredményt később kapjuk meg.",
            "A hívő szál blokkolódik, amíg a tevékenység fut.",
            "A tevékenység kezdeményezője nem várja meg a lefutást."
        ],
        correct: [2]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Melyik állítás igaz a kölcsönös kizárásra (mutual exclusion)?",
        options: [
            "A kölcsönös kizárás célja, hogy a többszálú program egyszerre mindig csak egy szál futhasson.",
            "A kölcsönös kizárás garantálja, hogy a közös erőforráshoz egyszerre csak egy szál férhessen hozzá.",
            "Célja a szálak szinkronizációja: a kritikus szakasz mindig ugyanazon a szálon fusson le.",
            "Nincsen olyan többszálú program, amely kölcsönös kizárás nélkül helyesen tud működni."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Melyik probléma nem igaz az alacsony absztrakciós szintű szálkezelésre .NET-ben (Thread)?",
        options: [
            "Nincs lehetőség erősen típusos paraméterátadásra.",
            "Nincs lehetőség a kivételek továbbítására.",
            "Nincs lehetőség az eredmény visszaadására.",
            "Nincs lehetőség a gyerek szál megszakítására."
        ],
        correct: [3]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mely állítás hamis a szinkron tevékenységekkel kapcsolatban?",
        options: [
            "A tevékenység külön szálon fut.",
            "A tevékenység kezdeményezője megvárja annak lefutását.",
            "A hívó szál blokkolódik, amíg a tevékenység fut.",
            "Ha sokáig tart a tevékenység, akkor az a program felületén is észrevehető."
        ],
        correct: [0]
    },
    // --- 7. OLDAL ---
    {
        category: "Időzítők",
        type: "single",
        question: "Az alábbiak közül melyik állítás igaz a System.Timers.Timer időzítővel kapcsolatban?",
        options: [
            "Amennyiben grafikus felületű alkalmazással használjuk, szinkronizálást kell végeznünk a felülettel.",
            "Egy osztályon belül csak egy időzítő használható.",
            "Az intervallum a Tick property segítségével adható meg.",
            "Az időzítő által kiváltott Elapsed eseményhez kötelező eseménykezelőt hozzárendelni."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mikor szükséges az Invoke / BeginInvoke eljárást meghívni egy WinForms felületi vezérlőn?",
        options: [
            "Ha nem ugyanarról a szálról próbáljuk a vezérlőt elérni, amelyiken kiváltásra került az esemény.",
            "Ha nem ugyanarról a szálról próbáljuk a vezérlőt elérni, amelyik létrehozta azt.",
            "Ha ugyanarról a szálról próbáljuk a vezérlőt elérni, amelyik létrehozta azt.",
            "Ha eseménykezelő eljárásból próbáljuk a vezérlőt elérni, akkor mindig."
        ],
        correct: [1]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik C# attribútum segítségével tudjuk automatikusan behelyettesíteni a hívó metódus vagy tulajdonság nevét?",
        options: [
            "CallerMemberName",
            "Property",
            "OnPropertyChanged",
            "Name"
        ],
        correct: [0]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Melyik állítás igaz az ObservableCollection kollekcióra?",
        options: [
            "Olyan objektumok gyűjteménye, amelyek megvalósítják az INotifyPropertyChanged interfészt.",
            "Az ICollection Observable> generikus típus egyszerűbb álneve.",
            "A figyelő (observer) tervezési mintát megvalósító objektum, ami eseményvezérelt módon jelzi a változásokat.",
            "Olyan ősosztály, amelynek tetszőleges eleme konstans műveletigénnyel lekérdezhető."
        ],
        correct: [2]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Mi az adatkötés (data binding)?",
        options: [
            "Amikor az alkalmazásban található adattagok kezdeti értéket kapnak a modelltől.",
            "Adatbányászat, az alkalmazásban a nézet és a modell között történik.",
            "A megjelenített és az üzleti logikában tárolt adat értesítés alapú összekötése.",
            "Az adattagok automatikus validációja a nézeten."
        ],
        correct: [2]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Az alábbi osztályok közül melyik .NET osztály implementálja az INotifyCollectionChanged interfészt?",
        options: [
            "Vector",
            "ObservableCollection",
            "Label",
            "List"
        ],
        correct: [1]
    },
    {
        category: "WPF",
        type: "single",
        question: "Hogyan történik az adatkötés (data binding) a WPF alkalmazásban?",
        options: [
            "Implementációfüggő.",
            "Ezt a nézetmodell (viewmodel) feladata meghatározni.",
            "A tulajdonság (property) nevének egyezésével.",
            "A modellben megadott logika segítségével."
        ],
        correct: [2]
    },
    // --- PART 1 VÉGE, FOLYTATÁS A KÖVETKEZŐ ÜZENETBEN ---
    // --- 8. OLDAL ---
    {
        category: "Architektúra",
        type: "single",
        question: "A modell-nézet-nézetmodell-perzisztencia architektúrában melyik NEM a modell felelőssége?",
        options: [
            "Az adatok tartós tárolása az alkalmazás leállítása esetére.",
            "Jelzés küldése egy adattag értékének változásáról.",
            "Az üzleti logika megvalósítása.",
            "A kapott adatok validációja."
        ],
        correct: [0]
    },
    {
        category: "MVVM",
        type: "single",
        question: "Az MVVM architektúrában melyik biztosan NEM a nézetmodell felelőssége?",
        options: [
            "Adatok szolgáltatása a nézet számára.",
            "A kapott adatok 'elő-validációja', úgy mint a bemenet hossza, típusa.",
            "Az üzleti logika megvalósítása.",
            "Navigációs logika megvalósítása nézetek között."
        ],
        correct: [2]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik állítás igaz a stílusokra WPF-ben?",
        options: [
            "Az explicit stílusok az összes megadott típusú elemre érvényesek.",
            "A stílusokat Setter és Getter elemek segítségével függőségi tulajdonságokra definiáljuk.",
            "A stílusok megadhatóak elemenként (vezérlőnként) vagy erőforrásként is.",
            "A stílusokat CSS szintaxissal definiáljuk."
        ],
        correct: [2]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik állítás igaz az animációkra WPF-ben?",
        options: [
            "Jellemzően a nézetmodell rétegben definiáljuk.",
            "Megjelenítésükért a CPU felel.",
            "Bármely függőségi tulajdonság animálható.",
            "Kizárólag az időben lineáris animációs mód támogatott."
        ],
        correct: [2]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik nem a Windows Presentation Foundation (WPF) erőforrás?",
        options: [
            "Manifest",
            "Template",
            "Style",
            "Storyboard"
        ],
        correct: [0]
    },
    {
        category: "WPF",
        type: "single",
        question: "Mely kulcsszó teszi lehetővé WPF alkalmazások esetén az adatkötést?",
        options: [
            "Source",
            "Binding",
            "Target",
            "Path"
        ],
        correct: [1]
    },
    {
        category: "LINQ",
        type: "single",
        question: "Melyik nyelvbe ágyazott lekérdezés (LINQ) adja meg a pozitív számok átlagát a list változóban tárolt listára (List<double>)?",
        options: [
            "list.Sum(x => x > 0)",
            "list.Average(x => x).Where(x => x > 0)",
            "list.Where(x => x > 0).Sum(y => y / x.Count())",
            "list.Where(x => x > 0).Average(x => x)"
        ],
        correct: [3]
    },
    {
        category: "Adatbázis",
        type: "single",
        question: "Milyen adatbáziskezelési mód nincsen .NET Core keretrendszerben?",
        options: [
            "logikai relációs modell",
            "objektumrelációs modell",
            "aggregációs modell",
            "natív kapcsolat"
        ],
        correct: [2]
    },
    // --- 9. OLDAL ---
    {
        category: "Entity Framework",
        type: "single",
        question: "Az alábbi utasítások közül melyik szolgál a csatolt adatok betöltésére Entity Frameworkben?",
        options: [
            "Add",
            "Include",
            "Load",
            "Attach"
        ],
        correct: [1]
    },
    {
        category: "Entity Framework",
        type: "single",
        question: "A modell-nézet-nézetmodell-perzisztencia architektúrában melyik nem a modell felelőssége?",
        options: [
            "Az adatbázis sémájának leírása.",
            "Jelzés küldése egy adattag értékének változásáról.",
            "A kapott adatok validációja.",
            "Az üzleti logika megvalósítása."
        ],
        correct: [0]
    },
    {
        category: "Entity Framework",
        type: "single",
        question: "Az alábbiak közül melyik megközelítési mód nem létezik entitás adatmodellek létrehozására?",
        options: [
            "object first",
            "code first",
            "database first",
            "modell first"
        ],
        correct: [0]
    },
    {
        category: "Xamarin",
        type: "single",
        question: "Mi a DependencyService osztály feladata Xamarinban?",
        options: [
            "Betölti a platform specifikus (pl. Android) függőségeket Xamarinba.",
            "Letölti a szükséges NuGet függőségeket futási időben.",
            "Regisztrálja az interfészek és implementációik függőségét, azokat kérésre példányosítja és kiszolgálja.",
            "Betölti a platform specifikus alkalmazás platform-független függőségeit."
        ],
        correct: [2]
    },
    {
        category: "UWP",
        type: "single",
        question: "Windows operációs rendszeren milyen adatokat érdemes a ApplicationData.Current.RoamingFolder könyvtárban tárolni?",
        options: [
            "Amelyeket csak ideiglenesen hoztunk létre.",
            "Amelyeket mobil adatkapcsolaton, roamingolva nem szabad elküldeni.",
            "Amelyeket szeretnénk a felhasználó eszközei között szinkronizálni.",
            "Amelyeket szeretnénk titkosítani."
        ],
        correct: [2]
    },
    {
        category: "Mobil",
        type: "single",
        question: "Melyik állítás igaz az alábbiak közül mobil alkalmazások életciklusára?",
        options: [
            "A felfüggesztett alkalmazások memóriafoglalása felszabadításra kerül.",
            "A felhasználó nem állíthat le alkalmazásokat.",
            "Az operációs rendszer leállíthat egy felfüggesztett alkalmazást annak értesítése nélkül.",
            "Az alkalmazás nem tudja megkülönböztetni, hogy felfüggesztett vagy terminált állapotból lett elindítva."
        ],
        correct: [2]
    },
    {
        category: "Xamarin",
        type: "single",
        question: "Melyik állítás igaz az Application.Properties kulcs-érték tárolóra Xamarin Forms alkalmazásokban?",
        options: [
            "A tárolt adatok perzisztens tárolásra kerülnek.",
            "A tárolt adatok csak az alkalmazás felfüggesztéséig maradnak meg.",
            "Az Application Properties csak Windows Forms alkalmazásokban használható.",
            "A tárolt adatok csak az alkalmazás terminálásáig maradnak meg."
        ],
        correct: [0]
    },
    // --- 10. OLDAL ---
    {
        category: "Architektúra",
        type: "single",
        question: "Minek a rövidítése az IoC az IoC konténerben?",
        options: [
            "Initial Operational Capability",
            "Index of Components",
            "Implementation of Classes",
            "Inversion Of Control"
        ],
        correct: [3]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Windows Forms alkalmazásokban hogyan akadályozható meg egy Form ablak bezárása az X gombra kattintáskor?",
        options: [
            "A FormClosing esemény kezelőjében a Cancel tulajdonságot igazra állítjuk.",
            "A Form.Close() metódust kell felüldefiniálni.",
            "A Closing eseményt kell letiltani.",
            "Az Enabled tulajdonságot false értékre állítjuk"
        ],
        correct: [0]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik fájlformátumot használják leggyakrabban a fordítások tárolására WPF alkalmazásokban?",
        options: [
            "RESX",
            "TXT",
            "XML",
            "JSON"
        ],
        correct: [0]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik Binding tulajdonságot kell megadni ahhoz, hogy a változások propagálódjanak a nézetmodellbe (azonnal)?",
        options: [
            "Mode",
            "Path",
            "UpdateSourceTrigger",
            "ElementName"
        ],
        correct: [2]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi lesz a x változó típusa az alábbi példában? int a=42; double b=12.3; string c='alma'; var x = a > b ? a : c;",
        options: [
            "Fordítási hiba",
            "string",
            "int",
            "object"
        ],
        correct: [0]
    },
    {
        category: "Típusok",
        type: "single",
        question: "Melyik nem beépített (bulit-in) tipus C#-ban?",
        options: [
            "System.Numerics.BigInteger",
            "string",
            "System.Single",
            "short"
        ],
        correct: [0]
    },
    // --- 11. OLDAL ---
    {
        category: ".NET",
        type: "single",
        question: "Az alábbi, C# nyelvre és .NET keretrendszerre vonatkozó állítások közül melyik hamis? (Ismétlés)",
        options: [
            "A szerelvényekre történő felbontást célszerű a rétegek és függőségek befecskendezés mentén elvégezni.",
            "A C# nyelv nem tartalmaz olyan blokk-kezelési technikát, amely garantálja a Dispose() automatikus lefutását.",
            "A StreamReader implementálja az IDisposable interfészt.",
            "Az egységteszt lehetőséget nyújt osztályok viselkedésének ellenőrzésére."
        ],
        correct: [1]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mikor válik felszabadítható a szemétgyűjtő (garbage collector) számára egy felületi vezérlő?",
        options: [
            "Ha töröltük a delete operátorral.",
            "Ha eltávolítottuk a tartalmazó ablak vagy panel Controls gyűjteményéből.",
            "Ha törölhetőnek jelöltük a Dispose() eljárás meghívásával.",
            "Ha már nincsen rá elérhető hivatkozás."
        ],
        correct: [3]
    },
    {
        category: "Reaktív Prog",
        type: "single",
        question: "Mi a Publish() operátor szerepe a reaktív programozásban Rx.NET használatakor?",
        options: [
            "Aszinkron adatfolyam több megfigyelő számára történő elérhetővé tétele (multicast).",
            "Szinkronizálja több aszinkron adatfolyam eseményeit a megfigyelők felé.",
            "Aszinkron adatfolyamok megfigyelhetőségének elindítása.",
            "Több aszinkron adatfolyam eseményeinek egyesítése a megfigyelő felé."
        ],
        correct: [0]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Melyik állítás igaz az Observable Collection kollekcióra?",
        options: [
            "Olyan kollekció, amely automatikusan értesíti a nézetet, amikor hozzáadunk, eltávolítunk vagy módosítunk elemeket.",
            "Olyan objektumok gyűjteménye, amelyek megvalósítják az INotifyPropertyChanged interfészt.",
            "Megfigyelhető elemek kollekciója, kizárólag egyirányú adatkötés támogatásával.",
            "Olyan kollekció, amelyben az elemek tulajdonság (property) változásai megfigyelhetővé válnak, azokról a nézetet értesíti."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik attribútumot használhatjuk WinForms vezérlők lokalizációjának engedélyezésére a tervezőben?",
        options: [
            "[Serializable(true)]",
            "[LocalizedControl]",
            "[Localizable(true)]",
            "[Bindable(true)]"
        ],
        correct: [2]
    },
    // --- 12. OLDAL ---
    {
        category: ".NET",
        type: "single",
        question: "Az alábbiak közül melyik a .NET Framework hátránya a .NET Core keretrendszerrel szemben?",
        options: [
            "A monolitikus felépítés megnehezíti a beágyazott rendszerekben történő alkalmazást.",
            "A nyílt forráskód miatt a keretrendszerrel fejlesztett programok kereskedelmi licencelése nehézkes.",
            "Nem elérhetőek Linux alapú implementációi.",
            "A zárt forráskód miatt a az alkalmazásaink forráskódja sem tehető nyílt forráskódú licenc alatt."
        ],
        correct: [2]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik állítás igaz egy metódus felüldefiniálására öröklődésnél?",
        options: [
            "Felüldefiniálni a virtual kulcsszóval lehet egy metódust.",
            "Lezárt metódus (sealed) nem definiálható felül.",
            "A felüldefiniált metódus a statikus típuson kerül kiértékelésre.",
            "Felüldefiniálni csak statikus metódust lehet."
        ],
        correct: [1]
    },
    {
        category: "Avalonia",
        type: "single",
        question: "Hogyan lehet egy Button vezérlő kattintáseseményéhez eseménykezelőt hozzárendelni MVVM mintában Avalonia UI-ban?",
        options: [
            "A Command nevű tulajdonságot kell megkötni a ViewModel-ben lévő parancsra.",
            "Egy globális eseménykezelőt kell definiálni a MainWindow osztályban.",
            "A DataContext-et kell egy eseménykezelő objektumra állítani.",
            "Az eseménykezelőt közvetlenül a Click eseményhez rendeljük hozzá az XAML-ben."
        ],
        correct: [0]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi lesz az alábbi kódrészlet kimenete? struct Person { public int Age { get; init; } } ... p.Age = 42;",
        options: [
            "Fordítási hiba",
            "42",
            "20",
            "Futtatási hiba"
        ],
        correct: [0]
    },
    {
        category: "Események",
        type: "single",
        question: "Melyik állítás hamis az alábbiak közül az eseményekre C#-ban?",
        options: [
            "Az eseményekről az eseménykezelő le is iratkozhat.",
            "Az eseményeket nem nyelvi szinten valósítja meg a C# nyelv.",
            "Egy eseménykezelő több eseményre is feliratkoztatható.",
            "Egy eseményre több eseménykezelő is feliratkozhat."
        ],
        correct: [1]
    },
    {
        category: "MVVM",
        type: "single",
        question: "Melyik állítás igaz az MVVM (Model-View-ViewModel) architektúrára?",
        options: [
            "A ViewModel közvetlenül hivatkozhat a Model komponensre.",
            "A ViewModel mindig örökli a View-t.",
            "A Model közvetlenül hivatkozhat a ViewModel komponensre.",
            "A ViewModel közvetlenül hivatkozhat a View komponensre."
        ],
        correct: [0]
    },
    // --- 13. OLDAL ---
    {
        category: "WPF",
        type: "single",
        question: "Mi a felület deklaratív leírásának előnye WPF keretrendszerben?",
        options: [
            "Különválasztja a megjelenést annak vezérlésétől.",
            "A felületi vezérlők imperatív, C# kóddal történő leírására nincsen lehetőség.",
            "Lehetővé teszi a 3D grafikus kártyák kihasználását.",
            "A deklaratív megközelítés az alkalmazott funkcionális paradigma révén kevesebb hibalehetőséget rejt."
        ],
        correct: [0]
    },
    {
        category: "Lokalizáció",
        type: "single",
        question: "Mi a különbség a CultureInfo.CurrentCulture és a CultureInfo.CurrentUICulture között?",
        options: [
            "A CultureInfo.CurrentCulture az operációs rendszer nyelvi beállítását adja meg, a CurrentUICulture pedig az alkalmazásét.",
            "A CultureInfo.CurrentCulture a felületi nyelvi beállítást adja meg, a CurrentUICulture pedig a területi beállításokat.",
            "A CultureInfo.CurrentCulture a területi beállításokat adja meg, a CultureInfo.CurrentUICulture pedig a felületi nyelvi beállítást.",
            "A CultureInfo.CurrentUICulture csak Avalonia alatt érhető el."
        ],
        correct: [2]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik állítás nem igaz struktúrákra (struct) C#-ban?",
        options: [
            "Csak elemi típusokat tartalmazhat az adattagjaiban.",
            "Mindig létezik alapértelmezett konstruktora.",
            "Nem származhat le belőle másik struktúra típus.",
            "Paraméterátadáskor érték szerint van kezelve."
        ],
        correct: [0]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Mi lehet az oka egy ObservableCollection-t használatkor, ha a nézet nem frissül a tartalmazott elemek módosításakor?",
        options: [
            "Az ObservableCollection-t tartalmazó nézetmodell nem valósítja meg az INotifyPropertyChanged interfészt.",
            "A tartalmazott elemtípus nem valósítja meg az INotifyPropertyChanged interfészt.",
            "Ez az ObservableCollection normális viselkedése, nem lehet megoldani.",
            "Az ObservableCollection-t tartalmazó nézetmodell nem valósítja meg az INotifyCollectionChanged interfészt."
        ],
        correct: [1]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi a ?. operátor célja a C# nyelvben?",
        options: [
            "Amennyiben az operátor bal operandusaként szereplő objektum null, nem értékeli ki a jobb operandusként megadott tagot (nullt ad vissza).",
            "Amennyiben az operátor bal operandusaként szereplő, dinamikus típusozású objektum nem tartalmazza a jobb tagot, nem értékeli.",
            "Amennyiben az operátor bal operandusaként szereplő objektum referencia szerint kezelt, azt érték típusúként dereferálja.",
            "Amennyiben az operátor bal operandusaként szereplő objektum null, a jobb operandusként megadott értéket adja vissza."
        ],
        correct: [0]
    },
    {
        category: "Parancsok",
        type: "single",
        question: "Mikor kell kiváltani az ICommand interfészt megvalósító osztályok CanExecuteChanged eseményét?",
        options: [
            "Amikor a parancs végrehajthatósága bizonyosan megváltozott.",
            "A parancsban foglalt tulajdonságok (property) bármelyikének érték változásakor.",
            "Nem a programnak kell kiváltania, a .NET keretrendszer hívja meg.",
            "Amikor a parancs végrehajthatósága lehetséges, hogy megváltozott."
        ],
        correct: [3]
    },
    // --- 14. OLDAL ---
    {
        category: "WinForms",
        type: "single",
        question: "Windows Forms alkalmazásokban melyik esemény használható egy Form inicializálásához, de még a felhasználó által láthatóvá válás előtt?",
        options: [
            "VisibleChanged",
            "Load",
            "Shown",
            "Activated"
        ],
        correct: [1]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi a különbség a string és a string? típusok között?",
        options: [
            "A string? típusra végez null-state analízist a fordító, a string típusra nem (vagyis jelzi a null veszélyt).",
            "A string? típus tartalmazhat null értéket, a string típus nem.",
            "A string típus tartalmazhat null értéket, a string? típus nem.",
            "A string? típus tartalmazhat üres karakterláncot, a string típus nem."
        ],
        correct: [0]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Az alábbi, kölcsönös kizárást biztosító C#/.NET elemek közül melyik használható folyamatok (processek) közötti kölcsönös kizárásra is?",
        options: [
            "Mutex",
            "lock",
            "Semaphore",
            "Monitor"
        ],
        correct: [0]
    },
    {
        category: "Események",
        type: "single",
        question: "Hogyan lehet programozottan megszüntetni egy vezérlőhöz kötött eseménykezelőt?",
        options: [
            "this.MyButton.Click = new EventHandler(MyHandler);",
            "this.MyButton.Click = null;",
            "this.MyButton.Click.Remove(MyHandler);",
            "this.MyButton.Click -= new EventHandler(MyHandler);"
        ],
        correct: [3]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mely állítás hamis az aszinkron tevékenységekkel kapcsolatban? (Task/Async)",
        options: [
            "Amennyiben meg szeretnénk várni a művelet eredményét, Task-ot kell megadni visszatérési típusként.",
            "Szinkron művelet is futtatható aszinkron módon a Task.Run(...) művelet segítségével.",
            "A művelet Task-kal tér vissza, amely tartalmazhat eredményt is.",
            "Az aszinkronitást az interfészben is kell jelölni az async kulcsszóval, nem csak a megvalósításban."
        ],
        correct: [3]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik állítás NEM igaz struktúrákra (struct) C#-ban?",
        options: [
            "Érték típusúként viselkednek (value type).",
            "Nem rendelkezhetnek paraméter nélküli konstruktorral (C# 10 előtt).",
            "Csak elemi típusokat tartalmazhat az adattagjaiban.",
            "A stack-en allokálódnak (kivéve, ha osztály adattagjai)."
        ],
        correct: [2]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi lesz a x változó típusa az alábbi példában? int a = 42; double b = 12.3; float c = 100; var x = a > b ? a : c;",
        options: [
            "System.Int32",
            "System.Double",
            "Fordítási hiba.",
            "System.Single (float)"
        ],
        correct: [3]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi a ?. operátor célja a C# nyelvben?",
        options: [
            "Amennyiben az operátor bal operandusaként szereplő objektum null, nem értékeli ki a jobb operandusként megadott tagot.",
            "Ez a ternary operátor rövidítése.",
            "Null érték esetén kivételt dob (NullReferenceException).",
            "A jobb oldali operandus értékét állítja be, ha a bal oldali null."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mi az a modális dialógusablak Windows Formsban?",
        options: [
            "Olyan ablak, amely a háttérben fut.",
            "Olyan alkalmazás ablak, amelynek bezárásig az őt megnyitó eljárás nem folytatódhat.",
            "Egy lebegő eszköztár (floating toolbar).",
            "Olyan ablak, amely nem rendelkezik kerettel."
        ],
        correct: [1]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Melyik állítás igaz a szoftver architektúrára?",
        options: [
            "A szoftver architektúra a rendszer magas szintű komponenseinek és kapcsolataiknak meghatározása.",
            "Kizárólag az adatbázis szerkezetét írja le.",
            "A felhasználói felület designját (UI/UX) jelenti.",
            "Azt határozza meg, hogy milyen változóneveket használjunk."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik állítás igaz a vezérlőkre Windows Formsban?",
        options: [
            "A vezérlők nem öröklődhetnek egymásból.",
            "Minden vezérlő közvetlenül az Object osztályból származik.",
            "A vezérlők teljes leszármazási hierarchiába szerveződnek, amelynek ősosztálya a Control.",
            "A vezérlők csak XML-ben definiálhatóak."
        ],
        correct: [2]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Az alábbi, alkalmazások architektúrájára vonatkozó állítások közül melyik HAMIS?",
        options: [
            "A rétegeknek lazán kell kapcsolódniuk (loose coupling).",
            "A függőségeket úgy kell megvalósítani, hogy a konkrét megvalósítástól függjenek.", // Ez a hamis (az absztrakciótól kell függeni)
            "A Dependency Injection segít a tesztelhetőségben.",
            "A körkörös függőségeket kerülni kell."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mikor nevezünk egy adatstruktúrát szálbiztosnak?",
        options: [
            "Ha eljárásai több szálról párhuzamos is meghívhatóak olyan módon, hogy a struktúra konzisztens állapotban marad és helyesen működik.",
            "Ha csak egy szál férhet hozzá (Single Threaded).",
            "Ha nem használ memóriát.",
            "Ha minden metódusa async/await kulcsszóval van ellátva."
        ],
        correct: [0]
    },
    {
        category: "WPF",
        type: "single",
        question: "Mi a függőségi tulajdonság (dependency property)?",
        options: [
            "Egy statikus globális változó.",
            "Olyan tulajdonság, amelynek értéke az adatbázisból jön.",
            "Olyan objektum tulajdonság, amelyet más objektumon keresztül (Property System) definiálhatunk.",
            "A konstruktorban átadott paraméter."
        ],
        correct: [2]
    },
    {
        category: "Parancsok",
        type: "single",
        question: "Mikor kell kiváltani az ICommand interfészt megvalósító osztályok CanExecuteChanged eseményét?",
        options: [
            "Amikor a parancs lefutott.",
            "Minden másodpercben egyszer.",
            "Amikor a parancs végrehajthatósága lehetséges, hogy megváltozott.",
            "Soha, ezt a keretrendszer automatikusan intézi minden esetben."
        ],
        correct: [2]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Mi az adatkötés (data binding)?",
        options: [
            "Két adatbázis tábla összekapcsolása.",
            "A megjelenített és az üzleti logikában tárolt adat értesítés alapú összekötése.",
            "Stringek összefűzése (concatenation).",
            "A JSON fájlok deszerializálása."
        ],
        correct: [1]
    },
    {
        category: "WPF",
        type: "single",
        question: "Hogyan történik az adatkötés (data binding) egy WPF alkalmazásban a nézet és a nézetmodell között?",
        options: [
            "A parancskötések (command binding) paraméterein keresztül.",
            "A Binding markup kiterjesztéssel a XAML-ben, a DataContext beállításával.",
            "Kizárólag C# kódban írt eseménykezelőkkel.",
            "A vezérlők Name tulajdonságának egyezésével."
        ],
        correct: [1]
    },
    {
        category: "Lokalizáció",
        type: "single",
        question: "Hogyan lehet futási időben egy alkalmazás felületi nyelvét (erőforrásait) megváltoztatni?",
        options: [
            "A CultureInfo.CurrentCulture módosításával.",
            "Az operációs rendszer újraindításával.",
            "A CultureInfo.CurrentUICulture módosításával.",
            "A DateTime.Now formátumának átállításával."
        ],
        correct: [2]
    },
    {
        category: "Reaktív Prog",
        type: "single",
        question: "Melyik két tervezési mintát kombinálja a reaktív programozás?",
        options: [
            "Singleton és Factory",
            "Iterator és Observer",
            "MVC és MVVM",
            "Strategy és Template"
        ],
        correct: [1]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi a C#-ban az iterator tervezési minta standard könyvtári megvalósítása?",
        options: [
            "Az ICollection és IList interfészek.",
            "Az IEnumerable és IEnumerator interfészek.",
            "A List<T> osztály.",
            "A while ciklus."
        ],
        correct: [1]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi valósítja meg a C#-ban az observer tervezési mintát nyelvi vagy standard könyvtári szinten?",
        options: [
            "Az IDisposable interfész.",
            "Az IObservable<T> és IObserver<T> interfészek (illetve az események).",
            "A Task osztály.",
            "A System.Monitor osztály."
        ],
        correct: [1]
    },
    {
        category: "Reaktív Prog",
        type: "single",
        question: "Melyik operátor felel meg a szűrésnek Rx.NET-ben?",
        options: [
            "Select()",
            "Merge()",
            "Where()",
            "Take()"
        ],
        correct: [2]
    },
    {
        category: "Reaktív Prog",
        type: "single",
        question: "Mi az ún. cold megfigyelhető felsoroló (observable)?",
        options: [
            "Olyan observable, amelyre minden feliratkozás egy már létező adatfolyamot figyel (megosztott).",
            "Olyan observable, amely nem hoz létre új gyártót, csak a feliratkozás pillanatában indítja el az adatfolyamot, minden feliratkozónak külön.",
            "Egy lefagyott adatfolyam.",
            "Olyan stream, ami már befejeződött."
        ],
        correct: [1]
    },
    {
        category: "MVVM",
        type: "single",
        question: "Miért tekinthető a ReactiveUI hasznosnak MVVM architektúrában?",
        options: [
            "Mert önállóan biztosítja az alkalmazás életciklus kezelését.",
            "Mert deklaratív módon kezeli a függőségeket és a változás-értesítéseket (Functional Reactive Programming).",
            "Mert helyettesíti a XAML-t HTML-lel.",
            "Mert automatikusan generálja a View-t a Model alapján."
        ],
        correct: [1]
    },
    {
        category: "Avalonia",
        type: "single",
        question: "Mi a TopLevel szerepe Avalonia UI-ban?",
        options: [
            "Az alkalmazás életciklusának központi vezérlője.",
            "A vizuális fa gyökere (pl. Window vagy UserControl a böngészőben), a renderelési réteg belépési pontja.",
            "A legmagasabb prioritású szál.",
            "Egy speciális menüszalag vezérlő."
        ],
        correct: [1]
    },
    {
        category: "Avalonia",
        type: "single",
        question: "Mi a különbség az animációk és az átmenetek (Transitions) között Avalonia UI-ban?",
        options: [
            "Az animációk egyszerre csak egy tulajdonságot kezelhetnek, az átmenetek többet.",
            "Az átmenetek automatikusan lefutnak egy tulajdonság megváltozásakor, az animációk kulcskocka alapúak (timeline).",
            "Az animációk csak GPU-n futnak, az átmenetek CPU-n.",
            "Nincs különbség, szinonimák."
        ],
        correct: [1]
    },
    {
        category: "MVVM",
        type: "single",
        question: "Miért szükséges a nézetmodell osztályt parciálisnak (partial) jelölni az MVVM Toolkit ObservableProperty attribútumának használatakor?",
        options: [
            "Mert az ObservableProperty parciális osztály.",
            "Hogy a fordító (Source Generator) legenerálhassa a háttérben a boilerplate kódot (pl. property change értesítés).",
            "Mert a C# nem támogatja az attribútumokat teljes osztályokon.",
            "Hogy több fájlba írhassuk a metódusokat."
        ],
        correct: [1]
    },
    {
        category: "Avalonia",
        type: "single",
        question: "Mire szolgál az ISingleViewApplicationLifetime interfész Avalonia UI-ban?",
        options: [
            "A nézetmodell életciklusának automatikus kezelésére szolgál.",
            "Olyan platformok támogatására (pl. mobil, web), ahol nincs többablakos ablakkezelő, csak egy fő nézet.",
            "Az adatbázis kapcsolat élettartamát kezeli.",
            "A memóriaszivárgások elkerülésére szolgál."
        ],
        correct: [1]
    },
    {
        category: "Avalonia",
        type: "single",
        question: "Az alábbiak közül milyen időzítő típus használata javasolt egy Avalonia UI alkalmazás üzleti logikájában (UI-függetlenül)?",
        options: [
            "DispatcherTimer",
            "Thread.Sleep()",
            "System.Timers.Timer",
            "Empty while loop"
        ],
        correct: [2]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Minek a rövidítése az 'IoC' betűszó az IoC konténerben?",
        options: [
            "Index of Components",
            "Interface of Classes",
            "Inversion of Control",
            "Instance of Container"
        ],
        correct: [2]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Miért nem szabad közvetlenül módosítani UI-elemeket háttérszálról?",
        options: [
            "Mert a háttérszálak nem férnek hozzá a heap memóriához.",
            "Mert a UI vezérlők nem szálbiztosak (thread affinity), inkonzisztens állapotot vagy kivételt okozhat.",
            "Mert túl lassú lenne a frissítés.",
            "Mert a .NET tiltja a párhuzamosítást."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mi történik alapértelmezés szerint egy async void szignatúrájú metódusban keletkező kezeletlen kivétellel?",
        options: [
            "A fordító nem engedi, fordítási hibát eredményez.",
            "A Task elnyeli a hibát, semmi nem történik.",
            "Az alkalmazás összeomlik, mivel a kivételt nem lehet elkapni a hívó oldalon (kivéve speciális SynchronizationContext esetén).",
            "Automatikusan újraindul a metódus."
        ],
        correct: [2]
    },
    {
        category: "WPF",
        type: "single",
        question: "Mi történik, ha egy adatkötés forrása null-ra értékelődik ki egy WPF alkalmazás nézet rétegében?",
        options: [
            "A kötés sikertelen, de nem dob kivételt, a célérték változatlan maradhat (vagy FallbackValue lép érvénybe).",
            "NullReferenceException kivételt dob és leáll a program.",
            "A felületen piros X jelenik meg.",
            "A fordító hibát jelez fordítási időben."
        ],
        correct: [0]
    },
    {
        category: "Típusok",
        type: "single",
        question: "Melyik típusnak felel meg C#-ban a long kulcsszóval rövidített típus?",
        options: [
            "System.Numerics.BigInteger",
            "System.Int32",
            "System.Int64",
            "System.Double"
        ],
        correct: [2]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik állítás igaz a C# nyelvre az alábbiak közül?",
        options: [
            "A C# nem támogatja a pointereket még unsafe módban sem.",
            "A C# manuális memóriakezelést igényel (malloc/free).",
            "A C# tisztán interpretált nyelv.",
            "A C# szemétgyűjtéssel (garbage collection) valósítja meg a biztonságos memóriakezelést."
        ],
        correct: [3]
    },
    // --- ÚJ IMPORTÁLT KÉRDÉSEK (JSON FÁJLBÓL) ---
    {
        category: "Kivételkezelés",
        type: "single",
        question: "Mely esetben hajtódik végre a kivételkezelő finally ága?",
        options: [
            "Csak abban az esetben, ha a try ágban nem változik ki kivétel.",
            "Csak abban az esetben, ha a catch végrehajtása során újabb kivétel változik ki.",
            "Csak abban az esetben, ha a try ágban kivétel változik ki.",
            "A finally ág minden esetben lefut."
        ],
        correct: [3]
    },
    {
        category: "Interfészek",
        type: "single",
        question: "Melyik állítás igaz az alábbiak közül az interfészekre?",
        options: [
            "Az interfészek neve kötelezően I (nagy i) prefixszel kezdődik.",
            "Az interfészek minden tartalmazott eleme publikus vagy internal láthatóságú.",
            "Egy osztály legfeljebb egy másik osztályból és egy interfészből származhat le.",
            "Az interfészek nem tartalmazhatnak adattagokat."
        ],
        correct: [3]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik állítás igaz a C# nyelvre az alábbiak közül?",
        options: [
            "A C# nyelv gyengén típusos, mert a változók dinamikus típusa futási időben változhat.",
            "A C# szemétgyűjtéssel (garbage collection) valósítja meg a biztonságos memóriakezelést.",
            "A C# megvalósítja a többszörös öröklődést, egy osztálynak több ősosztálya is lehet.",
            "A C# nyelv és a .NET keretrendszer kezdetben elsődlegesen a C/C++ nyelvekből nyert tervezési, architekturális inspirációt."
        ],
        correct: [1]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Az alábbiak közül melyik állítás helyes a C# nyelvre?",
        options: [
            "A C# nyelv támogatja a többszörös öröklődést.",
            "A C# nyelvben egy osztály implementálhat több interfészt.",
            "A struktúra referencia szerint kezelt.",
            "Az osztály alapértelmezett láthatósága public."
        ],
        correct: [1]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mit nevezünk tulajdonságoknak (property) C#-ban?",
        options: [
            "Az objektumok osztály szintű adattagjait.",
            "Az osztályok statikus adattagjait.",
            "A lekérdező és beállító műveletek (getter / setter) speciális nyelvi absztrakcióját.",
            "Olyan objektumokat, amelyekkel entitásokat jelölhetünk meg, így deklaratív információkat is hozzákapcsolhatunk a programhoz."
        ],
        correct: [2]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi az a delegált (delegate)?",
        options: [
            "Metódus szignatúra definíció, amellyel az eseményekre feliratkoztatható eljárások is definiálhatóak.",
            "A referencia szerinti paraméterátadáskor létrejövő álnév.",
            "Az osztályok példányait hívjuk így.",
            "Az eseménykezelők."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mi a feladata a Windows Forms Designer használatával létrejövő InitializeComponent() metódusnak?",
        options: [
            "Inicializálja az alkalmazást, a meghívása nélkül nem indítható el az alkalmazás.",
            "Inicializálja az ablakot, a meghívása nélkül mindenképpen futási idejű hibát kapunk.",
            "Inicializálja az ablakot, a meghívása nélkül mindenképpen fordítási hibát kapunk.",
            "Inicializálja a tervezőfelületen hozzáadott vezérlőket és tulajdonságaikat."
        ],
        correct: [3]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mit nevezünk parciális osztályoknak C#-ban?",
        options: [
            "A Visual Studio felülettervezője által generált osztályokat.",
            "Azon osztályokat, amelyek definícióját több forrásfájlban adjuk meg.",
            "Az interfészeket.",
            "Az absztrakt osztályokat."
        ],
        correct: [1]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mi az a modális dialógusablak Windows Formsban?",
        options: [
            "Olyan alkalmazás ablak, amely leválasztott modell réteggel rendelkezik.",
            "Az alkalmazás összeomlása esetén az operációs rendszer által megjelenített, hibaüzenetet tartalmazó ablak.",
            "Olyan alkalmazás ablak, amelynek bezárásig az őt megnyitó eljárás nem folytatódhat.",
            "Olyan alkalmazás ablak, amely csak egy adott feladatot szolgál ki."
        ],
        correct: [2]
    },
    {
        category: "Események",
        type: "single",
        question: "Melyik állítás hamis az alábbiak közül az eseményekre C#-ban?",
        options: [
            "Az eseményekre különböző szignatúrájú eseménykezelők is feliratkoztathatóak.",
            "Az eseményeket nyelvi szinten valósítja meg a C# nyelv.",
            "Egy eseménykezelő több eseményre is feliratkoztatható.",
            "Egy eseményre több eseménykezelő is feliratkozhat."
        ],
        correct: [0]
    },
    {
        category: "LINQ",
        type: "single",
        question: "Mi az eredménye? var result = people.Where(p => p.Age >= 18).Select(p => p.Name).OrderBy(p => p);",
        options: [
            "A tartalmazott nagykorú személyek nevei életkor szerint rendezve.",
            "A tartalmazott nagykorú személyek objektumai, elődlegesen életkor, majd név szerint rendezve.",
            "A tartalmazott nagykorú személyek nevei, név szerint rendezve.",
            "A tartalmazott nagykorú személyek nevei, életkor szerint csökkenő sorrendben."
        ],
        correct: [2]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Melyik állítás igaz a szoftver architektúrára?",
        options: [
            "A szoftver architektúra a rendszer magas szintű komponenseinek és kapcsolataiknak meghatározása.",
            "A szoftver architektúra jellemzően folyamatosan változik, fejlődik a projekt fejlesztése folyamán.",
            "A szoftver architektúra célja a feladat megoldásához leginkább alkalmas programozási nyelv meghatározása.",
            "A szoftver architektúrát a program osztálydiagramja alapján határozzuk meg."
        ],
        correct: [0]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Melyik állítás igaz a modell-nézet (MV) architektúra helyes felépítésére?",
        options: [
            "A nézet és a modell kölcsönösen ismeri egymást.",
            "A nézet ismeri a modellt, de a modell nem ismeri a nézetet.",
            "A modell ismeri a nézetet, de nézet nem ismeri a modellt.",
            "A nézet és a modell nem ismerheti egymást."
        ],
        correct: [1]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mikor kerül megjelenítésre egy vezérlő Windows Formsban?",
        options: [
            "Amikor a vezérlő példányosításra kerül.",
            "A tartalmazó ablak [Load] eseményének kiváltásakor.",
            "A vezérlő [Dispose()] metódusának meghívásakor.",
            "Amikor hozzáadásra kerül a tartalmazó ablak vagy elrendező vezérlő [Controls] gyűjteményéhez."
        ],
        correct: [3]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik állítás igaz a Windows Forms használatára?",
        options: [
            "A Windows Forms Designerrel elkészített ablakokhoz is adhatunk dinamikusan hozzá vezérlőket futási időben.",
            "A Windows Forms Designerben tervezéskor hozzáadott vezérlők a C# forráskódban nem elérhetőek.",
            "A Windows Forms Designerben tervezésekor hozzáadott vezérlők az ablakhoz tartozó (.resx) kiterjesztésű erőforrás állományban kerülnek definiálásra.",
            "A Windows Forms Designerben tervezésekor hozzáadott vezérlők állapotát futásidőben már nem módosíthatjuk."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Melyik állítás igaz a vezérlőkre Windows Formsban?",
        options: [
            "Saját vezérlőt csak a (UserControl) osztályból származtathatunk, a létező vezérlők zárt (sealed) osztályok.",
            "Az ablakok (formok) nem a (Control) osztály leszármazottai.",
            "Az elrendező vezérlők nem ágyazhatóak egymásba.",
            "A vezérlők teljes leszármazási hierarchiába szerveződnek, amelynek ősosztálya a (Control)."
        ],
        correct: [3]
    },
    {
        category: "Grafika",
        type: "single",
        question: "Melyik állítás hamis az elemi grafikai műveletekre Windows Formsban?",
        options: [
            "A grafikai műveletek végrehajtásának sebessége függ a grafikus kártyától.",
            "Bármely vezérlőre rajzolhatunk.",
            "A tollak (Pen) vonalak rajzolására használható.",
            "Az ecsetek (Brush) területek kitöltésére használható."
        ],
        correct: [1]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Az alábbi, alkalmazások architektúrájára vonatkozó állítások közül melyik hamis?",
        options: [
            "Az egyes rétegek között függőségek alakulnak ki, mivel felhasználják egymás funkcionalitását.",
            "A befecskendezésnek különböző módjai lehetnek (például: konstruktor, metódus).",
            "A függőség befecskendezés (dependency injection) jelentése, hogy a rétegek a függőségeknek csak az absztrakcióját látják, a konkrét megvalósítását külön adjuk át nekik.",
            "A függőségeket úgy kell megvalósítani, hogy a konkrét megvalósítástól függjenek."
        ],
        correct: [3]
    },
    {
        category: "Tesztelés",
        type: "single",
        question: "Mi az egységteszt?",
        options: [
            "A teljes alkalmazás egy egységben történő tesztelése.",
            "Egyes osztályok és objektumok önálló viselkedésének tesztelése.",
            "Az alkalmazás komponensei (egységei) közötti integráció tesztelése.",
            "A forráskód egységes kódolási stílusának ellenőrzése."
        ],
        correct: [1]
    },
    {
        category: "Tesztelés",
        type: "single",
        question: "Az alábbi állítások közül melyik hamis a mockolás vonatkozásában?",
        options: [
            "Amennyiben függőséggel rendelkező programegységet tesztelünk, a függőséget helyettesítjük annak szimulációjával, amit mock objektumnak nevezünk.",
            "A mock objektum megvalósítja a függőség interfészét, egyszerű és hibamentes funkcionalitással.",
            "A Moq lehetőséget nyújt a hívások nyomkövetésére.",
            "A Moq esetén a mock objektumok előállításához nincs szükség a függőséggel rendelkező programegység osztályára vagy interfészére."
        ],
        correct: [3]
    },
    {
        category: ".NET",
        type: "single",
        question: "Az alábbi, C# nyelvre és .NET keretrendszerre vonatkozó állítások közül melyik hamis?",
        options: [
            "A szerelvényekre történő felbontást célszerű a rétegek és függőségek befecskendezés mentén elvégezni.",
            "A C# nyelv tartalmaz egy olyan blokk-kezelési technikát (using), amely garantálja a [Dispose()] automatikus lefutását.",
            "A StreamReader nem implementálja az [Disposable] interfészt.",
            "Az egységteszt egy olyan automatikusan futtatható ellenőrzés, amely lehetőséget nyújt osztályok és objektumok viselkedésének ellenőrzésére."
        ],
        correct: [2]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mely állítás hamis a szinkron tevékenységekkel kapcsolatban?",
        options: [
            "Ha sokáig tart a tevékenység, akkor az a program felületén is észrevehető.",
            "A tevékenység külön szálon fut.",
            "A tevékenység kezdeményezője megvárja annak lefutását.",
            "A hívó szál blokkolódik, amíg a tevékenység fut."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mely állítás hamis az aszinkron tevékenységekkel kapcsolatban?",
        options: [
            "A tevékenység külön szálon fut.",
            "A hívó szál blokkolódik, amíg a tevékenység fut.",
            "A tevékenység kezdeményezője nem várja meg a lefutást.",
            "Az eredményt később kapjuk meg."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Melyik állítás igaz a kölcsönös kizárásra (mutual exclusion)?",
        options: [
            "A kölcsönös kizárás célja a szálak szinkronizációja: a kritikus szakasz mindig ugyanazon a szálon fusson le.",
            "Nincsen olyan többszálú program, amely kölcsönös kizárás nélkül helyesen tud működni.",
            "A kölcsönös kizárás célja, hogy a többszálú program egyszerre mindig csak egy szál fusson.",
            "A kölcsönös kizárás garantálja, hogy a közös erőforráshoz egyszerre csak egy szál férhessen hozzá, kizárva ezzel a versenyhelyzetet (race condition)."
        ],
        correct: [3]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Melyik probléma nem igaz az alacsony absztrakciós szintű szálkezelésre .NET-ben (Thread)?",
        options: [
            "Nincs lehetőség erősen típusos paraméterátadásra.",
            "Nincs lehetőség a gyerek szál megszakítására.",
            "Nincs lehetőség az eredmény visszaadására.",
            "Nincs lehetőség a kivételek továbbítására."
        ],
        correct: [1]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mikor szükséges az [Invoke] / [BeginInvoke] eljárást meghívni egy WinForms felületi vezérlőn?",
        options: [
            "Ha nem ugyanarról a szálról próbáljuk a vezérlőt elérni, amelyiken kiváltásra került az esemény.",
            "Ha nem ugyanarról a szálról próbáljuk a vezérlőt elérni, amelyik létrehozta azt.",
            "Ha eseménykezelő eljárásból próbáljuk a vezérlőt elérni, akkor mindig.",
            "Ha ugyanarról a szálról próbáljuk a vezérlőt elérni, amelyik létrehozta azt."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mi a különbség a folyamat (process) és a szál (thread) között?",
        options: [
            "Nincs különbség, a kettő egymás szinonimája.",
            "A folyamatoknak saját végrehajtási környezetük (pl. memóriaterület) van, a szálak osztozkodnak ezen.",
            "Egy szál több folyamatot is tartalmazhat.",
            "A folyamatokat Linux operációs rendszeren szálaknak hívjuk."
        ],
        correct: [1]
    },
    {
        category: "Időzítők",
        type: "single",
        question: "Az alábbiak közül melyik állítás igaz a System.Timers.Timer időzítővel kapcsolatban?",
        options: [
            "Egy osztályon belül csak egy időzítő használható.",
            "Az időzítő által kiváltott Elapsed eseményhez kötelező eseménykezelőt hozzárendelni.",
            "Az intervallum a (Tick) property segítségével adható meg.",
            "Amennyiben grafikus felületű alkalmazással használjuk, szinkronizálást kell végeznünk a felülettel."
        ],
        correct: [3]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Mely állítás hamis az aszinkron tevékenységekkel kapcsolatban (Task)?",
        options: [
            "Amennyiben meg szeretnénk várni a művelet eredményét, (Task)-ot kell megadni visszatérési típusként.",
            "Szinkron művelet is futtatható aszinkron módon a (Task.Run(…)) művelet segítségével.",
            "Az aszinkronitást az interfészben is kell jelölni az async kulcsszóval, nem csak a megvalósításban.",
            "A művelet (Task)-kal tér vissza, amely tartalmazhat eredményt is."
        ],
        correct: [2]
    },
    {
        category: "WPF",
        type: "single",
        question: "Mi a függőségi tulajdonság (dependency property)?",
        options: [
            "Olyan objektum tulajdonság, amelyet más objektumon keresztül definiálhatunk.",
            "A függőségi befecskendezéshez használt objektum tulajdonság.",
            "Az MV (model-view) architektúrában a modellt aggregáló, nézet-beli tulajdonság.",
            "A XAML kódból is beállítható objektum tulajdonságok WPF alkalmazásokban."
        ],
        correct: [0]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik nem a Windows Presentation Foundation (WPF) előnye?",
        options: [
            "A 3D grafikus kártyák kihasználásának lehetősége.",
            "Széleskörű, cross-platform felhasználhatóság.",
            "Háromrétegű (MVVM) architektúra támogatása.",
            "A felület (nézet) deklaratív leírásának lehetősége."
        ],
        correct: [1]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Mi az ObservableCollection osztály?",
        options: [
            "Olyan ősosztály, amelynek tetszőleges eleme konstans műveletigénnyel lekérdezhető.",
            "A figyelő (observer) tervezési mintát megvalósító objektum, ami eseményvezérelt módon jelzi a kollekcióban bekövetkező változásokat a feliratkozóknak.",
            "Az [Collection<Observable>] generikus típus egyszerűbb álneve.",
            "Olyan objektumok gyűjteménye, amelyek megvalósítják az [NotifyPropertyChanged] interfészt."
        ],
        correct: [1]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "A modell-nézet-nézetmodell-perzisztencia architektúrában melyik nem a modell felelőssége?",
        options: [
            "Az üzleti logika megvalósítása.",
            "A kapott adatok validációja.",
            "Az adatok tartós tárolása az alkalmazás leállítása esetére.",
            "Jelzés küldése egy adattag értékének változásáról."
        ],
        correct: [2]
    },
    {
        category: "WPF",
        type: "single",
        question: "Hogyan történik az adatkötés (data binding) a WPF alkalmazásban?",
        options: [
            "Implementációfüggő.",
            "A tulajdonság (property) nevének egyezésével.",
            "Ezt a nézetmodell (viewmodel) feladata meghatározni.",
            "A nézet és a modell közötti közvetlen kapcsolat alapján."
        ],
        correct: [1]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Mi az adatkötés (data binding)?",
        options: [
            "Adatbányászat, az alkalmazásban a nézet és a modell között történik.",
            "A megjelenített és az üzleti logikában tárolt adat értesítés alapú összekötése.",
            "Az adattagok automatikus validációja a nézeten.",
            "Amikor az alkalmazásban található adattagok kezdeti értéket kapnak a modelltől."
        ],
        correct: [1]
    },
    {
        category: "MVVM",
        type: "single",
        question: "Az MVVM architektúrában melyik biztosan nem a nézetmodell felelőssége?",
        options: [
            "Adatok szolgáltatása a nézet számára.",
            "A kapott adatok \"elő-validációja\", úgy mint a bemenet hossza, típusa.",
            "Az üzleti logika megvalósítása.",
            "Navigációs logika megvalósítása nézetek között."
        ],
        correct: [2]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik állítás igaz az animációkra WPF-ben?",
        options: [
            "Megjelenítésükért a CPU felel.",
            "Jellemzően a nézetmodell rétegben definiáljuk.",
            "Kizárólag az időben lineáris animációs mód támogatott.",
            "Az animációk a GPU segítségével futnak."
        ],
        correct: [3]
    },
    {
        category: "WPF",
        type: "single",
        question: "Melyik állítás igaz a stílusokra WPF-ben?",
        options: [
            "A stílusok megadhatóak elemenként (vezérlőnként) vagy erőforrásként is.",
            "A stílusokat (Setter) és (Getter) elemek segítségével függőségi tulajdonságokra definiáljuk.",
            "Az explicit stílusok az összes megadott típusú elemre érvényesek.",
            "A stílusokat CSS szintaxissal definiáljuk."
        ],
        correct: [0]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Melyik állítás igaz a modell-nézet-nézetmodell-perzisztencia architektúrában?",
        options: [
            "A nézet és a modell kölcsönösen ismeri egymást.",
            "A nézet ismeri a modellt, de a modell nem ismeri a nézetet.",
            "A modell ismeri a nézetet, de nézet nem ismeri a modellt.",
            "A nézet és a modell nem ismerheti egymást."
        ],
        correct: [1]
    },
    {
        category: "Mobil",
        type: "single",
        question: "Milyen információt nem tartalmaz az alkalmazás leíró (application manifest) állomány?",
        options: [
            "Az alkalmazásboltban megjelenő logót.",
            "Az alkalmazás kezdő oldalát.",
            "Az alkalmazás által kért engedélyeket.",
            "Az alkalmazás nevét és verziószámát."
        ],
        correct: [1]
    },
    {
        category: "Mobil",
        type: "single",
        question: "Melyik állítás igaz az alábbiak közül mobil alkalmazások életciklusára?",
        options: [
            "Az alkalmazás nem tudja megkülönböztetni, hogy felfüggesztett vagy terminált állapotból lett elindítva.",
            "A felhasználó nem állíthat le alkalmazásokat.",
            "A felfüggesztett alkalmazások memóriafoglalása felszabadításra kerül.",
            "Az operációs rendszer leállíthat egy felfüggesztett alkalmazást annak értesítése nélkül."
        ],
        correct: [0]
    },
    {
        category: "UWP",
        type: "single",
        question: "Windows operációs rendszeren milyen adatokat érdemes a ApplicationData.Current.RoamingFolder könyvtárban tárolni?",
        options: [
            "Amelyeket csak ideiglenesen hoztunk létre és az operációs rendszer automatikusan törölheti őket.",
            "Amelyeket mobil adatkapcsolaton, roamingolva nem szabad elküldeni.",
            "Amelyeket szeretnénk titkosítani.",
            "Amelyeket szeretnénk a felhasználó eszközei között szinkronizálni."
        ],
        correct: [3]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi a ?. operátor célja a C# nyelvben?",
        options: [
            "Amennyiben az operátor bal operandusaként szereplő objektum referencia szerint kezelt, azt érték típusúként dereferálva értékeli ki a jobb operandusként megadott tagot.",
            "Amennyiben az operátor bal operandusaként szereplő, dinamikus típusozású objektum nem tartalmazza a jobb operandusként megadott tagot, nem értékeli azt ki.",
            "Amennyiben az operátor bal operandusaként szereplő objektum null, a jobb operandusként megadott értéket adja vissza.",
            "Amennyiben az operátor bal operandusaként szereplő objektum null, nem értékeli ki a jobb operandusként megadott tagot."
        ],
        correct: [3]
    },
    {
        category: "Reaktív Prog",
        type: "single",
        question: "Mi a Publish() operátor szerepe a reaktív programozásban Rx.NET használatakor?",
        options: [
            "Szinkronizálja több aszinkron adatfolyam eseményeit a megfigyelők felé.",
            "Aszinkron adatfolyam több megfigyelő számára történő elérhetővé tétele.",
            "Aszinkron adatfolyamok megfigyelhetőségének elindítása.",
            "Több aszinkron adatfolyam eseményeinek egyesítése a megfigyelő felé (multicast)."
        ],
        correct: [1]
    },
    {
        category: ".NET",
        type: "single",
        question: "Az alábbi, C# nyelvre és .NET keretrendszerre vonatkozó állítások közül melyik hamis?",
        options: [
            "Az egységteszt egy olyan automatikusan futtatható ellenőrzés, amely lehetőséget nyújt osztályok és objektumok viselkedésének ellenőrzésére.",
            "A szerelvényekre történő felbontást célszerű a rétegek és függőségek befecskendezés mentén elvégezni.",
            "A C# nyelv nem tartalmaz olyan blokk-kezelési technikát, amely garantálja a Dispose() automatikus lefutását egy adott objektumon.",
            "A StreamReader implementálja az IDisposable interfészt."
        ],
        correct: [2]
    },
    {
        category: "Parancsok",
        type: "single",
        question: "Mikor kell kiváltani az [Command] interfészt megvalósító osztályok [CanExecuteChanged] eseményét?",
        options: [
            "Amikor a parancs végrehajthatósága lehetséges, hogy megváltozott.",
            "Nem a programnak kell kiváltania, a .NET keretrendszer hívja meg a parancs végrehajthatóságának megváltozásakor.",
            "Amikor a parancs végrehajthatósága bizonyosan megváltozott.",
            "A parancsban foglalt tulajdonságok (property) bármelyikének érték változásakor."
        ],
        correct: [2]
    },
    {
        category: "WPF",
        type: "single",
        question: "Mi a felület deklaratív leírásának előnye WPF keretrendszerben?",
        options: [
            "Különválasztja a megjelenést annak vezérlésétől.",
            "A deklaratív megközelítés az alkalmazott funkcionális paradigma révén kevesebb programozói hibalehetőséget rejt.",
            "Lehetővé teszi a 3D grafikus kártyák kihasználását.",
            "Egyszerűbb a kód karbantartása."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Mikor válik felszabadítható a szemétgyűjtő (garbage collector) számára egy felületi vezérlő?",
        options: [
            "Ha töröltük a delete operátorral.",
            "Ha eltávolítottuk a tartalmazó ablak vagy panel Controls gyűjteményéből.",
            "Ha már nincsen rá elérhető hivatkozás.",
            "Ha törölhetőnek jelöltük a Dispose() eljárás meghívásával."
        ],
        correct: [1]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik állítás igaz egy metódus felüldefiniálására öröklődésnél?",
        options: [
            "Felüldefiniálni a virtual kulcsszóval lehet egy metódust.",
            "Felüldefiniálni csak statikus metódust lehet.",
            "A felüldefiniált metódus a statikus típuson kerül kiértékelésre.",
            "Lezárt metódus (sealed) nem definiálható felül."
        ],
        correct: [3]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Melyik állítás nem igaz struktúrákra (struct) C#-ban?",
        options: [
            "Nem származhat le belőle másik struktúra típus.",
            "Csak elemi típusokat tartalmazhat az adattagjaiban.",
            "Mindig létezik alapértelmezett konstruktora.",
            "Paraméterátadáskor érték szerint van kezelve."
        ],
        correct: [1]
    },
    {
        category: "MVVM",
        type: "single",
        question: "Melyik állítás igaz az MVVM (Model-View-ViewModel) architektúrára?",
        options: [
            "A ViewModel közvetlenül hivatkozhat a View komponensre.",
            "A ViewModel közvetlenül hivatkozhat a Model komponensre.",
            "A Model közvetlenül hivatkozhat a ViewModel komponensre.",
            "A View közvetlenül hivatkozhat a Model komponensre."
        ],
        correct: [1]
    },
    {
        category: "Avalonia",
        type: "single",
        question: "Hogyan lehet egy gomb eseménykezelőt hozzárendelni MVVM mintában Avalonia UI-ban?",
        options: [
            "A DataContext-et kell egy eseménykezelő objektumra állítani.",
            "Az eseménykezelőt közvetlenül a Click eseményhez rendeljük hozzá az XAML-ben.",
            "Egy globális eseménykezelőt kell definiálni a MainWindow osztályban.",
            "A Command nevű tulajdonságot kell megkötni a ViewModel-ben lévő parancsra."
        ],
        correct: [3]
    },
    {
        category: "Interfészek",
        type: "single",
        question: "Melyik állítás igaz az alábbiak közül az interfészekre?",
        options: [
            "Az interfészek nem tartalmazhatnak adattagokat.",
            "Az interfészek neve kötelezően I (nagy i) prefixszel kezdődik.",
            "Az interfészek minden tartalmazott eleme publikus vagy internal láthatóságú.",
            "Egy osztály legfeljebb egy másik osztályból és egy interfészből származhat le."
        ],
        correct: [0]
    },
    {
        category: ".NET",
        type: "single",
        question: "Az alábbiak közül melyik a .NET Framework hátránya a .NET Core keretrendszerrel szemben?",
        options: [
            "A zárt forráskód miatt az alkalmazásaink forráskódja sem tehető nyílt forráskódú licenc alatt közzé.",
            "A nyílt forráskód miatt a keretrendszerrel fejlesztett programok kereskedelmi licencelése nehézkes.",
            "A monolitikus felépítés megnehezíti a beágyazott rendszerekben történő alkalmazást.",
            "A .NET Framework nem támogatja a platformfüggetlen fejlesztést."
        ],
        correct: [0]
    },
    {
        category: "WinForms",
        type: "single",
        question: "Windows Forms alkalmazásokban hogyan akadályozható meg egy Form ablak bezárása az X gombra kattintáskor?",
        options: [
            "A Form.Close() metódust kell felüldefiniálni.",
            "Az Enabled tulajdonságot false értékre állítjuk.",
            "A Closing eseményt kell letiltani.",
            "A FormClosing esemény kezelőjében a Cancel tulajdonságot igazra állítjuk."
        ],
        correct: [3]
    },
    {
        category: "Mobil",
        type: "single",
        question: "A hatékony működéshez mikor szükséges egy jogosultság (pl. földrajzi lokáció) meglétét ellenőrizni egy mobil alkalmazásban?",
        options: [
            "Az alkalmazás indításakor vagy felfüggesztett állapotból való visszatérésekor.",
            "Az adott jogosultság minden használatakor.",
            "Nem szükséges ellenőrizni, mert az alkalmazás telepítésekor adja meg a felhasználó a jogosultságot.",
            "Az adott jogosultság első használatakor."
        ],
        correct: [0]
    },
    {
        category: "Architektúra",
        type: "single",
        question: "Az alábbi, alkalmazások architektúrájára vonatkozó állítások közül melyik hamis?",
        options: [
            "Az egyes rétegek között függőségek alakulnak ki, mivel felhasználják egymás funkcionalitását.",
            "A függőségeket úgy kell megvalósítani, hogy a konkrét megvalósítástól függjenek.",
            "A függőség befecskendezés (dependency injection) jelentése, hogy a rétegek a függőségeknek csak az absztrakcióját látják, a konkrét megvalósítását külön adjuk át nekik.",
            "A befecskendezésnek különböző módjai lehetnek (például: konstruktor, metódus)."
        ],
        correct: [1]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Mi lehet az oka egy [ObservableCollection] használatkor, ha a nézet nem frissül a tartalmazott elemek módosításakor?",
        options: [
            "Az [ObservableCollection]-t tartalmazó nézetmodell nem valósítja meg az [NotifyPropertyChanged] interfészt.",
            "A tartalmazott elemtípus nem valósítja meg az [NotifyPropertyChanged] interfészt.",
            "Az [ObservableCollection]-t tartalmazó nézetmodell nem valósítja meg az [NotifyCollectionChanged] interfészt.",
            "Az [ObservableCollection]-t tartalmazó nézetmodell nem valósítja meg az [INotifyPropertyChanged] interfészt."
        ],
        correct: [2]
    },
    {
        category: "Lokalizáció",
        type: "single",
        question: "Mi a különbség a CultureInfo.CurrentCulture és a CultureInfo.CurrentUICulture között?",
        options: [
            "A CultureInfo.CurrentUICulture csak Avalonia alatt érhető el, és az alkalmazás beállítások oldalának felületi nyelvi beállítását tartalmazza.",
            "A CultureInfo.CurrentCulture a területi beállításokat adja meg, a CultureInfo.CurrentUICulture pedig a felületi nyelvi beállítást.",
            "A CultureInfo.CurrentCulture az operációs rendszer nyelvi beállítását adja meg, a CultureInfo.CurrentUICulture pedig az alkalmazás nyelvi beállítását.",
            "A CultureInfo.CurrentCulture a felületi nyelvi beállítást adja meg, a CultureInfo.CurrentUICulture pedig a területi beállításokat."
        ],
        correct: [1]
    },
    {
        category: "Adatkötés",
        type: "single",
        question: "Melyik állítás igaz az [ObservableCollection] kollekcióra?",
        options: [
            "Olyan objektumok gyűjteménye, amelyek megvalósítják az INotifyPropertyChanged interfészt.",
            "Olyan kollekció, amely automatikusan értesíti a nézetet, amikor hozzáadunk, eltávolítunk vagy módosítunk elemeket.",
            "Olyan kollekció, amelyben az elemek tulajdonság (property) változással megfigyelhetővé válnak, azokról a nézetet értesíti.",
            "Olyan kollekció, amely csak érték típusokat tartalmazhat."
        ],
        correct: [1]
    },
    {
        category: "Szálkezelés",
        type: "single",
        question: "Melyik állítás hamis a szinkron tevékenységekkel kapcsolatban?",
        options: [
            "A tevékenység kezdeményezője megvárja annak lefutását.",
            "Ha sokáig tart a tevékenység, akkor az a program felületén is észrevehető.",
            "A hívó szál blokkolódik, amíg a tevékenység fut.",
            "A tevékenység külön szálon fut."
        ],
        correct: [3]
    },
    {
        category: "C# Nyelv",
        type: "single",
        question: "Mi a különbség a string és a string? típusok között?",
        options: [
            "A string? típus tartalmazhat null értéket, a string típus nem.",
            "A string típus tartalmazhat null értéket, a string? típus nem.",
            "A string? típusra végez null-state analízist a fordító, a string típusra nem.",
            "A string? típus tartalmazhat üres karakterláncot, a string típus nem."
        ],
        correct: [2]
    }
];
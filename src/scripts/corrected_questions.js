const questions = [
    {
        id: 1,
        type: "open-ended",
        question: "Numiți lupta din 1595 precizată în sursa B.",
        keywords: ["Călugăreni"],
        aliases: ["Bătălia de la Călugăreni"],
        rezolvare: "2 puncte pentru răspunsul: Călugăreni.<br>Se punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț).<br>",
        maxScore: 2
    },
    {
        id: 2,
        type: "open-ended",
        question: "Precizați, din sursa A, o informație referitoare la acțiunile otomanilor din 1462.",
        keywords: [
            "în primăvara lui 1462, sultanul s-a îndreptat spre Dunăre pentru a pedepsi cutezanța sa",
            "otomanii atacă Chilia"
        ],
        aliases: [
            "atac asupra Chiliei",
            "ofensiva din primăvara lui 1462"
        ],
        rezolvare: "2 puncte pentru oricare dintre răspunsurile:<br>„în primăvara lui 1462, sultanul s-a îndreptat spre Dunăre pentru a pedepsi cutezanța sa”<br><br>SAU<br><br>„otomanii atacă Chilia” etc.<br>Se punctează orice mod de redactare a răspunsului corect (prin citat din sursă/menționare sau în enunț).<br>",
        maxScore: 2
    },
    {
        id: 3,
        type: "multiple-choice",
        question: "Care dintre următoarele alianțe este menționată în sursa dată?",
        options: ["Antanta", "Puterile Centrale", "Tripla Alianță", "Liga Națiunilor"],
        correctAnswers: ["Antanta", "Puterile Centrale"],
        rezolvare: "Câte 3 puncte pentru fiecare răspuns corect: „Antanta” sau „Puterile Centrale”.<br>Se punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț).<br>",
        maxScore: 6
    },
    {
        id: 4,
        type: "open-ended",
        question: "Scrieţi, pe foaia de examen, litera corespunzătoare sursei care susţine că domnul organizează o campanie militară în sudul Dunării.",
        keywords: ["A"],
        aliases: [],
        rezolvare: "3 puncte pentru scrierea literei A.",
        maxScore: 3
    },
    {
        id: 5,
        type: "open-ended",
        question: "Scrieţi o relaţie cauză-efect stabilită între două informaţii selectate din sursa B, precizând rolul fiecăreia dintre aceste informaţii (cauză, respectiv efect).",
        keywords: [
            "autoritatile", "rascoala", "tarilor romane", "Imperiul otoman",
            "politic", "militar", "economic", "mii de oameni", "Sinan-Pasa", "Dunare"
        ],
        aliases: [
            "Autoritățile", "răscoala", "țărilor române", "sinan pasa", "Dunăre"
        ],
        rezolvare: "Cauză: „Autoritățile nu puteau tolera răscoala țărilor române care lovea Imperiul Otoman sub aspect politic, militar și economic”.<br>Efect: „De aceea, zeci de mii de oameni (poate 50,000), sub comanda marelui vizir Sinan-Pașa, sunt puși în mișcare spre Dunăre”.<br>SAU<br>Cauză: „Din cauza disproporției forțelor”.<br>Efect: „Domnul nu putea lupta în câmp deschis”.<br>",
        maxScore: 7
    },
    {
        id: 6,
        type: "open-ended",
        question: "Prezentați alte două acțiuni diplomatice la care au participat românii în secolele al XV-lea – al XVI-lea, în afara celei la care se referă sursa B.",
        keywords: ["Tratatul de la Colomeea", "Tratatul de la Overchelauti"],
        aliases: [
            "Tratatul de la Overchelăuți", "Tratatul de la Iași", "Tratatul de la Hârlău",
            "Tratatul de la Dealu", "Tratatul de la București"
        ],
        rezolvare: "Câte 1 punct pentru menționarea oricăror două acțiuni diplomatice la care au participat românii în secolele al XV-lea – al XVI-lea.<br>Exemple: Tratatul de la Colomeea, Tratatul de la Iași, Tratatul de la Hârlău etc.<br>",
        maxScore: 6
    },
    {
        id: 7,
        type: "open-ended",
        question: "Menţionaţi o asemănare între două fapte istorice desfășurate de români în secolul al XIV-lea.",
        keywords: [],
        aliases: [],
        rezolvare: "4 puncte pentru menționarea oricărei asemănări între două fapte istorice desfășurate de români în secolul al XIV-lea. Exemple: obținerea independenței față de Ungaria, caracter antiotoman etc.<br>Se punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț).",
        maxScore: 6
    },
    {
        id: 8,
        type: "open-ended",
        question: "Numiţi o mare alianță precizată în sursa dată.",
        keywords: ["Antanta"],
        aliases: ["Antanta", "Puterile Centrale"],
        rezolvare: "2 puncte pentru oricare dintre răspunsurile:<br>„Antanta” sau „Puterile Centrale”.<br>Se punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț).<br>",
        maxScore: 2
    },
    {
        id: 9,
        type: "open-ended",
        question: "Precizaţi secolul la care se referă sursa dată.",
        keywords: ["XX-lea"],
        aliases: [],
        rezolvare: "2 puncte pentru răspunsul:<br>„al XX-lea”.<br>Se punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț).<br>",
        maxScore: 6
    },
    {
        id: 10,
        type: "open-ended",
        question: "Menţionaţi șeful guvernului din 1914 și o caracteristică a opiniei publice din România, la care se referă sursa dată.",
        keywords: [
            "I.I.C. Bratianu", "eliberarea naționala", "austro-ungara",
            "Antantei", "Romaniei", "Puterilor Centrale"
        ],
        aliases: [
            "I.I.C. Brătianu", "eliberarea națională", "austro-ungară",
            "Antanta", "României", "Puterilor Centrale"
        ],
        rezolvare: "3 puncte pentru răspunsul: „I.I.C. Brătianu”.<br>3 puncte pentru o caracteristică a opiniei publice: „eliberarea națională a românilor din provinciile aflate sub stăpânire austro-ungară”.<br>Se punctează orice mod de redactare a răspunsului corect (prin citat din sursă/menționare sau în enunț).<br>",
        maxScore: 6
    },
    {
        id: 11,
        type: "open-ended",
        question: "Menţionaţi, din sursa dată, două informații referitoare la evenimentele din anul 1917.",
        keywords: ["marasti", "Marasesti", "victorie romaneasca", "Primului Razboi Mondial", "Oituz"],
        aliases: ["Mărăști", "Mărășești", "victorie românească", "Primului Război Mondial"],
        rezolvare: "Câte 3 puncte pentru menționarea, din sursa dată, a oricăror două informații referitoare la evenimentele din anul 1917 (3px2=6p).<br>Exemple:<br>„Seria marilor bătălii victorioase din lunile iulie-august 1917 a început cu cea de la Mărăști; a continuat cu celebra bătălie de la Mărășești, cea mai de seamă victorie românească în timpul Primului Război Mondial”.<br>„În bătălia de la Oituz e oprită înaintarea adversarului”.<br>Se punctează orice mod de redactare a răspunsului corect (prin citat din sursă/menționare sau în enunț).",
        maxScore: 6
    },
    {
        id: 12,
        type: "open-ended",
        question: "Formulaţi, pe baza sursei date, un punct de vedere referitor la acțiunile militare desfășurate în anul 1916, susținându-l cu două informații selectate din sursă.",
        keywords: ["1916", "aciuni militare"],
        aliases: ["acțiuni militare"],
        rezolvare: "4 puncte pentru formularea, pe baza sursei date, a oricărui punct de vedere referitor la acțiunile militare desfășurate în anul 1916.<br>Câte 3 puncte pentru selectarea a două informații care susțin punctul de vedere formulat.<br>Exemple:<br>Punct de vedere: „Acțiunile militare din 1916 au avut consecințe politice negative”.<br>Informații: „În decembrie 1916, Capitala era ocupată, o bună parte a teritoriului național intrând sub ocupația militară a Puterilor Centrale”.<br>„Autoritățile și principalele instituții ale statului s-au retras în Moldova”.<br>",
        maxScore: 10
    },
    {
        id: 13,
        type: "open-ended",
        question: "Argumentaţi, printr-un fapt istoric relevant, afirmația conform căreia democrația din România Mare se consolidează în perioada 1921-1930.",
        keywords: ["Constitutie 1923"],
        aliases: ["Constituție 1923", "Constituția 1923", "Constitutia 1923"],
        rezolvare: "4 puncte pentru argumentarea afirmației date.<br>Exemple:<br>Cauza: „Realizarea României Mari a creat necesitatea unei legislații unitare”.<br>Eveniment: „Adoptarea Constituției din 1923, care prevedea separarea puterilor în stat, drepturi și libertăți cetățenești, și vot universal pentru bărbați”.<br>Consecință: „Astfel, Constituția adoptată de regele Ferdinand a consolidat regimul democrat”.<br>",
        maxScore: 4
    },
    {
        id: 14,
        type: "open-ended",
        question: "Sub III, Reperul 1: Precizarea unei acțiuni politice desfășurate în România între anii 1946-1960 și menționarea a două aspecte referitoare la aceasta.",
        keywords: ["Constitutia din 1948"],
        aliases: ["Constituția din 1948", "Colectivizarea 1949"],
        rezolvare: "2 puncte pentru precizarea acțiunii politice.<br>3 puncte pentru fiecare aspect menționat.<br>Exemple:<br>Acțiune: „Adoptarea Constituției din 1948”.<br>Aspecte: „Legitimează regimul totalitar”. „Prevede constituirea Marii Adunări Naționale”.<br>SAU<br>Acțiune: „Colectivizarea”.<br>Aspecte: „Viza proprietatea privată asupra pământului”. „A fost însoțită de represiune politică”.",
        maxScore: 8
    },
    {
        id: 15,
        type: "open-ended",
        question: "Sub III, Reperul 2: Menționarea a două măsuri adoptate în politica internă a României între anii 1964-1985.",
        keywords: ["Constitutia din 1965", "Tezele din iulie 1971"],
        aliases: ["Constituția din 1965", "cumulul de funcții", "raționalizarea"],
        rezolvare: "Câte 3 puncte pentru fiecare măsură menționată.<br>Exemple:<br>Măsură: „Adoptarea Constituției din 1965”.<br>Măsură: „Introducerea cultului personalității prin Tezele din iulie 1971”.<br>SAU<br>Măsură: „Cumulul de funcții”.<br>Măsură: „Raționalizarea resurselor”.",
        maxScore: 8
    },
    {
        id: 16,
        type: "open-ended",
        question: "Sub III, Reperul 3: Prezentarea unui fapt istoric din perioada național-comunismului prin care România participă la relațiile internaționale.",
        keywords: ["Conferința de la Moscova 1967", "Actul Final al Conferintei de la Helsinki"],
        aliases: [
            "Actul Final al Conferinței de la Helsinki", "Conferinta de la Helsinki",
            "Primavara de la Praga 1968"
        ],
        rezolvare: "Exemple:<br>Fapt: „Conferința de la Moscova 1967”.<br>Cauza: „Datorită războiului de 6 zile, URSS a convocat liderii statelor comuniste pentru a decide măsuri împotriva Israelului”.<br>Prezentare: „România nu a rupt relațiile cu Israelul, atrăgând atenția Occidentului”.<br>SAU<br>Fapt: „Semnarea Actului Final al Conferinței de la Helsinki, 1975”.<br>Prezentare: „România s-a angajat să respecte drepturile fundamentale ale omului, determinând Occidentul să creadă într-o liberalizare”.",
        maxScore: 8
    },
    {
        id: 17,
        type: "open-ended",
        question: "Sub III, Reperul 4: Formularea unui punct de vedere referitor la consolidarea democrației postdecembriste în perioada 1990-1995 şi susținerea acestuia printr-un argument istoric.",
        keywords: ["Constitutiei din 1991"],
        aliases: ["Constituției din 1991"],
        rezolvare: "1 punct pentru formularea unui punct de vedere.<br>Exemplu: „Democrația postdecembristă a fost consolidată prin garantarea drepturilor și libertăților cetățenești”.<br>4 puncte pentru susținerea punctului de vedere printr-un argument.<br>Exemplu: „Adoptarea Constituției din 1991 a garantat drepturile cetățenești, separarea puterilor în stat și pluripartidismul, revenind la statul de drept”.",
        maxScore: 8
    }
];

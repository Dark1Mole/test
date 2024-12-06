document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            id: 1,
            type: "open-ended",
            question: "Numiți lupta din 1595 precizată în sursa B.",
            keywords: ["Călugăreni"],
            aliases: ["Bătălia de la Călugăreni"],
            rezolvare: "2 puncte pentru răspunsul: Călugăreni.\nSe punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț).",
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
            rezolvare: "2 puncte pentru oricare dintre răspunsurile:\n'în primăvara lui 1462, sultanul s-a îndreptat spre Dunăre pentru a pedepsi cutezanța sa'\nSAU\n'otomanii atacă Chilia' etc.\nSe punctează orice mod de redactare a răspunsului corect (prin citat din sursă/menționare sau în enunț).",
            maxScore: 2
        },
        {
            id: 3,
            type: "multiple-choice",
            question: "Care dintre următoarele alianțe este menționată în sursa dată?",
            options: ["Antanta", "Puterile Centrale", "Tripla Alianță", "Liga Națiunilor"],
            correctAnswers: ["Antanta", "Puterile Centrale"],
            rezolvare: "sursa A: Vlad Țepeș 3 puncte\nsursa B: Mihai Viteazul 3 puncte\ncâte 3 puncte pentru fiecare răspuns: Vlad Țepeș, Mihai Viteazul\nSe punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț). (3px2=6p)",
            maxScore: 2
        },
        {
            id: 4,
            type: "open-ended",
            question: "Scrieţi, pe foaia de examen, litera corespunzătoare sursei care susţine că domnul organizează o campanie militară în sudul Dunării",
            keywords: ["A"],
            aliases: [],
            rezolvare: "3 puncte pentru scrierea literei A",
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
            rezolvare: "Cauză: 'Autoritățile nu puteau tolera răscoala țărilor române care lovea Imperiul otoman sub aspect politic, militar și economic'\nefect: 'De aceea, zeci de mii de oameni (poate 50 000), sub comanda marelui vizir Sinan-Pașa, sunt puși în mișcare spre Dunăre'\nSAU\nCauză: 'din cauza disproporției forțelor'\nefect: 'Domnul nu putea lupta în câmp deschis'",
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
            rezolvare: "câte 1 punct pentru menționarea oricăror două acțiuni diplomatice la care au participat românii în secolele al XV-lea – al XVI-lea, în afara celei la care se referă sursa B (1px2=2p)\nM1: O acțiune diplomatică la care au participat românii în secolul al XV-lea este Tratatul de la Colomeea (1p) sau Tratatul de la Overchelăuți (1p)\nP1: * 1485 (2p)\n* Ștefan cel Mare și Cazimir al IV-lea (2p)\n* Antiotoman (2p)\n* Moldova stat vasal Poloniei (2p)\nM2: O acțiune diplomatică la care au participat românii în secolul al XVI-lea este Tratatul de la Dealu (1p) sau Tratatul de la București (1p)",
            maxScore: 6
        },
        {
            id: 7,
            type: "open-ended",
            question: "Menţionaţi o asemănare între două fapte istorice desfășurate de români în secolul al XIV-lea.",
            keywords: [" "],
            aliases: [" "],
            rezolvare: "4 puncte pentru menționarea oricărei asemănări între două fapte istorice desfășurate de români în secolul al XIV-lea. Exemple: obținerea independenței față de Ungaria, caracter antiotoman etc. Se punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț)",
            maxScore: 6
        },
        {
            id: 8,
            type: "open-ended",
            question: "Numiţi o mare alianță precizată în sursa dată.",
            keywords: ["Antanta"],
            aliases: ["Antanta", "Puterile Centrale"],
            rezolvare: "2 puncte pentru oricare dintre răspunsurile: Antanta, Puterile Centrale\nSe punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț).",
            maxScore: 2
        },
        {
            id: 9,
            type: "open-ended",
            question: "Precizaţi secolul la care se referă sursa dată.",
            keywords: ["XX-lea"],
            aliases: ["XX"],
            rezolvare: "2 puncte pentru răspunsul: al XX-lea\nSe punctează orice mod de redactare a răspunsului corect (prin precizare/menționare sau în enunț).",
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
                "I.I.C. Brătianu", "eliberarea națională", "austro ungară",
                "Antanta", "României", "Puterilor Centrale"
            ],
            rezolvare: "I.I.C. Brătianu 3 puncte\n'opinia publică românească [...] cu gândul la eliberarea națională a românilor din provinciile aflate sub stăpânire austro-ungară [...] - Transilvania, Banat, Bucovina - avea să opteze pentru intrarea în război alături de puterile Antantei' 3 puncte\nSAU\n'opinia publică influențează intrarea României în război împotriva Puterilor Centrale' etc. 3 puncte\nSe punctează orice mod de redactare a răspunsului corect (prin citat din sursă/menționare sau în enunț).",
            maxScore: 6
        },
        {
            id: 11,
            type: "open-ended",
            question: "Menţionaţi, din sursa dată, două informații referitoare la evenimentele din anul 1917.",
            keywords: ["marasti", "Marasesti", "victorie romaneasca", "Primului Razboi Mondial", "Oituz"],
            aliases: ["Mărăști", "Mărășești", "victorie românească", "Primului Război Mondial"],
            rezolvare: "câte 3 puncte pentru menționarea, din sursa dată, a oricăror două informații referitoare la evenimentele din anul 1917 (3px2=6p)\nExemple:\n'Seria marilor bătălii victorioase din lunile iulie-august 1917 a început cu cea de la Mărăști; a continuat cu celebra bătălie de la Mărășești, cea mai de seamă victorie românească în timpul Primului Război Mondial' 3 puncte\n'în bătălia de la Oituz e oprită înaintarea adversarului' etc. 3 puncte\nSe punctează orice mod de redactare a răspunsului corect (prin citat din sursă/menționare sau în enunț).",
            maxScore: 6
        },
        {
            id: 12,
            type: "open-ended",
            question: "Formulaţi, pe baza sursei date, un punct de vedere referitor la acțiunile militare desfășurate în anul 1916, susținându-l cu două informații selectate din sursă.",
            keywords: ["1916", "aciuni militare"],
            aliases: ["acțiuni militare"],
            rezolvare: "4 puncte pentru formularea, pe baza sursei date, a oricărui punct de vedere referitor la acțiunile militare desfășurate în anul 1916\ncâte 3 puncte pentru selectarea, din sursa dată, a oricăror două informaţii care susţin punctul de vedere formulat (3px2=6p)",
            maxScore: 4
        },
        {
            id: 13,
            type: "open-ended",
            question: "Argumentaţi, printr-un fapt istoric relevant, afirmația conform căreia democrația din România Mare se consolidează în perioada 1921-1930.",
            keywords: ["Constitutie 1923"],
            aliases: ["Constituție 1923", "Constituția 1923", "Constitutia 1923"],
            rezolvare: "4 puncte pentru argumentarea afirmației date - prezentarea oricărui fapt istoric relevant și utilizarea conectorilor care exprimă cauzalitatea și concluzia",
            maxScore: 4
        },
        {
            id: 14,
            type: "open-ended",
            question: "Precizarea unei acțiuni politice desfășurate în România între anii 1946-1960 și menționarea a două aspecte referitoare la aceasta",
            keywords: ["Constitutia din 1948"],
            aliases: ["Constituția din 1948", "Colectivizarea 1949"],
            rezolvare: "2 puncte pentru precizarea acțiunii politice și câte 3 puncte pentru menționarea oricăror două aspecte referitoare la aceasta",
            maxScore: 8
        },
        {
            id: 15,
            type: "open-ended",
            question: "Menționarea a două măsuri adoptate în politica internă a României între anii 1964-1985",
            keywords: ["Constitutia din 1965", "Tezele din iulie 1971"],
            aliases: ["Constituția din 1965", "cumulul de funcții", "cumulul de functii", "raționalizarea", "rationalizarea"],
            rezolvare: "Câte 3 puncte pentru menționarea fiecărei măsuri adoptate în politica internă a României între anii 1964-1985",
            maxScore: 8
        },
        {
            id: 16,
            type: "open-ended",
            question: "Prezentarea unui fapt istoric din perioada național-comunismului prin care România participă la relațiile internaționale",
            keywords: ["Conferința de la Moscova 1967", "Actul Final al Conferintei de la Helsinki"],
            aliases: [
                "Actul Final al Conferinței de la Helsinki",
                "Conferinta de la Helsinki",
                "Conferința de la Helsinki",
                "Armatei Roșii în Cehoslovacia",
                "Armatei Rosii în Cehoslovacia",
                "Primavara de la Praga 1968"
            ],
            rezolvare: "2 puncte pentru menționarea faptului istoric și 3 puncte pentru prezentarea acestuia prin precizarea a două informații referitoare la acest fapt",
            maxScore: 8
        },
        {
            id: 17,
            type: "open-ended",
            question: "Formularea unui punct de vedere referitor la consolidarea democrației postdecembriste în perioada 1990-1995 şi susținerea acestuia printr-un argument istoric",
            keywords: ["Constitutiei din 1991"],
            aliases: ["Constituției din 1991"],
            rezolvare: "1 punct pentru formularea punctului de vedere și 4 puncte pentru susținerea acestuia printr-un argument istoric",
            maxScore: 8
        }
    ];

    const displayResults = (score, totalScore) => {
        let resultsHTML = `<h2 class="text-2xl font-bold mb-4">Your final score: ${Math.round(score)}/${totalScore}</h2>`;
        resultsHTML += '<div class="space-y-4 mb-4">';

        questions.forEach((question, index) => {
            const studentAnswer = studentAnswers[index] || 'No answer provided';
            const isCorrect = checkAnswer(studentAnswer, question);

            resultsHTML += `
            <div class="border p-4 rounded-md mb-4">
                <h3 class="font-semibold">${question.question}</h3>
                <p class="mt-2"><strong>Your answer:</strong> ${Array.isArray(studentAnswer) ? studentAnswer.join(', ') : studentAnswer}</p>
                <p class="mt-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}">
                    <strong>Result:</strong> ${isCorrect ? 'Correct' : 'Incorrect'}
                </p>
                <div class="mt-2 bg-gray-50 p-3 rounded">
                    <strong>Solution:</strong>
                    <pre class="whitespace-pre-wrap">${question.rezolvare}</pre>
                </div>
            </div>
        `;
        });

        resultsHTML += '</div>';
        return resultsHTML;
    };

    let currentIndex = 0;
    const studentAnswers = new Array(questions.length).fill('');

    const questionContainer = document.getElementById("questionContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");

    const renderQuestion = () => {
        const question = questions[currentIndex];
        questionContainer.innerHTML = `
            <h2 class="text-xl font-semibold mb-4">${question.question}</h2>
            ${question.type === "multiple-choice"
                ? `<div class="flex flex-wrap gap-4">
                          ${question.options
                    .map(
                        (option, i) =>
                            `<button data-index="${i}" class="option px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 my-2 ${Array.isArray(studentAnswers[currentIndex]) &&
                                studentAnswers[currentIndex].includes(option) ?
                                'bg-primary text-white' : ''
                            }">${option}</button>`
                    )
                    .join("")}
                       </div>`
                : `<textarea id="answerInput" class="w-full border p-2 rounded-md" placeholder="Type your answer here...">${studentAnswers[currentIndex] || ""}</textarea>`
            }
        `;

        if (question.type === "multiple-choice") {
            const options = document.querySelectorAll(".option");
            options.forEach((option) => {
                option.addEventListener("click", (e) => {
                    if (!Array.isArray(studentAnswers[currentIndex])) {
                        studentAnswers[currentIndex] = [];
                    }

                    const answerIndex = studentAnswers[currentIndex].indexOf(e.target.innerText);

                    if (answerIndex === -1) {
                        studentAnswers[currentIndex].push(e.target.innerText);
                        option.classList.add('bg-primary', 'text-white');
                    } else {
                        studentAnswers[currentIndex].splice(answerIndex, 1);
                        option.classList.remove('bg-primary', 'text-white');
                    }
                });
            });
        }
    };

    const navigateQuestions = (direction) => {
        const answerInput = document.getElementById("answerInput");
        if (answerInput) {
            studentAnswers[currentIndex] = answerInput.value;
        }

        currentIndex += direction;
        renderQuestion();

        prevBtn.disabled = currentIndex === 0;
        nextBtn.style.display = currentIndex < questions.length - 1 ? 'block' : 'none';
        submitBtn.classList.toggle("hidden", currentIndex !== questions.length - 1);
    };

    const checkAnswer = (answer, question) => {
        if (!answer) return false;

        if (question.type === "open-ended" && typeof answer === "string") {
            const lowerCaseAnswer = answer.toLowerCase();
            return (
                question.keywords.some((kw) => lowerCaseAnswer.includes(kw.toLowerCase())) ||
                question.aliases.some((alias) => lowerCaseAnswer.includes(alias.toLowerCase()))
            );
        } else if (question.type === "multiple-choice" && Array.isArray(answer)) {
            return (
                answer.length === question.correctAnswers.length &&
                answer.every((ans) => question.correctAnswers.includes(ans))
            );
        }
        return false;
    };

    const calculateScore = () => {
        let totalScore = 0;

        questions.forEach((question, index) => {
            const answer = studentAnswers[index];
            if (!answer) return;

            if (question.type === "open-ended" && typeof answer === "string") {
                const lowerCaseAnswer = answer.toLowerCase();
                const keywordMatch = question.keywords.some(kw =>
                    lowerCaseAnswer.includes(kw.toLowerCase())
                );
                const aliasMatch = question.aliases.some(alias =>
                    lowerCaseAnswer.includes(alias.toLowerCase())
                );

                if (keywordMatch || aliasMatch) {
                    totalScore += question.maxScore;
                }
            } else if (question.type === "multiple-choice" && Array.isArray(answer)) {
                const correctAnswers = question.correctAnswers;
                const correctSelections = answer.filter(ans =>
                    correctAnswers.includes(ans)
                ).length;

                if (answer.every(ans => correctAnswers.includes(ans))) {
                    totalScore += (correctSelections / correctAnswers.length) * question.maxScore;
                }
            }
        });

        return totalScore;
    };

    submitBtn.addEventListener("click", () => {
        const answerInput = document.getElementById("answerInput");
        if (answerInput) {
            studentAnswers[currentIndex] = answerInput.value;
        }

        const score = calculateScore();
        const totalScore = questions.reduce((acc, q) => acc + q.maxScore, 0);
        questionContainer.innerHTML = displayResults(score, totalScore);
        prevBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
        submitBtn.classList.add("hidden");
    });

    nextBtn.addEventListener("click", () => navigateQuestions(1));
    prevBtn.addEventListener("click", () => navigateQuestions(-1));

    renderQuestion();
    prevBtn.disabled = true;
});

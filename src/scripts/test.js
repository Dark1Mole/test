document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            id: 1,
            type: "open-ended",
            question: "Numiți lupta din 1595 precizată în sursa B.",
            keywords: ["Călugăreni"],
            aliases: ["Bătălia de la Călugăreni"],
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
            maxScore: 2
        },
        {
            id: 3,
            type: "multiple-choice",
            question: "Care dintre următoarele alianțe este menționată în sursa dată?",
            options: ["Antanta", "Puterile Centrale", "Tripla Alianță", "Liga Națiunilor"],
            correctAnswers: ["Antanta", "Puterile Centrale"],
            maxScore: 2
        },
        {
            id: 4,
            type: "open-ended",
            question: "Scrieţi, pe foaia de examen, litera corespunzătoare sursei care susţine că domnul organizează o campanie militară în sudul Dunării",
            keywords: ["A"],
            aliases: [],
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
            maxScore: 6
        },
        {
            id: 7,
            type: "open-ended",
            question: "Menţionaţi o asemănare între două fapte istorice desfășurate de români în secolul al XIV-lea.",
            keywords: [""],
            aliases: [],
            maxScore: 6
        },
        {
            id: 8,
            type: "open-ended",
            question: "Numiţi o mare alianță precizată în sursa dată.",
            keywords: ["Antanta"],
            aliases: ["Antanta", "Puterile Centrale"],
            maxScore: 2
        },
        {
            id: 9,
            type: "open-ended",
            question: "Precizaţi secolul la care se referă sursa dată.",
            keywords: ["XX-lea"],
            aliases: [],
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
            maxScore: 6
        },
        {
            id: 11,
            type: "open-ended",
            question: "Menţionaţi, din sursa dată, două informații referitoare la evenimentele din anul 1917.",
            keywords: ["marasti", "Marasesti", "victorie romaneasca", "Primului Razboi Mondial", "Oituz"],
            aliases: ["Mărăști", "Mărășești", "victorie românească", "Primului Război Mondial"],
            maxScore: 6
        },
        {
            id: 12,
            type: "open-ended",
            question: "Argumentaţi, printr-un fapt istoric relevant, afirmația conform căreia democrația din România Mare se consolidează în perioada 1921-1930. (Se punctează prezentarea unui fapt istoric relevant și utilizarea conectorilor care exprimă cauzalitatea şi concluzia.)",
            keywords: ["Constitutie 1923"],
            aliases: ["Constituție 1923", "Constituția 1923", "Constitutia 1923"],
            maxScore: 4
        },
        {
            id: 13,
            type: "open-ended",
            question: "Sub III,Reperul 1:Precizarea unei acțiuni politice desfășurate în România între anii 1946-1960 și menționarea a două aspecte referitoare la aceasta",
            keywords: ["Constitutia din 1948"],
            aliases: ["Constituția din 1948", "Colectivizarea 1949"],
            maxScore: 8
        },
        {
            id: 14,
            type: "open-ended",
            question: "Sub III,Reperul 2:Menționarea a două măsuri adoptate în politica internă a României între anii 1964-1985",
            keywords: ["Constitutia din 1965", "Tezele din iulie 1971"],
            aliases: ["Constituția din 1965", "cumulul de funcții", "cumulul de functii", "raționalizarea", "rationalizarea"],
            maxScore: 8
        },
        {
            id: 15,
            type: "open-ended",
            question: "Sub III,Reperul 3:Prezentarea unui fapt istoric din perioada național-comunismului prin care România participă la relațiile internaționale",
            keywords: ["Conferința de la Moscova 1967", "Actul Final al Conferintei de la Helsinki"],
            aliases: ["Actul Final al Conferinței de la Helsinki", "Conferinta de la Helsinki", "Conferința de la Helsinki", "Armatei Roșii în Cehoslovacia", "Armatei Rosii în Cehoslovacia", "Primavara de la Praga 1968"],
            maxScore: 8
        },
        {
            id: 16,
            type: "open-ended",
            question: "Sub III,Reperul 4:Formularea unui punct de vedere referitor la consolidarea democrației postdecembriste în perioada 1990-1995 şi susținerea acestuia printr-un argument istoric",
            keywords: ["Constitutiei din 1991"],
            aliases: ["Constituției din 1991"],
            maxScore: 8
        }
    ];

    const displayResults = (score, totalScore) => {
        let resultsHTML = `<h2 class="text-2xl font-bold mb-4">Your final score: ${score}/${totalScore}</h2>`;
        resultsHTML += '<div class="space-y-4 mb-4">';

        questions.forEach((question, index) => {
            const studentAnswer = studentAnswers[index];
            const isCorrect = checkAnswer(studentAnswer, question);

            // Use default empty arrays for keywords and aliases if not present
            const keywords = question.keywords ?? [];
            const aliases = question.aliases ?? [];

            resultsHTML += `
            <div class="border p-4 rounded-md mb-4">
                <h3 class="font-semibold">${question.question}</h3>
                <p class="mt-2"><strong>Your answer:</strong> ${Array.isArray(studentAnswer) ? studentAnswer.join(', ') : studentAnswer || 'No answer provided'
                }</p>
                <p class="mt-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}">
                    <strong>Result:</strong> ${isCorrect ? 'Correct' : 'Incorrect or Missing'}
                </p>
                <p class="mt-2"><strong>Correct answer(s):</strong> ${keywords.concat(aliases).join(', ') || 'No correct answers provided'
                }</p>
            </div>
        `;
        });

        resultsHTML += '</div>';
        return resultsHTML;
    };


    let currentIndex = 0;
    const studentAnswers = [];

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
                            `<button data-index="${i}" class="option px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 my-2">${option}</button>`
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
                    if (!studentAnswers[currentIndex]) {
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
        if (answerInput) studentAnswers[currentIndex] = answerInput.value;

        currentIndex += direction;
        renderQuestion();

        prevBtn.disabled = currentIndex === 0;
        nextBtn.style.display = currentIndex < questions.length - 1 ? 'block' : 'none';
        submitBtn.classList.toggle("hidden", currentIndex !== questions.length - 1);
    };

    const checkAnswer = (answer, question) => {
        if (question.type === "open-ended" && typeof answer === "string") {
            const lowerCaseAnswer = answer.toLowerCase();
            return (
                question.keywords.some((kw) => lowerCaseAnswer.includes(kw.toLowerCase())) ||
                question.aliases.some((alias) => lowerCaseAnswer.includes(alias.toLowerCase()))
            );
        } else if (question.type === "multiple-choice") {
            const selectedAnswers = Array.isArray(answer) ? answer : [];
            return selectedAnswers.every((ans) => question.correctAnswers.includes(ans));
        }
        return false;
    };

    const calculateScore = () => {
        return questions.reduce((total, question, index) => {
            const answer = studentAnswers[index];

            if (question.type === "open-ended" && typeof answer === "string") {
                const lowerCaseAnswer = answer.toLowerCase();
                let matchedCount = 0;

                question.keywords.forEach((kw) => {
                    if (lowerCaseAnswer.includes(kw.toLowerCase()) && matchedCount < question.keywords.length) {
                        matchedCount++;
                    }
                });

                question.aliases.forEach((alias) => {
                    if (lowerCaseAnswer.includes(alias.toLowerCase()) && matchedCount < question.keywords.length) {
                        matchedCount++;
                    }
                });

                return total + (matchedCount / question.keywords.length) * question.maxScore;
            } else if (question.type === "multiple-choice") {
                const correctAnswers = question.correctAnswers;
                const selectedAnswers = Array.isArray(answer) ? answer : [];

                const correctSelections = selectedAnswers.filter((ans) =>
                    correctAnswers.includes(ans)
                ).length;

                const incorrectSelections = selectedAnswers.filter((ans) =>
                    !correctAnswers.includes(ans)
                ).length;

                if (incorrectSelections === 0) {
                    return total + (correctSelections / correctAnswers.length) * question.maxScore;
                }
            }

            return total;
        }, 0);
    };

    submitBtn.addEventListener("click", () => {
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

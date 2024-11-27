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
            type: "open-ended",
            question: "Menționați câte un domn al Țării Românești la care se referă sursa A, respectiv sursa B.",
            keywords: ["Vlad Țepeș", "Mihai Viteazul"],
            aliases: ["Vlad Drăculea", "Mihai Bravu"],
            maxScore: 6
        },
        {
            id: 4,
            type: "open-ended",
            question: "Scrieți o relație cauză-efect stabilită între două informații selectate din sursa B.",
            keywords: [
                "Autoritățile nu puteau tolera răscoala țărilor române care lovea Imperiul otoman sub aspect politic, militar și economic",
                "zeci de mii de oameni sunt puși în mișcare spre Dunăre"
            ],
            aliases: [
                "turcii reacționează la răscoala lui Mihai",
                "răscoala atrage intervenția militară"
            ],
            maxScore: 7
        },
        {
            id: 5,
            type: "multiple-choice",
            question: "Care dintre următoarele alianțe este menționată în sursa dată?",
            options: ["Antanta", "Puterile Centrale", "Tripla Alianță", "Liga Națiunilor"],
            correctAnswers: ["Antanta", "Puterile Centrale"],
            maxScore: 2
        },
        {
            id: 6,
            type: "multiple-choice",
            question: "Care sunt două bătălii victorioase menționate în sursa dată, din vara anului 1917?",
            options: ["Mărășești", "Turtucaia", "Mărăști", "Oituz"],
            correctAnswers: ["Mărășești", "Mărăști", "Oituz"],
            maxScore: 3
        },
        {
            id: 7,
            type: "multiple-choice",
            question: "Menționați o caracteristică a opiniei publice românești din 1914.",
            options: [
                "Susținerea intrării în război alături de Puterile Centrale",
                "Dorința de eliberare a teritoriilor românești aflate sub stăpânire străină",
                "Indiferența față de război",
                "Opoziția față de Antanta"
            ],
            correctAnswers: ["Dorința de eliberare a teritoriilor românești aflate sub stăpânire străină"],
            maxScore: 3
        }
    ];

    let currentIndex = 0;
    const studentAnswers = [];

    const questionContainer = document.getElementById("questionContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const submitBtn = document.getElementById("submitBtn");

    // Render a question
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

        // Add event listeners for multiple-choice answers
        if (question.type === "multiple-choice") {
            const options = document.querySelectorAll(".option");
            options.forEach((option) => {
                option.addEventListener("click", (e) => {
                    // Allow multiple selections
                    if (!studentAnswers[currentIndex]) {
                        studentAnswers[currentIndex] = [];
                    }

                    const answerIndex = studentAnswers[currentIndex].indexOf(e.target.innerText);

                    if (answerIndex === -1) {
                        studentAnswers[currentIndex].push(e.target.innerText);
                        option.classList.add('bg-primary', 'text-white'); // Highlight selected button
                    } else {
                        studentAnswers[currentIndex].splice(answerIndex, 1);
                        option.classList.remove('bg-primary', 'text-white'); // Remove highlight if deselected
                    }
                });
            });
        }
    };

    // Navigate questions
    const navigateQuestions = (direction) => {
        // Save the answer for open-ended questions
        const answerInput = document.getElementById("answerInput");
        if (answerInput) studentAnswers[currentIndex] = answerInput.value;

        currentIndex += direction;
        renderQuestion();

        // Toggle button states
        prevBtn.disabled = currentIndex === 0;

        // Grey out the "Previous" button only on the first question
        if (currentIndex === 0) {
            prevBtn.classList.add('bg-gray-300', 'text-gray-700');
            prevBtn.classList.remove('bg-primary', 'text-white');
        } else {
            prevBtn.classList.remove('bg-gray-300', 'text-gray-700');
            prevBtn.classList.add('bg-primary', 'text-white');
        }

        nextBtn.style.display = currentIndex < questions.length - 1 ? 'block' : 'none';
        submitBtn.classList.toggle("hidden", currentIndex !== questions.length - 1);
    };

    // Calculate score
    const calculateScore = () => {
        return questions.reduce((total, question, index) => {
            const answer = studentAnswers[index];

            if (question.type === "open-ended" && typeof answer === "string") {
                // Convert answer to lowercase for case-insensitive comparison
                const lowerCaseAnswer = answer.toLowerCase();
                let matchedCount = 0;

                // Check keywords
                question.keywords.forEach((kw) => {
                    if (lowerCaseAnswer.includes(kw.toLowerCase()) && matchedCount < question.keywords.length) {
                        matchedCount++;
                    }
                });

                // Check aliases if not enough keywords matched
                question.aliases.forEach((alias) => {
                    if (lowerCaseAnswer.includes(alias.toLowerCase()) && matchedCount < question.keywords.length) {
                        matchedCount++;
                    }
                });

                // Calculate score based on matched keywords (max number of matched items is limited by the length of keywords)
                return total + (matchedCount / question.keywords.length) * question.maxScore;

            } else if (question.type === "multiple-choice") {
                // Calculate score for multiple correct answers
                const correctAnswers = question.correctAnswers;
                const selectedAnswers = Array.isArray(answer) ? answer : [];

                const correctSelections = selectedAnswers.filter(answer =>
                    correctAnswers.includes(answer)
                ).length;

                const incorrectSelections = selectedAnswers.filter(answer =>
                    !correctAnswers.includes(answer)
                ).length;

                // Full score only if there are no incorrect selections
                if (incorrectSelections === 0) {
                    return total + (correctSelections / correctAnswers.length) * question.maxScore;
                }
            }

            return total;
        }, 0);
    };

    // Submit the test
    submitBtn.addEventListener("click", () => {
        const score = calculateScore();
        questionContainer.innerHTML = `<h2 class="text-2xl font-bold">Your final score: ${score}/${questions.reduce((acc, q) => acc + q.maxScore, 0)}</h2>`;
        prevBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
        submitBtn.classList.add("hidden");
    });

    // Add event listeners for buttons
    nextBtn.addEventListener("click", () => navigateQuestions(1));
    prevBtn.addEventListener("click", () => navigateQuestions(-1));

    // Initialize the quiz
    renderQuestion();
    prevBtn.disabled = true;
});

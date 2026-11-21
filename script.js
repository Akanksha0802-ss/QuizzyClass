
const questions = [
    {
        question: "What is Python?",
        options: [
            "A programming language",
            "An operating system",
            "A web browser",
            "A computer device"
        ],
        correctAnswer: 0
    },

    {
        question: "Which function is used to display output in Python?",
        options: [
            "input()",
            "print()",
            "display()",
            "show()"
        ],
        correctAnswer: 1
    },

    {
        question: "Which symbol is used for comments in Python?",
        options: [
            "//",
            "/* */",
            "#",
            "<!-- -->"
        ],
        correctAnswer: 2
    },

    {
        question: "Which function is used to take input from the user?",
        options: [
            "print()",
            "input()",
            "show()",
            "write()"
        ],
        correctAnswer: 1
    },

    {
        question: "Which of these is a valid Python variable name?",
        options: [
            "2name",
            "my-name",
            "my_name",
            "my name"
        ],
        correctAnswer: 2
    }
];

// // Select the question element
// const questionText = document.getElementById("question-text");

// // Select all answer option labels
// const optionLabels = document.querySelectorAll(".options label");

// // Function to display a question
// function displayQuestion() {

//     // Get the first question
//     const currentQuestion = questions[0];

//     // Display the question text
//     questionText.textContent = currentQuestion.question;

//     // Display the answer options
//     currentQuestion.options.forEach((option, index) => {

//         optionLabels[index].innerHTML = `
//             <input type="radio" name="answer" value="${index}">
//             ${option}
//         `;

//     });
// }

// // Call the function
// displayQuestion();


let currentQuestionIndex = 0;
let selectedAnswers = new Array(questions.length).fill(null);

// Select HTML elements
const questionText = document.getElementById("question-text");
const optionLabels = document.querySelectorAll(".options label");
const optionsContainer = document.querySelector(".options");

const questionNumber = document.getElementById("question-number");
const progressFill = document.querySelector(".progress-fill");

const previousButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");

// Display the current question
function displayQuestion() {

    // Get the current question
    const currentQuestion = questions[currentQuestionIndex];

    // Display question text
    questionText.textContent = currentQuestion.question;

    // Display question number
    questionNumber.textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    // Update progress bar
    const progress =
        ((currentQuestionIndex + 1) / questions.length) * 100;

    progressFill.style.width = `${progress}%`;

    // Display answer options
    currentQuestion.options.forEach((option, index) => {

        optionLabels[index].innerHTML = `
        <input 
          type="radio" 
          name="answer" 
          value="${index}"
          ${selectedAnswers[currentQuestionIndex] === index ? "checked" : ""}
    >
    ${option}
`;

    });

    // Disable Previous button on first question
    previousButton.disabled = currentQuestionIndex === 0;

    // Change Next button text on last question
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "Submit";
    } else {
        nextButton.textContent = "Next";
    }
}

// Next button functionality
nextButton.addEventListener("click", function () {

    if (currentQuestionIndex < questions.length - 1) {

        currentQuestionIndex++;

        displayQuestion();

    }

});

// Previous button functionality
previousButton.addEventListener("click", function () {

    if (currentQuestionIndex > 0) {

        currentQuestionIndex--;

        displayQuestion();

    }

});

// Display the first question
displayQuestion();

// Save the selected answer
optionsContainer.addEventListener("change", function (event) {

    if (event.target.name === "answer") {

        selectedAnswers[currentQuestionIndex] =
            Number(event.target.value);

    }

});

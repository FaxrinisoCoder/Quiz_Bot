const questions = [
  {
    question: "HTML nima uchun ishlatiladi?",
    options: [
      "Web sahifa yaratish",
      "Database yaratish",
      "Video montaj qilish",
      "Operatsion sistema yaratish",
    ],
    correct: 0,
  },

  {
    question: "CSS nima uchun ishlatiladi?",
    options: [
      "Web sahifani bezash",
      "Server yaratish",
      "Database saqlash",
      "Python kodini ishga tushirish",
    ],
    correct: 0,
  },

  {
    question: "JavaScript nima?",
    options: ["Dasturlash tili", "Operatsion sistema", "Brauzer", "Database"],
    correct: 0,
  },

  {
    question: "Python nima?",
    options: [
      "Dasturlash tili",
      "Grafik muharrir",
      "Brauzer",
      "Operatsion sistema",
    ],
    correct: 0,
  },

  {
    question: "Ctrl + C nima qiladi?",
    options: ["Nusxa oladi", "Joylashtiradi", "O‘chiradi", "Saqlaydi"],
    correct: 0,
  },

  {
    question: "Ctrl + V nima qiladi?",
    options: ["Joylashtiradi", "Nusxa oladi", "O‘chiradi", "Saqlaydi"],
    correct: 0,
  },

  {
    question: "Python faylining kengaytmasi qanday?",
    options: [".py", ".html", ".css", ".js"],
    correct: 0,
  },

  {
    question: "HTML faylining kengaytmasi qanday?",
    options: [".html", ".py", ".css", ".json"],
    correct: 0,
  },

  {
    question: "CSS faylining kengaytmasi qanday?",
    options: [".css", ".html", ".py", ".js"],
    correct: 0,
  },

  {
    question: "JavaScript faylining kengaytmasi qanday?",
    options: [".js", ".py", ".html", ".css"],
    correct: 0,
  },
];

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

const questionElement = document.getElementById("question");

const optionsElement = document.getElementById("options");

const nextButton = document.getElementById("nextBtn");

const progressElement = document.getElementById("progress");

const progressBar = document.getElementById("progressBar");

function showQuestion() {
  selectedAnswer = null;

  nextButton.disabled = true;

  const question = questions[currentQuestion];

  questionElement.textContent = question.question;

  progressElement.textContent = `Savol ${currentQuestion + 1} / ${questions.length}`;

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  progressBar.style.width = `${progress}%`;

  optionsElement.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.className = "option";

    button.textContent = option;

    button.addEventListener("click", () => selectAnswer(button, index));

    optionsElement.appendChild(button);
  });
}

function selectAnswer(button, index) {
  const buttons = document.querySelectorAll(".option");

  buttons.forEach((btn) => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");

  selectedAnswer = index;

  nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
  if (selectedAnswer === null) {
    return;
  }

  const correct = questions[currentQuestion].correct;

  if (selectedAnswer === correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  const percentage = Math.round((score / questions.length) * 100);

  document.querySelector(".quiz-card").innerHTML = `

        <div class="result">

            <h2>Quiz tugadi!</h2>

            <p class="score">
                ${score} / ${questions.length}
            </p>

            <p>
                Natija: ${percentage}%
            </p>

            <br>

            <button
                class="restart-btn"
                onclick="restartQuiz()"
            >
                Qayta boshlash
            </button>

        </div>

    `;
}

function restartQuiz() {
  currentQuestion = 0;

  score = 0;

  location.reload();
}

showQuestion();

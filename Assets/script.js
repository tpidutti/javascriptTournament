// create questions with answers in an array
var questions = [
  {
    question: "JavaScript was originally called what name?",
    answers: ["Cadillac", "Hot Lava", "Cuppa Joe", "Mocha"],
    rightAnswer: "Mocha",
  },
  {
    question:
      "The difference between let and var in JavaScript is that let is block scope, while var is function scoped",
    answers: ["#true", "false"],
    rightAnswer: "true",
  },
  {
    question: "The following are all build in methods of JavaScript, except.",
    answers: ["concat()", "condot()", "sup()", "pop()"],
    rightAnswer: "condot()",
  },
  {
    question: "Which is not an error name value in JavaScript?",
    answers: ["Range Error", "Eval Error", "Mode Error", "Reference Error"],
    rightAnswer: "Mode Error",
  },
  {
    question:
      "An bow function is a short way of writing a function expression.",
    answers: ["true", "false"],
    rightAnswer: "false",
  },
];

//variables for the correct answer, the users answer, which question number, the total amount of time, interval of time decreasing, and the top score
var rightAnswer = "";
var userAnswer = "";
var questionNumber = 0;
var secondsLeft = 50;
var interval;
var highscore = 0;

var timeEl = document.querySelector("#time");

// start button click so game begins
document.getElementById("start").addEventListener("click", startGame);

// When game starts the timer starts and question is displayed
function startGame() {
  startTime();
  document.getElementById("start").classList.add("hide");
  displayQuestion(questions, questionNumber);
}

// start the time with word time replaced by count down begin with 50 seconds, decrease in 1 second increments and when reaches 0, show game over
function startTime() {
  interval = setInterval(() => {
    if (secondsLeft === 0) {
      clearInterval(interval);
      alert("Game Over");
    } else {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
    }
  }, 1000);
}

// variable targeting inquiry id to be used in next function
var inquiryEl = document.getElementById("inquiry");

// display questions, answers in buttons
function displayQuestion(arr, num) {
  console.log("displayQuestion");
  inquiryEl.classList.remove("hide");
  document.getElementById("questions").innerText = arr[num].question;
}

// move to next question when answer button is clicked
var ansButton1 = document.getElementById("button1");
ansButton1.addEventListener("click", nextQuestion);

var ansButton1 = document.getElementById("button2");
ansButton1.addEventListener("click", nextQuestion);

var ansButton1 = document.getElementById("button3");
ansButton1.addEventListener("click", nextQuestion);

var ansButton1 = document.getElementById("button4");
ansButton1.addEventListener("click", nextQuestion);

// show next question in increasing order
function nextQuestion() {
  // increase our questionNumber by 1
  questionNumber++;
  // we want to dispaly our new question
  displayQuestion(questions, questionNumber);
}

// show answer text on buttons
// I answer a question, determine if correct

// answer a question incorrectly, 5 seconds is subtracted from the clock
// game over when all questions are answered
// I can save my initials and my score when the game is over

// goBack and clearHighscores buttons

// create questions with answers in an array
var questions = [
  {
    question: "Javascript was originally called what name?",
    answers: ["Cadillac", "Hot Lava", "Cuppa Joe"],
    rightAnswer: "Mocha",
  },
  {
    question: "#",
    answers: ["#", "#", "#"],
    rightAnswer: "",
  },
  {
    question: "#",
    answers: ["#", "#", "#"],
    rightAnswer: "",
  },
  {
    question: "#",
    answers: ["#", "#", "#"],
    rightAnswer: "",
  },
  {
    question: "#",
    answers: ["#", "#", "#"],
    rightAnswer: "",
  },
  {
    question: "#",
    answers: ["#", "#", "#"],
    rightAnswer: "",
  },
];

//variables for the correct answer, the users answer, which question number, the total amount of time, interval and the top score
var rightAnswer = "";
var userAnswer = "";
var questionNumber = 0;
var secondsLeft = 50;
var interval;
var highscore = 0;

var timeEl = document.querySelector("#time");

// When game starts the timer starts and question is displayed
function startGame() {
  startTime();
  document.getElementById("start").classList.add("hide");
  displayQuestion(questions);
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

// start button click so game begins
document.getElementById("start").addEventListener("click", startGame);

// display questions, answers in buttons
function displayQuestion(arr) {
  document.getElementById(questions).innerText = arr[questionNumber].questions;


}

// presented with a question
// I answer a question, am presented with another question
// answer a question incorrectly, 5 seconds is subtracted from the clock
// game over when all questions are answered
// I can save my initials and my score when the game is over

// goBack and clearHighscores buttons
// link to view highscores

//   document.getElementById("done").classList.add("hide");
//   document.getElementById("highscores").classList.add("hide");
// document.getElementById("inquiry").classList.add("show");
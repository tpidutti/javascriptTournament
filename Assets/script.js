// create questions with answers in an array
var questions = [
    {
      question: "How xhhjgijkk kikhjhvj?",
      answers: ["vcbmnbn", "tooiuoio", "hjgkk"],
      rightAnswer: "asgfhjhk",
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

// start button  click so game begins
document.getElementById("start").addEventListener("click", startGame);


function displayQuestion(arr) {
  document.getElementById("questions").innerText = arr[questionNumber].question;
}










// question with answer buttons clicks that -10 seconds with incorrect answers

// Game over all questions answered

// save initals and score in a form

// goBack and clearHighscores buttons

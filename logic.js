// Var from HTML
var startBtn = document.getElementById("startBtn")
var questions = document.getElementById("questions")
var boxQuestions = document.getElementById("boxQuestions")
var timer = document.getElementById("timer")
var timeSec = 30;
var nameholder = document.getElementById("nameholder");
var par = document.getElementById("par")
var timeLeft = document.getElementById("timeLeft");



// questions for the quiz
var questions = [
    {
        question: "Where do we put the JavaScript link in HTML?",
        answer1: "Head",
        answer2: "Body",
        answer3: "Div",
        answer4: "Header",
        rightAns: "1"
    }, {
        question: "What is a JavaScript keyword that refers to the object?",
        answer1: "That",
        answer2: "Symbol",
        answer3: "String",
        answer4: "This",
        rightAns: "4"
    },
    {
        question: "How do you start a FOR loop?",
        answer1: "for i = 1 to 3",
        answer2: "for (i <= 3; i++)",
        answer3: "for (i = 0; i <= 3; i++)",
        answer4: "for (i = 0; i <= 3)",
        rightAns: "3"
    }, {
        question: "How would you create a function in JavaScript?",
        answer1: "function = myFunction()",
        answer2: "function myFunction()",
        answer3: "function:myFunction()",
        answer4: "function myFunction{}",
        rightAns: "2"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answer1: "=",
        answer2: "+",
        answer3: "*",
        answer4: "%",
        rightAns: "1"
    },
]

// adding questions to a function
function quest() {
    var ans = questions[showing];
    question.textContent = ans.question;
    answer1.textContent = ans.answer1;
    answer2.textContent = ans.answer2;
    answer3.textContent = ans.answer3;
    answer4.textContent = ans.answer4;
}
var before = questions.length - 1;
var showing = 0;

// click function
startBtn.addEventListener("click", startGame)

function startGame() {
    console.log('start')
    startBtn.style.display = "none";
    par.style.display = "none";
    quest()
    boxQuestions.style.display = "block"
    counter()
}

// scorebox holder function to display
function scoreHolder() {
    timeLeft.textContent = "You Scored..." + timeSec;
    boxQuestions.style.display = "none"
    nameholder.style.display = "block";
}

// function for right answers
function correctAns(rightAns) {
    if (rightAns === questions[showing].rightAns) {
    } else {
        timeSec -= 5;
    }
    if (showing < before) {
        showing++;
        quest();
    } else
        scoreHolder();
}

// function for the counter
function counter() {
    var count= setInterval(function () {
     timeSec--;
     var seconds = timeSec.toString();
     timer.textContent = seconds;
     if (timeSec <= 0) {
         clearInterval(count);
     } else if (before === showing) {
         clearInterval(count)
         
     }
 },1000)
}

// localStoage to add name to scoreholder

// var highScores = Json.parse(localStorage.getItem(highScores)) || [];

//     var score = {
//         name

//         score: recentScore













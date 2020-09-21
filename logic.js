var currentQuestionIndex = 0



function startQuiz() {
    var startScreenEl = document.getElementById("start-screen")

    // hide start screen once start button is clicked

    // start timer upon clicking "Start Quiz"

    getQuestion()
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex]
    var currentChoices = questions[currentQuestionIndex].choices

    var titleEl = document.getElementById("question-title")
    titleEl.textContent = currentQuestion.question

    var choicesEl = document.getElementById("choices")
    console.log(currentChoices)

   for(var i = 0; i < currentChoices.length; i++) {
        var choiceSelection = document.createElement("button")
        choiceSelection.setAttribute("class", "choice")
        choiceSelection.setAttribute("value", currentChoices[i])

        choiceSelection.textContent = i + 1 + ". " + currentChoices[i]

        choicesEl.appendChild(choiceSelection)
    }
}

// Here is where you will define an onclick to run the startQuiz function
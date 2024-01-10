const quizBoxEl = document.querySelector("#quiz-box");
const startButton = document.querySelector("#start-game");
const resetButton = document.querySelector("#reset-game");
const wrongAlert = document.querySelector("#wrong-alert")
const questionEl = document.querySelector(".question");
const answersArray = document.querySelectorAll(".answer-choices > li");
const timerEl = document.createElement("div");

// 'indexArr' will be an array of numbers representing our available questions
// and their corresponding indices, to avoid repeating questions
let indexArr = [];
let currentQuestion;
let timeLeft;
let timeInterval;

// array of objects created in separate "questions.js" script
// each object will hold a question and answer choices with a correct answer
// answer choices will be in an array(including correct answer), but correct answer will ALSO be its own separate property
// if selected answer choice is EQUAL to correct answer property, RETURN CORRECT
// if not equal, RETURN WRONG


// ----------- FUNCTION SECTION -----------


// function to navigate to the next page after finishing quiz
function finishQuiz() {
    if (localStorage.getItem("scores") === null) {
        localStorage.setItem("scores", JSON.stringify([]))
    }
    localStorage.setItem("latestScore", timeLeft);
    window.location.replace('./highscores.html');
}

// function to count down the timer
function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft;  
        if (timeLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timeInterval);
            finishQuiz();
        }
    }, 1000);
}

// function to fill the quiz box content with a set question and its answer choices
function setQuestion(index) {
    currentQuestion = questionSet[indexArr[index]];
    let answerCount = answersArray.length;
    let answers = Array.from(Array(answerCount).keys())

    for(let i=0; i < answersArray.length; i++) {

        // randomize answers
        let ansIndex = Math.floor(Math.random() * answers.length);
        answersArray[i].textContent = currentQuestion.possibleAns[answers[ansIndex]];
        answers.splice(ansIndex, 1);
    }
    questionEl.textContent = currentQuestion.question;
    indexArr.splice(index, 1);
}

// function to pick a random question for the quiz
function pickRandomQuestion() {    
    // randomIndex picks a random number from our 'indexArr' array
    if (indexArr.length == 0) {
        clearInterval(timeInterval);
        finishQuiz();
    } else {
        wrongAlert.style.visibility = "hidden";
        const randomIndex = Math.floor(Math.random() * indexArr.length);
        setQuestion(randomIndex);
    }
}

// function checks if answer is correct and proceeds to next question
function checkAnswer(event) {
    const answer = event.target.textContent;

    if (answer == currentQuestion.correctAns){
        // if CORRECT answer
        pickRandomQuestion();
    } else {
        // if WRONG answer
        wrongAlert.style.visibility = "visible";
        timeLeft = timeLeft - 5;
        timerEl.textContent = timeLeft;  
    }
}


// ----------- EVENTS SECTION -----------


// button click event to start the game
startButton.onclick = function startGame() {
    // hides start button and shows quiz box and reset button
    quizBoxEl.style.display = "block";
    resetButton.style.display = "block";
    wrongAlert.style.display = "block";
    startButton.style.display = "none";

    // adds quiz-box styling from bootstrap
    quizBoxEl.classList.add('d-inline-flex', 'justify-content-center')

    // Assign or "initialize" indexArr everytime the quiz starts
    indexArr = Array.from(Array(questionSet.length).keys());
    pickRandomQuestion();

    // creates timer element
    // document.body.querySelector("footer").insertBefore(timerEl, resetButton);
    wrongAlert.after(timerEl);
    timerEl.setAttribute("id", "timer");
    timerEl.classList.add('fs-5', 'col-12', 'text-center');
    timeLeft = questionSet.length * 10;
    timerEl.textContent = timeLeft;
    countdown();
}

// button click event to restart the game
resetButton.onclick = function resetGame() {
    // removes quiz-box styling from bootstrap
    quizBoxEl.classList.remove('d-inline-flex', 'justify-content-center')

    // reveals start button and hides quiz box and reset button
    startButton.style.display = "block";
    quizBoxEl.style.display = "none";
    resetButton.style.display = "none";
    wrongAlert.style.display = "none";

    // removes timer element
    timerEl.remove();
    clearInterval(timeInterval);
}

// event listener for answer choices to be clicked
Array.from(answersArray).forEach(function(event) {
    event.addEventListener("click", checkAnswer);
})
const quizBoxEl = document.querySelector("#quiz-box");
const startButton = document.querySelector("#start-game");
const resetButton = document.querySelector("#reset-game");
const questionEl = document.querySelector(".question");
const answersArray = document.querySelectorAll(".answer-choices button");
const timerEl = document.createElement("div");

// 'indexArr' will be an array of numbers representing our available questions
// and their corresponding indices, to avoid repeating questions
let indexArr = [];

// button click event to start the game
startButton.onclick = function startGame() {
    // hides start button and shows quiz box and reset button
    quizBoxEl.style.display = "block";
    resetButton.style.display = "block";
    startButton.style.display = "none";

    // Assign or "initialize" indexArr everytime the quiz starts
    indexArr = Array.from(Array(questionSet.length).keys());
    
    // creates timer element
    document.body.append(timerEl);
    timerEl.setAttribute("id", "timer");
    timerEl.textContent = "timer";
}

// button click event to restart the game
resetButton.onclick = function resetGame() {
    // reveals start button and hides quiz box and reset button
    startButton.style.display = "block";
    quizBoxEl.style.display = "none";
    resetButton.style.display = "none";

    // removes timer element
    timerEl.remove();
}

// array of objects created in separate "questions.js" script
// each object will hold a question and answer choices with a correct answer
// answer choices will be in an array(including correct answer), but correct answer will ALSO be its own separate property
// if selected answer choice is EQUAL to correct answer property, RETURN CORRECT
// if not equal, RETURN WRONG

// function to fill the quiz box content with a set question and its answer choices
function setQuestion(index) {
    const currentQuestion = questionSet[index];
    for(let i=0; i < answersArray.length; i++) {
        answersArray[i].textContent = currentQuestion.possibleAns[i];
    }
    questionEl.textContent = currentQuestion.question;
}

// function to pick a random question for the quiz
function pickRandomQuestion() {    
    // randomIndex picks a random number from our 'indexArr' array
    const randomIndex = Math.floor(Math.random() * indexArr.length);
    setQuestion(randomIndex);
}
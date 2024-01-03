const quizBox = document.querySelector("#quiz-box");
const startButton = document.querySelector("#start-game");
const resetButton = document.querySelector("#reset-game");

startButton.onclick = function startGame() {
    quizBox.style.display = "block";
    resetButton.style.display = "block";
    
    startButton.style.display = "none";
    // spawn in timer element
}

resetButton.onclick = function startGame() {
    startButton.style.display = "block";

    quizBox.style.display = "none";
    resetButton.style.display = "none";
    // delete timer element
}


// array of objects.
// each object will hold a question and answer choices and correct answer
// answer choices will be in an array, AND correct answer will be its own separate string
// if selected answer choice is SAME as correct answer property, RETURN CORRECT
// if not the same, RETURN WRONG
class quizQuestion {
    question;
    correctAns;
    possibleAns = [];
}


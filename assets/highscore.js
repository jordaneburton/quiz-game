const returnButton = document.querySelector("#return");
const submitButton = document.querySelector("#submit");
const scoreForm = document.querySelector("form");
const highscoreBox = document.querySelector("#highscore-box");

function displayScores() {
    const highscores = JSON.parse(localStorage.getItem("scores"));
    highscores.forEach(element => {
        const eachScoreEl = document.createElement("div");
        eachScoreEl.textContent = element.initials + ": " + element.points + " pts";
        highscoreBox.append(eachScoreEl);
    });
}

// event listener for submitting score
submitButton.onclick = function submitScore() {
    // prevents refreshing of page
    event.preventDefault();

    // check for any input in initials box (cannot be NOTHING)
    scoreName = scoreForm.querySelector("#initials").value;
    if (scoreName != "") {
        const score = {
            initials: scoreName,
            points: localStorage.getItem("latestScore") 
        }

        // check if score and initials already exist
        const scoreExists = (element) => {
            return (element.initials == scoreName && element.points == localStorage.getItem("latestScore"));
        }
        const existingScores = JSON.parse(localStorage.getItem("scores")); 
        
        // if so, do not upload the score to localStorage      
        if (!existingScores.some(scoreExists)) {
            existingScores.push(score);
            localStorage.setItem("scores", JSON.stringify(existingScores));
        }
        
        // change webpage look to display all scores
        scoreForm.style.display = "none";
        highscoreBox.style.display = "block";
        displayScores();

    } else {
        alert("Please enter your initials.")
    }
}

// returns to quiz page
returnButton.onclick = function returnToGame() {
    window.location.replace('./index.html');
}
const returnButton = document.querySelector("#return");
const submitButton = document.querySelector("#submit");
const scoreForm = document.querySelector("form");
const highscoreBox = document.querySelector("#highscore-box");

scoreForm.querySelector("div").textContent = "Your score is " + localStorage.getItem("latestScore");

// go through each score and display it in highscore box
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
    scoreName = scoreForm.querySelector("#initials").value.trim();
    if (scoreName != "" && scoreName.length < 4) {
        const score = {
            initials: scoreName,
            points: localStorage.getItem("latestScore") 
        }

        // check if score and initials already exist
        const scoreExists = (element) => {
            return (element.initials == scoreName && element.points == localStorage.getItem("latestScore"));
        }
        let existingScores = JSON.parse(localStorage.getItem("scores")); 
        
        // if it doesn't, upload the score to localStorage      
        if (!existingScores.some(scoreExists)) {
            
            // orders the scores on the scoreboard
            if (existingScores.length == 0) {
                existingScores.push(score);
            } else {
                for (let i=0; i < existingScores.length; i++) {
                    if (score.points > existingScores[i].points) {
                        existingScores.splice(i, 0, score);
                        break;
                    }
                    if (i == (existingScores.length - 1)) {
                        existingScores.push(score);
                        break;
                    }
                }
            }
            localStorage.setItem("scores", JSON.stringify(existingScores));
        }
        
        // change webpage look to display all scores
        scoreForm.style.display = "none";
        highscoreBox.style.display = "block";
        displayScores();

    } else {
        alert("Please enter your initials. Must be 3 characters or less.")
    }
}

// returns to quiz page
returnButton.onclick = function returnToGame() {
    window.location.replace('./index.html');
}
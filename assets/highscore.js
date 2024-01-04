const returnButton = document.querySelector("#return");
const submitButton = document.querySelector("#submit");
const scoreForm = document.querySelector("form");
const highscoreBox = document.querySelector("#highscore-box");

submitButton.onclick = function submitScore() {
    event.preventDefault();
    scoreName = scoreForm.querySelector("#initials").value;
    if (scoreName != "") {
        const score = {
            initials: scoreName,
            points: localStorage.getItem("latestScore") 
        }

        const scoreExists = (element) => {
            return (element.initials == scoreName && element.points == localStorage.getItem("latestScore"));
        }
        const existingScores = JSON.parse(localStorage.getItem("scores"));       
        
        if (!existingScores.some(scoreExists)) {
            existingScores.push(score);
            localStorage.setItem("scores", JSON.stringify(existingScores));
        }
        scoreForm.style.display = "none"; 
        highscoreBox.style.display = "none";
    } else {
        alert("Please enter your initials.")
    }
     
}

// returns to quiz page
returnButton.onclick = function returnToGame() {
    window.location.replace('./index.html');
}
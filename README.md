# Quiz-Game
A Javascript app styled with Bootstrap where you can take a short Javascript quiz: [Click to go to website](https://jordaneburton.github.io/quiz-game/)

## Description

For this project, I had to create a quiz game from scratch. One of the requirements for the application were that the quiz be timed. In addition, answering a question wrong should subtract time from the quiz timer. Once you have answered all the questions or the timer reaches zero, you should be shown an input form to post your score to a scoreboard. The quiz uses your time as the score, so be quick and correct!

The scoreboard uses local storage to keep track of previous scores. I do use a separate html file to display the score submission/highscore page. The reason for this is because I hide and reveal DOM elements using the `style.display` property for the quiz page. In order to keep the highscore on the same webpage, I would have to either hide or delete all of the previous quiz elements on the page. This becomes a problem if I want to restart the quiz (I would then have to reset all elements on the page manually), with the easiest solution being to reload the page. So instead, I chose to navigate to a different page for the scoreboard and provide a button to go back to the quiz page. The quiz page does also have a reset button that will restart the quiz and go back to the starting menu. I implemented this in case unknown bugs occur, as well as for the user to restart the quiz for any other reason they have.

When writing my Javascript, I chose to create a separate script for just the quiz questions. This actually makes it slighly easier for a user to customize the quiz. All they have to do is modify the existing `quizQuestion` objects and adjust their properties. The quiz questions inherit a class that comes prestructured with a `question` property and an array property with 4 answer choices. **It is worth noting**, that the application is **designed to have 4 answer choices** for each question. Of course, this can be modified in the `index.html` file by adding extra `<li>` elements. However, the number of answer choices must be the same for all quiz questions in both the `questions.js` and `index.html` files. Otherwise, the code will break and answer choices may display incorrectly.

After completion of the quiz, you can submit a score and your score will be displayed alongside previous scores saved in your local storage. However, when submitting your initials for your score, you can submit numbers and symbols for your initials. But there is a 3 character limit as well as some form input is required. Otherwise, the application will prompt an alert informing the user of the form requirements. Until the requirements are met, the scoreboard will not be visible. Once valid initials are input, your score will be saved to local storage and displayed along side any previous scores you have.

Here is a link to the deployed project: [https://jordaneburton.github.io/quiz-game/]

### Dependencies

* An up-to-date browser

## Authors

Jordan Burton 
[@jordaneburton](https://github.com/jordaneburton)

## Acknowledgments

Thank you to [denise_rakestraw9](https://quizlet.com/denise_rakestraw9/sets) on Quizlet for the quiz questions!

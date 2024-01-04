// declare a class with common properties for questions
const questionSet = [];
class quizQuestion {
    question;
    correctAns;
    possibleAns = [];
}

// initialize questions as objects
const question1 = new quizQuestion()
const question2 = new quizQuestion()
const question3 = new quizQuestion()
const question4 = new quizQuestion()
const question5 = new quizQuestion()
const question6 = new quizQuestion()
const question7 = new quizQuestion()

// fill properties of each question object
// *NOTE* technically this can be done with a constructor, 
//          I just don't remember the syntax at the moment

question1.question = ("First Sample Question Text to Fill Space on Webpage");
question1.correctAns = ("Correct Answer");
question1.possibleAns.push("Correct Answer", "Correct", "Incorrect", "Answer");
questionSet.push(question1);

question2.question = ("Second Sample Question Text to Fill Space on Webpage");
question2.correctAns = ("Correct Answer");
question2.possibleAns.push("Correct Answer", "Correct", "Incorrect", "Answer");
questionSet.push(question2);

question3.question = ("Third Sample Question Text to Fill Space on Webpage");
question3.correctAns = ("Correct Answer");
question3.possibleAns.push("Correct Answer", "Correct", "Incorrect", "Answer");
questionSet.push(question3);

question4.question = ("Fourth Sample Question Text to Fill Space on Webpage");
question4.correctAns = ("Correct Answer");
question4.possibleAns.push("Correct Answer", "Correct", "Incorrect", "Answer");
questionSet.push(question4);

question5.question = ("Fifth Sample Question Text to Fill Space on Webpage");
question5.correctAns = ("Correct Answer");
question5.possibleAns.push("Correct Answer", "Correct", "Incorrect", "Answer");
questionSet.push(question5);

question6.question = ("Sixth Sample Question Text to Fill Space on Webpage");
question6.correctAns = ("Correct Answer");
question6.possibleAns.push("Correct Answer", "Correct", "Incorrect", "Answer");
questionSet.push(question6);

question7.question = ("Seventh Sample Question Text to Fill Space on Webpage");
question7.correctAns = ("Correct Answer");
question7.possibleAns.push("Correct Answer", "Correct", "Incorrect", "Answer");
questionSet.push(question7);
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

question1.question = ("Inside which HTML element do we put the JavaScript?");
question1.correctAns = ("<script>");
question1.possibleAns.push("<script>", "<javascript>", "<js>", "<scripting>");
questionSet.push(question1);

question2.question = ("Where is the correct place to insert a JavaScript?");
question2.correctAns = ("Both <head> and <body> sections");
question2.possibleAns.push("Both <head> and <body> sections", "<head> section", "<body> section", "<meta> section");
questionSet.push(question2);

question3.question = ("How do you write 'Hello World' in an alert box?");
question3.correctAns = ("alert('Hello World')");
question3.possibleAns.push("alert('Hello World')", "msgbox('Hello World')", "alertBox('Hello World')", "alertBox='Hello World'");
questionSet.push(question3);

question4.question = ("How do you create a function?");
question4.correctAns = ("function myFunction()");
question4.possibleAns.push("function myFunction()", "function:myFunction()", "function=myFunction()", "myFunction():function");
questionSet.push(question4);

question5.question = ("How do you call a function named 'myFunction'?");
question5.correctAns = ("myFunction()");
question5.possibleAns.push("myFunction()", "call myFunction()", "call function myFunction", "Call.myFunction()");
questionSet.push(question5);

//elements that will be manipulated
var startBtnEl = document.querySelector("#start-btn");
var introDisplayEl = document.querySelector("#intro");
var quizDisplaEl = document.querySelector("#quiz");
var quizQuestionDisplayEl = document.querySelector("#question");
var answerAEl = document.querySelector("#choiceA");
var answerBEl = document.querySelector("#choiceB");
var answerCEl = document.querySelector("#choiceC");
var answerDEl = document.querySelector("#choiceD");

//quiz questions with anwers
var quizQuestion = [{
    question:"Commonly used data types DO NOT include:",
    a:"strings",
    b:"booleans",
    c:"alerts",
    d:"numbers",
    correctAnswer:"d"
},
{
    question:"The condition in an if/else statement is enclosed with ____________.",
    a:"quotes",
    b:"curly brackets",
    c:"parenthesis",
    d:"square brackets",
    correctAnswer:"b"
},
{
    question: "Arrays in Java Script can be used to store __________.",
    a:"numbers and strings",
    b:"other arrays",
    c:"booleans",
    d:"all of the above",
    correctAnswer:"d"
},
{
    question:"String values must be enclosd within _________ when being assigned to variables.",
    a:"commas",
    b:"curly brackets",
    c:"quotes",
    d:"parenthesis",
    correctAnswer:"c"
},
{
    question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    a:"JavaScript",
    b:"terminal/bash",
    c:"for loops",
    d:"console.log",
    correctAnswer: "d"
}];
// variables that pull from the array above
var i = 0;
var lastQuestion = quizQuestion.length;

//starts quiz once button is clicked
var startQuiz = function() {
    console.log("start quiz");

    displayQuizQuestion();

    //add displayScore() call when you have time

};

//displayQuizQuestion function to hide what is displayed and display the questions and answers
var displayQuizQuestion = function() {
    introDisplayEl.setAttribute("style", "display:none");

    quizDisplaEl.setAttribute("style", "display:initial");

    var currentQuestion = quizQuestion[i];
    
    quizQuestionDisplayEl.innerHTML = currentQuestion.question, 
    answerAEl.innerHTML = currentQuestion.a,
    answerBEl.innerHTML = currentQuestion.b,
    answerCEl.innerHTML = currentQuestion.c,
    answerDEl.innerHTML = currentQuestion.d;
};

//checks if the selected answer is correct and moves on to the next question
var checkAnswer = function(answer) {
    var correct = quizQuestion[i].correctAnswer;

    //if user is right, display message that tells them
    if (answer === correct && i !== lastQuestion) {
        window.alert("You are doing great sweety!");
        i++;
        displayQuizQuestion();
    }
    else {
        window.alert("WRONG!!!!")
        i++;
        displayQuizQuestion();
    }
};
//timer

//event listener to start the quiz
startBtnEl.addEventListener("click",startQuiz)

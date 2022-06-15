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
    question: "Commonly used data types DO NOT include:",
    answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
    },
    correctAnswer: "d"
},
{
    question: "The condition in an if/else statement is enclosed with ____________.",
    answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
    },
    correctAnswer: "b"
},
{
    question: "Arrays in Java Script can be used to store __________.",
    answers: {
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
    },
    correctAnswer: "d"
},
{
    question: "String values must be enclosd within _________ when being assigned to variables.",
    answers: {
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
    },
    correctAnswer: "c"
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "console.log",
    },
    correctAnswer: "d"
}];

var startQuiz = function() {
    console.log("start quiz");
    introDisplayEl.setAttribute("style", "display:none");

    quizDisplaEl.setAttribute("style", "display:initial");

    for (var i = 0; i < quizQuestion.length; i++) {
        var currentQuestion = quizQuestion[i];
        
    }

};


//append quiz questions

//alert if questions are wrong 

//take time off from timer if questions are wrong

//alert if questionsare right

//timer

//event listener to start the quiz
startBtnEl.addEventListener("click",startQuiz)

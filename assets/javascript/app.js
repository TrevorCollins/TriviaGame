// Object containing all questions and relavent data
var questArr = [{
    question: "An advertisement for which product is NOT seen in the opening scene?",
    answers: ["Noah's Arcade", "Chia Pets", "Bop It", "The Clapper"],
    correct: 2,
    gif: "<img src='https://media.giphy.com/media/xMzLBclN6Z2yA/giphy.gif'/>"
}, {
    question: "What does Wayne do every Friday night?",
    answers: ["Pine after an electric guitar", "Pine after a new car", "Pine after a new house", "Pine after Cassandra"],
    correct: 1,
    gif: "<img src='https://media.giphy.com/media/xMzLBclN6Z2yA/giphy.gif'/>"
}, {
    question: "What does Stacy give Wayne for their anniversary?",
    answers: ["A severed head", "An empty box", "A framed picture of them", "A gun rack"],
    correct: 3,
    gif: "<img src='https://media.giphy.com/media/xMzLBclN6Z2yA/giphy.gif'/>"
}, {
    question: "What is the name of Cassandra's band?",
    answers: ["The Sh***y Beatles", "The Jolly Green Giants", "Crucial Taunt", "Cassandra Wong"],
    correct: 2,
    gif: "<img src='https://media.giphy.com/media/xMzLBclN6Z2yA/giphy.gif'/>"
}, {
    question: "What song does Garth Dance to in his dream sequence?",
    answers: ["Zero", "One", "Two", "Three"],
    correct: 3,
    gif: "<img src='https://media.giphy.com/media/xMzLBclN6Z2yA/giphy.gif'/>"
}, {
    question: "Question 3",
    answers: ["Zero", "One", "Two", "Three"],
    correct: 3,
    gif: "<img src='https://media.giphy.com/media/xMzLBclN6Z2yA/giphy.gif'/>"
}, {
    question: "Question 3",
    answers: ["Zero", "One", "Two", "Three"],
    correct: 3,
    gif: "<img src='https://media.giphy.com/media/xMzLBclN6Z2yA/giphy.gif'/>"
}, {
    question: "Question 3",
    answers: ["Zero", "One", "Two", "Three"],
    correct: 3,
    gif: "<img src='https://media.giphy.com/media/xMzLBclN6Z2yA/giphy.gif'/>"
}, {
    question: "Question 3",
    answers: ["Zero", "One", "Two", "Three"],
    correct: 3,
    gif: "<img src='https://media.giphy.com/media/xMzLBclN6Z2yA/giphy.gif'/>"
}, {
    question: "Question 3",
    answers: ["Zero", "One", "Two", "Three"],
    correct: 3,
    gif: "<img src='https://media.giphy.com/media/xMzLBclN6Z2yA/giphy.gif'/>"
}];

var timerId;
var currentTime;
var qNum = -1;
$("#timer").hide();

// // variables to hold correct and incorrect answers
var correctAns = 0;
var incorrectAns = 0;
var timeUpAns = 0;

$("#start").on("click", function () {
    displayQ();
    $(this).hide();
});

function count () {
    currentTime--;
    $(clock).html(currentTime);
    if (currentTime <= 0) {
        // alert("Time up");
        finishQ("timeUp");
    };
};

function displayQ () {
    // start timer
    $("#timer").slideDown(150);
    qNum++;
    if (qNum === questArr.length) {
        endGame();
        return;
    }
    currentTime = 30;
    clearInterval(timerId);
    timerId = setInterval(count, 1000);

    $("#question").html(questArr[qNum].question);
    $("#answers").text("");

    var answersArr = questArr[qNum].answers;

    for (let i = 0; i < answersArr.length; i++) {
        var button = $("<button>");
        button.text(answersArr[i]);
        button.attr("data-id", i);
        $("#answers").append(button);
    };
};

$("#answers").on("click", "button", function() {
    var userChoice = $(this).attr("data-id");
    console.log("userChoice: " + userChoice);
    console.log("qNum: " + qNum)
    if (userChoice == questArr[qNum].correct) {

        finishQ("correct");

    } else {

        finishQ("incorrect");
    };

});

function finishQ (finishValue) {

    clearInterval(timerId);

    var thisQuestion = questArr[qNum];

    if (finishValue === "correct") {
        $("#answers").html("Correct!" + "<br>" + thisQuestion.gif);
        correctAns++;

    } else if (finishValue === "incorrect") {
        $("#answers").html("Wrong! The correct answers is " +
        thisQuestion.answers[thisQuestion.correct] +
        "<br>" + thisQuestion.gif);
        incorrectAns++;

    } else if (finishValue === "timeUp") {
        $("#answers").html("Time is Up! The correct answers is " +
        thisQuestion.answers[thisQuestion.correct] +
        "<br>" + thisQuestion.gif);
        timeUpAns++;

    };

    setTimeout(displayQ, 5000);
};

function endGame() {
    $("#triviaBody").html(
        "Game Over, man<br>" +
        "<br>Correct: " + correctAns +
        "<br>Incorrect: " + incorrectAns +
        "<br>Out of Time: " + timeUpAns
    );

    clearInterval(timerId);
};
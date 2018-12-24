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

// variables to get all the IDs from HTML
var clock = $("#clock");

// variables to hold correct and incorrect answers
var correct = 0;
var incorrect = 0;
var timeUp = 0;

// timer variables
var intervalID;
var clockRunning = false;
var time = 30;

// Variable questEnd will hold the setInterval when we question ends
var questEnd;

var qNum = -1;

var userChoice;

$("#timer").hide();

$("#start").on("click", function () {
    game();
});

    // timer
// function timer () {
    // $("#timer").slideDown(100);
    // $(clock).html(time);
    // $("#start").hide();
    // intervalID = setInterval(count, 1000);
    // clockRunning = true;

    // function count() {
    //     if (time > 0) {
    //         time--;
    //         $(clock).html(time);
    //     } else {
    //         clearInterval(intervalID);
    //         finishQuestion("timeout");
    //     }
    // }
// };

function game () {

    // timer();

    if (qNum < questArr.length) {
        // reset();
        displayQuestion();
        console.log("qNum in the game function: " + qNum);
    } else {
        endGame();
        // console.log(qNum);
    };
};

function reset() {
    time = 30;
    $(clock).html(time);
}

function displayQuestion() {
    $("#timer").slideDown(100);
    $(clock).html(time);
    $("#start").hide();
    intervalID = setInterval(count, 1000);
    clockRunning = true;

    function count() {
        if (time > 0) {
            time--;
            $(clock).html(time);
        } else {
            clearInterval(intervalID);
            finishQuestion("timeout");
        }
    }

    qNum++;
    // alert(qNum + " displayQuesion");
    $("#question").html(questArr[qNum].question);
    $("#answers").text("");

    var answersArr = questArr[qNum].answers;

    for (let i = 0; i < answersArr.length; i++) {
        var button = $("<button>");
        button.text(answersArr[i]);
        button.attr("data-id", i);
        $("#answers").append(button);
    };

    $("#answers").on("click", "button", function() {
        userChoice = $(this).attr("data-id");
        console.log("userChoice: " + userChoice);
        console.log("qNum: " + qNum)
        if (userChoice == questArr[qNum].correct) {

            finishQuestion("correct");

        } else if (userChoice != questArr[qNum].correct) {

            finishQuestion("incorrect");

        };
    });



};

function finishQuestion (finishType) {
    console.log(finishType);
    // alert(qNum + " finishQuestion")
    if (finishType === "correct") {

        $("#answers").html("Correct!" + "<br>" + questArr[qNum].gif);
        clearInterval(intervalID);
        setTimeout(game, 2000);
        correct++;
        // qNum++;

    } else if (finishType === "timeout"){

        $("#answers").html("Times up! The correct answers is " + questArr[qNum].answers[questArr[qNum].correct] + "<br>" + questArr[qNum].gif);
        clearInterval(intervalID);
        setTimeout(game, 2000);
        timeUp++;
        // qNum++;

    } else if (finishType === "incorrect"){

        $("#answers").html("Wrong! The correct answers is " + questArr[qNum].answers[questArr[qNum].correct] + "<br>" + questArr[qNum].gif);
        clearInterval(intervalID);
        setTimeout(game, 2000);
        incorrect++;
        // qNum++;
    };
    reset();
};

function endGame() {
    $("#triviaBody").html(
        "Game Over, man<br>" +
        "<br>Correct: " + correct +
        "<br>Incorrect: " + incorrect +
        "<br>Out of Time: " + timeUp
    );

    clearInterval(intervalID);
};
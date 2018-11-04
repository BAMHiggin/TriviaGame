// Title page start button click
$(".finalScreen").hide();
questionReset()
$("#timer").hide();         // hides until start button is clicked

//global variables
var correctScore = 0;
var incorrectScore = 0;
var timeoutScore = 0;
var userGuess = '';
var i = 0;
var questionTimeout;

//configuration
var countdownTimer = 60;
var gifTimer = 3;

//reset stuff
function questionReset() {
    $(".questionButtons").hide();
    $("#quizQuestion").hide();
}

//buttons, buttons, buttons
$("#startButton").on('click', function() {
    newGame("#startButton");
});

$("#restartImg").on('click', function() {
    newGame("#restartImg");
})

$("#btnA").on('click', function () {
    if ($(this).text() === myQuestions[i].correctAnswer) {
        winLogic();
        //reset (timer), questions
    } else if ($(this).text() != myQuestions[i].correctAnswer) {
        loseLogic();
        //needs other resets
    }
});
$("#btnB").on('click', function () {
    if ($(this).text() === myQuestions[i].correctAnswer) {
        winLogic();
        //reset (timer), questions
    } else if ($(this).text() != myQuestions[i].correctAnswer) {
        loseLogic();
        //needs other resets
    }
});
$("#btnC").on('click', function () {
    if ($(this).text() === myQuestions[i].correctAnswer) {
        winLogic();
        //reset (timer), questions
    } else if ($(this).text() != myQuestions[i].correctAnswer) {
        loseLogic();
        //needs other resets
    }
});
$("#btnD").on('click', function () {
    if ($(this).text() === myQuestions[i].correctAnswer) {
        winLogic();
        //reset (timer), questions
    } else if ($(this).text() != myQuestions[i].correctAnswer) {
        loseLogic();
        //needs other resets
    }
});



function newGame(idName) {
    i = 0;
    $(idName).parent().hide();
    $(".questionButtons").show();
    stopwatch.start();
    questionTimeout = setTimeout(timeoutLogic, countdownTimer * 1000); //placed so the display timer is in sync with stopwatch, set to 30000 milliseconds
    $("#timer").show();
    $("#quizQuestion").show();
    $("#quizQuestion").text(myQuestions[i].question);
    $('#btnA').text(myQuestions[i].answers.a);
    $('#btnB').text(myQuestions[i].answers.b);
    $('#btnC').text(myQuestions[i].answers.c);
    $('#btnD').text(myQuestions[i].answers.d);
}



// create timer that begins countdown once start button is clicked
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

    time: countdownTimer,
    lap: 1,

    reset: function () {

        stopwatch.time = countdownTimer;
        stopwatch.lap = 1;

        // DONE: Change the "display" div to "00:00."
        $("#display").text("00:00");

        // DONE: Empty the "laps" div.
        $("#laps").text("");
    },
    start: function () {

        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },
    stop: function () {

        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;
    },
    recordLap: function () {

        // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.
        var converted = stopwatch.timeConverter(stopwatch.time);

        // DONE: Add the current lap and time to the "laps" div.
        $("#laps").append("<p>Lap " + stopwatch.lap + " : " + converted + "</p>");

        // DONE: Increment lap by 1. Remember, we can't use "this" here.
        stopwatch.lap++;
    },
    count: function () {

        // DONE: increment time by 1, remember we cant use "this" here.
        stopwatch.time--;

        // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
        //       and save the result in a variable.
        var converted = stopwatch.timeConverter(stopwatch.time);
        console.log(converted);

        // DONE: Use the variable we just created to show the converted time in the "display" div.
        $("#display").text(converted);
    },
    timeConverter: function (t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
}


// questions and answers
var myQuestions = [
    {
        question: "Who is the narrator of the show?",
        answers: {
            a: 'Ron Howard',
            b: 'Rob Reiner',
            c: 'Carl Weathers',
            d: 'Jason Alexander'
        },
        correctAnswer: 'Ron Howard',
        correctAnswerGif: 'assets/images/correct0.gif',
        incorrectAnswerGif: 'assets/images/incorrect0.gif'
    },
    {
        question: "Which is not a character in the show?",
        answers: {
            a: 'Franklin',
            b: 'Judge Reinhold',
            c: 'Buster',
            d: 'Amy'
        },
        correctAnswer: 'Amy',
        correctAnswerGif: 'assets/images/correct1.gif',
        incorrectAnswerGif: 'assets/images/incorrect1.gif'
    },
    {
        question: "Which of the following words would Tobias not use to describe himself?",
        answers: {
            a: 'Actor',
            b: 'Black',
            c: 'Big',
            d: 'Therapist'
        },
        correctAnswer: 'Big',
        correctAnswerGif: 'assets/images/correct2.gif',
        incorrectAnswerGif: 'assets/images/incorrect2.gif'
    },
    {
        question: "What is Buster's real name?",
        answers: {
            a: 'George',
            b: 'Byron',
            c: 'Butch',
            d: 'Buddy'
        },
        correctAnswer: 'Byron',
        correctAnswerGif: 'assets/images/correct3.gif',
        incorrectAnswerGif: 'assets/images/incorrect3.gif'
    },
    {
        question: "Which is not a nickname for Anne?",
        answers: {
            a: 'Egg',
            b: 'Bland',
            c: 'Plant',
            d: 'Fran'
        },
        correctAnswer: 'Fran',
        correctAnswerGif: 'assets/images/correct4.gif',
        incorrectAnswerGif: 'assets/images/incorrect4.gif'
    },
    {
        question: "Which is not a charity that Lindsay supports?",
        answers: {
            a: 'TBD',
            b: 'Save Our Bluths',
            c: 'Hands Off Our Penises',
            d: 'Clean Up The Wetlands'
        },
        correctAnswer: 'Save Our Bluths',
        correctAnswerGif: 'assets/images/correct5.gif',
        incorrectAnswerGif: 'assets/images/incorrect5.gif'
    },
    {
        question: "What is the name of Maeby's alter ego?",
        answers: {
            a: 'Nelly',
            b: 'Babey',
            c: 'Kitty',
            d: 'Shirley'
        },
        correctAnswer: 'Shirley',
        correctAnswerGif: 'assets/images/correct6.gif',
        incorrectAnswerGif: 'assets/images/incorrect6.gif'
    }
];


//display question
function displayQuestion() {
    $("#quizQuestion").text(myQuestions[i].question);
    $("#optionA").text(myQuestions[i].answers.a);
    $("#optionB").text(myQuestions[i].answers.b);
    $("#optionC").text(myQuestions[i].answers.c);
    $("#optionD").text(myQuestions[i].answers.d);
};

//display gif
function displayGIF(gifPath, gameStatus, correctAnswerOutput) {
    $("#gif").show();
    $("#gameStatus").show();
    $("#correctAnswerOutput").show();

    stopwatch.stop();
    $("#timer").hide();
    $("#gif").html('<img src="' + gifPath + '" />');
    $("#gameStatus").html(gameStatus);

    if (correctAnswerOutput != "") {       // this ifstatement removes "the correct answer is" from win logic

        $("#correctAnswerOutput").text(correctAnswerOutput);
    } else {
        $("#correctAnswerOutput").hide();
    }

    $(".questionButtons").hide();
    $("#quizQuestion").hide();
    clearTimeout(questionTimeout);
    //fiveT= setTimeout(nextQuestion, 5000); 
    setTimeout(nextQuestion, gifTimer * 1000);

};

///////////////// LOGICZ ///////////////////////

//logic for correct answer
function winLogic() {
    $(".questionButtons").hide();
    stopwatch.stop();
    correctScore++;

    displayGIF(myQuestions[i].correctAnswerGif, "Correct!", "");

};
// incorrect answer logic
function loseLogic() {
    $(".questionButtons").hide();
    stopwatch.stop();
    incorrectScore++;
    var correctAnswerOutput = myQuestions[i].correctAnswer;
    displayGIF(myQuestions[i].incorrectAnswerGif, "Wrong!", "The correct answer is: " + correctAnswerOutput);

};
//time ran out
function timeoutLogic() {
    $(".questionButtons").hide();
    stopwatch.stop();
    timeoutScore++;
    var correctAnswerOutput = myQuestions[i].correctAnswer;
    displayGIF(myQuestions[i].incorrectAnswerGif, "Times Up!", "The correct answer is: " + correctAnswerOutput);


};

function nextQuestion() {
    i++;
    if (i < myQuestions.length) {
        $("#gif").hide();
        $("#gameStatus").hide();
        $("#correctAnswerOutput").hide();
        $(".questionButtons").show();
        $("#quizQuestion").show();
        //timer.reset();
        stopwatch.reset();
        stopwatch.start();

        questionTimeout = setTimeout(timeoutLogic, countdownTimer * 1000); //so display timer starts with stopwatch
        $("#timer").show();


        $("#quizQuestion").text(myQuestions[i].question);
        $('#btnA').text(myQuestions[i].answers.a);
        $('#btnB').text(myQuestions[i].answers.b);
        $('#btnC').text(myQuestions[i].answers.c);
        $('#btnD').text(myQuestions[i].answers.d);
    } else {
        //game over logic
        questionReset();
        finalScreen();

    }

    //final screen stuff
    function finalScreen() {
        $("#gif").hide();
        $("#gameStatus").hide();
        $("#correctAnswerOutput").hide();
        $(".finalScreen").show();
        $("#finalCorrectScore").text("Correct Answers: " + correctScore);
        $("#finalIncorrectScore").text("Incorrect Answers: " + incorrectScore);
        $("#finalTimeoutScore").text("Ran out of time: " + timeoutScore);
    }

};
//// How I feel about timers

////  ┬─┬﻿ ノ( ゜-゜ノ) 
//// -------------------
////  (ノ ゜Д゜)ノ ︵ ┻━┻ 














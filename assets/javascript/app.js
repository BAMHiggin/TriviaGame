// Title page start button click
$(".questionButtons").hide();
$("#timer").hide();
$("#quizQuestion").hide();             // hides choice button options until start button is clicked


$('#startButton').on('click', function () {
    $(this).parent().hide();
    $(".questionButtons").show();
    $("#timer").show();
    $("#quizQuestion").show();
    $("#quizQuestion").text(myQuestions[i].question);
    $('#btnA').text(myQuestions[i].answers.a);
    $('#btnB').text(myQuestions[i].answers.b);
    $('#btnC').text(myQuestions[i].answers.c);
    $('#btnD').text(myQuestions[i].answers.d);

});
// create timer that begins countdown once start button is clicked
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

    time: 30,
    lap: 1,

    reset: function () {

        stopwatch.time = 30;
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
        stopwatch.time--    ;

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

stopwatch.start();


//global variables
var correctScore = 0;
var incorrectScore = 0;
var timeoutScore = 0;
var countdownTimer = 30; // for whenever I get to making the timer
var userGuess = '';



// questions and answers
var myQuestions = [
    {
        question: "Which answer is red?",
        answers: {
            a: 'yellow',
            b: 'blue',
            c: 'red',
            d: 'green'
        },
        correctAnswer: 'red',
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
        question: "dummyquestion",
        answers: {
            a: 'Franklin',
            b: 'Judge Reinhold',
            c: 'Buster',
            d: 'Amy'
        },
        correctAnswer: 'Amy',
        correctAnswerGif: 'assets/images/correct2.gif',
        incorrectAnswerGif: 'assets/images/incorrect2.gif'
    },
    {
        question: "dummyquestion",
        answers: {
            a: 'Franklin',
            b: 'Judge Reinhold',
            c: 'Buster',
            d: 'Amy'
        },
        correctAnswer: 'Amy',
        correctAnswerGif: 'assets/images/correct3.gif',
        incorrectAnswerGif: 'assets/images/incorrect3.gif'
    },
    {
        question: "dummyquestion",
        answers: {
            a: 'Franklin',
            b: 'Judge Reinhold',
            c: 'Buster',
            d: 'Amy'
        },
        correctAnswer: 'Amy',
        correctAnswerGif: 'assets/images/correct4.gif',
        incorrectAnswerGif: 'assets/images/incorrect4.gif'
    },
    {
        question: "dummyquestion",
        answers: {
            a: 'Franklin',
            b: 'Judge Reinhold',
            c: 'Buster',
            d: 'Amy'
        },
        correctAnswer: 'Amy',
        correctAnswerGif: 'assets/images/correct5.gif',
        incorrectAnswerGif: 'assets/images/incorrect5.gif'
    },
    {
        question: "dummyquestion",
        answers: {
            a: 'Franklin',
            b: 'Judge Reinhold',
            c: 'Buster',
            d: 'Amy'
        },
        correctAnswer: 'Amy',
        correctAnswerGif: 'assets/images/correct6.gif',
        incorrectAnswerGif: 'assets/images/incorrect6.gif'
    }
];

var i = 1;

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

    $("#gif").html('<img src="' + gifPath + '" />');
    $("#gameStatus").html(gameStatus);

    var correctAnswerOutput = myQuestions.correctAnswer;
    $("#correctAnswerOutput").text(correctAnswerOutput);

};

//button click events
$("#btnA").on('click', function () {
    if ($(this).text() === myQuestions[i].correctAnswer) {
        winLogic();
        //reset (timer), questions
    } else if ($(this).text() != myQuestions[i].correctAnswer) {
        loseLogic();
        //needs other resets
    } else {
        timeoutLogic();
        //needs resets
    }
});
$("#btnB").on('click', function () {
    if ($(this).text() === myQuestions[i].correctAnswer) {
        winLogic();
        //reset (timer), questions
    } else if ($(this).text() != myQuestions[i].correctAnswer) {
        loseLogic();
        //needs other resets
    } else {
        timeoutLogic();
        //needs resets
    }
});
$("#btnC").on('click', function () {
    if ($(this).text() === myQuestions[i].correctAnswer) {
        winLogic();
        //reset (timer), questions
    } else if ($(this).text() != myQuestions[i].correctAnswer) {
        loseLogic();
        //needs other resets
    } else {
        timeoutLogic();
        //needs resets
    }
});
$("#btnD").on('click', function () {
    if ($(this).text() === myQuestions[i].correctAnswer) {
        winLogic();
        //reset (timer), questions
    } else if ($(this).text() != myQuestions[i].correctAnswer) {
        loseLogic();
        //needs other resets
    } else {
        timeoutLogic();
        //needs resets
    }
});



//logic for correct answer
function winLogic() {
    stopwatch.reset();
    correctScore++;
    displayGIF(myQuestions[i].correctAnswerGif, "Correct!", null);
    i++;
};
// incorrect answer logic
function loseLogic() {
    stopwatch.reset();
    incorrectScore++;
    displayGIF(myQuestions[i].incorrectAnswerGif, "Wrong!", "The correct answer is: " + correctAnswerOutput);
    i++;
};
//time ran out
var t = setTimeout(timeoutLogic,30000);
function timeoutLogic() {
    clearTimeout(t);
    stopwatch.reset();
    timeoutScore++;
    displayGIF(myQuestions[i].incorrectAnswerGif, "Times Up!", "The correct answer is: " + correctAnswerOutput);
    i++;
};

//put reset here

// consider connecting timeout result to timer function














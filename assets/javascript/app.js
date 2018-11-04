// Title page start button click
questionReset()  
$("#timer").hide();         // hides until start button is clicked

//global variables
var correctScore = 0;
var incorrectScore = 0;
var timeoutScore = 0;
var userGuess = '';
var countdownTimer = 10;
var questionTimeout;

$('#startButton').on('click', function () {
    $(this).parent().hide();
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
    

});
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
//var t = setTimeout(timeoutLogic, 30000);

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

    var correctAnswerOutput = myQuestions[i].correctAnswer;
    $("#correctAnswerOutput").text("The correct answer is  " + correctAnswerOutput);

    $(".questionButtons").hide();
    $("#quizQuestion").hide();
    clearTimeout(questionTimeout);
   //fiveT= setTimeout(nextQuestion, 5000); 
   setTimeout(nextQuestion, 5000);   

};

//button click events
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



//logic for correct answer
function winLogic() {
    $(".questionButtons").hide();
    stopwatch.stop();
    correctScore++;
    
    displayGIF(myQuestions[i].correctAnswerGif, "Correct!", null);  
   
};
// incorrect answer logic
function loseLogic() {
    $(".questionButtons").hide();
    stopwatch.stop();
    incorrectScore++;
    displayGIF(myQuestions[i].incorrectAnswerGif, "Wrong!", "The correct answer is: " + correctAnswerOutput);
    


};
//time ran out
function timeoutLogic() {
    $(".questionButtons").hide();
    stopwatch.stop();
    timeoutScore++;
    displayGIF(myQuestions[i].incorrectAnswerGif, "Times Up!", "The correct answer is: " + correctAnswerOutput);    

    
};

//put reset here
function questionReset() {
    $(".questionButtons").hide();
    $("#quizQuestion").hide();
}

function nextQuestion() {
    i++;
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

};

// consider connecting timeout result to timer function














//Title page start button click
// $(".questionButtons").hide();             // hides choice button options until start button is clicked

$('#startButton').on('click', function() {
    $(this).parent().hide();
    $(".questionButtons").show();

});

// timer that begins countdown once start button is clicked
















// hold for later
// // arrays to hold questions and answers
// var questions = newArray();
// var answers = newArray ();

// // defining question one
// questions[0] = newArray();
// //question one question
// questions[0][0] = "Which answer is red?";
// //first choice 
// questions[0][1] = "blue";
// //second choice
// questions[0][2] = "red";
// //third choice
// questions[0][3] = "yellow";
// //final choice
// questions[0][4] = "green";
// //answer
// answers[2] = "red"; 
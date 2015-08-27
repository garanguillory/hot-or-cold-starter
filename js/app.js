
$(document).ready(function(){
	
  newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


    $("a.new").on('click', function(){
      newGame();
    });

    $('input.button').on('click', function(){
      // e.preventDefault();
      var guess = $('#userGuess').val();
      numOfAttempts += 1;
      updateAttempt();
      console.log("User guessed: " + guess);
      comparing(guess, secNum);

    });  


});


var numOfAttempts = 0;
var secNum;
var winner;

function secretnumber(){
  return Math.floor(Math.random() * 100) + 1;
}

function updateAttempt(){
  $("#count").text(numOfAttempts);
  console.log("Attempt: " + numOfAttempts);
}

function newGame(){
  secNum = secretnumber();
  console.log("The secret number is: " + secNum);
  
  numOfAttempts = 0;
  updateAttempt();
  $('#guessList').empty();
  $('#userGuess').val('');


  // $('input.button').on('click', function(e){
  //   console.log("I'm running formSubmit")
  //   e.preventDefault();
  //   var guess = $('#userGuess').val();
  //   numOfAttempts += 1;
  //   updateAttempt();
  //   console.log("User guessed: " + guess);
  //   comparing(guess, secNum);

  // });  
}


function comparing(inputGuess , inputSecret) {
  var absoluteValue = (Math.abs(inputGuess - inputSecret));
  if (inputSecret == inputGuess) {
    $('#guessList').append('<li>' + inputGuess + '</li>');
    winner = prompt("You guessed it! Shall we play again? Y/N").toUpperCase();
    if(winner){
      newGame();
    }
    $('#feedback').text("You won the game.");
  } else if (absoluteValue > 50){
    $('#guessList').append('<li>' + inputGuess + '</li>');
    $('#feedback').text("You're too far away to give a hint...");
  } else if (absoluteValue >= 30 && absoluteValue <= 50) {
    $('#guessList').append('<li>' + inputGuess + '</li>');
    $('#feedback').text("You're freezing cold. Try again.");
  } else if (absoluteValue >= 20 && absoluteValue < 30) {
    $('#guessList').append('<li>' + inputGuess + '</li>');
    $('#feedback').text("You're close but still cold.");
  } else if (absoluteValue >= 10 && absoluteValue < 20){
    $('#guessList').append('<li>' + inputGuess + '</li>');
    $('#feedback').text("You're warm!");
  } else if (absoluteValue >= 1 && absoluteValue < 10){
    $('#guessList').append('<li>' + inputGuess + '</li>');
    $('#feedback').text("You're hot!");
  }
}





var friends = ['M', 'A', 'S', 'R'];

friends.forEach(function(a, b){
  console.log(b + 1 + ". " + a);
});











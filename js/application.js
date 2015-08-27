$(document).ready(function(){
  
  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

  /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

  /*--- Starts a new game ---*/
    $('.new').click(function(){
      newGame();
      $('#count').html(0);
      $('#feedback').html("Make your Guess!");
      $('#guessList').empty();
    });

    newGame();  
  /*--- updates attempt# + guess# & resets guess field & appends guess to div ---*/
    $('#guessButton').click(function(){
      var guess = $('#userGuess').val();
      console.log(typeof guess);
      updateAttempt();
      console.log("Attempt: " + attempt + "  Guess: " + guess);
      compare(guess, num);
      $('#userGuess').val("");
      $('#count').html(attempt);
      $('#guessList').append('<li>' + guess + '</li>');
    });

});

var num;
var attempt = 0;

/*--- updates the num of times user has guessed ---*/
var updateAttempt = function(){
  attempt++
};


/*--- new game: new secret numer & reset attempt count ---*/
var newGame = function(){
  secretNum();
  attempt = 0;
};


/*--- supplies the secret number ---*/
var secretNum = function(){
  num = Math.floor((Math.random() * 100) + 1);
  console.log("Secret Number: " + num);
  return num
};


// var isNumber = function(input, secNum){
//   if(Number(input) == NaN){
//     $('#feedback').html("Numbers only!");
//   } else {
//     compare(input, secNum);
//   }
// };


// input (guess)
var compare = function(input, secNum){
  if(input == secNum){
    $('#feedback').html("Congrats! You win! Play again?");
  } else if(Math.abs(input - secNum) <= 5 && (input != secNum)){
    $('#feedback').html("5 or less...");
  } else if(Math.abs(input - secNum) <= 10){
    $('#feedback').html("10 or less...");
  } else if(Math.abs(input - secNum) <= 20){
    $('#feedback').html("20 or less...");
  } else if(Math.abs(input - secNum) <= 30){
    $('#feedback').html("30 or less...");
  } 
  else {
    $('#feedback').html("You are no where near the number...")
  }
};


// you will need to write code that ensures that the 
// user has supplied a numeric input between 1 and 100.

// how to submit guess via the 'enter' keystroke























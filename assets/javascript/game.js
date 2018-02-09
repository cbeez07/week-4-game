  // random number at the top fo the page 19-120
  // four different crystals that are clickable 1-12
  // when one crystal is clicked the users score changes
  // each crystal is a random number that is not shown
  // the player wins if their number matches random number
  // the player losses if they go over the random number
$(document).ready(function() {

  // variables
  var randomNumber;
  var crystalOne;
  var crystalTwo;
  var crystalThree;
  var crystalFour;
  var userGuess = 0;
  var wins = 0;
  var losses = 0;

  // functions for the Game:

  function startUp() {
    userGuess = 0;
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
    crystalOne = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystalTwo = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystalThree = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    crystalFour = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    $('#randomNumber').text(randomNumber);
    $('#yourGuess').text(userGuess);
  };

  function gameWin() {
    if (userGuess === randomNumber) {
      wins++;
      $('#wins').text(wins);
      startUp();
    }
  };

  function gameLose() {
    if (userGuess >= randomNumber) {
      losses++;
      $('#losses').text(losses);
      startUp();
    }
  };

  // on click events
  $('#instructions').on('click', function () {
    $('#hide').toggle();
  });
  $('#reset').on('click', function() {
    startUp();
  });

  $('.crystal1').on('click', function() {
    userGuess += crystalOne;
    $('#yourGuess').text(userGuess);
    gameWin();
    gameLose();
  });

  $('.crystal2').on('click', function() {
    userGuess += crystalTwo;
    $('#yourGuess').text(userGuess);
    gameWin();
    gameLose();
  });

  $('.crystal3').on('click', function() {
    userGuess += crystalThree;
    $('#yourGuess').text(userGuess);
    gameWin();
    gameLose();
  });

  $('.crystal4').on('click', function() {
    userGuess += crystalFour;
    $('#yourGuess').text(userGuess);
    gameWin();
    gameLose();
  });
});

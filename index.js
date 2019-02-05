var buttonColors = ["red", "blue", "green", "yellow"]; // Simon button colors
var gamePattern = []; // Randomly selected colors
var userClickPattern = []; // User selected color pattern
var level = 0;
var gameStart = false;


// Start Game with any keypress
$(document).keypress(function() {
  if (!gameStart) {
    $(".title").text("Level " + level);
    nextSequence();
    gameStart = true;
  }
});

// Random Color generator
function nextSequence() {
  userClickPattern = [];
  level++;
  $(".title").text("Level " + level); // Update h1 with current game level
  var randomNumber = Math.floor(Math.random() * 4); // Random number 0-3
  var randomColorChooser = buttonColors[randomNumber]; // Get random buttonColor index
  gamePattern.push(randomColorChooser); // Push buttonColor to gamePattern array
  console.log("computer: " + gamePattern);
  $("#" + randomColorChooser).fadeOut("fast").fadeIn("fast"); // Find element w/ id that matches randomColor apply CSS effects
  playSound(randomColorChooser); // Pass color data to playSound()
}

// Detect when any of the buttons are clicked
$(".btn").click(function() {
  var $userChosenColor = $(this).attr("id"); // get "id" of .btn clicked
  userClickPattern.push($userChosenColor); // push chosenColor to userClickPattern array
  playSound($userChosenColor); // Pass .btn color to playSound()
  animatePress($userChosenColor); // Pass data to animate button
  var clickPatternLength = userClickPattern.length - 1; // index of last item pushed into array
  console.log(clickPatternLength);
  checkAnswer(clickPatternLength); // Pass last item index data to checkAnswer()
});

// Play unique button sounds
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Animate button after Pressed by user
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed"); // Add class "pressed" to user selected color
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed"); // Remove class after 100 ms
  }, 100);
}

// Check userClick against randomly selected RandomColor
// Check array lengths to verify
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickPattern[currentLevel]) { // Check gamePattern index against userClickPattern index
      if (userClickPattern.length === gamePattern.length) { // Verify user has completed color sequence before giving nextSequence
          setTimeout(function() {
            nextSequence(); // Call nextSequence() after 1000 ms
          },1000);
      }
  } else {
    $("body").addClass("game-over"); // If User selection is wrong... add ".game-over" to body
    playSound("wrong"); // Play wrong.mp3 file
    setTimeout(function() {
      $("body").removeClass("game-over"); // Remove ".game-over" after 200ms
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart"); // H1 text to alert user of game-over and how to restart game
    restartGame();
  }
}

// Reset Game variables 
function restartGame() {
  level = 0;
  gamePattern = [];
  gameStart = false;
}

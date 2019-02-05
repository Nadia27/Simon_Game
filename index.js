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
  var audio = new Audio("sounds/" + name + ".mp3"); // grab color sound efx
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed"); // add class "pressed"
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
      if (userClickPattern.length === gamePattern.length) {
          setTimeout(function() {
            nextSequence();
          },1000);
      }
  } else {
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    restartGame();
  }
}

function restartGame() {
  level = 0;
  gamePattern = [];
  gameStart = false;
}

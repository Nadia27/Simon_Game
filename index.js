var buttonColors = ["red", "blue", "green", "yellow"]; // Simon button colors
var gamePattern = []; // Randomly selected colors
var userClickPattern = [];// User selected color pattern
var level = 0;
var gameStart = false;


console.log(gameStart); // Start Game with any keypress

$(document).keypress(function() {
  if (!gameStart) {
      $(".title").text("Level " + level);
      nextSequence();
      gameStart = true;
    }
});

// Randomly select color
// Push color to gamePattern array
// FadeOut/FadeIn randomly selected color
function nextSequence () {
  level++;
  $(".title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4); // random number 0-3
  var randomColorChooser = buttonColors[randomNumber]; // random color from buttonColors array
  gamePattern.push(randomColorChooser); // push randomColor to gamePattern array
  $("#" + randomColorChooser).fadeOut("fast").fadeIn("fast"); //
  playSound(randomColorChooser);
}

// Detect when any of the buttons are clicked
$(".btn").click(function () {
  var userChosenColor = $(this).attr("id"); // get "id" of chosenColor
  userClickPattern.push(userChosenColor); // push chosenColor to userClickPattern array
  console.log(userClickPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
});

// Play unique button sounds
function playSound (name) {
  var audio = new Audio("sounds/" + name + ".mp3"); // grab color sound efx
  audio.play();
}

function animatePress (currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

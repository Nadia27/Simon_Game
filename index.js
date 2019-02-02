// Simon button colors
var buttonColors = ["red", "blue", "green", "yellow"];

// Randomly selected colors
var gamePattern = [];

// User selected color pattern
var userClickPattern = [];

var level = 0;

// Start Game with any keypress
$(document).on("keypress",nextSequence);

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
  var colorSound = new Audio("sounds/" + randomColorChooser + ".mp3");
  playSound(colorSound);
}

// Detect when any of the buttons are clicked
$("div.btn").on("click", function () {
  var userChosenColor = this.id;
  userChosenColorAudio = new Audio("sounds/" + userChosenColor + ".mp3");
  userClickPattern.push(userChosenColor);
  console.log(userClickPattern);
  playSound(userChosenColorAudio);
  animatePress(userChosenColor);
});

// Play unique button sounds
function playSound (name) {
  var randomSound = name;
  //console.log(colorSound);
  randomSound.play();
}

function animatePress (currentColor) {
  var userSelection = currentColor;
  $("#" + userSelection).addClass("pressed");
  setTimeout(function() {
    document.getElementById(userSelection).classList.remove("pressed");
  }, 100);
}

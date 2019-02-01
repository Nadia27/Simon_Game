// Simon button colors
var buttonColors = ["red", "blue", "green", "yellow"];

// Randomly selected colors
var gamePattern = [];

// User selected color pattern
var userClickPattern = [];

// Randomly select color
// Push color to gamePattern array
// FadeOut/FadeIn randomly selected color
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColorChooser = buttonColors[randomNumber];
  gamePattern.push(randomColorChooser);
  $("#" + randomColorChooser).fadeOut("fast").fadeIn("fast");
}

nextSequence();


// Detect when any of the buttons are clicked
$("div.btn").on("click", function() {
  var userChosenColor = this.id;
  console.log(userChosenColor);
  userClickPattern.push(userChosenColor);
  console.log(userClickPattern);
});

// Play unique button sounds
function playSound (name) {
  var colorSound = new Audio("sounds/" + randomColorChooser + ".mp3");
  console.log(colorSound);
  colorSound.play();

}

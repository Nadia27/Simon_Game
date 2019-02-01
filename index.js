var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColorChooser = buttonColors[randomNumber];
  gamePattern.push(randomColorChooser);
  $("#" + randomColorChooser).fadeOut("fast").fadeIn("fast");
  var colorSound = new Audio("sounds/" + randomColorChooser + ".mp3");
  console.log(colorSound);
  colorSound.play();
}

nextSequence();

console.log(gamePattern);

// Use jQuery to select the button with the same id as the randomChosenColour

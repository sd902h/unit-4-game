
function getRandomNumber(low, high) {
  return Math.floor(Math.random() * high) + low;
}

var targetNumber = getRandomNumber(19, 120);

$("#number-to-guess").text(targetNumber);

var winCount = 0;
var lossCount = 0;
var counter = 0;

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < 4; i++) {
  var crystalValue = getRandomNumber(1, 12);
  // For each iteration, we will create an imageCrystal
  var imageCrystal = $("<img>");

  // First each crystal will be given the class ".crystal-image".
  // This will allow the CSS to take effect.
  imageCrystal.addClass("crystal-image");

  // Each imageCrystal will be given a src link to the crystal image
  if (i == 0) {
    imageCrystal.attr('id', 'imageBlue');
    imageCrystal.attr("src", "assets/images/blue.jpg");

  }
  if (i == 1) {
    imageCrystal.attr('id', 'imageGreen');
    imageCrystal.attr("src", "assets/images/greentwo.jpg");
  }
  if (i == 2) {
    imageCrystal.attr('id', 'imagePurple');
    imageCrystal.attr("src", "assets/images/purple.jpg");
  }
  if (i == 3) {
    imageCrystal.attr('id', 'imageRed');
    imageCrystal.attr("src", "assets/images/redtwo.jpg");
  }

  imageCrystal.attr("data-crystalvalue", crystalValue);

  // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  $("#crystals").append(imageCrystal);
}

$("#total-score-section").text(counter);
$("#wins").text(winCount);
$("#losses").text(lossCount);

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  // We then add the crystalValue to the user's "counter" which is a global variable.
  // Every click, from every crystal adds to the global counter.
  counter += crystalValue;

  // All of the same game win-lose logic applies. So the rest remains unchanged.
  $("#total-score-section").text(counter);

  if (counter === targetNumber) {
    winCount++;
    $("#wins").text(winCount);
    targetNumber = getRandomNumber(19, 120);
    $("#number-to-guess").text(targetNumber);
    $("#total-score-section").text('0');
    document.getElementById('imageBlue').attr("data-crystalvalue", getRandomNumber(1, 12));
    document.getElementById('imageGreen').attr("data-crystalvalue", getRandomNumber(1, 12));
    document.getElementById('imagePurple').attr("data-crystalvalue", getRandomNumber(1, 12));
    document.getElementById('imageRed').attr("data-crystalvalue", getRandomNumber(1, 12));
  }

  else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});

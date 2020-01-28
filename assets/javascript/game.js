// //Game w/ 4 crystals, each w/ a random # between 1-12
// //declare variables:
// let goalNumber;
// let wins;
// let losses;
// let randomNum = [];

// for(let i = 0; i < 4; i++){
//     let random = Math.floor(Math.random() * 11) + 1;
//     console.log(random);
//     randomNum.push(random);
// }
// $('#chalcanthite').attr('data-random', randomNum[0]);
// $('#amethyst').attr('data-random', randomNum[1]);
// $('#tourmaline').attr('data-random', randomNum[2]);
// $('#ruby').attr('data-random', randomNum[3]);

// //and random goal # between 19-120.
// goalNumber = Math.floor(Math.random() * 102) + 19;
// $("#goalNumber").html(goalNumber);

// //Shows individual values of each button in console.
// let counter = 0;

// // let crystal = ($(this).attr("data-random"));
// // crystal = parseInt(crystal);
// // counter += crystal;

// // $(".crystal").on('click', function () {
// //     crystal = ($(this).attr('data-random'));
// //     console.log(crystal);
    
// //     //Clicking ea crystal adds to prev score until goal score.
    
    
// //     alert("New score: " + counter);
// //     if (counter === goalNumber) {
// //         $("").html(goalNumber);
// //         alert("You win!");
// //     }
// //     else if (counter >= goalNumber) {
// //         alert("You lose!!");
// //     }
// // });
// $(document).ready(function() {
    
//       $("#randomNum").click(function() {
//         count++;
//         $("#totalScore").html(count);
//       })
// })
    
// //If goal score is reached, increment  win counter.
// //Alert "You won!"



// //If goal score is exceeded, increment lose counter.
// //Alert "you lose!"


// //Generate new random # when you win/lose.






// GLOBAL VARIABLES
// =================================================================

// Crystal Variables
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// =================================================================

// Helper Function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts the Game (and restarts the game)
var startGame = function() {

  // Reset the Current Score
  currentScore = 0;

  // Set a new Target Score (between 19 and 120)
  targetScore = getRandom(19, 120);

  // Set different values for each of the crystals (between 1 and 12)
  crystal.blue.value = getRandom(1, 12);
  crystal.red.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.yellow.value = getRandom(1, 12);

  // Change the HTML to reflect all of these changes
  $("#your-score").text(currentScore);
  $("#target-score").text(targetScore);


  // Testing Console
  console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
  console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
    " | Yellow: " + crystal.yellow.value);
  console.log("-----------------------------------");
};

// Check if User Won or Lost and Reset the Game
var checkWin = function() {

  // Check if currentScore is larger than targetScore
  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost");

    // Add to Loss Counter
    lossCount++;

    // Change Loss Count HTML
    $("#loss-count").text(lossCount);

    // Restart the game
    startGame();
  }

  else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");

    // Add to the Win Counter
    winCount++;

    // Change Win Count HTML
    $("#win-count").text(winCount);

    // Restart the game
    startGame();
  }

};

// Respond to clicks on the crystals
var addValues = function(clickedCrystal) {

  // Change currentScore
  currentScore += clickedCrystal.value;

  // Change the HTML to reflect changes in currentScore
  $("#your-score").text(currentScore);

  // Call the checkWin Function
  checkWin();

  // Testing Console
  console.log("Your Score: " + currentScore);
};

// MAIN PROCESS
// =================================================================

// Starts the Game the First Time.
startGame();

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#red").click(function() {
  addValues(crystal.red);
});

$("#green").click(function() {
  addValues(crystal.green);
});

$("#yellow").click(function() {
  addValues(crystal.yellow);
});

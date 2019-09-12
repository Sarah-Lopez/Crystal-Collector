//Game w/ 4 crystals, each w/ a random # between 1-12
//declare variables:
let goalNumber;
let wins;
let losses;
let randomNum = [];

for(let i = 0; i < 4; i++){
    let random = Math.floor(Math.random() * 11) + 1;
    console.log(random);
    randomNum.push(random);
}
$('#chalcanthite').attr('data-random', randomNum[0]);
$('#amethyst').attr('data-random', randomNum[1]);
$('#tourmaline').attr('data-random', randomNum[2]);
$('#ruby').attr('data-random', randomNum[3]);

//and random goal # between 19-120.
goalNumber = Math.floor(Math.random() * 102) + 19;
$("#goalNumber").html(goalNumber);

//Shows individual values of each button in console.
let counter = 0;

// let crystal = ($(this).attr("data-random"));
// crystal = parseInt(crystal);
// counter += crystal;

// $(".crystal").on('click', function () {
//     crystal = ($(this).attr('data-random'));
//     console.log(crystal);
    
//     //Clicking ea crystal adds to prev score until goal score.
    
    
//     alert("New score: " + counter);
//     if (counter === goalNumber) {
//         $("").html(goalNumber);
//         alert("You win!");
//     }
//     else if (counter >= goalNumber) {
//         alert("You lose!!");
//     }
// });
$(document).ready(function() {
    
      $("#randomNum").click(function() {
        count++;
        $("#totalScore").html(count);
      })
})
    
//If goal score is reached, increment  win counter.
//Alert "You won!"



//If goal score is exceeded, increment lose counter.
//Alert "you lose!"


//Generate new random # when you win/lose.







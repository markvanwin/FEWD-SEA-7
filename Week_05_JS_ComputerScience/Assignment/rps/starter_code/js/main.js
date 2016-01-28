// hint: You will need to look at the jQuery docs
// ready() https://api.jquery.com/ready/
// click() https://api.jquery.com/click/
// html() https://api.jquery.com/html/
// String concatenation used the plus symbol (+)
// You can mix variables with strings (text wrapped in quotes)

// add your functions here

$(document).ready(function() {
console.log("ready");

var computerChoices = [
  "rock",
  "paper",
  "scissors"
  ]

  var options ={};
  
var getComputerPlay = function(){
	var play = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	return play;
}

var hScore = 0;
var cScore = 0;

function updateHumanScore (newScore) {
	$("#humanScore").html(newScore)
}

function updateComputerScore (newScore) {
	$("#computerScore").html(newScore)
}

$("#rock").click(function(e){
	console.log("rock");
	var computerPlay = getComputerPlay();
	
	// if computer chooose paper
		if (computerPlay === "paper") {
		$("h3").html("I chose Paper, you lose!");
		cScore++;
		updateComputerScore(cScore);
		console.log("paper")
	} else if (computerPlay === "scissors") {
		$("h3").html("I chose Scissors, you win!");
		hScore++;
		updateHumanScore(hScore);
		console.log("scissors")
	} else if (computerPlay === "rock") {
		$("h3").html("I chose Rock, we tie!");
		console.log("rock")
	}

	// else if computer choose scissors

});

$("#paper").click(function(e){
	console.log("paper");
	var computerPlay = getComputerPlay();
	var humanScore = 0;
	var computerScore = 0;
		if (computerPlay === "paper") {
		$("h3").html("I chose Paper, we tie!");
		console.log("paper");
	} else if (computerPlay === "scissors") {
		$("h3").html("I chose Scissors, you lose!");
		cScore++;
		updateComputerScore(cScore);
		console.log("scissors");
	} else if (computerPlay === "rock") {
		$("h3").html("I chose Rock, you win!");
		hScore++;
		updateHumanScore(hScore);
		console.log("rock");
	}
});

	// else computer choose rock

$("#scissors").click(function(e){
	console.log("scissors");
	var computerPlay = getComputerPlay();
		if (computerPlay === "paper") {
		$("h3").html("I chose Paper, you win!");
		hScore++;
		updateHumanScore(hScore);
		console.log("paper");
	} else if (computerPlay === "scissors") {
		$("h3").html("I chose Scissors, we tie!");
		console.log("scissors");
	} else if (computerPlay === "rock") {
		$("h3").html("I chose Rock, you lose!");
		cScore++;
		updateComputerScore(cScore);
		console.log("rock");
	}
});

});	
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
function didHumanWin(humanChoice, computerChoice) {
	switch(computerChoice) {
		case "rock":
			switch(humanChoice) {
				case "scissors":
					$("h3").html("You Lose!")
					$("#computerScore").html(cScore++);
					return 3;
					break;
				case "paper":
					$("h3").html("You Win!")
					$("#humanScore").html(hScore++);
					return 1;
					break;
				default:
					$("h3").html("We Tie!")
					return 2;
					break;
			}
		case "paper":
			switch(humanChoice) {
				case "rock":
					$("h3").html("You Lose!")
					$("#computerScore").html(cScore++);
					return 3;
					break;
				case "scissors":
					$("h3").html("You Win!")
					$("#humanScore").html(hScore++);
					return 1;
					break;
				default:
					$("h3").html("We Tie!")
					return 2;
					break;
			}
		case "scissors":
			switch(humanChoice) {
				case "paper":
					$("h3").html("You Lose!")
					$("#computerScore").html(cScore++);
					return 3;
					break;
				case "scissors":
					$("h3").html("You Win!")
					$("#humanScore").html(hScore++);
					return 1;
					break;
				default:
					$("h3").html("We Tie!")
					return 2;
					break;
			}
	}
}
$("#rock").click(function(e){
	console.log("rock");
	var computerPlay = getComputerPlay();
	var result = didHumanWin("rock", computerPlay);
	console.log(result);
});
$("#paper").click(function(e){
	console.log("paper");
	var computerPlay = getComputerPlay();
	var result = didHumanWin("paper", computerPlay);
	console.log(result);
});
$("#scissors").click(function(e){
	console.log("scissors");
	var computerPlay = getComputerPlay();
	var result = didHumanWin("scissors", computerPlay);
	console.log(result);
});
});	
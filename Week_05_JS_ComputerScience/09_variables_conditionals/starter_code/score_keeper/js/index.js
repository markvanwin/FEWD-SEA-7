$(document).ready(function() {
	var score = 0;

	function updateScore (newScore) {
		$("#result").html(newScore);
	}
	var add5 = function() {
		score += 5;
		console.log(score);
		updateScore(score);
	}

	var add10 = function() {
		score += 10;
		console.log(score);
		updateScore(score);
	}

	var sub1 = function() {
		score += -1;
		console.log(score);
		updateScore(score);
	}

	var zero = function() {
		score += -score;
		console.log(score);
		updateScore(score);
	}

	$("#add5").click(add5);
	$("#zero").click(zero);
	$("#add10").click(add10);
	$("#sub1").click(sub1);
});

// When +5 is clicked

// add 5


// When button is clicked

// if a is less than b

//display less than

$(document).ready(function() {
	var a = $("#a").val();
	var b = $("#b").val();
	var compareHandler = function() {
		a = parseInt($("#a").val());
		b = parseInt($("#b").val());
		console.log("button clicked");
		if (a > b) {
			alert("A IS THE GREATEST");
			
		} else if (b > a) {
			alert("B IS THE GREATEST");
			
		} else {
			alert("EVERYTHING IS EQUAL");
		}
	};
	

	$("#submit").click(compareHandler);

});
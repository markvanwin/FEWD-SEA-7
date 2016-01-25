// if you click button

// then turn off light

$(document).ready(function() {
	var lightsOn = true;
	$("#light_switch").click(function() {
		console.log("button clicked");
		if (lightsOn) {
			$("body").addClass("dark")
			lightsOn = false
		} else {
			$("body").removeClass("dark");
			lightsOn = true;
		}
	});
});

// OR AN EASIER WAY

// $(document).ready(function() {
// 	var lightsOn = true;
// 	$("#light_switch").click(function() {
// 		console.log("button clicked");
// 		$("body").toggleClass ("dark");

// 	});
// });	
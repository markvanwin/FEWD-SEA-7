// $("#city-type").prop('selectedIndex',0);

$(document).ready(function() {
	console.log("ready");

var $selectField = $("#city-type");

// // Only works with arrays to update the option tags in HTML
// 	cities.forEach(function(city) {
// 		var $option = $("<option>");
// 		$option.html(city).val(city);
// 		$selectField.append($option);
// });

$selectField.on("change", function() {
	var city = $(this).val();
	console.log(city);
	$("body").removeClass().addClass(city);
		// if (city === "LA") {
		// $("body").addClass("la");
		// } 	
});

});
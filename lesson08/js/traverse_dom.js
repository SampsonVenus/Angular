/*
 * Handles the Key Up Event and Uses JQuery to 
 * Manipulate the color of the <span> Element 
 * based on the input
 */
function update() {
	$("span").css("background-color","lightgrey");
	$("div").each (function(i) {
		var $input = $(this).children("input:first");	
		var $value = $input.val();
		var $filter = "span:lt(" + $value + ")";
		$input.siblings($filter).css("background-color", "blue");
	})
	
	
}
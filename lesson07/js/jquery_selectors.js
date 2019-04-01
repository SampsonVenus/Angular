
function setOdd(){
	$("li, span").css("font-weight", "");  //find all li an span elements and clear the font  weight
	var $oddItems = $("li:odd");           // find all li and choose only the odd index
	$oddItems.css("font-weight", "bold");
	$("span:contains(Odd)").css("font-weight", "bold"); // choose all span elements that contain Odd in there content
	$(".label").html("Odd");
	
}

function setEven(){
	$("li, span").css("font-weight", "");
	var $evenItems = $("li:even");         
	$evenItems.css("font-weight", "bold");
	$("span:contains(Even)").css("font-weight", "bold");
	$(".label").html("Even");
}

function setFirst4() {
	$("li, span").css("font-weight", "");
	var $first4 = $("li:lt(4)");
	$first4.css("font-weight", "bold");
	$("span:contains('First 4')").css("font-weight", "bold");
	$(".label").html("First 4");
}

function firstLast() {
	$("li, span").css("font-weight", "");
	var $first = $("li:first, li:last" );  //select first or last
//	var $last = $("li:last");
	$first.css("font-weight", "bold");
//	$last.css("font-weight", "bold");
	$("span:contains('First and Last')").css("font-weight", "bold");
	$(".lable").html("FirstLast")
}

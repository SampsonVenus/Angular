/*
 * This example uses JQuery selector to find all paragraph elements
 * You then use .map() function to rad the content and use it to create 
 * a new <span> box.
 * You also use .each() to iterate through the <p> elements and restyle them.
 * 
 */
$(document).ready(function (){                 	// created and executed when page is loaded
  $("input:eq(0)").click(function (){			// associates input with click event handler
    $("p").each(function(){						// iterate over <p> with .each function
      var parts = $(this).html().split(" ");    // split using space delimiter and put value in array
      $(this).css({"font-size":parts[1]+"px", color:parts[0]});
    });				//  end each function
  });    			//  end event handler
  
  $("input:eq(1)").click(function(){					//associates input with click event handler
	  var items = $("p").map(function(){				// iterate over <p> with .map function 
	        var parts = $(this).html().split(" ");		// split using space as delimiter
	        return {color:parts[0], size:parts[1]};     // return javascript objects with color and size attribute          
	  }).get();										// converts javascript objects into arrays of jquery items
	  
	  for (var idx in items){
	      var item = items[idx];
	      var span = $("<span>" + item.color + "</span>");
	      var size = item.size*5;
	      span.css({"background-color":item.color,  "font-size": item.size+"px", 
	                width:size, height:size});
	      $("div").append(span);
	    }
  		
  });		  
});					// end ready function
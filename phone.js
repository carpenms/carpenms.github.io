$(document).ready(function() { // do this when the document is loaded
	$("#dialer").show(); // show the element with ID "element"
	$("#contacts, #add").hide(); // hide the element with ID "otherElement"
});

$("bdialer").click(function() { // when "button_id" is clicked
	$("#dialer").show(); // show element
	$("#contacts, #add").hide();	// hide other elements
});

$("bcontacts").click(function() { // when "button_id" is clicked
	$("#contacts").show(); // show element
	$("#dialer, #add").hide();	// hide other elements
});

$("badd").click(function() { // when "button_id" is clicked
	$("#add").show(); // show element
	$("#contacts, #dialer").hide();	// hide other elements
});

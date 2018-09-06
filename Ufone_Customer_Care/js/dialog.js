$(document).ready(function() {
function sendLogin(){
	
	return false;
}
$(function() {
$("#dialog").dialog({
autoOpen: true
});
$("#button").on("click", function() {
$("#dialog").dialog("open");
});
});
// Validating Form Fields.....
$("#submit").click(function(e) {
var passwrd = $("#password").val();
var name = $("#name").val();

if (passwrd === '' || name === '') {
alert("Please fill all fields...!!!!!!");
e.preventDefault();
} else {
	//$("#login").a("close");
	$('#login').hide();
	//$("#login").css("display", "none");
//alert("Form Submitted Successfully......");
}
});
});
//Javascript for forms
/* Requires jQuery. */
$(document).ready(function() {
	$("#contact_form").on('submit',function(){
		//Check for XSS again, send form
		alert("form submited !  (not realy, JK)");

	});
}
function validateInput(type){
	//Check for XSS

	if(type == "email"){
		//Regex e-mail address
		
	}
}
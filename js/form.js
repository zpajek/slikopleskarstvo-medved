//Javascript for forms
/* Requires jQuery. */
$(document).ready(function() {
	$("#contact_form").on('submit',function(e){
		//Check for XSS again, send form
		e.preventDefault();

		var form = $('#contact_form').serialize();
		$.post('php/mailer.php', {mail: form}, function (data) {
			if(data == 1 || data == "1"){
				alert("Sporočilo posredovano. Hvala");
			}else{
				alert("Nekaj se je zalomilo! Prosimo, naslovite e-mail na info@slikopleskarstvo-medved.si");
			}
		});
	});
});

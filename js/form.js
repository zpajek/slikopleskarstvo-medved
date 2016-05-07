//Javascript for forms
/* Requires jQuery. */
$(document).ready(function() {
	$("#contact_form").on('submit',function(){
		//Check for XSS again, send form
		alert("form submited !  (not realy, JK)");
		var form = $('#contact_form').serialize();
		$.post('mailer.php', {mail: form}, function (data) {
			console.log(data);
		});
	});
});

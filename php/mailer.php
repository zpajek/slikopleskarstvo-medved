<?php
if(isset($_POST["mail"])){
	parse_str($_POST["mail"], $mail);
	send_mail($mail);
}else{
	echo "Invalid request";
	die();
}


function send_mail($input){
	//parse and validate data
	$name = test_input($input["mailer_name"]);
	$email = test_input($input["mailer_mailto"]);
	$message = test_input($input["mailer_message"]);
	//prepare and send mail - TODO

	$to      = 'info@slikopleskarstvo-medved.si';
	$subject = '[SPLETNA STRAN]Sporocilo od:'.$name;
	$headers = 'From:' .$email. "\r\n" .
	    'Reply-To: webmaster@example.com' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();
	echo mail($to, $subject, $message, $headers);



}
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}


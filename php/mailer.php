<?php
if(isset($_POST["mail"])){
	$mail = $_POST["mail"];
	sendMail($mail);
}else{
	echo "Invalid request";
	die();
}


function mail($input){
	//parse and validate data
	$name = test_input($input["name"]);
	if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
	  $nameErr = "Only letters and white space allowed"; 
	}
	$email = test_input($input["email"]);
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	  $emailErr = "Invalid email format"; 
	}
	$message = test_input($input["message"]);



	//prepare and send mail - TODO

	$to      = 'info@slikopleskarstvo-medved.si';
	$subject = '[SPLETNA STRAN]';
	$headers = 'From: webmaster@example.com' . "\r\n" .
	    'Reply-To: webmaster@example.com' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

}
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
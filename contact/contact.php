<?php

$data = array();

/*
@$name = "Ali";
@$phone = "9043038157";
@$email = "EngAliAkhtar@gmail.com";
@$message = "test by Ali";
*/

@$name = $_POST['name'];
@$phone = $_POST['phone'];
@$email = $_POST['email'];
@$message = $_POST['message'];

$todayDate = date("Y/m/d");

$contactFile = fopen("contact.txt", "a") or die("Unable to open file!");
$messageToFile = " Date: ".$todayDate."\n Name: ".$name."\n Phone: ".$phone."\n Email: ".$email."\n message: ".$message."\n ____________________________________________________________________________________________________________ \n\n";
fwrite($contactFile, "\n". $messageToFile);
fclose($contactFile);

$data['message'] = 'Thank you! We will get back to you soon.';
	
echo json_encode($data);

?>
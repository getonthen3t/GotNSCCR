<?php

$to = $_GET['email'];
$from = 'SmartCourierCr'.'<'.'getonth4@just135.justhost.com'.'>';
$subject = 'Suscripcion SmartCourierCr';
$message = file_get_contents('emailRegistroBody.php?nombre='.$_GET['email'].'&casillero='.$_GET['casillero']);
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
$headers .= 'From: ' . $from . "\r\n";
$result = mail($to, $subject, $message, $headers);
header("Location:admClientesPag.php");
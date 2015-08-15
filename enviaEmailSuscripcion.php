<?php

$to = 'rasso92@hotmail.com';
$from = 'SmartCourierCr'.'<'.'getonth4@just135.justhost.com'.'>';
$subject = 'Suscripcion SmartCourierCr';
$message = file_get_contents('emailSCCR.html');
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
$headers .= 'From: ' . $from . "\r\n";
$result = mail($to, $subject, $message, $headers);

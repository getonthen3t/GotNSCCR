<?php
$msj="<h1>Gracias por suscribirse a SmartCourierCR!</h1><br><br> <h3>Estamos procesando su información, se le estará; notificando para confirmar su registro.</h3>";
$to = $_GET['email'];
$from = 'SmartCourierCr'.'<'.'getonth4@just135.justhost.com'.'>';
$subject = 'Suscripcion SmartCourierCr';
$message = file_get_contents('emailSCCR.html');
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
$headers .= 'From: ' . $from . "\r\n";
$result = mail($to, $subject, $message, $headers);
header("Location:suscripcion2.php?mensaje=".$msj);

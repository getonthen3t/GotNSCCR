<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of enviaEmail
 *
 * @author alejandro
 */
class enviaEmail {

    FUNCTION sendEmail() {
        require 'phpmailer/PHPMailerAutoload.php';

        $mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.comcast.net';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'rasso92@gmail.com';                 // SMTP username
        $mail->Password = 'Alejo115150936';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        $mail->From = 'rasso92@gmail.com';
        $mail->FromName = 'Alejandro';
        $mail->addAddress('getonthen3t@gmail.com', 'Get on the net');     // Add a recipient
        $mail->addAddress('getonthen3t@gmail.com');               // Name is optional
        $mail->addReplyTo('info@example.com', 'Information');
        $mail->addCC('cc@example.com');
        $mail->addBCC('bcc@example.com');

        $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
        $mail->isHTML(true);                                  // Set email format to HTML

        $mail->Subject = 'Here is the subject';
        $mail->Body = 'This is the HTML message body <b>in bold!</b>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        if (!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Message has been sent';
        }
    }

}

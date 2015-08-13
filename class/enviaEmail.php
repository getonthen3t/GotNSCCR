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
        // Pear Mail Library
        require_once "Mail.php";

        $from = '<getonthen3t@gmail.com>';
        $to = '<rasso92@gmail.com.com>';
        $subject = 'Hi!';
        $body = "Hi,\n\nHow are you?";

        $headers = array(
            'From' => $from,
            'To' => $to,
            'Subject' => $subject
        );

        $smtp = Mail::factory('smtp', array(
                    'host' => 'ssl://smtp.gmail.com',
                    'port' => '465',
                    'auth' => true,
                    'username' => 'getonthen3t@gmail.com',
                    'password' => 'CostaRica1!'
        ));

        $mail = $smtp->send($to, $headers, $body);

        if (PEAR::isError($mail)) {
            echo('<p>' . $mail->getMessage() . '</p>');
        } else {
            echo('<p>Message successfully sent!</p>');
        }
    }

}

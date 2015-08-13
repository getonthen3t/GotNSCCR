<?php

//set off all error for security purposes
error_reporting(E_ALL);
$resultado = -1;
//define some contstant
define("DB_DSN", "mysql:host=localhost;dbname=gotnsccr");
define("DB_USERNAME", "root");
define("DB_PASSWORD", "");
define('GUSER', 'rasso92@gmail.com'); // GMail username
define('GPWD', 'Alejo115150936'); // GMail password
define("CLS_PATH", "class");

//include the classes

include_once (CLS_PATH . "/Suscripcion.php" );
include_once (CLS_PATH . "/enviaEmail.php" );
?>

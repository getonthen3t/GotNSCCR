<?php
// Limpiando session
 session_start();
 $_SESSION['user_session'] = '';
 try {
    session_destroy();
 }catch (Exception $e) {
    echo 'Excepción capturada: ',  $e->getMessage(), "\n";
} finally {
    echo '<script> window.location.replace("../manager/index.php")</script>';  
     
}
 echo '<script> window.location.replace("../manager/index.php")</script>';     
 


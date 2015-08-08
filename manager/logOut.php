<?php
// Limpiando session
 session_start();
 $_SESSION['user_session'] = '';
 try {
    session_destroy();
 }catch (Exception $e) {
    echo 'Excepción capturada: ',  $e->getMessage(), "\n";
} finally {
    header("Location:index.php");   
}
 header("Location:index.php");   
 


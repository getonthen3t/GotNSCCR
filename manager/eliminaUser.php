<?php
include_once("config.php");
 try {
            $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "DELETE FROM users WHERE userID=".$_GET['user'];
            $stmt = $con->prepare($sql);
            $stmt->execute();
             echo '<script> window.location.replace("../manager/sysusers.php")</script>';  
        } catch (PDOException $e) {
             echo $e->getMessage();
 }     

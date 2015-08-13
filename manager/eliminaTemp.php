<?php
include_once("config.php");
 try {
            $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "DELETE FROM TB_Clientes_Temp WHERE id_cliente=".$_GET['usu'];
            $stmt = $con->prepare($sql);
            $stmt->execute();
            header("Location:casillerosPendient.php");
        } catch (PDOException $e) {
             echo $e->getMessage();
 }     
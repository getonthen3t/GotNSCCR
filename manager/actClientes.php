<?php
include_once("config.php");
 try {
            $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "UPDATE  TB_Clientes set tipo_identificacion='$_GET['vTipoIdentificacion']',identificacion='$_GET['vIdentificacion']',nombre='$_GET['vNombre']',apellido1='$_GET['vApellido1']',apellido2='$_GET['vApellido2']',correo='$_GET['vCorreo']',tel1='$_GET['vTel1']',tel2='$_GET['vTel2']',provincia='$_GET['vProvincia']',canton='$_GET['vCanton']',distrito='$_GET['vDistrito']',otras_senas='$_GET['vDireccion']' WHERE id_cliente = '$_GET['vidCliente']";
            
            $stmt = $con->prepare($sql);
            $stmt->execute();
            header("Location:actualizacionClientes.php");
        } catch (PDOException $e) {
             echo $e->getMessage();
 }     

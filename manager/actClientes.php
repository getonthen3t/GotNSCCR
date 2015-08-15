<?php
include_once("config.php");
        $identificacion = $_GET['vIdentificacion'];
        $tipoIdentificacion = $_GET['vTipoIdentificacion'];
        $nombre = $_GET['vNombre'];
        $apellido1 = $_GET['vApellido1'];
        $apellido2 = $_GET['vApellido2'];
        $correo = $_GET['vCorreo'];
        $tel1 = $_GET['vTel1'];
        $tel2 = $_GET['vTel2'];
        $provincia = $_GET['vProvincia'];
        $canton = $_GET['vCanton'];
        $distrito = $_GET['vDistrito'];
        $otrasSenas = $_GET['vDireccion'];
        $vIdCliente = $_GET['vidCliente'];
 try {
            $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "UPDATE  TB_Clientes set tipo_identificacion='$tipoIdentificacion',identificacion='$identificacion',nombre='$nombre',apellido1='$apellido1',apellido2='$apellido2',correo='$correo',tel1='$tel1',tel2='$tel2',provincia='$provincia',canton='$canton',distrito='$distrito',otras_senas='$otrasSenas' WHERE id_cliente = '$vIdCliente'";
            
            $stmt = $con->prepare($sql);
            $stmt->execute();
            header("Location:admClientesPag.php");
        } catch (PDOException $e) {
             echo $e->getMessage();
 }     

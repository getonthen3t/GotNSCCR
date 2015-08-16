<?php

include_once("config.php");

try {
    $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "SELECT id_cliente,identificacion, tipo_identificacion,nombre, apellido1, apellido2, correo, tel1, tel2, provincia, canton,distrito,otras_senas  FROM TB_Clientes_Temp where id_cliente = " . $_GET['usu'];
    $stmt = $con->prepare($sql);
    $stmt->execute();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

        $idCliente = $row['id_cliente'];
        $identificacion = $row['identificacion'];
        $tipoIdentificacion = $row['tipo_identificacion'];
        $nombre = $row['nombre'];
        $apellido1 = $row['apellido1'];
        $apellido2 = $row['apellido2'];
        $correo = $row['correo'];
        $tel1 = $row['tel1'];
        $tel2 = $row['tel2'];
        $provincia = $row['provincia'];
        $canton = $row['canton'];
        $distrito = $row['distrito'];
        $otrasSenas = $row['otras_senas'];
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
try {
    $sql = "INSERT INTO TB_Clientes (identificacion, tipo_identificacion,nombre, apellido1, apellido2, correo, tel1, tel2, provincia, canton,distrito,otras_senas)
            VALUES('$identificacion','$tipoIdentificacion','$nombre','$apellido1','$apellido2','$correo','$tel1','$tel2','$provincia','$canton','$distrito','$otrasSenas')";
    $stmt = $con->prepare($sql);
    $stmt->execute();
    $sql = "DELETE FROM TB_Clientes_Temp WHERE id_cliente=" . $_GET['usu'];
    $stmt = $con->prepare($sql);
    $stmt->execute();
    //----------Buscando nuevo id de cliente-----------------------
    $sql = "SELECT MAX(id_cliente) FROM TB_Clientes";
    $idCli = 0;
    $stmt = $con->prepare($sql);
    $stmt->bindValue(1, $idCli, PDO::PARAM_INT);
    $stmt->execute();
    $idCli = $stmt->fetchColumn();
    //--------------------------------
    //----------Buscando nuevo casillero de cliente-----------------------
    $sql = "SELECT MAX(casillero) FROM TB_Casilleros where id_cliente = " . $idCli;
    $casillero = 0;
    $stmt = $con->prepare($sql);
    $stmt->bindValue(1, $casillero, PDO::PARAM_INT);
    $stmt->execute();
    $casillero = $stmt->fetchColumn();
    //--------------------------------

        $nomComplero = $nombre . ' ' . $apellido1 . ' ' . $apellido2;
    echo '<script> window.location.replace("../manager/enviaEmailRegistro.php?email='.$correo.'&nombre='.$nomComplero.'&casillero='.$casillero.'")</script>';    

    $con = null;
} catch (PDOException $e) {
    //echo $e->getMessage();
    
    $msj= 1;
   // $msj="<div class='alert alert-warning'>
     //                Best check yo self, you're not looking too good.
      //          </div><h1>ERROR existe un duplicado del Cliente, verificar.</h1>";
     echo '<script> window.location.replace("../manager/casillerosPendient.php?mensaje='.$msj.'")</script>';
}
   
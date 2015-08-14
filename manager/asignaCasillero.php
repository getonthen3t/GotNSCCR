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
} catch (PDOException $e) {
    echo $e->getMessage();
}

try {
    $sql = "DELETE FROM TB_Clientes_Temp WHERE id_cliente=" . $_GET['usu'];
    $stmt = $con->prepare($sql);
    $stmt->execute();
    $con=null;
    header("Location:admClientesPag.php");
} catch (PDOException $e) {
    echo $e->getMessage();
}     
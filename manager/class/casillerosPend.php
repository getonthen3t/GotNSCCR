 <?php

/**
 * Esta clase es utilizada para obtener y modificar informacion con respecto a los casilleros pendientes, asignacion pendiente, conteo, entre otras
 *
 * @author alejandro sanchez 2015-08-01
 */
class casillerosPend {
    

    public function cantidadCasillerosPend() { //retorna la cantidad de casilleros pendientes
        $cantidad = 0;
        $success = false;
        try {
            $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT COUNT(*) FROM TB_Clientes_Temp";

            $stmt = $con->prepare($sql);
            $stmt->bindValue(1, $cantidad, PDO::PARAM_INT);
            $stmt->execute();
            $cantidad = $stmt->fetchColumn();
            if ($cantidad > 0) {
                return $cantidad;
            } else {
                return 0;
            }

            $con = null;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return $cantidad;
        }
    }

    public function creaTablaPend() { //Crea una tabla con los usuarios pendientes por asignar casilleros
        $cantidad = 0;
        $success = false;
        try {
            $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT id_cliente,identificacion, tipo_identificacion,nombre, apellido1, apellido2, correo, tel1, tel2, provincia, canton,distrito,otras_senas  FROM TB_Clientes_Temp order by id_cliente desc";

            $stmt = $con->prepare($sql);

            $stmt->execute();
            $msj=null;
            $msj='Esta seguro que desea eliminar?';
                   
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo '<tr>';
                echo '<td>' . $row['identificacion'] . '</td>';
                echo '<td>' . $row['tipo_identificacion'] . '</td>';
                echo '<td>' . $row['nombre'] . '</td>';
                echo '<td>' . $row['apellido1'] . '</td>';
                echo '<td>' . $row['apellido2'] . '</td>';
                echo '<td>' . $row['correo'] . '</td>';
                echo '<td>' . $row['tel1'] . '</td>';
                echo '<td>' . $row['tel2'] . '</td>';
                echo '<td>' . $row['provincia'] . '</td>';
                echo '<td>' . $row['canton'] . '</td>';
                echo '<td>' . $row['distrito'] . '</td>';
                echo '<td>' . $row['otras_senas'] . '</td>';
                echo '<td><a href="asignaCasillero.php?usu='.$row['id_cliente'].'"><button type="button" class="btn btn-lg btn-success" onclick="return confirm()" >Asignar</button></a></td>';
                echo '<td><a href="eliminaTemp.php?usu='.$row['id_cliente'].'"><button type="button" onclick="return confirm()" class="btn btn-lg btn-danger" >Eliminar</button></a></td>';
                echo '</tr>';
            }
            $con = null;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return $cantidad;
        }
    }

    public function alertas($cantidadCasilleros) {
        
        try {
            if ($cantidadCasilleros == 0) {
                echo '<li><a href="casillerosPendient.php">Casilleros Pend&nbsp;<span class="label label-success">' . $cantidadCasilleros . '</span></a></li>';
            } else if ($cantidadCasilleros <= 5) {
                echo '<li><a href="casillerosPendient.php">Casilleros Pend&nbsp;<span class="label label-warning">' . $cantidadCasilleros . '</span></a></li>';
            } else if ($cantidadCasilleros >= 6) {
                echo '<li><a href="casillerosPendient.php">Casilleros Pend&nbsp;<span class="label label-danger">' . $cantidadCasilleros . '</span></a></li>';
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
    

}

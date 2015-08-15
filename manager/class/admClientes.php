<?php

/**
 * Esta clase es utilizada para obtener y modificar informacion con respecto a los Clientes de SmartCourierCR
 *
 * @author Juan Jara 2015-08-11
 */
class admClientes {

    public function cantidadClientes() { //retorna la cantidad de Clientes
        $cantidad = 0;
        $success = false;
        try {
            $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT COUNT(*) FROM TB_Clientes";

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
    
    

    public function creaTablaClientes() { //Crea una tabla con los Clientes Registrados
        $cantidad = 0;
        $success = false;
        try {
            $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT    TB_Casilleros.casillero,TB_Casilleros.id_cliente,TB_Clientes.id_cliente,TB_Clientes.identificacion, TB_Clientes.tipo_identificacion,TB_Clientes.nombre, TB_Clientes.apellido1, TB_Clientes.apellido2, TB_Clientes.correo, TB_Clientes.tel1, TB_Clientes.tel2, TB_Clientes.provincia, TB_Clientes.canton,TB_Clientes.distrito,TB_Clientes.otras_senas  FROM TB_Clientes JOIN TB_Casilleros ON TB_Clientes.id_cliente = TB_Casilleros.id_cliente order by TB_Casilleros.id_cliente desc";

            
            
            $stmt = $con->prepare($sql);

            $stmt->execute();
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo '<tr class="gradeX">';
                echo '<td>' . $row['casillero'] . '</td>';
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
                echo '<td>'. $row['otras_senas'] .'</td>';
                echo '<td><a href="obtenerDatosCliente.php?usu='.$row['id_cliente'].'"><button type="button" class="btn btn-lg btn-success">Actualizar</button></a></td>';
                //echo "<td><a><button type='button' class='btn btn-lg btn-danger' onclick='return confirm(\" &iquest Esta seguro que desea eliminar el registro ?\")'>Eliminar</button></a></td>";
                echo '</tr>';
            }
            $con = null;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return $cantidad;
        }
        
        //echo '<td><a href="../suscripcionActualizacion.php?usu='.$row['id_cliente'].'&identificacion='.$row['identificacion'].'&tipoIdentificacion='.$row['tipo_identificacion'].'&nombre='.$row['nombre'].'&apellido1='.$row['apellido1'].'&apellido2='.$row['apellido2'].'&correo='.$row['correo'].'&tel1='.$row['tel1'].'&tel2='.$row['tel2'].'&provincia='.$row['provincia'].'&canton='.$row['canton'].'&distrito='.$row['distrito'].'&otrasSenas='.$row['otras_senas'].'"><button type="button" class="btn btn-lg btn-success">Actualizar</button></a></td>';
    }

    

}


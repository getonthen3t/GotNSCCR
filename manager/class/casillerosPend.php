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
		 try{
			$con = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD ); 
			$con->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
			$sql = "SELECT COUNT(*) FROM TB_Clientes_Temp";
			
			$stmt = $con->prepare( $sql );
			$stmt->bindValue(1, $cantidad, PDO::PARAM_INT);
			$stmt->execute();
                        $cantidad= $stmt->fetchColumn();
                        if ($cantidad > 0){
                            return $cantidad;
                            
                        }else{
                            return 0;
                            
                        }
			
			$con = null;
			
		 }catch (PDOException $e) {
			 echo $e->getMessage();
			 return $cantidad;
		 }
	 }
    public function creaTablaPend() { //Crea una tabla con los usuarios pendientes por asignar casilleros
                 $cantidad = 0;
		 $success = false;
		 try{
			$con = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD ); 
			$con->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
			$sql = "SELECT identificacion, tipo_identificacion,nombre, apellido1, apellido2, correo, tel1, tel2, provincia, canton,distrito,otras_senas  FROM TB_Clientes_Temp order by id_cliente desc";
			
			$stmt = $con->prepare( $sql );
			
			$stmt->execute();
                       while( $row = $stmt->fetch(PDO::FETCH_ASSOC) ) { 
                           echo '<tr>';
                           echo '<td>'.$row['identificacion'].'</td>';
                           echo '<td>'.$row['tipo_identificacion'].'</td>';
                           echo '<td>'.$row['nombre'].'</td>';
                           echo '<td>'.$row['apellido1'].'</td>';
                           echo '<td>'.$row['apellido2'].'</td>';
                           echo '<td>'.$row['correo'].'</td>';
                           echo '<td>'.$row['tel1'].'</td>';
                           echo '<td>'.$row['tel2'].'</td>';
                           echo '<td>'.$row['provincia'].'</td>';
                           echo '<td>'.$row['canton'].'</td>';
                           echo '<td>'.$row['distrito'].'</td>';
                           echo '<td>'.$row['otras_senas'].'</td>';
                           echo '<td><button type="button" class="btn btn-lg btn-success">Asignar</button></td>';
                           echo '<td><button type="button" class="btn btn-lg btn-danger">Eliminar</button></td>';
                           echo '</tr>';
                       }
			$con = null;
			
		 }catch (PDOException $e) {
			 echo $e->getMessage();
			 return $cantidad;
		 }
	 }      
}

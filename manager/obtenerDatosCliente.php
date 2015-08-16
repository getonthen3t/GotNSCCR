<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
include_once('config.php');

try {
            $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            $sql = "SELECT id_cliente,identificacion, tipo_identificacion,nombre, apellido1, apellido2, correo, tel1, tel2, provincia, canton,distrito,otras_senas  FROM TB_Clientes where id_cliente = ".$_GET['usu'];

            
            
            $stmt = $con->prepare($sql);

            $stmt->execute();
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                
                $idCliente = $row['id_cliente']; 
                $identificacion = $row['identificacion'];
                $tipoIdentificacion= $row['tipo_identificacion'] ;
                $nombre= $row['nombre'] ;
                $apellido1= $row['apellido1'];
                $apellido2= $row['apellido2'];
                $correo=  $row['correo'];
                $tel1= $row['tel1'] ;
                $tel2= $row['tel2'] ;
                $provincia=  $row['provincia'];
                $canton= $row['canton'];
                $distrito= $row['distrito'] ;
                $otrasSenas = $row['otras_senas'];
            }
            echo '<script> window.location.replace("../manager/actualizacionClientes.php?idCliente='.$idCliente.'&usr='.$identificacion.'&tipoIdentificacion='.$tipoIdentificacion.'&nombre='.$nombre.'&apellido1='.$apellido1.'&apellido2='.$apellido2.'&correo='.$correo.'&tel1='.$tel1.'&tel2='.$tel2.'&provincia='.$provincia.'&canton='.$canton.'&distrito='.$distrito.'&otrasSenas='.$otrasSenas.'")</script>';
            $con = null;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return $cantidad;
        }


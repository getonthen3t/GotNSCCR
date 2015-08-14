<?php
class Suscripcion {
	 public $vTipoIdentificacion = null;
         public $vIdentificacion = null;
	 public $vNombre = null;
         public $vApellido1 = null;
         public $vApellido2 = null;
         public $vEmail = null;
         public $vTel = null;
         public $vTel2 = null;
         public $vProvincia = null;
         public $vCanton = null;
         public $vDistrito = null;
         public $vDireccion = null;
         
	 public function __construct( $data = array() ) {
		 if( isset( $data['vTipoIdentificacion'] ) ) $this->vTipoIdentificacion = stripslashes( strip_tags( $data['vTipoIdentificacion'] ) );
                 if( isset( $data['vIdentificacion'] ) ) $this->vIdentificacion = stripslashes( strip_tags( $data['vIdentificacion'] ) );
		 if( isset( $data['vNombre'] ) ) $this->vNombre = stripslashes( strip_tags( $data['vNombre'] ) );
                 if( isset( $data['vApellido1'] ) ) $this->vApellido1 = stripslashes( strip_tags( $data['vApellido1'] ) );
                 if( isset( $data['vApellido2'] ) ) $this->vApellido2 = stripslashes( strip_tags( $data['vApellido2'] ) );
                 if( isset( $data['vEmail'] ) ) $this->vEmail = stripslashes( strip_tags( $data['vEmail'] ) );
		 if( isset( $data['vTel'] ) ) $this->vTel = stripslashes( strip_tags( $data['vTel'] ) );
                 if( isset( $data['vTel2'] ) ) $this->vTel2 = stripslashes( strip_tags( $data['vTel2'] ) );
                 if( isset( $data['vProvincia'] ) ) $this->vProvincia = stripslashes( strip_tags( $data['vProvincia'] ) );
                 if( isset( $data['vCanton'] ) ) $this->vCanton = stripslashes( strip_tags( $data['vCanton'] ) );
                 if( isset( $data['vDistrito'] ) ) $this->vDistrito = stripslashes( strip_tags( $data['vDistrito'] ) );
                 if( isset( $data['vDireccion'] ) ) $this->vDireccion = stripslashes( strip_tags( $data['vDireccion'] ) );
	 }
	 
	 public function storeFormValues( $params ) {
		//store the parameters
		$this->__construct( $params ); 
	 }
	 

	 public function registrar() {
		$correct = false;
			try {
				$con = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
				$con->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
				$sql = "INSERT INTO TB_Clientes_Temp(tipo_identificacion,identificacion,nombre,apellido1,apellido2,correo,tel1,tel2,provincia,canton,distrito,otras_senas,fecha_registro) VALUES(:vTipoIdentificacion,:vIdentificacion,:vNombre,:vApellido1,:vApellido2,:vEmail, :vTel,:vTel2,:vProvincia,:vCanton,:vDistrito, :vDireccion,sysdate())";
				
				$stmt = $con->prepare( $sql );
				$stmt->bindValue( "vTipoIdentificacion", $this->vTipoIdentificacion, PDO::PARAM_STR );
                                $stmt->bindValue( "vIdentificacion", $this->vIdentificacion, PDO::PARAM_STR );
                                $stmt->bindValue( "vNombre", $this->vNombre, PDO::PARAM_STR );
                                $stmt->bindValue( "vApellido1", $this->vApellido1, PDO::PARAM_STR );
                                $stmt->bindValue( "vApellido2", $this->vApellido2, PDO::PARAM_STR );
                                $stmt->bindValue( "vEmail", $this->vEmail, PDO::PARAM_STR );
                                $stmt->bindValue( "vTel", $this->vTel, PDO::PARAM_STR );
                                $stmt->bindValue( "vTel2", $this->vTel2, PDO::PARAM_STR );
                                $stmt->bindValue( "vProvincia", $this->vProvincia, PDO::PARAM_STR );
                                $stmt->bindValue( "vCanton", $this->vCanton, PDO::PARAM_STR );
                                $stmt->bindValue( "vDistrito", $this->vDistrito, PDO::PARAM_STR );
                                $stmt->bindValue( "vDireccion", $this->vDireccion, PDO::PARAM_STR );
                                
				
				$stmt->execute();
                              /*  $msj="<h1>Gracias por suscribirse a SmartCourierCR!</h1><br><br> <h3>Estamos procesando su información, se le estará; notificando para confirmar su registro.</h3>";
				$to = 'info@smartcouriercr.com';	
	//sender - from the form
/*	$from = vnombre . ' <' . vEmail . '>';
	
	//subject and the html message
	$subject = 'Suscripcion de  ' . vnombre. ' '.vApellido1;	
	$message = 'Solicitud de suscripcion <br/><br/>Identificacion:' . videntificacion . '<br/><br/>
		       Nombre: ' . vnombre . '<br/><br/>		
                       Primer apellido: ' . vApellido1 . '<br/><br/>
                       Segundo apellido: ' . vApellido2 . '<br/><br/>
                       Telefono: ' . vTel . '<br/><br/>
		       Direccion: ' . nl2br(vDireccion) . '<br/><br/>.
                       Numero de Casillero [pendiente]';
                                send($to, $subject, $message, $from); */
			}catch( PDOException $e ) {
                                echo $e->getMessage();
				$msj="<h1>Ups! Ah ocurrido un error en su registro.</h1><br><br> <h3>Puede que su identificación ya este registrada en SmartCourierCR, si es así por favor contacte a servicio al cliente.</h3>";
			}
                        
                        
                        header("Location:suscripcion2.php?mensaje=".$msj);
	 }
        
         function send($to, $subject, $message, $from) {
            $headers = "MIME-Version: 1.0" . "\r\n";
            $headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
            $headers .= 'From: ' . $from . "\r\n";

            $result = mail($to,$subject,$message,$headers);

            if ($result) return 1;
            else return 0;
        } 
	 
 }
 
?>
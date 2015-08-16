    <?php include "conexion.php";

    
    
$identificacion = ($_GET['identificacion']) ? $_GET['identificacion'] : $_POST['identificacion'];
$nombre = ($_GET['nombre']) ?$_GET['nombre'] : $_POST['nombre'];
$apellido1 = ($_GET['apellido1']) ?$_GET['apellido1'] : $_POST['apellido1'];
$apellido2 = ($_GET['apellido2']) ?$_GET['apellido2'] : $_POST['apellido2'];
$email = ($_GET['correo']) ?$_GET['correo'] : $_POST['correo'];
$tel = ($_GET['tel']) ?$_GET['tel'] : $_POST['tel'];
$direccion = ($_GET['direccion']) ?$_GET['direccion'] : $_POST['direccion'];

//flag to indicate which method it uses. If POST set it to 1

if ($_POST) $post=1;

//Simple server side validation for POST data, of course, you should validate the email
if (!$identificacion) $errors[count($errors)] = 'Por favor dígite su identificación.';
if (!$nombre) $errors[count($errors)] = 'Por favor dígite su nombre.'; 
if (!$apellido1) $errors[count($errors)] = 'Por favor dígite su primer apellido.'; 
if (!$apellido2) $errors[count($errors)] = 'Por favor dígite su segundo apellido.'; 
if (!$email) $errors[count($errors)] = 'Por favor dígite su correo electronico.'; 
if (!$tel) $errors[count($errors)] = 'Por favor dígite su telefono.'; 
if (!$direccion) $errors[count($errors)] = 'Por favor dígite su direccion.'; 

//if the errors array is empty, send the mail
if (!$errors) {
        $query = mysql_query("SELECT casillero FROM Users ORDER BY ID_Cli DESC LIMIT 1");
        $myrow = mysql_fetch_array($query);
        $casillero = $myrow["casillero"] + 1;       
	//recipient - replace your email here
	$to = 'info@smartcouriercr.com';	
	//sender - from the form
	$from = $nombre . ' <' . $email . '>';
	
	//subject and the html message
	$subject = 'Suscripcion de  ' . $nombre. ' '.$apellido1;	
	$message = 'Solicitud de suscripcion <br/><br/>Identificacion:' . $identificacion . '<br/><br/>
		       Nombre: ' . $nombre . '<br/><br/>		
                       Primer apellido: ' . $apellido1 . '<br/><br/>
                       Segundo apellido: ' . $apellido2 . '<br/><br/>
                       Correo electronico: ' . $email . '<br/><br/>
                       Telefono: ' . $tel . '<br/><br/>
		       Direccion: ' . nl2br($direccion) . '<br/><br/>.
                       Numero de Casillero'.$casillero;
                       
	//send the mail
	
        
        $msj="<h1>Gracias por suscribirse a SmartCourierCR!</h1><br><br> <h3>Estamos procesando su informaci&oacute;n, se le estar&aacute notificando para confirmar su registro.</h3>";
        
	$sql ="INSERT INTO Users (N_Identificacion,Nombre,Apellido1,Apellido2,email,telefono,direccion,casillero) values ('$identificacion','$nombre','$apellido1','$apellido2','$email',$tel,'$direccion',$casillero)";
        if(!mysql_query($sql)){
        $msj="<h1>Ups! Ah ocurrido un error en su registro.</h1><br><br> <h3>Puede que su identificación ya este registrada en SmartCourierCR, si es as&iacute; por favor contacte a servicio al cliente.</h3>";
        createPage($msj);
           
        }
	mysql_close();
        $result = send($to, $subject, $message, $from);
	if ($_POST) {
		if ($result)
                    createPage($msj);
		else echo 'Sorry, unexpected error. Please try again later';
		
	//else if GET was used, return the boolean value so that 
	//ajax script can react accordingly
	//1 means success, 0 means failed
	} else {
		echo $result;	
	}
//if the errors array has values
} else {
	//display the errors message
	for ($i=0; $i<count($errors); $i++) echo $errors[$i] . '<br/>';
	echo '<a href="index.html">Back</a>';
	exit;
}


//Simple mail function with HTML header
function send($to, $subject, $message, $from) {
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	$headers .= 'From: ' . $from . "\r\n";
	
	$result = mail($to,$subject,$message,$headers);
	
	if ($result) return 1;
	else return 0;
}

function createPage($msj) {
    echo '<!DOCTYPE html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8"/>
<!-- Set the viewport width to device width for mobile -->
<meta name="viewport" content="width=device-width"/>
<title>SmartCourierCr</title>
<!-- CSS Files-->
<link rel="stylesheet" href="stylesheets/style.css">
<link rel="stylesheet" href="stylesheets/homepage.css"><!-- homepage stylesheet -->
<link rel="stylesheet" href="stylesheets/skins/teal.css"><!-- skin color -->
<link rel="stylesheet" href="stylesheets/responsive.css">
<link rel="shortcut icon" type="image/x-icon" href="images/temp/icon.png" />
   
</head>
<body>
<!-- HIDDEN PANEL 
================================================== -->
<div id="panel">
	<div class="row">
		<div class="twelve columns">
			<img src="images/info.png" class="pics" alt="info">
			<div class="infotext">
				Gracias por visitar SmartCourierCr, su mejor opci&oacute;n.
			</div>
		</div>
	</div>
</div>
<p class="slide">
	<a href="#" class="btn-slide"></a>
</p>
<!-- HEADER
================================================== -->
<div class="row">	
		<div class="four columns">
			<div class="logo">
					<a href="index.html">
                                          <img src="images/temp/logo.png" alt="SmartCourierCR" width="70%" height="50%" /> 
                                        </a>
		</div>
		</div>
		<div class="eight columns noleftmarg">		
			<nav id="nav-wrap">
				<ul class="nav-bar sf-menu">
				
					<li class="current">
					<a href="index.html">Inicio</a>
						
					</li>
					
					<li>
					<a href="#">Servicios</a>
						<ul>
						<li><a href="rastreo.html">Rastreo de paquetes</a></li>
						</ul>
					</li>
					
					<li>
					 <a href="comprar.html">Como comprar en l&iacute;nea?</a>
						
					</li>
					
					<li>
					<a href="suscripcion.html">Suscripci&oacute;n gratuita!</a>
						
					</li>
					
					
					<li>
                                            <a href="contact.html">Cont&aacute;ctenos</a>
					</li>
					
				</ul>
				</nav>
		</div>	
</div>
<div class="clear">
</div>

<!-- SUBHEADER
================================================== -->
<div id="subheader">
	<div class="row">
		<div class="twelve columns">
			<p class="left">
                            Suscripci&oacute;n
			</p>
		</div>
	</div>
</div>
<div class="hr">
</div>
<!-- CONTENT 
================================================== -->

<div class="row">
'.$msj.'
</div>
<div class="hr">
</div>
<!-- TWITTER + js calls 
================================================== -->

<!-- FOOOTER 
================================================== -->
<div id="footer">
                <footer class="row">
                <p class="back-top floatright">
                        <a href="#top"><span></span></a>
                </p>
                <div class="four columns">
                        <h1>ACERCA DE</h1>
                         Su satisfacci&oacute;n es nuestra meta!
                </div>
                <div class="four columns">
                        <h1>Redes sociales</h1>
                        <div class="social facebook">
                                <a href="https://www.facebook.com/Smartcourier?fref=ts"></a>
                        </div>
                        
                        </div>
                </div>

                </footer>
        </div>
        <div class="copyright">
                <div class="row">
                       
                           
                </div>
                <div class="row">
                        <div class="six columns">
                            
                            &copy;<span class="small"> Copyright 2014 SmartCourierCR</span>
                        </div>
                        <div class="six columns">
                                <span class="small floatright">  <a href="https://p3plcpnl0556.prod.phx3.secureserver.net:2096/">Correo institucional</a>
                                </span>
                        </div>
                </div>
        </div>
<!-- JAVASCRIPTS 
================================================== -->
<!-- Javascript files placed here for faster loading -->
<script src="javascripts/foundation.min.js"></script>
<script src="javascripts/formvalidation.js"></script>
<script src="javascripts/jquery.cycle.js"></script>
<script src="javascripts/app.js"></script>
<script src="javascripts/modernizr.foundation.js"></script>
<script src="javascripts/slidepanel.js"></script>
<script src="javascripts/scrolltotop.js"></script>
<script src="javascripts/hoverIntent.js"></script>
<script src="javascripts/superfish.js"></script>
<script src="javascripts/responsivemenu.js"></script>
<script src="javascripts/jquery.tweet.js"></script>
<script src="javascripts/twitterusername.js"></script>
</body>
</html>';
}
?>

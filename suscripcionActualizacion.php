<?php 
	include_once("config.php");
        
?>
<?php if( !(isset( $_POST['Registrar'] ) ) ) { ?>

<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html class="no-js" lang="es">
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
<!-- IE Fix for HTML5 Tags -->
<!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]--> 
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-53476515-1', 'auto');
  ga('send', 'pageview');

</script>

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
					<a href="suscripcion.php">Suscripci&oacute;n gratuita!</a>
						
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
				 Suscribase  gratis!
			</p>
			<p class="right">
				 Empieza hoy mismo!
			</p>
		</div>
	</div>
</div>

<div class="hr">
</div>
<!-- CONTENT 
================================================== -->

<div class="row">
	<!-- CONTACT FORM -->
	<div class="twelve columns">
		<div class="wrapcontact">
                    <h5>Formulario de suscripci&oacute;n</h5>
			<div class="done">
				<div class="alert-box success">
                                    Suscripci&oacute;n exitosa! <a href="" class="close">x</a>
				</div>
			</div>			
				
                            <form action="" method="post" class="login">
				<div class="form">
				   <div class="six columns noleftmargin">
                                       <?php $_GET["idCliente"]; ?>
                                        <label>Tipo de Identificaci&oacute;n</label>
                                        <select id="vTipoIdentificacion" name="vTipoIdentificacion" type="text" onchange="validarIdentificacion();">
                                            <option value="<?php $_GET["tipoIdentificacion"]; ?>"><?php echo $_GET["tipoIdentificacion"];?></option>
                                            <option value="Cedula_Nacional">Cédula Nacional</option>
                                            <option value="DIMEX">DIMEX</option>
                                            <option value="Pasaporte">Pasaporte</option>
                                        </select>
                                   </div>
                                    <div class="six columns noleftmargin">
                                        <label>N&uacute;mero de identificaci&oacute;n</label>
                                        <div id="divNumeroIdentificacion">
                                            <input type="text" maxlength="9" minlength="9" name="vIdentificacion" required class="smoothborder" value="<?php echo $_GET["usr"]; ?>" title="Debe ingresar su Identificación" required/>
                                        </div>
                                    </div>
                                    <div class="six columns noleftmargin">
					<label>Nombre</label>
					<input type="text" name="vNombre" class="smoothborder" required  value="<?php echo $_GET["nombre"]; ?>" title="Debe ingresar su Nombre" required/>
					</div>
                                    <div class="six columns noleftmargin">
					<label>Primer apellido</label>
					<input type="text" name="vApellido1"  class="smoothborder" required value="<?php echo $_GET["apellido1"]; ?>" title="Debe ingresar su Apellido" required/>
					</div>
                                    <div class="six columns noleftmargin">
					<label>Segundo apellido</label>
                                        <input type="text" name="vApellido2" class="smoothborder" required value="<?php echo $_GET["apellido2"]; ?>" title="Debe ingresar su Apellido" />
					</div>
					<div class="six columns noleftmargin">
					<label>E-mail </label>
					<input type="email" name="vEmail" required class="smoothborder" value="<?php echo $_GET["correo"]; ?>" title="Debe ingresar su correo electronico" required/>
					</div>
                                    <div class="six columns noleftmargin">
                                        <label>Tel&eacute;fono Casa</label>
					<input type="number" name="vTel" required class="smoothborder" value="<?php echo $_GET["tel1"]; ?>" title="Debe ingresar su Telefono"/>
					</div>
                                    <div class="six columns noleftmargin">
                                           
                                        <label>Tel&eacute;fono Celular</label>
					<input type="number" name="vTel2" required class="smoothborder" value="<?php echo $_GET["tel2"]; ?>" title="Debe ingresar su Telefono" required/>
					</div>
                                    
                                    <div class="six columns noleftmargin">
					<label>Provincia </label>
                                       
                                        <select id="vProvincia" name="vProvincia" type="text" value="<?php echo $_GET["provincia"]; ?>" >
                                            <option value="<?php echo $_GET["provincia"]; ?>"><?php echo $_GET["provincia"]; ?></option>
                                            <option value="San_Jose">San Jose</option>
                                            <option value="Alajuela">Alajuela</option>
                                            <option value="Cartago">Cartago</option>  
                                            <option value="Heredia">Heredia</option>
                                            <option value="Guanacaste">Guanacaste</option>
                                            <option value="Puntarenas">Puntarenas</option>
                                            <option value="Limon">Limon</option>
                                        </select>
                                        
                                   </div>
                                    
                                 <div class="six columns noleftmargin" >
                                        <label>Cantón </label>
                                        <div id="divCanton">
                                            <select type="text" name="vCanton" id="vCanton" value="<?php echo $_GET["canton"]; ?>" >
                                            
                                            </select>
                                        </div>
				</div>
                                     <div class="six columns noleftmargin">
                                       <br><label>Distrito </label>
                                       <div id="divDistrito">
                                            <select type="text" name="vDistrito" id="vDistrito" value="<?php echo $_GET["distrito"]; ?>">
                                            
                                            </select>
                                       </div>
				</div>
                                     
                                   <div class="six columns noleftmargin"> 
                                      <br><br>  <label>Otras Señas</label>
                                    <textarea required="true" name="vDireccion" id="vDireccion" class="smoothborder ctextarea" rows="5" value="<?php echo $_GET["otrasSenas"]; ?>" title="Debe ingresar su dirección exacta" required> <?php echo $_GET["otrasSenas"]; ?> </textarea>
				</div>
                                    <input type="submit"  class="readmore" value="Actualizar" name="Actualizar" >
                                    
				</div>
                                    
				</form>			
		</div>
	</div>
												
</div>
<div class="hr">
</div>

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
                        
                              <a class="social facebook" href="https://www.facebook.com/Smartcourier?fref=ts" target="_blank"></a></div>
                        
                        
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
<script src="javascripts/sus.js"></script>
<script src="js/js.js"></script>
</body>
</html>
<?php 
} else {
	$suscrip = new Suscripcion;
	$suscrip->storeFormValues( $_POST );
		echo $suscrip->registrar($_POST);	
	
}
?>
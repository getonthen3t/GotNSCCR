<?php
include_once("cabecera.php");
?>
<?php if( !(isset( $_POST['login'] ) ) ) { ?>
<div id="page-wrapper">

    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    Formulario de registro de usuarios Administradores.
                </h1>
                <ol class="breadcrumb">
                    <li>
                        <i class="fa fa-dashboard"></i>  <a href="index.html">Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fa fa-edit"></i> Admin
                    </li>
                </ol>
            </div>
        </div>
        <!-- /.row -->

        <div class="row">
            <div class="col-lg-2">

                <form action="" method="post" class="login" >
                    <div class="form">
                        <input type="text" style="visibility: hidden" name="vidCliente" value="<?php echo $_GET["idCliente"]; ?>"/>
                        <table with="900"  >
                            <tr>
                                <td width="450">
                                    <div class="six columns noleftmargin">

                                        <label>Nombre de usuario:</label><br>
                                        <input type="text" maxlength="30" required autofocus name="username" />

                                    </div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td width="300" ALIGN="LEFT">
                                    <div class="six columns noleftmargin">
                                        <br><label>Contrase&ntilde;a</label><br>
                                        <input type="password" maxlength="30" required name="password" />
                                    </div>
                                </td>
                               
                            </tr>
                            <tr>
                                <td width="300" ALIGN="LEFT">
                                    <div class="six columns noleftmargin">
                                        <input type="submit" value='Guardar' name='login'></button>
                                    </div>
                                </td>
                               
                            </tr>
                           
                        </table>
                    </div>

                </form>

            </div>


<script src="js/js.js"></script>
            </body>

            </html>
<?php 
} else {
	$usr = new Users;
	$usr->storeFormValues( $_POST );
	
	if( $usr->register() ) {
		echo '<script> window.location.replace("../manager/sysusers.php")</script>';
	} else {
		echo "Incorrect Username/Password";	
	}
}
?>            


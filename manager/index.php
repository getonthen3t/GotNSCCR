<?php 
        session_start(); // Para iniciar la session
	include_once("config.php");
        
?>

<?php if( !(isset( $_POST['login'] ) ) ) { ?>

<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> 
<html> <!--<![endif]-->


    <head>

        <!-- General Metas -->
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">	<!-- Force Latest IE rendering engine -->
        <title>SmartCourierCR </title>
        <meta name="description" content="">
        <meta name="author" content="">
        <!--[if lt IE 9]>
                <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

        <!-- Mobile Specific Metas -->
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> 

        <!-- Stylesheets -->
        <link rel="stylesheet" href="css/base.css">
        <link rel="stylesheet" href="css/skeleton.css">
        <link rel="stylesheet" href="css/layout.css">

    </head>
    <body>


                    
            <div class="form-bg">
                <form action="" method="post" class="login">
                    <h2>Login</h2>
                    <p><input type="text" maxlength="30" required autofocus name="username" /></p>
                    <p><input type="password" maxlength="30" required name="password" /></p>
                    
                    <button type="submit" value='login' name='login'></button>
                </form>
            </div>
                	
            	</form>
                
            </div>
        </div>
    
    </body>
</html>

<?php 
} else {
	$usr = new Users;
	$usr->storeFormValues( $_POST );
	
	if( $usr->userLogin() ) {
		echo '<script> window.location.replace("../manager/admin.php")</script>';
	} else {
		echo "Incorrect Username/Password";	
	}
}
?>
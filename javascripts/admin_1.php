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

        <?php
        session_start(); //session_start() crea una sesión para ser usada mediante una petición GET o POST, o pasado por una cookie 
        include_once "../conexion.php"; //es la sentencia q usaremos para incluir el archivo de conexión a la base de datos que creamos anteriormente.
        /* Función verificar_login() --> Vamos a crear una función llamada verificar_login, esta se encargara de hacer una consulta a la base de datos para saber si el usuario ingresado es correcto o no. */

        function verificar_login($user, $password, &$result) {
            $sql = "SELECT * FROM Admin WHERE usuario = '$user' and password = '$password'";
            $rec = mysql_query($sql);
            $count = 0;
            while ($row = mysql_fetch_object($rec)) {
                $count++;
                $result = $row;
            }
            if ($count == 1) {
                return 1;
            } else {
                return 0;
            }
        }

        /* Luego haremos una serie de condicionales que identificaran el momento en el boton de login es presionado y cuando este sea presionado llamaremos a la función verificar_login() pasandole los parámetros ingresados: */

        if (!isset($_SESSION['userid'])) { //para saber si existe o no ya la variable de sesión que se va a crear cuando el usuario se logee
            if (isset($_POST['login'])) { //Si la primera condición no pasa, haremos otra preguntando si el boton de login fue presionado
                if (verificar_login($_POST['user'], $_POST['password'], $result) == 1) { //Si el boton fue presionado llamamos a la función verificar_login() dentro de otra condición preguntando si resulta verdadero y le pasamos los valores ingresados como parámetros.
                    /* Si el login fue correcto, registramos la variable de sesión y al mismo tiempo refrescamos la pagina index.php. */
                    $_SESSION['userid'] = $result->idUsuario;
                    echo $_SESSION['userid'];
                    //header('location: http://www.smartcouriercr.com/manager/index.html');
                } else {
                    echo '<script>
                          
                             alert("Datos incorrectos, Intente nuevamente!");
                          
                          </script>'; //Si la función verificar_login() no pasa, que se muestre un mensaje de error.
                }
            }
            ?>



            <!-- Primary Page Layout -->



            <div class="form-bg">
                <form action="" method="post" class="login">
                    <h2>Login</h2>
                    <p><input name='user'type="text" placeholder="Username"></p>
                    <p><input name='password'type="password" placeholder="Password"></p>
                    <label for="remember">
                        <input type="checkbox" id="remember" value="remember" />
                        <span>Remember me on this computer</span>
                    </label>
                    <button type="submit" value='login' name='login'></button>
                </form>
            </div>
            <?php
        } else {
            // Si la variable de sesión ‘userid’ ya existe, que muestre el mensaje de saludo.
            header('location: http://www.smartcouriercr.com/manager/index.html');
            echo 'Su usuario ingreso correctamente.';
            echo '<a href="logOut.php">Logout</a>';
        }
        ?>





        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.js"></script>
        <script>window.jQuery || document.write("<script src='js/jquery-1.5.1.min.js'>\x3C/script>")</script>
        <script src="js/app.js"></script>

        <!-- End Document -->
    </body>


</html>

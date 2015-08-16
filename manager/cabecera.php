<!DOCTYPE html>
<?php
session_start();

if (empty($_SESSION['user_session'])) {
   echo '<script> window.location.replace("../manager/index.php")</script>'; 
}
include_once("config.php");
?> 

<html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <script src="js/jquery-1.11.3.min.js"></script>
        <title>SCCR+ Admin</title>

        <!-- Bootstrap Core CSS -->
        <link href="css/bootstrap.min.css" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="css/sb-admin.css" rel="stylesheet">

        <!-- Morris Charts CSS -->
        <link href="css/plugins/morris.css" rel="stylesheet">

        <!-- Custom Fonts -->
        <link href="font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <link href="css/tabla.css" rel="stylesheet">
        <script src="js/tabla.js"></script>
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

    </head>

    <body>





        <div id="wrapper">

            <!-- Navigation -->
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">SCCR+</a>
                </div>
                <!-- Top Menu Items -->
                <ul class="nav navbar-right top-nav">
                   
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bell"></i> <b class="caret"></b></a>
                        <ul class="dropdown-menu alert-dropdown">
                            <?php
                                    $pendCasilleros = new casillerosPend();
                                   $pendCasilleros->alertas( $pendCasilleros->cantidadCasillerosPend());
                            ?>
                         
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> <?php $vUser_session = $_SESSION['user_session'];
echo $vUser_session; ?><b class="caret"></b></a>
                        <ul class="dropdown-menu">
                           
                            <li class="divider"></li>
                            <li>
                                <a href="logOut.php"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
                <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <ul class="nav navbar-nav side-nav">
                        <li class="active">
                            <a href="admin.php"><i class="fa fa-fw fa-dashboard"></i>  Panel del Administraci&oacute;n</a>
                        </li> 
                        <li>
                            <a href="casillerosPendient.php?mensaje=2"><i class="fa fa-fw fa-table"></i> Casilleros Pendientes</a>
                        </li>
                        <li>
                            <a href="admClientesPag.php"><i class="fa fa-fw fa-table"></i> Mantenimiento de Clientes </a>
                            
                        </li>
                        <li>
                            <a href="regUsuAdmin.php?mensaje=2"><i class="fa fa-fw fa-desktop"></i> Crea usuario Admin</a>
                        </li>
                        <li>
                            <a href="sysusers.php"><i class="fa fa-fw fa-wrench"></i> Mant.Usuario Admin</a>
                        </li>

                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </nav>
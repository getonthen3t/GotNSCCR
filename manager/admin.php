<!DOCTYPE html>
<?php
include_once("cabecera.php");
?> 
<div id="page-wrapper">

    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    SCCR+  <small>Panel de administraci&oacute;n</small>
                </h1>
                <ol class="breadcrumb">
                    <li class="active">
                        <i class="fa fa-dashboard"></i> Panel del Administraci&oacute;n
                    </li>
                </ol>
            </div>
        </div>
        <!-- /.row -->

        <div class="row">
            <div class="col-lg-12">
                <div class="alert alert-info alert-dismissable">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <i class="fa fa-info-circle"></i>  <strong>Bienvenido al panel del administraci&oacute;n SCCR+</strong>
                </div>
            </div>
        </div>
        <!-- /.row -->

        <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <i class="fa fa-tasks fa-5x"></i>
                            </div>

                            <div class="col-xs-9 text-right">
                                <div class="huge"> <?php
                                    $pendCasilleros = new casillerosPend();
                                    echo $pendCasilleros->cantidadCasillerosPend();
                                    ?></div>
                                <div>Casilleros por asignar!</div>
                            </div>
                        </div>
                    </div>
                    <a href="casillerosPendient.php">
                        <div class="panel-footer">
                            <span class="pull-left">Ver Detalles !</span>
                            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="panel panel-green">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <i class="fa fa-tasks fa-5x"></i>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div>Mantenimiento de Clientes</div>
                            </div>
                        </div>
                    </div>
                    <a href="admClientesPag.php">
                        <div class="panel-footer">
                            <span class="pull-left">Ver Detalles</span>
                            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="panel panel-red">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-3">
                                <i class="fa fa-support fa-5x"></i>
                            </div>
                            <div class="col-xs-9 text-right">
                                <div class="huge"></div>
                                <div>Mantenimiento de usuarios Admin</div>
                            </div>
                        </div>
                    </div>
                    <a href="sysusers.php">
                        <div class="panel-footer">
                            <span class="pull-left">Ver Detalles</span>
                            <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!-- /.row -->

        <!-- /.row -->




    </div>
</div>
<?php
include_once("piePagina.php");
?> 

</body>

</html>

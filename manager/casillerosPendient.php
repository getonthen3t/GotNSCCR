
<?php
include_once("cabecera.php");
?>

<div id="page-wrapper">

    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    Casilleros pendientes por asignar.
                </h1>
                <ol class="breadcrumb">
                    <li>
                        <i class="fa fa-dashboard"></i>  <a href="admin.php"> Panel del Administraci&oacute;n</a>
                    </li>
                    <li class="active">
                        <i class="fa fa-table"></i>  Casilleros pendientes
                    </li>
                </ol>
            </div>
        </div>
        <!-- /.row -->

        <div class="row">
            <div class="col-lg-14">
                <h2>Clientes pendientes por casillero.</h2>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Identificaci&oacute;n</th>
                                <th>Tipo Identificaci&oacute;n</th>
                                <th>Nombre</th>
                                <th>Apellido 1</th>
                                <th>Apellido 2</th>
                                <th>Email</th>
                                <th>Tel1</th>
                                <th>Tel2</th>
                                <th>Provincia</th>
                                <th>Cant&oacute;n</th>
                                <th>Distrito</th>
                                <th>Otras Se&ntilde;as</th>
                                <th>Asignar</th>
                                <th>Descartar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $pendCasilleros = new casillerosPend();
                            echo $pendCasilleros->creaTablaPend();
                            ?>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
<?php
include_once("piePagina.php");
?> 

</body>

</html>

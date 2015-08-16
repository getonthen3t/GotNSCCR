
<?php
include_once("cabecera.php");
?>

<div id="page-wrapper">

    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    Usuarios administradores del sistema.
                </h1>
                <ol class="breadcrumb">
                    <li>
                        <i class="fa fa-dashboard"></i>  <a href="admin.php"> Panel del Administraci&oacute;n</a>
                    </li>
                    <li class="active">
                        <i class="fa fa-table"></i>  Usuarios admin.
                    </li>
                </ol>
            </div>
        </div>
        <!-- /.row -->

        <div class="row">
            <div class="col-lg-2">
                <h2>Usuarios admin.</h2>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Nombre de usuario</th>
                                <th>Eliminar</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $user = new Users();
                            echo $user->creaTablaUsers();
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

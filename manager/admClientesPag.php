<?php
include_once("cabecera.php");
?>
<script>
    $(document).ready(function () {
        $('#example').DataTable({
            "pagingType": "full_numbers"
        });
    });
</script>
<div id="page-wrapper">

    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    Modulo de Administraci&oacute;n de Clientes.
                </h1>
                <ol class="breadcrumb">
                    <li>
                        <i class="fa fa-dashboard"></i>  <a href="admin.php"> Panel del Administraci&oacute;n</a>
                    </li>
                    <li class="active">
                        <i class="fa fa-table"></i>  Administraci&oacute;n de Clientes
                    </li>
                </ol>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-14">
                <div class="table-responsive">
                    <table id="example" class="able table-bordered table-hover " width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Casillero</th>
                                <th>Identificaci&oacute;n</th>
                                <th>Tipo Identificaci&oacute;n</th>
                                <th>Nombre</th>
                                <th>1er Apellido</th>
                                <th>2do Apellido</th>
                                <th>Email</th>
                                <th>Telefono</th>
                                <th>Telefono</th>
                                <th>Provincia</th>
                                <th>Cant&oacute;n</th>
                                <th>Distrito</th>
                                <th>Otras Se&ntilde;as</th>
                                <th>Actualizar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $admClientes = new admClientes();
                            echo $admClientes->creaTablaClientes();
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

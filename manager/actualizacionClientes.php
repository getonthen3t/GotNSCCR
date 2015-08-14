<?php
    include_once("cabecera.php");
 ?>

    <div id="page-wrapper">

        <div class="container-fluid">

            <!-- Page Heading -->
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">
                        Forms
                    </h1>
                    <ol class="breadcrumb">
                        <li>
                            <i class="fa fa-dashboard"></i>  <a href="index.html">Dashboard</a>
                        </li>
                        <li class="active">
                            <i class="fa fa-edit"></i> Forms
                        </li>
                    </ol>
                </div>
            </div>
            <!-- /.row -->

            <div class="row">
                <div class="col-lg-6">

                    <form action="actClientes.php" method="submit" class="login" >
                        <div class="form">
                            <div class="six columns noleftmargin">
                                <input type="text"  name="vidCliente" value="<?php echo $_GET["idCliente"]; ?>"/> 
                                <label>Tipo de Identificaci&oacute;n</label>
                                <select id="vTipoIdentificacion" name="vTipoIdentificacion" type="text" onchange="validarIdentificacion();">
                                    <option value="<?php echo $_GET["tipoIdentificacion"]; ?>"><?php echo $_GET["tipoIdentificacion"]; ?></option>
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
                                <input type="email" name="vCorreo" required class="smoothborder" value="<?php echo $_GET["correo"]; ?>" title="Debe ingresar su correo electronico" required/>
                            </div>
                            <div class="six columns noleftmargin">
                                <label>Tel&eacute;fono Casa</label>
                                <input type="number" name="vTel1" required class="smoothborder" value="<?php echo $_GET["tel1"]; ?>" title="Debe ingresar su Telefono"/>
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
                                        <option value="<?php echo $_GET["canton"]; ?>"><?php echo $_GET["canton"]; ?></option>
                                    </select>
                                </div>
                            </div>
                            <div class="six columns noleftmargin">
                                <br><label>Distrito </label>
                                <div id="divDistrito">
                                    <select type="text" name="vDistrito" id="vDistrito" value="<?php echo $_GET["distrito"]; ?>" >
                                        <option value="<?php echo $_GET["distrito"]; ?>"><?php echo $_GET["distrito"]; ?></option>
                                    </select>
                                </div>
                            </div>

                            <div class="six columns noleftmargin"> 
                                <br><br>  <label>Otras Señas</label>
                                <textarea required="true" name="vDireccion" id="vDireccion" class="smoothborder ctextarea" rows="10" value="<?php echo $_GET["otrasSenas"]; ?>" title="Debe ingresar su dirección exacta" required> <?php echo $_GET["otrasSenas"]; ?> </textarea>
                            </div>
                            <input type="submit"  class="readmore" value="Actualizar" name="Actualizar" >

                        </div>

                    </form>

                </div>
             


                </body>

                </html>
           

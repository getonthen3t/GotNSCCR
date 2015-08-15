<?php
include_once("cabecera.php");
?>

<div id="page-wrapper">

    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">
                    Formulario de Actualizaci&oacute;n de Clientes
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
                        <input type="text" style="visibility: hidden" name="vidCliente" value="<?php echo $_GET["idCliente"]; ?>"/>
                        <table with="900"  >
                            <tr>
                                <td width="450">
                                    <div class="six columns noleftmargin">

                                        <label>Tipo de Identificaci&oacute;n</label><br>
                                        <select id="vTipoIdentificacion" name="vTipoIdentificacion" type="text" onchange="validarIdentificacion();">
                                            <option value="<?php echo $_GET["tipoIdentificacion"]; ?>"><?php echo $_GET["tipoIdentificacion"]; ?></option>
                                            <option value="Cedula_Nacional">Cédula Nacional</option>
                                            <option value="DIMEX">DIMEX</option>
                                            <option value="Pasaporte">Pasaporte</option>
                                        </select>

                                    </div>
                                </td>
                                <td width="450">
                                    <div class="six columns noleftmargin">
                                        <label>N&uacute;mero de identificaci&oacute;n</label><br>
                                        <div id="divNumeroIdentificacion">
                                            <input type="text" maxlength="9" minlength="9" name="vIdentificacion" required class="smoothborder" value="<?php echo $_GET["usr"]; ?>" title="Debe ingresar su Identificación" required/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width="300" ALIGN="LEFT">
                                    <div class="six columns noleftmargin">
                                        <br><label>Nombre</label><br>
                                        <input type="text" name="vNombre" class="smoothborder" required  value="<?php echo $_GET["nombre"]; ?>" title="Debe ingresar su Nombre" required/>
                                    </div>
                                </td>
                                <td width="300" ALIGN="LEFT">
                                    <div class="six columns noleftmargin">
                                        <br><label>Primer apellido</label><br>
                                        <input type="text" name="vApellido1"  class="smoothborder" required value="<?php echo $_GET["apellido1"]; ?>" title="Debe ingresar su Apellido" required/>
                                    </div>
                                </td>
                                <td width="300" ALIGN="LEFT">
                                    <div class="six columns noleftmargin">
                                        <br><label>Segundo apellido</label><br>
                                        <input type="text" name="vApellido2" class="smoothborder" required value="<?php echo $_GET["apellido2"]; ?>" title="Debe ingresar su Apellido" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width="300" ALIGN="LEFT">
                                    <div class="six columns noleftmargin">
                                        <br><label>E-mail </label><br>
                                        <input type="email" name="vCorreo" required class="smoothborder" value="<?php echo $_GET["correo"]; ?>" title="Debe ingresar su correo electronico" required/>
                                    </div>
                                </td>
                                <td width="300" ALIGN="LEFT">
                                    <div class="six columns noleftmargin">
                                        <br><label>Tel&eacute;fono Casa</label><br>
                                        <input type="text" name="vTel1" required class="smoothborder" value="<?php echo $_GET["tel1"]; ?>" title="Debe ingresar su Telefono"/>
                                    </div>
                                </td>
                                <td width="300">
                                    <div class="six columns noleftmargin">
                                        <br><label>Tel&eacute;fono Celular</label><br>
                                        <input type="text" name="vTel2" required class="smoothborder" value="<?php echo $_GET["tel2"]; ?>" title="Debe ingresar su Telefono" required/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width="200" ALIGN="LEFT">                 
                                    <div class="six columns noleftmargin">
                                        <br><label>Provincia </label><br>

                                        <select id="vProvincia" name="vProvincia" type="text" value="<?php echo $_GET["provincia"]; ?>"  onchange="cambiaCanton();">
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
                                </td>
                                <td width="300" ALIGN="LEFT">

                                    <div class="six columns noleftmargin" >
                                        <br><label>Cant&oacute;n </label><br>
                                        <div id="divCanton">
                                            <select type="text" name="vCanton" id="vCanton" value="<?php echo $_GET["canton"]; ?>" >
                                                <option value="<?php echo $_GET["canton"]; ?>"><?php echo $_GET["canton"]; ?></option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                                <td width="300" ALIGN="LEFT">
                                    <div class="six columns noleftmargin">
                                        <br><label>Distrito </label><br>
                                        <div id="divDistrito">
                                            <select type="text" name="vDistrito" id="vDistrito" value="<?php echo $_GET["distrito"]; ?>" >
                                                <option value="<?php echo $_GET["distrito"]; ?>"><?php echo $_GET["distrito"]; ?></option>
                                            </select>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width="300" ALIGN="LEFT">
                                    <br><label>Otras Señas</label>
                                    <div class="six columns noleftmargin"> 

                                        <textarea required="true" name="vDireccion" id="vDireccion" class="smoothborder ctextarea" rows="5" value="<?php echo $_GET["otrasSenas"]; ?>" title="Debe ingresar su dirección exacta" required> <?php echo $_GET["otrasSenas"]; ?> </textarea>

                                    </div>
                                </td>
                                <td  width="300"></td>
                                <td  width="300"></td>

                            </tr>
                            <tr>
                                <td width="300"></td>
                                <td width="300" ALIGN=CENTER>
                                    <br><br> <input type="submit"  class="readmore" value="Actualizar" name="Actualizar" ><br><br>
                                </td>
                                <td width="300"></td>
                            </tr>
                        </table>
                    </div>

                </form>

            </div>


<script src="js/js.js"></script>
            </body>

            </html>


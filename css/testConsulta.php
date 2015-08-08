<?php include "conexion.php";
$sql = "SELECT * FROM Users";
$resultado = mysql_query($sql, $conexion) or die("Error");
echo "
				<table style='border:1px solid;width:780px;background-color: #E6E6E6;'>
				<tr style='border:1px solid'>
					<th style='border:1px solid'>N_Identificacion</th>
					<th style='border:1px solid'>Nombre</th>
					<th style='border:1px solid'>Apellido1</th>
					<th style='border:1px solid'>Apellido2</th>
					<th style='border:1px solid'>email</th>
					<th style='border:1px solid'>telefono</th>
					<th style='border:1px solid'>direccion</th>
                                        <th style='border:1px solid'>casillero</th>
				</tr>
				";
while ($row = mysql_fetch_array($resultado)) {
    echo "<tr>";
    echo "<td class='green-text' style='border:1px solid black'>" . $row[N_Identificacion] . "</td>";
    echo "<td class='green-text' style='border:1px solid black'>" . $row[Nombre] . "</td>";
    echo "<td class='green-text' style='border:1px solid black'>" . $row[Apellido1] . "</td>";
    echo "<td class='green-text' style='border:1px solid black'>" . $row[Apellido2] . "</td>";
    echo "<td class='green-text' style='border:1px solid black'>" . $row[email] . "</td>";
    echo "<td class='green-text' style='border:1px solid black'>" . $row[telefono] . "</td>";
    echo "<td class='green-text' style='border:1px solid black'>" . $row[direccion] . "</td>";
    echo "<td class='green-text' style='border:1px solid black'>" . $row[casillero] . "</td>";
    echo "<td style='border:1px solid black'><a class='green-text' href='FormularioMedico.php?idMedico=" . $row[ID_Cli] . "&idTipo=2'> Modificar </a></td>";
    echo "<td style='border:1px solid black'><a class='green-text' href='ActualizarMedico.php?idMedico=" . $row[ID_Cli] . "&idTipo=3' onclick='return confirm(\" &iquest Esta seguro que desea eliminar el registro ?\")'> Eliminar </a></td>";
    echo "</tr>";
}
echo "</table>"

//				mysql_close($conexion);
?>
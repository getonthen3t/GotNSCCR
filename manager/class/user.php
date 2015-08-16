<?php

class Users {

    public $username = null;
    public $password = null;
    public $salt = "Zo4rU5Z1YyKJAASY0PT6EUg7BBYdlEhPaNLuxAwU8lqu1ElzHv0Ri7EM6irpx5w"; // cigra la contrase;a

    public function __construct($data = array()) {
        if (isset($data['username']))
            $this->username = stripslashes(strip_tags($data['username']));
        if (isset($data['password']))
            $this->password = stripslashes(strip_tags($data['password']));
    }

    public function storeFormValues($params) {
        //store the parameters
        $this->__construct($params);
    }

    public function userLogin() {

        $success = false;
        $_SESSION['user_session'];
        try {
            $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT * FROM users WHERE username = :username AND password = :password LIMIT 1";

            $stmt = $con->prepare($sql);
            $stmt->bindValue("username", $this->username, PDO::PARAM_STR);
            $stmt->bindValue("password", hash("sha256", $this->password . $this->salt), PDO::PARAM_STR);
            $stmt->execute();

            $valid = $stmt->fetchColumn();

            if ($valid) {
                $success = true;
                $_SESSION['user_session'] = $this->username;
            }

            $con = null;
            return $success;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return $success;
        }
    }

    public function register() {
        $correct = false;
        try {
            $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "INSERT INTO users(username, password) VALUES(:username, :password)";

            $stmt = $con->prepare($sql);
            $stmt->bindValue("username", $this->username, PDO::PARAM_STR);
            $stmt->bindValue("password", hash("sha256", $this->password . $this->salt), PDO::PARAM_STR);
            $stmt->execute();
            return "Registration Successful <br/> <a href='index.php'>Login Now</a>";
        } catch (PDOException $e) {
            //return $e->getMessage();

            $msj = 1;
            // $msj="<div class='alert alert-warning'>
            //                Best check yo self, you're not looking too good.
            //          </div><h1>ERROR existe un duplicado del Cliente, verificar.</h1>";
            echo '<script> window.location.replace("../manager/regUsuAdmin.php?mensaje=' . $msj . '")</script>';
        }
    }

    public function creaTablaUsers() { //Crea una tabla con los usuarios administradores
        $cantidad = 0;
        $success = false;
        try {
            $con = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
            $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT users.username, users.userID  FROM users";

            $stmt = $con->prepare($sql);

            $stmt->execute();
            $msj = null;
            $msj = 'Esta seguro que desea eliminar?';

            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo '<tr>';
                echo '<td>' . $row['username'] . '</td>';
                echo '<td><a href="eliminaUser.php?user=' . $row['userID'] . '"><button type="button" onclick="return confirm()" class="btn btn-lg btn-danger" >Eliminar</button></a></td>';
                echo '</tr>';
            }
            $con = null;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return $cantidad;
        }
    }

}

?>
<?php
class Fortmula {
    static function ValidateUser($username, $password) {
        global $proxy;
        $auth = new autenticarUsuario();
        $auth->username = $username;
        $auth->password = $password;
        
        $result = $proxy->autenticarUsuario($auth)->return;
        if (strlen($result) > 0) {
            return $result;
        }
        return false;
    }

    static function RegisterUser($username, $password) {
        global $proxy;
        $auth = new registrarUsuario();
        $auth->username = $username;
        $auth->password = $password;
        $auth->tipo = "aficionado";
        
        $result = $proxy->registrarUsuario($auth)->return;
        if (strlen($result) > 0) {
            return $result;
        }
        return false;
    }

    static function RetrieveScuderias() {
        global $proxy;

        return $proxy->verEscuderias(new verEscuderias())->return;
    }
}

?>
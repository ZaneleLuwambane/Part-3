<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST[""];
    $password = $_POST[""];

    header("Location: Login.cshtml");
    exit();
}
?>
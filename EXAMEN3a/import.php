<?php 
require_once "autoloader.php";

$connection = new Lighting();

$conn = $connection->getConn();

$connection->import(); 



?
<?php

date_default_timezone_set('America/Sao_Paulo');

header('Cache-Control: no-cache, must-revalidate');
header("Content-type: application/json; charset=utf-8");

//
//$post = file_get_contents("php://input");
//$contato = json_decode($post);

$json = file_get_contents('contatos.json');
$decode = json_decode($json, true);
$encode = json_encode($decode);

if ($_POST) {
    echo $encode;
} else {

    echo $encode;
}



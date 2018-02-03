<?php
date_default_timezone_set('America/Sao_Paulo');

header('Cache-Control: no-cache, must-revalidate');
header("Content-type: application/json; charset=utf-8");

//
//$post = file_get_contents("php://input");
//$contato = json_decode($post);

$operadoras[] = array('nome' => 'Oi', 'codigo' => 14, 'categoria' => 'Celular', 'preco' => 2);
$operadoras[] = array('nome' => 'Vivo', 'codigo' => 15, 'categoria' => 'Celular', 'preco' => 1);
$operadoras[] = array('nome' => 'Tim', 'codigo' => 41, 'categoria' => 'Celular', 'preco' => 3);
$operadoras[] = array('nome' => 'GVT', 'codigo' => 25, 'categoria' => 'Fixo', 'preco' => 1);
$operadoras[] = array('nome' => 'Embratel', 'codigo' => 21, 'categoria' => 'Fixo', 'preco' => 2);

echo json_encode($operadoras);

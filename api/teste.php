<?php

//global $_DELETE = array();
//global $_PUT = array();

if (!strcasecmp($_SERVER['REQUEST_METHOD'], 'DELETE')) {
    parse_str(file_get_contents('php://input'), $_DELETE);
}
if (!strcasecmp($_SERVER['REQUEST_METHOD'], 'PUT')) {
    parse_str(file_get_contents('php://input'), $_PUT);
}


/////////////////////////////////////

exit;

$metodo = $_SERVER['REQUEST_METHOD'];
$recurso = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
$conteudo = file_get_contents('php://input');

switch ($metodo ) {
  case 'PUT':
    funcao_para_put($recurso, $conteudo);  
    break;
  case 'POST':
    funcao_para_post($recurso, $conteudo);  
    break;
  case 'GET':
    funcao_para_get($recurso, $conteudo);  
    break;
  case 'HEAD':
    funcao_para_head($recurso, $conteudo);  
    break;
  case 'DELETE':
    funcao_para_delete($recurso, $conteudo);  
    break;
  case 'OPTIONS':
    funcao_para_options($recurso, $conteudo);    
    break;
  default:
    header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found");
    die('{"msg": "Método não encontrado."}');  
    break;
}

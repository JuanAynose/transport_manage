<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/ciudades.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $agregarCiudad = new Ciudades($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));
  print_r($data);
  
    //$postcamion->dni_empleado =  $data-> dni_empleado;

$agregarCiudad->nombre = $data -> nombre_ciudad;
$agregarCiudad->cod_prov = $data -> cod_prov;
$agregarCiudad->cod_postal = $data -> cod_postal;


 
  // Create post
  if($agregarCiudad->ingresarCiudad()) {
    //$postCopy->insertarDestinatario();
    echo json_encode(
      array('message' => 'Ciudad ingresado con exito')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
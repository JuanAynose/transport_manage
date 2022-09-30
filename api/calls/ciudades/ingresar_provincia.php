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
  $agregarProvincia = new Ciudades($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));
  print_r($data);
  
    //$postcamion->dni_empleado =  $data-> dni_empleado;

$agregarProvincia->nombre = $data ->  nombre_provincia;


 
  // Create post
  if($agregarProvincia->ingresarProvincia()) {
    //$postCopy->insertarDestinatario();
    echo json_encode(
      array('message' => 'Provincia ingresado con exito')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
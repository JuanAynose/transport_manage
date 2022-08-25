<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../config/Database.php';
  include_once '../models/paquete.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $postcamion = new Post($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));
  print_r($data);
  
    //$postcamion->dni_empleado =  $data-> dni_empleado;

$postcamion->capacidad_camion = $data -> capacidad_camion;
$postcamion->marca_camion = $data -> marca_camion;
$postcamion->disponibilidad_camion = $data -> disponibilidad_camion;


 
  // Create post
  if($postcamion->ingresarCamion()) {
    //$postCopy->insertarDestinatario();
    echo json_encode(
      array('message' => 'Camion ingresado con exito')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
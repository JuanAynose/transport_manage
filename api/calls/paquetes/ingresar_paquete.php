<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../../config/Database.php';
  include_once '../../models/paquetes.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $ingresarPaquete = new Paquetes($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));
  //print_r($data);
  
  $ingresarPaquete->nombre_paquete = $data->nombre_paquete;
  $ingresarPaquete->tipo_paquete = $data->tipo_paquete;
  $ingresarPaquete->peso_paquete = $data->peso_paquete;

  // Create post
  if($ingresarPaquete->ingresarDetallePaquete($data)) {
    echo json_encode(
      array('message' => 'Paquete creado con exito')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
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
  $envio = new Post($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));



  $envio -> id_destinatario = $data->id_destinatario;
  $envio -> id_empleado = $data->id_empleado;
  $envio -> id_camion  = $data->id_camion ;
  $envio -> id_paquete = $data->id_paquete;
  $envio -> fecha_entrega = $data->fecha_entrega;



  // Create post
  if($envio->ingresarEnvio()) {
    echo json_encode(
      array('message' => 'Enviado creado con exito')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
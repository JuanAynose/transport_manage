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
  $post = new Post($db);
  $postCopy = new Post($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));
  //print_r($data);
  
  $post->nombre_paquete = $data->nombre_paquete;
  $post->tipo_paquete = $data->tipo_paquete;
  $post->peso_paquete = $data->peso_paquete;
/*
  $postCopy->nombre_destinatario =$data->nombre_destinatario; 
  $postCopy->apellido_destinatario =$data->apellido_destinatario; 
  $postCopy->numero_destinatario =$data->numero_destinatario; 
  $postCopy->dni_destinatario =$data->dni_destinatario; 
  $postCopy->direccion_destinatario =$data->direccion_destinatario; 
  $postCopy->codigo_postal =$data->ciudad_destinatario; 
*/
  // Create post
  if($post->create($data)) {
    //$postCopy->insertarDestinatario();
    echo json_encode(
      array('message' => 'Paquete creado con exito')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');


  include_once '../../config/Database.php';
  include_once '../../models/camiones.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $camionById = new Camiones($db);

  // Get ID
  $camionById->id_camion = isset($_GET['id_camion']) ? $_GET['id_camion'] : die();

  // Get post
  $camionById->leerCamionById();
  // Create array
  
  $camion_item= array(
    'id_camion' => $camionById->id_camion,
      'capacidad' => $camionById->capacidad,
      'marca' => $camionById->marca,
      'disponibilidad' => $camionById->disponibilidad,
);
print_r(json_encode($camion_item));

  // Make JSON
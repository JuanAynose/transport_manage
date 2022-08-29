<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../config/Database.php';
include_once '../models/paquete.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$post = new Post($db);

// Blog post query
$result = $post->leerCamionesDisponibles();
// Get row count
$num = $result->rowCount();

// Check if any posts
if ($num > 0) {
  // Post array
  $camiones_ready = array();

  while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    extract($row);

    $camiones_item = array(
      'id_camion' => $id_camion,
      'capacidad' => $capacidad,
      'marca' => $marca,
      'disponibilidad' => $disponibilidad,
    );

    // Push to "data"
    array_push($camiones_ready, $camiones_item);
  }

  // Turn to JSON & output
  echo json_encode($camiones_ready);
} else {
  // No Posts
  echo json_encode(
    array('message' => 'No Posts Found')
  );
}

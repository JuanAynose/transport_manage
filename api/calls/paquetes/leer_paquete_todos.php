<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/paquetes.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$post = new Paquetes($db);

// Blog post query
$result = $post->leerPaquetesTodos();
// Get row count
$num = $result->rowCount();

// Check if any posts
if ($num > 0) {
  // Post array
  $package_ready = array();

  while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    extract($row);

    $package_item = array(
      'id_paquete' => $id_paquete,
      'cod_paquete' => $cod_paquete,
      'descrip' => $descrip,
      'dir_destino' => $dir_destino,
      'id_destinatario' => $id_destinatario,
      'dni' => $dni,
      'situacion' => $situacion,
    );

    // Push to "data"
    array_push($package_ready, $package_item);
  }
  // Turn to JSON & output
  echo json_encode($package_ready);
} else {
  // No Posts
  echo json_encode(
    array('message' => 'No Posts Found')
  );
}

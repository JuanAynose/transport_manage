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
$post = new Remito($db);

// Blog post query
$result = $post->leerRemitos();
// Get row count
$num = $result->rowCount();

// Check if any posts
if ($num > 0) {
  // Post array
  $remito_ready = array();

  while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    extract($row);

    $remito_item = array(
      'cod_paquete' => $cod_paquete,
      'descrip' => $descrip,
      'dir_destino' => $dir_destino,
      'id_destinatario' => $id_destinatario,
      'dni' => $dni,
    );

    // Push to "data"
    array_push($remito_ready, $remito_item);
  }
  // Turn to JSON & output
  echo json_encode($remito_ready);
} else {
  // No Posts
  echo json_encode(
    array('')
  );
}

<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/remitos.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$post = new Remitos($db);

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
      'id_envio' =>$id_envio,
      'id_paquete' => $id_paquete,
      'descrip' => $descrip,
      'apellido' => $apellido,
      'marca' => $marca,
      'dir_destino' => $dir_destino,
      'destinatario_nombre' => $destinatario_nombre,
      'ciudad_nombre' => $ciudad_nombre,
      'cod_postal' => $cod_postal,
      'provincia_nombre' => $provincia_nombre,
      'situacion' => $situacion,
      'fecha' => $fecha,
      'fecha_emision' => $fecha_emision
    );

    // Push to "data"
    array_push($remito_ready, $remito_item);
  }
  // Turn to JSON & output
  echo json_encode($remito_ready);
} else {
  // No Posts
  echo json_encode(false);    
}

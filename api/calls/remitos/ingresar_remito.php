<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/remitos.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$remitos = new Remitos($db);
// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

print_r($data);


$remitos->id_paquete = $data->id_paquete;
$remitos->nombre_paquete  = $data->nombre_paquete;
$remitos->id_empleado = $data->nombre_empleado;
$remitos->id_camion = $data->nombre_camion;
$remitos->id_destinatario = $data->nombre_destinatario;
$remitos->fecha_entrega = $data->fecha_entrega;
$remitos->fecha_emision = $data->fecha_emision;


// Create post
if ($remitos->ingresarRemitos($data)) {
  echo json_encode(
    array('message' => 'Enviado creado con exito')
  );
} else {
  echo json_encode(
    array('message' => 'Post Not Created')
  );
}

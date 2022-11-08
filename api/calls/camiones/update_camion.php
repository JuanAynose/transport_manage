<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


include_once '../../config/Database.php';
include_once '../../models/camiones.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$updateCamion = new Camiones($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

//$updateempleado->dni_empleado =  $data-> dni_empleado;
print_r($data);

$updateCamion->id_camion = $data->id_camion;
$updateCamion->capacidad = $data->capacidad;
$updateCamion->marca = $data->marca;
$updateCamion->disponibilidad = $data->disponibilidad;


// Create post
if ($updateCamion->updateCamiones()) {
    echo json_encode(
        array('message' => 'Camion editado con exito')
    );
} else {
    echo json_encode(
        array('message' => 'Post Not Created')
    );
}

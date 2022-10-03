<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


include_once '../../config/Database.php';
include_once '../../models/empleados.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$updatepaquete = new Paquetes($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

//$updateempleado->dni_empleado =  $data-> dni_empleado;



// Create post
if ($updatepaquete->updatePaquete($data)) {
    //$postCopy->insertarDestinatario();
    echo json_encode(
        array('message' => 'paquete editado con exito')
    );
} else {
    echo json_encode(
        array('message' => 'Post Not Created')
    );
}

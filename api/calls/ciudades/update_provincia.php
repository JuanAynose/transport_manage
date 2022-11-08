<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


include_once '../../config/Database.php';
include_once '../../models/ciudades.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$updateeProvincia = new Ciudades($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

//$updateempleado->dni_empleado =  $data-> dni_empleado;
$updateeProvincia->nombre_provincia = $data->nombre_provincia;
$updateeProvincia->id_provincia = $data->id_provincia;



// Create post
if ($updateeProvincia->updateProvincia()) {
    //$postCopy->insertarDestinatario();
    echo json_encode(
        array('message' => 'Provincia editado con exito')
    );
} else {
    echo json_encode(
        array('message' => 'Post Not Created')
    );
}

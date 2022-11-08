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
$updateeCiudad = new Ciudades($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

//$updateempleado->dni_empleado =  $data-> dni_empleado;
$updateeCiudad->nombre_ciudad = $data->nombre_ciudad;
$updateeCiudad->codigo_provincia = $data->codigo_provincia;
$updateeCiudad->codigo_postal = $data->codigo_postal;
$updateeCiudad->id_ciudad = $data->id_ciudad;



// Create post
if ($updateeCiudad->updateCiudad()) {
    //$postCopy->insertarDestinatario();
    echo json_encode(
        array('message' => 'Ciudad editado con exito')
    );
} else {
    echo json_encode(
        array('message' => 'Post Not Created')
    );
}

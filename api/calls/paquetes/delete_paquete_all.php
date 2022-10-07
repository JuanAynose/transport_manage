<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/paquetes.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$deletePaque = new Paquetes($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));
print_r($data);
// Set ID to update
$deletePaque->id_destinatario = $data->id_destinatario;
$deletePaque->id_detalle_paquete = $data->id_detalle_paquete;
$deletePaque->id_paquete = $data->id_paquete;

// Delete post
if ($deletePaque->deletePaqueteAllData($data)) {
    echo json_encode(
        array('message' => 'all paquete Deleted')
    );
} else {
    echo json_encode(
        array('message' => 'Post Not Deleted')
    );
}

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
$deleteDetallePaque = new Paquetes($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));
print_r($data);
// Set ID to update
$deleteDetallePaque->id_paquete = $data->id;

// Delete post
if ($deleteDetallePaque->deleteDetallePaquete()) {
    echo json_encode(
        array('message' => 'Paquete Deleted')
    );
} else {
    echo json_encode(
        array('message' => 'Post Not Deleted')
    );
}

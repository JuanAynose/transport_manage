<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/camiones.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$deleteCamio = new Camiones($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));
print_r($data);
// Set ID to update
$deleteCamio->id_camion = $data->id;

// Delete post
if ($deleteCamio->deleteCamion()) {
    echo json_encode(
        array('message' => 'Post Deleted')
    );
} else {
    echo json_encode(
        array('message' => 'Post Not Deleted')
    );
}

<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/ciudades.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$post = new Ciudades($db);

// Blog post query
$result = $post->leerProvincias();
// Get row count
$num = $result->rowCount();

// Check if any posts
if ($num > 0) {
    // Post array
    $provincias = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $provincia_item = array(
            'cod_prov' => $cod_prov,
            'nombre' => $nombre,
        );

        // Push to "data"
        array_push($provincias, $provincia_item);
    }

    // Turn to JSON & output
    echo json_encode($provincias);
} else {
    // No Posts
    echo json_encode(
        array('message' => 'No Posts Found')
    );
}

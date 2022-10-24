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
$result = $post->leerCiudades();
// Get row count
$num = $result->rowCount();

// Check if any posts
if ($num > 0) {
    // Post array
    $ciudades = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $ciudad_item = array(
            'cod_ciudad' => $cod_ciudad,
            'nombre' => $nombre,
            'cod_prov' => $cod_prov,
            'cod_postal' => $cod_postal,
        );

        // Push to "data"
        array_push($ciudades, $ciudad_item);
    }

    // Turn to JSON & output
    echo json_encode($ciudades);
} else {
    // No Posts
    echo json_encode(false);    
}

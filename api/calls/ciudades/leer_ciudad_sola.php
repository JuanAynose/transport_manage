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
  $ciudadById = new Ciudades($db);

  // Get ID
  $ciudadById->id_ciudade = isset($_GET['id_ciudade']) ? $_GET['id_ciudade'] : die();

  // Get post
  $ciudadById->leerCiudadById();
  // Create array
  $ciudad_item= array(
    'id_ciudad' => $ciudadById->cod_ciudad,
      'nombre_ciudad' => $ciudadById->nombre,
      'id_prov' => $ciudadById->cod_prov,
      'cod_postal' => $ciudadById->cod_postal
);
print_r(json_encode($ciudad_item));

  // Make JSON
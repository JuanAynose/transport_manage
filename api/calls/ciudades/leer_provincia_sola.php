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
  $provinciaById = new Ciudades($db);

  // Get ID
  $provinciaById->id_provincia = isset($_GET['id_provincia']) ? $_GET['id_provincia'] : die();

  // Get post
  $provinciaById->leerProvinciaById();
  // Create array
  $provincia_item= array(
      'id_prov' => $provinciaById->cod_prov,
      'nombre_provincia' => $provinciaById->nombre
);
print_r(json_encode($provincia_item));

  // Make JSON
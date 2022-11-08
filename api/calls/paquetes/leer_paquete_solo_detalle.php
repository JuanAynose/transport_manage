<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


include_once '../../config/Database.php';
include_once '../../models/paquetes.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$paqueteById = new Paquetes($db);

// Get ID
$paqueteById->id_paquete = isset($_GET['id_paquete']) ? $_GET['id_paquete'] : die();
// Get post
$paqueteById->leerPaqueteByDetallePaquete();
// Create array

$package_item = array(
  'id_paquete' => $paqueteById->id_paquete,
  'cod_paquete' => $paqueteById->cod_paquete,
  'dir_destino' => $paqueteById->dir_destino,
  'destinatario' => $paqueteById->destinatario,
  'prioridad' => $paqueteById->prioridad,
  'situacion' => $paqueteById->situacion
);
print_r(json_encode($package_item));

  // Make JSON
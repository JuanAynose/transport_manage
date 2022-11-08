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
//print_r($paqueteById);
// Get post
$paqueteById->leerPaqueteByCodPaquete();
// Create array

$package_item = array(
    [
    'paquete_columna',
    'id_paquete' => $paqueteById-> id_paquete,
    'cod_paquete' => $paqueteById-> cod_paquete,
    'dir_destino' => $paqueteById-> dir_destino,
    'destinatario' => $paqueteById-> destinatario,
    'prioridad' => $paqueteById-> prioridad,
    'situacion' => $paqueteById-> situacion
    ],
    [
    'destinatario_columna',
    'id_destinatario' => $paqueteById-> id_destinatario,
    'nombre' => $paqueteById-> nombre,
    'apellido' => $paqueteById-> apellido,
    'cel' => $paqueteById-> cel,
    'dni' => $paqueteById-> dni,
    'direccion' => $paqueteById-> direccion,
    'ciudad' => $paqueteById-> ciudad
    ],
    [
    'destalle_paquete_columna',
    'cod_paque' => $paqueteById-> cod_paque,
    'descrip' => $paqueteById-> descrip,
    'tipo_producto' => $paqueteById-> tipo_producto,
    'peso' => $paqueteById-> peso
    ]
);
print_r(json_encode($package_item));

  // Make JSON
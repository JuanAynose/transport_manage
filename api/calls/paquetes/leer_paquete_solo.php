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
print_r($paqueteById);
// Get post
$paqueteById->leerPaqueteById();
// Create array

$package_item = array(
  'id_empleado' => $empleadoById->id_empleado,
  'dni' => $empleadoById->dni_empleado,
  'apellido' => $empleadoById->apellido_empleado,
  'telef' => $empleadoById->telefono_empleado,
  'direc' => $empleadoById->direccion_empleado,
  'cod_ciudad' => $empleadoById->ciudad_empleado,
  'fecha_ingreso' => $empleadoById->fecha_ingreso_empleado,
  'fecha_nac' => $empleadoById->fecha_nacimiento_empleado,
);
print_r(json_encode($package_item));

  // Make JSON
<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


include_once '../../config/Database.php';
include_once '../../models/empleados.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$updateempleado = new Empleados($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

//$updateempleado->dni_empleado =  $data-> dni_empleado;
$updateempleado->id_empleado = $data->id_empleado;
$updateempleado->dni_empleado = $data->dni_empleado;
$updateempleado->apellido_empleado = $data->apellido_empleado;
$updateempleado->telefono_empleado = $data->telefono_empleado;
$updateempleado->direccion_empleado = $data->direccion_empleado;
$updateempleado->ciudad_empleado = $data->ciudad_empleado;
$updateempleado->fecha_ingreso_empleado = $data->fecha_ingreso_empleado;
$updateempleado->fecha_nacimiento_empleado = $data->fecha_nacimiento_empleado;


// Create post
if ($updateempleado->updateEmpleado()) {
    //$postCopy->insertarDestinatario();
    echo json_encode(
        array('message' => 'Empleado editado con exito')
    );
} else {
    echo json_encode(
        array('message' => 'Post Not Created')
    );
}

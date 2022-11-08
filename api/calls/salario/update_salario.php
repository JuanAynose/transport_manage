<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


include_once '../../config/Database.php';
include_once '../../models/salario.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$updateSalari = new Salario($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

$updateSalari->id_salario = $data->id_salario;
$updateSalari->id_empleado = $data->id_empleado;
$updateSalari->cantidad_hora = $data->cantidad_hora;
$updateSalari->monto_hora = $data->monto_hora;
$updateSalari->sueldo_neto = $data->sueldo_neto;
$updateSalari->fecha_pago = $data->fecha_pago;


// Create post
if ($updateSalari->updateSalario()) {
    //$postCopy->insertarDestinatario();
    echo json_encode(
        array('message' => 'Salario editado con exito')
    );
} else {
    echo json_encode(
        array('message' => 'Post Not Created')
    );
}

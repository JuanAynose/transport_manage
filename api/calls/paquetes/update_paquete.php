<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PATCH');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


include_once '../../config/Database.php';
include_once '../../models/paquetes.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$updatepaquete = new Paquetes($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

//$updateempleado->dni_empleado =  $data-> dni_empleado;

$updatepaquete->nombre_paquete = $data->nombre_paquete;
$updatepaquete->tipo_paquete = $data->tipo_paquete;
$updatepaquete->situacion_paquete = $data->situacion_paquete;
$updatepaquete->peso_paquete = $data->peso_paquete;
$updatepaquete->nivel_prioridad = $data->nivel_prioridad;
$updatepaquete->direccion_destinatario = $data->direccion_destinatario;
$updatepaquete->nombre_destinatario = $data->nombre_destinatario;
$updatepaquete->apellido_destinatario = $data->apellido_destinatario;
$updatepaquete->numero_destinatario = $data->numero_destinatario;
$updatepaquete->dni_destinatario = $data->dni_destinatario;
$updatepaquete->ciudad_destinatario = $data->ciudad_destinatario;
$updatepaquete->id_destinatario = $data->id_destinatario;
$updatepaquete->id_paquete = $data->id_paquete;
$updatepaquete->cod_paque = $data->cod_paquete;



// Create post
if ($updatepaquete->updatePaquete($data)) {
    //$postCopy->insertarDestinatario();
    echo json_encode(
        array('message' => 'paquete editado con exito')
    );
} else {
    echo json_encode(
        array('message' => 'Post Not Created')
    );
}

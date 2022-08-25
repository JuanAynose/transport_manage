<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../config/Database.php';
  include_once '../models/paquete.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $postempleado = new Post($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));
  print_r($data);
  
    //$postempleado->dni_empleado =  $data-> dni_empleado;

$postempleado->dni_empleado = $data -> dni_empleado;
$postempleado->apellido_empleado = $data -> apellido_empleado;
$postempleado->telefono_empleado = $data -> telefono_empleado;
$postempleado->direccion_empleado = $data -> direccion_empleado;
$postempleado->ciudad_empleado = $data -> ciudad_empleado;
$postempleado->fecha_ingreso_empleado = $data -> fecha_ingreso_empleado;
$postempleado->fecha_nacimiento_empleado = $data -> fecha_nacimiento_empleado;

 
  // Create post
  if($postempleado->ingresarEmpleado()) {
    //$postCopy->insertarDestinatario();
    echo json_encode(
      array('message' => 'Empleado ingresado con exito')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
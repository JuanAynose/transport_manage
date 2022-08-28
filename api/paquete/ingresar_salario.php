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
  $salary = new Post($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));
  print_r($data);
  
  $salary -> fecha_pago_salario = $data ->fecha_pago_salario;
  $salary -> cantidad_horas_salario = $data ->cantidad_horas_salario;
  $salary -> precio_hora_salario = $data ->precio_hora_salario;
  $salary -> id_empleado = $data ->id_empleado;
  // Create post
  if($salary->ingresarSalario()) {
    echo json_encode(
      array('message' => 'El salario ha sido ingresado con exito')
    );
  } else {
    echo json_encode(
      array('message' => 'Post Not Created')
    );
  }
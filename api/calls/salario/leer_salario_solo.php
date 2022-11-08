<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');


  include_once '../../config/Database.php';
  include_once '../../models/salario.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $salarioById = new Salario($db);

  // Get ID
  $salarioById->id_salario = isset($_GET['id_salario']) ? $_GET['id_salario'] : die();

  // Get post
  $salarioById->leersalarioById();
  // Create array
  $salario_item= array(
      'id_salario' => $salarioById->id,
      'id_empleado' => $salarioById->conductor,
      'cantidad_hora' => $salarioById->cantidad,
      'precio_hora' => $salarioById->monto_hora,
      'sueldo_neto' => $salarioById->sueldo,
      'fecha_pago' => $salarioById->mes_año
);
print_r(json_encode($salario_item));

  // Make JSON
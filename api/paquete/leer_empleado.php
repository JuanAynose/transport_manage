<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../config/Database.php';
  include_once '../models/paquete.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $post = new Post($db);

  // Blog post query
  $result = $post->leerEmpleados();
  // Get row count
  $num = $result->rowCount();

  // Check if any posts
  if($num > 0) {
    // Post array
    $employes_ready = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $employe_item= array(
          'id_camionero' => $id_camionero,
            'dni' => $dni,
            'apellido' => $apellido,
            'telef' => $telef,
            'direc' => $direc,
            'cod_ciudad' => $cod_ciudad,
            'fecha_ingreso' => $fecha_ingreso,
            'fecha_nac' => $fecha_nac,       
    );

      // Push to "data"
      array_push($employes_ready,$employe_item);
    }

    // Turn to JSON & output
    echo json_encode($employes_ready);

  } else {
    // No Posts
    echo json_encode(
      array('message' => 'No Posts Found')
    );
  }
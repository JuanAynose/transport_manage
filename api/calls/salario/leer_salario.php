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
  $post = new Salario($db);

  // Blog post query
  $result = $post->leerSalario();
  // Get row count
  $num = $result->rowCount();

  // Check if any posts
  if($num > 0) {
    // Post array
    $salary_ready = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $salary_item= array(
        'id_salario'=>$id,
          'apellido'=> $apellido,
          'direc'=> $direc,
          'mes_año'=>$mes_año,
          'monto_hora' => $monto_hora,
          'cantidad' => $cantidad
    );

      // Push to "data"
      array_push($salary_ready,$salary_item);
    }

    // Turn to JSON & output
    echo json_encode($salary_ready);

  } else {
    // No Posts
    echo json_encode(
      array('message' => 'No Posts Found')
    );
  }
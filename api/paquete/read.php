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
  $result = $post->read();
  // Get row count
  $num = $result->rowCount();

  // Check if any posts
  if($num > 0) {
    // Post array
    $posts_item = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $posts_item= array(
        'apellido' => $apellido,
        'dni'  => $dni,
        'telef' => $telef,
        'direc' => $direc,
        'nombre' => $nombre,
        'nombre' => $nombre,
        'cod_postal' => $cod_postal,
        'cod_prov' => $cod_prov,
        'cod_ciudad' => $cod_ciudad
    );

      // Push to "data"
      array_push($posts_item);
    }

    // Turn to JSON & output
    echo json_encode($posts_item);

  } else {
    // No Posts
    echo json_encode(
      array('message' => 'No Posts Found')
    );
  }
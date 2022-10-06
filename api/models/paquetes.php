<?php

class Paquetes
{
  private $conn;

  /*vars dumbshit*/
  /*paquetes*/
  public $direccion_destinatario;
  public $destinatario_id;
  public $cod_paquete;
  public $prioridad;
  public $situacion;
  public $nombre_destinatario;
  public $apellido_destinatario;
  public $numero_destinatario;
  public $dni_destinatario;
  public $ciudad;
  public $nombre_paquete;
  public $tipo_paquete;
  public $peso_paquete;
  public $id_empleado;
  public $dni_empleado;
  public $apellido_empleado;
  public $telefono_empleado;
  public $direccion_empleado;
  public $ciudad_empleado;
  public $fecha_ingreso_empleado;
  public $fecha_nacimiento_empleado;
  public $destinatario;
  public $tipo_producto;
  public $nivel_prioridad;
  public $ciudad_destinatario;
  public $id_destinatario;
  public $id_paquete;
  public $situacion_paquete;
  public $cod_paque;
  /**/
  public function __construct($db)
  {
    $this->conn = $db;
  }




  public function leerPaquetesPreparacion()
  {
    // Create query
    $query = 'SELECT  paquete.id_paquete,cod_paquete, descrip, dir_destino, id_destinatario, dni FROM paquete, detalle_paquete, situacion, destinatario WHERE cod_paquete=cod_paque and id_destinatario = paquete.destinatario and paquete.situacion=situacion.id and paquete.situacion=1 and destinatario.dni=destinatario.dni ';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }

  public function leerPaquetesTodos()
  {
    // Create query
    $query = 'SELECT paquete.id_paquete,cod_paquete, descrip, dir_destino, id_destinatario, dni, situacion FROM paquete, detalle_paquete, destinatario WHERE cod_paquete=cod_paque and id_destinatario = paquete.destinatario and paquete.situacion=paquete.situacion and destinatario.dni=destinatario.dni';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }


  public function ingresarPaquete($id_destinatario, $cod_paquete, $data)
  {
    $this->direccion_destinatario = $data->direccion_destinatario;
    $this->destinatario_id = $id_destinatario;
    $this->cod_paquete = $cod_paquete;
    $this->prioridad = $data->nivel_prioridad;
    $this->situacion = 1;



    $query  = 'INSERT INTO paquete (id_paquete, cod_paquete, dir_destino, destinatario, prioridad,situacion) VALUES (?,?,?,?,?,?)';

    $stmt = $this->conn->prepare($query);

    if ($stmt->execute([NULL, $this->cod_paquete, $this->direccion_destinatario, $this->destinatario_id, $this->prioridad, $this->situacion])) {
      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }


  public function insertarDestinatario($detail_id, $data)
  {
    $this->nombre_destinatario = $data->nombre_destinatario;
    $this->apellido_destinatario = $data->apellido_destinatario;
    $this->numero_destinatario = $data->numero_destinatario;
    $this->dni_destinatario = $data->dni_destinatario;
    $this->direccion_destinatario = $data->direccion_destinatario;
    $this->ciudad = $data->ciudad_destinatario;

    $query = 'INSERT INTO destinatario (id_destinatario, nombre, apellido, cel, dni, direccion, ciudad) VALUES (?,?,?,?,?,?,?)';
    $stmt = $this->conn->prepare($query);

    if ($stmt->execute([NULL, $this->nombre_destinatario, $this->apellido_destinatario, $this->numero_destinatario, $this->dni_destinatario, $this->direccion_destinatario, $this->ciudad])) {
      $id = $this->conn->lastInsertId();
      $this->ingresarPaquete($id, $detail_id, $data);

      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }

  // Create Post
  public function ingresarDetallePaquete($data)
  {
    // Create query
    $query = 'INSERT INTO detalle_paquete (cod_paque, descrip, tipo_producto, peso) VALUES (?,?,?,?)';
    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Clean dat
    // Execute query
    if ($stmt->execute([NULL, $this->nombre_paquete, $this->tipo_paquete, $this->peso_paquete])) {
      $id = $this->conn->lastInsertId();
      $this->insertarDestinatario($id, $data);
      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }


  public function leerPaqueteById()
  {
    // Create query
    $query = 'SELECT * FROM paquete WHERE id_paquete = ?';
    // Prepare statement

    $stmt = $this->conn->prepare($query);

    // Bind ID
    $stmt->bindParam(1, $this->id_paquete);

    // Execute query
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $this->id_empleado = $row['id_empleado'];
    $this->dni_empleado = $row['dni'];
    $this->apellido_empleado = $row['apellido'];
    $this->telefono_empleado = $row['telef'];
    $this->direccion_empleado = $row['direc'];
    $this->ciudad_empleado = $row['cod_ciudad'];
    $this->fecha_ingreso_empleado = $row['fecha_ingreso'];
    $this->fecha_nacimiento_empleado = $row['fecha_nac'];
  }

  public function leerPaqueteByDetallePaquete()
  {

    $query = 'SELECT * FROM paquete WHERE cod_paquete = ?';

    $stmt = $this->conn->prepare($query);

    // Bind ID
    $stmt->bindParam(1, $this->id_paquete);

    // Execute query
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $this->id_paquete = $row['id_paquete'];
    $this->cod_paquete = $row['cod_paquete'];
    $this->dir_destino = $row['dir_destino'];
    $this->destinatario = $row['destinatario'];
    $this->prioridad = $row['prioridad'];
    $this->situacion = $row['situacion'];
  }

  public function leerPaqueteByCodPaquete()
  {
    $query = 'SELECT * FROM paquete, destinatario, detalle_paquete WHERE paquete.cod_paquete = ? and destinatario.id_destinatario = paquete.destinatario and paquete.cod_paquete = detalle_paquete.cod_paque';

    $stmt = $this->conn->prepare($query);

    // Bind ID
    $stmt->bindParam(1, $this->id_paquete);

    // Execute query
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    /*paquete column*/
    $this->id_paquete = $row['id_paquete'];
    $this->cod_paquete = $row['cod_paquete'];
    $this->dir_destino = $row['dir_destino'];
    $this->destinatario = $row['destinatario'];
    $this->prioridad = $row['prioridad'];
    $this->situacion = $row['situacion'];
    /*destinatario column*/
    $this->id_destinatario = $row['id_destinatario'];
    $this->nombre = $row['nombre'];
    $this->apellido = $row['apellido'];
    $this->cel = $row['cel'];
    $this->dni = $row['dni'];
    $this->direccion = $row['direccion'];
    $this->ciudad = $row['ciudad'];
    /*detalle_paquete column*/
    $this->cod_paque = $row['cod_paque'];
    $this->descrip = $row['descrip'];
    $this->tipo_producto = $row['tipo_producto'];
    $this->peso = $row['peso'];
  }

  public function deletePaquete(){
    $query = 'DELETE FROM paquete WHERE paquete.id_paquete =:id ';

     // Prepare statement
     $stmt = $this->conn->prepare($query);
 
     // Clean data
     $this->id_paquete = htmlspecialchars(strip_tags($this->id_paquete));
 
     // Bind data
     $stmt->bindParam(':id', $this->id_paquete);
 
     // Bind data
 
     // Execute query
     if ($stmt->execute()) {
       return true;
      }
  }

  public function updateDetallePaquete($data)
  {
    $query = 'UPDATE paquete SET 
      cod_paquete = :cod_paquete,
      dir_destino = :direccion_destinatario,
      destinatario =:id_destinatario,
      prioridad= :nivel_prioridad,
      situacion =:situacion_paquete
      WHERE id_paquete = :id_paquete';
    print_r($data);

    $this->cod_paquete = htmlspecialchars(strip_tags($this->cod_paquete));
    $this->direccion_destinatario = htmlspecialchars(strip_tags($this->direccion_destinatario));
    $this->id_destinatario = htmlspecialchars(strip_tags($this->id_destinatario));
    $this->nivel_prioridad = htmlspecialchars(strip_tags($this->nivel_prioridad));
    $this->situacion_paquete = htmlspecialchars(strip_tags($this->situacion_paquete));
    $this->id_paquete = htmlspecialchars(strip_tags($this->id_paquete));

    $stmt = $this->conn->prepare($query);

    $this->cod_paquete = $data->cod_paquete;
    $this->direccion_destinatario = $data->direccion_destinatario;
    $this->id_destinatario = $data->id_destinatario;
    $this->nivel_prioridad = $data->nivel_prioridad;
    $this->situacion_paquete = $data->situacion_paquete;
    $this->id_paquete = $data->id_paquete;

    $stmt->bindParam(':cod_paquete', $this->cod_paquete);
    $stmt->bindParam(':direccion_destinatario', $this->direccion_destinatario);
    $stmt->bindParam(':id_destinatario', $this->id_destinatario);
    $stmt->bindParam(':nivel_prioridad', $this->nivel_prioridad);
    $stmt->bindParam(':situacion_paquete', $this->situacion_paquete);
    $stmt->bindParam(':id_paquete', $this->id_paquete);



    if ($stmt->execute()) {
      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }

  public function updateDestinatario($data)
  {
    $query = 'UPDATE destinatario SET 
      nombre = :nombre_destinatario,
      apellido = :apellido_destinatario,
      cel = :numero_destinatario,
      dni = :dni_destinatario,
      direccion = :direccion_destinatario,
      ciudad =:ciudad_destinatario
      WHERE id_destinatario = :id_destinatario';


    $this->id_destinatario = htmlspecialchars(strip_tags($this->id_destinatario));
    $this->nombre_destinatario = htmlspecialchars(strip_tags($this->nombre_destinatario));
    $this->apellido_destinatario = htmlspecialchars(strip_tags($this->apellido_destinatario));
    $this->numero_destinatario = htmlspecialchars(strip_tags($this->numero_destinatario));
    $this->dni_destinatario = htmlspecialchars(strip_tags($this->dni_destinatario));
    $this->direccion_destinatario = htmlspecialchars(strip_tags($this->direccion_destinatario));
    $this->ciudad_destinatario = htmlspecialchars(strip_tags($this->ciudad_destinatario));


    $stmt = $this->conn->prepare($query);

    $this->nombre_destinatario = $data->nombre_destinatario;
    $this->apellido_destinatario = $data->apellido_destinatario;
    $this->numero_destinatario = $data->numero_destinatario;
    $this->dni_destinatario = $data->dni_destinatario;
    $this->direccion_destinatario = $data->direccion_destinatario;
    $this->ciudad_destinatario = $data->ciudad_destinatario;
    $this->id_destinatario = $data->id_destinatario;


    $stmt->bindParam(':id_destinatario', $this->id_destinatario);
    $stmt->bindParam(':nombre_destinatario', $this->nombre_destinatario);
    $stmt->bindParam(':apellido_destinatario', $this->apellido_destinatario);
    $stmt->bindParam(':numero_destinatario', $this->numero_destinatario);
    $stmt->bindParam(':dni_destinatario', $this->dni_destinatario);
    $stmt->bindParam(':direccion_destinatario', $this->direccion_destinatario);
    $stmt->bindParam(':ciudad_destinatario', $this->ciudad_destinatario);


    if ($stmt->execute()) {
      $this->updateDetallePaquete($data);
      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }


  public function updatePaquete($data)
  {
    $query = 'UPDATE detalle_paquete SET 
      descrip = :nombre_paquete,
      tipo_producto = :tipo_paquete,
      peso = :peso_paquete
      WHERE cod_paque = :cod_paquete';

    $this->cod_paquete = htmlspecialchars(strip_tags($this->cod_paquete));
    $this->nombre_paquete = htmlspecialchars(strip_tags($this->nombre_paquete));
    $this->tipo_paquete = htmlspecialchars(strip_tags($this->tipo_paquete));
    $this->peso_paquete = htmlspecialchars(strip_tags($this->peso_paquete));

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    $this->cod_paquete = $data->cod_paquete;
    $this->nombre_paquete = $data->nombre_paquete;
    $this->tipo_paquete = $data->tipo_paquete;
    $this->peso_paquete = $data->peso_paquete;


    $stmt->bindParam(':cod_paquete', $this->cod_paquete);
    $stmt->bindParam(':nombre_paquete', $this->nombre_paquete);
    $stmt->bindParam(':tipo_paquete', $this->tipo_paquete);
    $stmt->bindParam(':peso_paquete', $this->peso_paquete);


    // Clean dat
    // Execute query
    if ($stmt->execute()) {
      $this->updateDestinatario($data);
      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }
}

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
  /**/
  public function __construct($db)
  {
    $this->conn = $db;
  }



  public function leerPaquetesPreparacion()
  {
    // Create query
    $query = 'SELECT cod_paquete, descrip, dir_destino, id_destinatario, dni FROM paquete, detalle_paquete, situacion, destinatario WHERE cod_paquete=cod_paque and id_destinatario = paquete.destinatario and paquete.situacion=situacion.id and paquete.situacion=1 and destinatario.dni=destinatario.dni; ';

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
}

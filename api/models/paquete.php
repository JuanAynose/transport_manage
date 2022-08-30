<?php

$var = 0;
class Post
{
  // DB stuff
  private $conn;
  private $table = 'detalle_paquete';

  public $calls;
  // Post Properties
  /* vars detalles_paquete */
  public $id;
  public $nombre_paquete;
  public $tipo_paquete;
  public $peso_paquete;
  public $prioridad;
  public $dirrecion_destinatario;
  public $fecha_entrega;
  /* vars destinatario */
  public $data = array();
  public $nombre_destinatario;
  public $apellido_destinatario;
  public $numero_destinatario;
  public $dni_destinatario;
  public $direccion_destinatario;
  public $ciudad;
  /*vars paquete */
  public $cod_paquete;
  public $destinatario_id;
  public $situacion;
  /* vars empleados*/
  public $apellido_empleado;
  public $ciudad_empleado;
  public $dni_empleado;
  public $fecha_ingreo_empleado;
  public $fecha_nacimiento_empleado;
  public $telefono_empleado;
  public $direccion_empleado;
  /*vars camion*/
  public $capacidad_camion;
  public $marca_camion;
  public $disponibilidad_camion;
  /* vars salario */
  public $fecha_pago_salario;
  public $cantidad_horas_salario;
  public $precio_hora_salario;
  public $id_empleado;
  /* */
  public $detail;
  public $desti;


  // Constructor with DB
  public function __construct($db)
  {
    $this->conn = $db;
  }
  // Get Posts
  public function read()
  {
    // Create query
    $query = 'SELECT cod_paquete, descrip, dir_destino, id_destinatario FROM paquete, detalle_paquete, situacion, destinatario WHERE cod_paquete=cod_paque and id_destinatario = paquete.destinatario and paquete.situacion=situacion.id and paquete.situacion=1';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }

  public function leerCamionesDisponibles()
  {
    $query = 'SELECT * FROM camiones WHERE camiones.disponibilidad = 1';

    $stmt = $this->conn->prepare($query);

    $stmt->execute();

    return $stmt;
  }

  public function leerCamiones()
  {
    $query = 'SELECT * FROM camiones';

    $stmt = $this->conn->prepare($query);

    $stmt->execute();

    return $stmt;
  }

  public function leerSalario()
  {
    $query = 'SELECT camioneros.apellido, camioneros.direc, hs_trabajada.mes_año, hs_trabajada.monto_hora, hs_trabajada.cantidad FROM camioneros, hs_trabajada WHERE conductor = id_camionero';

    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }

  public function leerEmpleados()
  {
    // Create query
    $query = 'SELECT * FROM camioneros';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }

  public function ingresarSalario()
  {

    $query = 'INSERT INTO hs_trabajada (`id`, `mes_año`, `cantidad`, `conductor`, `monto_hora`) VALUES (?,?,?,?,?)';

    $stmt = $this->conn->prepare($query);

    if ($stmt->execute([NULL, $this->fecha_pago_salario, $this->cantidad_horas_salario, $this->id_empleado, $this->precio_hora_salario])) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;
  }


  public function ingresarCamion()
  {
    $query = 'INSERT INTO `camiones` (`id_camion`, `capacidad`, `marca`, `disponibilidad`) VALUES (?,?,?,?)';

    $stmt = $this->conn->prepare($query);

    if ($stmt->execute([NULL, $this->capacidad_camion, $this->marca_camion, $this->disponibilidad_camion])) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;
  }

  public function ingresarEmpleado()
  {
    $query = 'INSERT INTO camioneros (id_camionero, dni, apellido, telef, direc, cod_ciudad, fecha_ingreso, fecha_nac) VALUES (?,?,?,?,?,?,?,?)';

    $stmt = $this->conn->prepare($query);

    if ($stmt->execute([NULL, $this->dni_empleado, $this->apellido_empleado, $this->telefono_empleado, $this->direccion_empleado, $this->ciudad_empleado, $this->fecha_ingreso_empleado, $this->fecha_nacimiento_empleado])) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;
  }

  //$query='INSERT INTO detalle_paquete (cod_paque, descrip, tipo_producto, peso) VALUES (NULL, '.$this->nombre_paquete.','.$this->tipo_paquete.' ,'.$this->peso_paquete.')';
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
  public function create($data)
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

  // Update Post
  public function update()
  {
    // Create query
    $query = 'UPDATE ' . $this->table . '
                          SET title = :title, body = :body, author = :author, category_id = :category_id
                          WHERE id = :id';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Clean data
    $this->title = htmlspecialchars(strip_tags($this->title));
    $this->body = htmlspecialchars(strip_tags($this->body));
    $this->author = htmlspecialchars(strip_tags($this->author));
    $this->category_id = htmlspecialchars(strip_tags($this->category_id));
    $this->id = htmlspecialchars(strip_tags($this->id));

    // Bind data
    $stmt->bindParam(':title', $this->title);
    $stmt->bindParam(':body', $this->body);
    $stmt->bindParam(':author', $this->author);
    $stmt->bindParam(':category_id', $this->category_id);
    $stmt->bindParam(':id', $this->id);

    // Execute query
    if ($stmt->execute()) {
      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }

  // Delete Post
  public function delete()
  {
    // Create query
    $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Clean data
    $this->id = htmlspecialchars(strip_tags($this->id));

    // Bind data
    $stmt->bindParam(':id', $this->id);

    // Execute query
    if ($stmt->execute()) {
      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }
}


/*
  //get single post
  public function read_single(){
    // Create query
    $query = 'SELECT c.name as category_name,
     p.id,
     p.category_id,
     p.title,
     p.body,
     p.author,
     p.created_at
      FROM ' . $this->table . ' p
        LEFT JOIN
          categories c ON p.category_id = c.id
        WHERE
        p.id=?
        LIMIT 0,1';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

     // Bind ID
     $stmt->bindParam(1, $this->id);

     // Execute query
     $stmt->execute();

     $row = $stmt->fetch(PDO::FETCH_ASSOC);

     // Set properties
     $this->title = $row['title'];
     $this->body = $row['body'];
     $this->author = $row['author'];
     $this->category_id = $row['category_id'];
     $this->category_name = $row['category_name'];

  }
*/
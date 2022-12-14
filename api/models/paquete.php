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
  /* vers envio */
  public $id_destinatario;
  public $id_camion;
  public $id_paquete;
  /* */

  /*vard delete empleado*/
  // Constructor with DB
  public function __construct($db)
  {
    $this->conn = $db;
  }
  // Get Posts
 

 

 

  




 


  //$query='INSERT INTO detalle_paquete (cod_paque, descrip, tipo_producto, peso) VALUES (NULL, '.$this->nombre_paquete.','.$this->tipo_paquete.' ,'.$this->peso_paquete.')';
 

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
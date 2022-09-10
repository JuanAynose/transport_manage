<?php 

class Empleados{

  private $conn;

      /* vars empleados*/
    public $apellido_empleado;
    public $ciudad_empleado;
    public $dni_empleado;
    public $fecha_ingreo_empleado;
    public $fecha_nacimiento_empleado;
    public $telefono_empleado;
    public $direccion_empleado;
    public $id_empleado;
    public $fecha_ingreso_empleado;

    public function __construct($db)
  {
    $this->conn = $db;
  }

    public function leerEmpleadoById()
    {
      // Create query
      $query = 'SELECT * FROM camioneros WHERE id_camionero = ?';
      // Prepare statement
  
      $stmt = $this->conn->prepare($query);
  
      // Bind ID
      $stmt->bindParam(1, $this->id_empleado);
  
      // Execute query
      $stmt->execute();
  
      $row = $stmt->fetch(PDO::FETCH_ASSOC);
      $this->dni_empleado = $row['dni'];
      $this->apellido_empleado = $row['apellido'];
      $this->telefono_empleado = $row['telef'];
      $this->direccion_empleado = $row['direc'];
      $this->ciudad_empleado = $row['cod_ciudad'];
      $this->fecha_ingreso_empleado = $row['fecha_ingreso'];
      $this->fecha_nacimiento_empleado = $row['fecha_nac'];
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

    
  public function ingresarEmpleado($data)
  {
    $query = 'INSERT INTO camioneros (id_camionero, dni, apellido, telef, direc, cod_ciudad, fecha_ingreso, fecha_nac) VALUES (NULL,?,?,?,?,?,?,?)';

    $stmt = $this->conn->prepare($query);

    print_r($data);

    if ($stmt->execute([$this->dni_empleado, $this->apellido_empleado, $this->telefono_empleado, $this->direccion_empleado, $this->ciudad_empleado, $this->fecha_ingreso_empleado, $this->fecha_nacimiento_empleado])) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;
  }

    public function updateEmpleado()
    {
  
      $query = 'UPDATE camioneros SET 
      dni = :dni_empleado,
      apellido = :apellido_empleado,
      telef = :telefono_empleado,
      direc = :direccion_empleado,
      cod_ciudad = :ciudad_empleado,
      fecha_ingreso = :fecha_ingreso_empleado,
      fecha_nac = :fecha_nacimiento_empleado
      WHERE id_camionero = :id_empleado';
  
  
      $this->id_empleado = htmlspecialchars(strip_tags($this->id_empleado));
      $this->dni_empleado  = htmlspecialchars(strip_tags($this->dni_empleado));
      $this->apellido_empleado = htmlspecialchars(strip_tags($this->apellido_empleado));
      $this->telefono_empleado = htmlspecialchars(strip_tags($this->telefono_empleado));
      $this->direccion_empleado = htmlspecialchars(strip_tags($this->direccion_empleado));
      $this->ciudad_empleado = htmlspecialchars(strip_tags($this->ciudad_empleado));
      $this->fecha_ingreso_empleado = htmlspecialchars(strip_tags($this->fecha_ingreso_empleado));
      $this->fecha_nacimiento_empleado = htmlspecialchars(strip_tags($this->fecha_nacimiento_empleado));
  
      $stmt = $this->conn->prepare($query);
  
  
      $stmt->bindParam(':id_empleado', $this->id_empleado);
      $stmt->bindParam(':dni_empleado', $this->dni_empleado);
      $stmt->bindParam(':apellido_empleado', $this->apellido_empleado);
      $stmt->bindParam(':telefono_empleado', $this->telefono_empleado);
      $stmt->bindParam(':direccion_empleado', $this->direccion_empleado);
      $stmt->bindParam(':ciudad_empleado', $this->ciudad_empleado);
      $stmt->bindParam(':fecha_ingreso_empleado', $this->fecha_ingreso_empleado);
      $stmt->bindParam(':fecha_nacimiento_empleado', $this->fecha_nacimiento_empleado);
  
      // Execute query
      if ($stmt->execute()) {
        return true;
      }
  
      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);
  
      return false;
    }

    
  public function deleteEmpleado()
  {
    // Create query
    $query = 'DELETE FROM camioneros WHERE camioneros.id_camionero =:id ';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Clean data
    $this->id_empleado = htmlspecialchars(strip_tags($this->id_empleado));

    // Bind data
    $stmt->bindParam(':id', $this->id_empleado);



    // Bind data

    // Execute query
    if ($stmt->execute()) {
      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }

    
}
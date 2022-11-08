<?php

class Salario
{

  private $conn;
  /**/
  /*salario vars*/
  public $fecha_pago_salario;
  public $cantidad_horas_salario;
  public $id_empleado;
  public $precio_hora_salario;
  public $sueldo;
  public $id;
  public $conductor;
  public $cantidad;
  public $monto_hora;
  public $mes_año;
  public $id_salario;
public $cantidad_hora;
public $sueldo_neto;
public $fecha_pago;
  /**/
  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function updateSalario(){
    $query = 'UPDATE hs_trabajada SET 
      mes_año = :fecha_pago,
      cantidad = :cantidad_hora,
      conductor = :id_empleado,
      monto_hora = :monto_hora,
      sueldo = :sueldo_neto
      WHERE id = :id_salario';

    $this->id_salario = htmlspecialchars(strip_tags($this->id_salario));
    $this->id_empleado = htmlspecialchars(strip_tags($this->id_empleado));
    $this->cantidad_hora = htmlspecialchars(strip_tags($this->cantidad_hora));
    $this->monto_hora = htmlspecialchars(strip_tags($this->monto_hora));
    $this->sueldo_neto = htmlspecialchars(strip_tags($this->sueldo_neto));
    $this->fecha_pago = htmlspecialchars(strip_tags($this->fecha_pago));


    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(':id_salario', $this->id_salario);
    $stmt->bindParam(':id_empleado', $this->id_empleado);
    $stmt->bindParam(':cantidad_hora', $this->cantidad_hora);
    $stmt->bindParam(':monto_hora', $this->monto_hora);
    $stmt->bindParam(':sueldo_neto', $this->sueldo_neto);
    $stmt->bindParam(':fecha_pago', $this->fecha_pago);


    if ($stmt->execute()) {
      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }

  public function deleteSalario(){
    // Create query
    $query = 'DELETE FROM hs_trabajada WHERE id = :id_salario';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Clean data
    $this->id_salario = htmlspecialchars(strip_tags($this->id_salario));

    // Bind data
    $stmt->bindParam(':id_salario', $this->id_salario);

    // Execute query
    if ($stmt->execute()) {
      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }


  public function leersalarioById(){
    $query = 'SELECT * FROM hs_trabajada WHERE id = ?';
      // Prepare statement
  
      $stmt = $this->conn->prepare($query);
  
      // Bind ID
      $stmt->bindParam(1, $this->id_salario);
  
      // Execute query
      $stmt->execute();
  
      $row = $stmt->fetch(PDO::FETCH_ASSOC);
      $this->id = $row['id'];
      $this->conductor = $row['conductor'];
      $this->cantidad = $row['cantidad'];
      $this->monto_hora = $row['monto_hora'];
      $this->sueldo = $row['sueldo'];
      $this->mes_año = $row['mes_año'];
    
  }


  public function leerSalario()
  {
    $query = 'SELECT id,camioneros.apellido, camioneros.direc, hs_trabajada.mes_año, hs_trabajada.monto_hora, hs_trabajada.cantidad FROM camioneros, hs_trabajada WHERE conductor = id_camionero';

    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }

  public function ingresarSalario()
  {

    $query = 'INSERT INTO hs_trabajada (`id`, `mes_año`, `cantidad`, `conductor`, `monto_hora`, `sueldo`) VALUES (?,?,?,?,?,?)';

    $stmt = $this->conn->prepare($query);

    if ($stmt->execute([NULL, $this->fecha_pago_salario, $this->cantidad_horas_salario, $this->id_empleado, $this->precio_hora_salario, $this->sueldo])) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;
  }
}

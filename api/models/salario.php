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
  /**/
  public function __construct($db)
  {
    $this->conn = $db;
  }



  public function leerSalario()
  {
    $query = 'SELECT camioneros.apellido, camioneros.direc, hs_trabajada.mes_año, hs_trabajada.monto_hora, hs_trabajada.cantidad FROM camioneros, hs_trabajada WHERE conductor = id_camionero';

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

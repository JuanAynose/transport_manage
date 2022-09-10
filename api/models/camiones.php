<?php

class Camiones{
  private $conn;
    /*vars camiones*/
    public $capacidad_camion;
    public $marca_camion;
    public $disponibilidad_camion;
    /**/

  public function __construct($db)
  {
    $this->conn = $db;
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


}
<?php

class Camiones{
  private $conn;
    /*vars camiones*/
    public $capacidad_camion;
    public $marca_camion;
    public $disponibilidad_camion;
    public $id_camion;
    public $capacidad;
    public $marca;
    public $disponibilidad;
    /**/

  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function leerCamionById(){
    // Create query
    $query = 'SELECT * FROM camiones WHERE id_camion = ?';
    // Prepare statement

    $stmt = $this->conn->prepare($query);

    // Bind ID
    $stmt->bindParam(1, $this->id_camion);

    // Execute query
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $this->id_camion = $row['id_camion'];
    $this->capacidad = $row['capacidad'];
    $this->marca = $row['marca'];
    $this->disponibilidad = $row['disponibilidad'];


  }

  public function leerCamionesDisponibles()
  {
    $query = 'SELECT * FROM camiones WHERE camiones.disponibilidad = 1';

    $stmt = $this->conn->prepare($query);

    $stmt->execute();

    return $stmt;
  }

  public function leerCamionesByPeso()
  {
    $query = 'SELECT camiones.id_camion,camiones.capacidad,camiones.marca,camiones.disponibilidad, SUM(detalle_paquete.peso) as "peso_total" FROM camiones, detalle_paquete,remito,paquete WHERE camiones.disponibilidad = 1 and remito.id_camion = camiones.id_camion and paquete.cod_paquete = detalle_paquete.cod_paque and remito.id_paquete = paquete.id_paquete GROUP BY camiones.id_camion';

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

  public function deleteCamion()
  {
    // Create query
    $query = 'DELETE FROM camiones WHERE camiones.id_camion =:id ';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Clean data
    $this->id_camion = htmlspecialchars(strip_tags($this->id_camion));

    // Bind data
    $stmt->bindParam(':id', $this->id_camion);



    // Bind data

    // Execute query
    if ($stmt->execute()) {
      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }

  
  public function updateCamiones()
  {

    $query = 'UPDATE camiones SET 
    capacidad = :capacidad,
    marca = :marca,
    disponibilidad = :disponibilidad
    WHERE id_camion = :id_camion';


    $this->id_camion = htmlspecialchars(strip_tags($this->id_camion));
    $this->capacidad = htmlspecialchars(strip_tags($this->capacidad));
    $this->marca = htmlspecialchars(strip_tags($this->marca));
    $this->disponibilidad = htmlspecialchars(strip_tags($this->disponibilidad));


    $stmt = $this->conn->prepare($query);


    $stmt->bindParam(':id_camion', $this->id_camion);
    $stmt->bindParam(':capacidad', $this->capacidad);
    $stmt->bindParam(':marca', $this->marca);
    $stmt->bindParam(':disponibilidad', $this->disponibilidad);


    // Execute query
    if ($stmt->execute()) {
      return true;
    }

    // Print error if something goes wrong
    printf("Error: %s.\n", $stmt->error);

    return false;
  }



}
<?php

class Ciudades{
  private $conn;
    /*vars ciudades*/ 
    public $cod_ciudad;
    public $nombre;
    public $cod_prov;
    public $cod_postal;
    public $id_ciudad;
    public $id_provincia;
    public $nombre_ciudad;
    public $nombre_provincia;
    public $codigo_provincia;    
    public $codigo_postal;

    /**/
  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function leerCiudades()
  {
    // Create query
    $query = 'SELECT * FROM ciudad';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }

  public function leerProvincias(){
    // Create query
    $query = 'SELECT * FROM provincias';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }


  public function ingresarCiudad(){
    
    $query = 'INSERT INTO `ciudad` (`cod_ciudad`, `nombre`, `cod_prov`, `cod_postal`) VALUES (?,?,?,?)';

    $stmt = $this->conn->prepare($query);

    if ($stmt->execute([NULL, $this->nombre, $this->cod_prov, $this->cod_postal ])) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;

  }

  public function ingresarProvincia(){
    
    $query = 'INSERT INTO `provincias` (`cod_prov`, `nombre`) VALUES (?,?)';

    $stmt = $this->conn->prepare($query);

    if ($stmt->execute([NULL, $this->nombre])) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;

  }

  public function deleteCiudad(){
     // Create query
     $query = 'DELETE FROM ciudad WHERE ciudad.cod_ciudad =:id ';

     // Prepare statement
     $stmt = $this->conn->prepare($query);
 
     // Clean data
     $this->id_ciudad = htmlspecialchars(strip_tags($this->id_ciudad));
 
     // Bind data
     $stmt->bindParam(':id', $this->id_ciudad);
 
     // Bind data
 
     // Execute query
     if ($stmt->execute()) {
       return true;
     }
 
     // Print error if something goes wrong
     printf("Error: %s.\n", $stmt->error);
 
     return false;
  }

  public function deleteProvincia(){
    // Create query
     $query = 'DELETE FROM provincias WHERE provincias.cod_prov =:id ';

     // Prepare statement
     $stmt = $this->conn->prepare($query);
 
     // Clean data
     $this->id_provincia = htmlspecialchars(strip_tags($this->id_provincia));
 
     // Bind data
     $stmt->bindParam(':id', $this->id_provincia);
 
     // Bind data
 
     // Execute query
     if ($stmt->execute()) {
       return true;
     }
 
     // Print error if something goes wrong
     printf("Error: %s.\n", $stmt->error);
 
     return false;
  }

  public function updateCiudad(){

    $query = 'UPDATE ciudad SET 
      nombre = :nombre_ciudad,
      cod_prov = :codigo_provincia,
      cod_postal = :codigo_postal
      WHERE cod_ciudad = :id_ciudad';
  
  
      $this->nombre_ciudad = htmlspecialchars(strip_tags($this->nombre_ciudad));
      $this->codigo_provincia = htmlspecialchars(strip_tags($this->codigo_provincia));
      $this->codigo_postal = htmlspecialchars(strip_tags($this->codigo_postal));
      $this->id_ciudad = htmlspecialchars(strip_tags($this->id_ciudad));
  
      $stmt = $this->conn->prepare($query);
  
  
      $stmt->bindParam(':nombre_ciudad', $this->nombre_ciudad);
      $stmt->bindParam(':codigo_provincia', $this->codigo_provincia);
      $stmt->bindParam(':codigo_postal', $this->codigo_postal);
      $stmt->bindParam(':id_ciudad', $this->id_ciudad);

  
      // Execute query
      if ($stmt->execute()) {
        return true;
      }
  
      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);
  
      return false;

  }

  public function updateProvincia(){
    
    $query = 'UPDATE provincias SET 
      nombre = :nombre_provincia
      WHERE cod_prov = :id_provincia';
  
      $this->nombre_provincia = htmlspecialchars(strip_tags($this->nombre_provincia));
      $this->id_provincia = htmlspecialchars(strip_tags($this->id_provincia));
  
      $stmt = $this->conn->prepare($query);
  
  
      $stmt->bindParam(':nombre_provincia', $this->nombre_provincia);
      $stmt->bindParam(':id_provincia', $this->id_provincia);

  
      // Execute query
      if ($stmt->execute()) {
        return true;
      }
  
      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);
  
      return false;
  }
}
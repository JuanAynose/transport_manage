<?php

class Ciudades{
  private $conn;
    /*vars ciudades*/ 

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
}
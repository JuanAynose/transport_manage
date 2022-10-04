<?php

class Remitos
{
  private $conn;

  /**/
  /*remitos vars*/
  public $id_paquete;
  public $nombre_paquete;
  public $id_empleado;
  public $id_camion;
  public $id_destinatario;
  public $fecha_entrega;
  public $nombre_camion;
  public $nombre_destinatario;
  public $id_paquete_selected;
  public $fecha_emision;
  /**/
  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function updatePaquete($id_paquete_update)
  {
    echo $id_paquete_update;
    $query = 'UPDATE paquete SET situacion = 2 WHERE paquete.cod_paquete = :id_paquete_selected ';

    $this->id_paquete_selected = htmlspecialchars(strip_tags($id_paquete_update));

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(':id_paquete_selected', $id_paquete_update);

    // Execute query
    $stmt->execute();

    return $stmt;
  }

  public function ingresarRemitos($data)
  {
    $query = 'INSERT INTO remito (`id_envio`, `id_paquete`,`id_camionero`, `id_camion`, `id_dest`, `fecha`, `fecha_emision`) VALUES (?,?,?,?,?,?,?)';
    $stmt = $this->conn->prepare($query);

    if ($stmt->execute([NULL, $this->id_paquete, $this->id_empleado, $this->id_camion, $this->id_destinatario, $this->fecha_entrega, $this->fecha_emision])) {
      $id_paquete_update = $this->id_paquete;
      $this->updatePaquete($id_paquete_update);
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;
  }
}

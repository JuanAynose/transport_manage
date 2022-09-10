<?php

class Remitos{
  private $conn;

  /**/
  /*remitos vars*/
    public $id_paquete;
    public $nombre_paquete;
    public $id_empleado;
    public $id_camion;
    public $id_destinatario;
    public $fecha_entrega;
  /**/
  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function ingresarRemitos($data)
  {
    $query = 'INSERT INTO remito (`id_envio`, `id_paquete`, `nombre_paquete`,`id_camionero`, `id_camion`, `id_dest`, `fecha`) VALUES (?,?,?,?,?,?,?)';
    $stmt = $this->conn->prepare($query);

    if ($stmt->execute([NULL, $this->id_paquete, $this->nombre_paquete, $this->id_empleado, $this->id_camion, $this->id_destinatario, $this->fecha_entrega])) {
      return true;
    }

    printf("Error: %s.\n", $stmt->error);
    return false;
  }

}
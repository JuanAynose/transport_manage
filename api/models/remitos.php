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

  public function leerRemitos()
  {
    // Create query
    $query = 'SELECT remito.id_envio, remito.id_paquete, detalle_paquete.descrip, camioneros.apellido, camiones.marca, paquete.dir_destino, destinatario.nombre as "destinatario_nombre", ciudad.nombre as "ciudad_nombre", ciudad.cod_postal, provincias.nombre as "provincia_nombre", situacion.situacion, remito.fecha, remito.fecha_emision FROM remito,paquete, camioneros, camiones, destinatario,ciudad, provincias, situacion,detalle_paquete WHERE remito.id_paquete = paquete.id_paquete and remito.id_camionero = camioneros.id_camionero and ciudad.cod_ciudad = destinatario.ciudad and provincias.cod_prov = ciudad.cod_prov and paquete.cod_paquete = detalle_paquete.cod_paque and camiones.id_camion = remito.id_camion and destinatario.id_destinatario = remito.id_dest and situacion.id = paquete.situacion';

    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Execute query
    $stmt->execute();

    return $stmt;
  }
}

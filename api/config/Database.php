<?php 
 
  class Database {
    private $user='root';
    private $pass='';
    private $conn;
    
    public function connect() {
      $this->conn = null;
      
      try { 
        $this->conn = new PDO('mysql:host=localhost;dbname=logistica;', $this->user, $this->pass);       $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      } catch(PDOException $e) {
        echo 'Connection Error: ' . $e->getMessage();
      }

      return $this->conn;
    }
  }
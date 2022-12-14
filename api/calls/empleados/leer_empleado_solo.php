  <?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');


  include_once '../../config/Database.php';
  include_once '../../models/empleados.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $empleadoById = new Empleados($db);

  // Get ID
  $empleadoById->id_empleado = isset($_GET['id_empleado']) ? $_GET['id_empleado'] : die();

  // Get post
  $empleadoById->leerEmpleadoById();
  // Create array
  
  $employe_item= array(
    'id_empleado' => $empleadoById->id_empleado,
      'dni' => $empleadoById->dni_empleado,
      'apellido' => $empleadoById->apellido_empleado,
      'telef' => $empleadoById->telefono_empleado,
      'direc' => $empleadoById->direccion_empleado,
      'cod_ciudad' => $empleadoById->ciudad_empleado,
      'fecha_ingreso' => $empleadoById->fecha_ingreso_empleado,
      'fecha_nac' => $empleadoById->fecha_nacimiento_empleado,       
);
print_r(json_encode($employe_item));

  // Make JSON
<?php 
<?php
function miAutoloadUno($claseDesconocida){
    $fichero = __DIR__ .  "/class/$claseDesconocida.php"; // Construir la ruta al archivo de la clase basado en el nombre de la clase desconocida y el directorio de clases
    if(file_exists($fichero)){ // Verificar si el archivo de la clase existe
        require_once $fichero; // Si existe, cargar el archivo de la clase utilizando require_once
    }
}

spl_autoload_register("miAutoloadUno"); // Registrar la función miAutoloadUno como un cargador automático de clases utilizando spl_autoload_register
?>
 
<?php

class Lighting extends Connection{

    public function importLamps(){
        $importar = fopen("lighting.csv", "r") or die("Unable to open file!");

        while(!feof($importar)){
            $data fgetcsv($importar); 
            $query = "INSERT INTO lamps (lamp_id, lamp_name, lamp_model, lamp_on, lamp_zone)
            VALUES ('$data[1]', '$data[2]', '$data[3]' '$data[4]', '$data[5]');";

            $result = mysqli_query($this->conn, $query);
        }

    }

//AUN ME QUEDA HACER LOS GET MODEL ID PARA RELLENAR LA TABLA. QUE NO SE TE OLVIDE SUBNORMAL. 
       public function getModel($lamp_model){
        $query = "SELECT  FROM lamps WHERE "
       }
    

    public function deleteLamps(){
        $query = "DELETE FROM lamps"; /*creo un metodo para hacer un borrado previo de la tabla lamps y luego poder poblarla cada vez
        que llame al metodo importLamps */
        $result = mysqli_query($this->conn, $query); 
    }
    public function import(){
        $this->deleteLamps(); /* llamo al método deleteLamp() para eliminar la info de la tabla Lamps".*/
        $query = "SELECT COUNT(*) FROM lamps;"; /*creo una consulta para contar el número de filas de la tabla lamps".*/
        $result = mysqli_query($this->conn, $query)->fetch_row()[0];/*ejecuto la consulta y uso a fetch_row() para ver el resultado 
        como una fila. Accedo al primer elemento de la fila ([0]) para ver la info.*/
        if ($result == 0) {
            $this->importLamps();/*verifico si el número de filas es cero. Si es así, significa que la tabla está vacía, por lo que se 
            llama al método importLamp() para volver a rellenar la tabla Lamps desde el archivo CSV. */
        }
    }

   public function getAllLamps(){
        $query = "SELECT `lamp_id`, `lamp_name` FROM `lamps` INNER JOIN `zones` ON `lamp_zone = zone_id` INNER JOIN `lamp_models` ON
        `lamp_model = model_id`"; //hago la consulta
        $result = mysqli_query($this->conn, $query); //guardo la conulta y demas
        $lamps = []; //creo un array vacio
        while($row = $result->fetch_assoc()){ //convierto ese array en asociativo
            $lamps[] = $row; 
        }
        $result->close(); // cierro el resultado para liberar recursos
        return $lamps; //devuelvo el resultado
    }


    public function drawLampsList(){
        $lamps = this->getAllLamps(); 
        $table = ""; //hago una variable para almacenar el pintado del html
        foreach($lamps as $lamp){//intero sobre cada lampara y creo la tabla para el html
            $table .= "<tr>";
            $table .= "<td>" . $lamp[] . "</td>";
        
        
        
        
        }
    }




















}





?>
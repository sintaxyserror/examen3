<?php

class Lamp extends Connection{

    protected $lamp_id;
    protected $lamp_name;
    protected $lamp_model;
    protected $lamp_on; 
    protected $lamp_zone; 



    public function __construct($lamp_id,$lamp_name,$lamp_model,$lamp_on,$lamp_zone){
        $this->lamp_id =$lamp_id;
		$this->lamp_name =$lamp_name;
		$this->lamp_model =$lamp_model;
		$this->lamp_on =$lamp_on;
		$this->lamp_zone =$lamp_zone;
    }


    public function getLamp_id(){
        return $this->lamp_id;    
    }
	public function getLamp_name(){
        return $this->lamp_name;
    }
	public function getLamp_model(){
        return $this->lamp_model;
    }
	public function getLamp_on(){
        return $this->lamp_on;
    }
	public function getLamp_zone(){
        return $this->lamp_zone;
    }
*/



}






?>
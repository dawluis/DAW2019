<?php 
$dni=isset($_GET['dni'])? $_GET['dni']: $_POST['usuario'];

$array= new stdClass();

if($dni ==  "123"){
    $array->Nombre="Pepe";
    $array->Apellido1="Perez";
    $json=json_encode($array);
    echo $json;
}
if($dni ==  "12345"){
    $array->Nombre="Pepe";
    $array->Apellido1="Perez";
    $json=json_encode($array);
    echo $json;
}

?>
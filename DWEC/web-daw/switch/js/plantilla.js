
var color= prompt("INTRODUZE COLOR QUE QUIERES CAMBIAR");
color= color.toLowerCase();
var lateral= document.getElementById("lateral");
var mensaje= document.getElementById("mensaje");
console.log(color);
switch (color){

    case "pepe":
        lateral.style="background: blue";
        mensaje.innerHTML="<h2> HOLA "+color+"</h2>";
        break;
        
    case "jose":
        lateral.style="background: green";
        mensaje.innerHTML="HOLA "+color;
        break;
    
    case "ramon":
        lateral.style="background: yellow";
        mensaje.innerHTML="HOLA "+color;
        break;
    
    case "luis":
        lateral.style="background: red";
        mensaje.innerHTML="HOLA "+color;
        break;
    
    case "juan":
        lateral.style="background: brown";
        mensaje.innerHTML="HOLA "+color;
        break;
}
console.log(valor);

function recoge(){
    
    var valor= document.getElementById("valor");
    var value=valor.value;
    lateral.style="background:"+value;
    valor.value='';
}







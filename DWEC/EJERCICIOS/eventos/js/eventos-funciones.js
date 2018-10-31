var over= document.getElementById("move");
var principal= document.getElementById("principal");
var header= document.getElementsByTagName("header");
function uno(a){
    switch(a){
        
        case 1:
            alert("hola");
        break;
        
        case 2:
           header[0].style="background-color:red";
        break;

        case 3:
            over.innerHTML="MOUSE OVER";
        break;

        case 4:
            if(principal.style="background-color"=='red'){
                console.log("ha entrado al blaco");
                principal.style = "background-color:white";
            
            }else{
                console.log("ha entrado al rojo");
                principal.style="background-color:red";
                alert("rojo");
            }
        break;

    }
   

}
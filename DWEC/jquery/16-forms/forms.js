/*      FORMULARIOS     */

$('#nombre').focus(function(){
    var campoNombre=$(this);
    if(campoNombre.val()==campoNombre.attr("value")){
        campoNombre.val("");
    }
});



$('form').submit(function(){
    var miNombre=$('#nombre').val();
    alert('has escrito el nombre'+miNombre);

    if($('#nombre').val()==""){
        alert("maal");
        return false;//NO SE ENVIA
        
    }else{
        //return true SI QUE SE ENVIA
    }

});

$(':text').each(function(){
    alert($(this).val());
});
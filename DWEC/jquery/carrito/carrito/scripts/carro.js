$(function(){
    $('.item').css('background', '#cecece');
    $('#cart_items').css('border','4px solid black');
    $('img').css('border', '1px solid blue');
    $('.item').children('label').css('text-decoration', 'underline');
    $('#cart_container button').css('color', 'red');
    $('.item label').siblings('label').css('color','white');
    $(":contains('€'),input").css('color','green');
    $("div:empty").css('background-color','yellow');
    $(".item").children().last().css('background-color','red');
    $(".item:first-child").css('background-color','red');
    $('item img').each(function(indice, elemento){
        console.log(indice+ " " +elemento);
    });
});
$(function(){
    $('.item').css('background', '#cecece');
    $('#cart_items').css('border','4px solid black');
    $('img').css('border', '1px solid blue');
    $('.item').children('label').css('text-decoration', 'underline');
    $('#cart_container button').css('color', 'red');
    $('.item label').siblings('label').css('color','white');
    $(":contains('€'),input").css('color','green');
    $("div:empty").css('background-color','yellow');
    $(".item").last().css('background-color','red');
    $(".item").first().css('background-color','red');
    $(":contains('Camiseta')").siblings('img').css('border-color','green');
});
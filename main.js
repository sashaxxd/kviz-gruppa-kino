/**
 * При выборе любой радиокнопки делаем кнопку далее активной
 */
$(document).ready(function() {

var activbutton = function(event) {
    var checkedItems = $('.chcheck:checked').length;
    $('#Button3').css({'cursor' : 'pointer', 'background-color' : '#FFA500' });
    $('#Button3').prop('disabled', checkedItems == 0);
    $('.chcheck').not(':checked').prop('disabled', checkedItems >= 2);
}

$(document).on("change", ".chcheck", activbutton);
});


/**
 * openWindow1 при первом нажатии главной кнопки
 *
 */

function openWindow1(){
    var i = $('#Layer1').data("item");
    if(i == 'open'){
        $('#Layer1').modal('show');
    }
    else{
        $('#Layer2').modal('show');
    }

}



function openWindow1Prev1(){
    $('#Layer2').modal('hide');
    $('#Layer1').modal('show').data("item","open");
    // $('#Layer1').data("item","open");


}



function openWindow2(){
    $('#Layer1').data("item","close");
    $('#Layer1').modal('hide');
    var i = $('#Layer1').data("item");
    alert(i);
   $('#Layer2').modal('show');

}



/**
 * Нажимаем главную кнопку сайта - перекидывает на функцию
 *
 */
$(function() {
    $('#Button1').on('click', openWindow1);
});

/**
 * Нажимаем кнопку далее на 1 блоке теста - перекидывает на функцию openWindow2
 *
 */
$(function() {
    $('#Button3').on('click', openWindow2);
});

/**
 * Нажимаем кнопку назад на 2 блоке теста - перекидывает на функцию openWindow2
 *
 */
$(function() {
    $('#Button4').on('click', openWindow1Prev1);
})
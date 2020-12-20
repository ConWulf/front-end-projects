
$(document).ready(function () {

    const gridSquares = $('.grid-square');
    
    gridSquares.hover(function () {
        $(this).addClass('bg-green-300');
    }, function () {
        $(this).removeClass('bg-green-300');
    })


})
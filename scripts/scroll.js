$(document).ready(function () {

    $(".scroll").click(function () {
        $('html, body').animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top
        }, 1000);
    });





});

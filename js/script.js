$(function () {
    $("#phone").mask("+7(999) 999-9999");
});

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(window).resize(function () {
    adaptive_function2();
});
function adaptive_header2(w, h) {
    var headerMenu2 = $('.lang_container');
    var headerLang2 = $('.lang_dropdown');
    if (w < 992) {
        if (!headerLang2.hasClass('done')) {
            headerLang2.addClass('done').appendTo(headerMenu2);
        }
    } else {
        if (headerLang2.hasClass('done')) {
            headerLang2.removeClass('done').prependTo($('.lang'));
        }
    }
}
function adaptive_function2() {
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    adaptive_header2(w, h);
}
adaptive_function2();
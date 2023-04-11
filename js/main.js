$(function name(params) {
    // для закрытия меню
    $('.menu__btn, .menu__link').on('click', function () {
        $('.menu__items, .menu__btn').toggleClass('menu__items--active');
    });

    $(".menu a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $(function () {
        let header = $('.menu');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                header.addClass('header-fixed');
            } else {
                header.removeClass('header-fixed');
            }
        });
    });
});
$(function name(params) {
    // для закрытия меню
    $('.menu__btn, .menu__link').on('click', function () {
        $('.menu__items, .menu__btn').toggleClass('menu__items--active');
    });

    // $('').on('click', function () {
    //     $('.menu__items').toggleClass('menu__items--active');
    //     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
    // });

    // $('.menu__btn').on('click', function () {
    //     $('.menu__btn').toggleClass('menu__items--active');
    // });


    // $('.menu__btn').on('click', function () {
    //     $('.menu__btn').toggleClass('active');
    //     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
    // });

    // $('.menu__btn, .menu a').on('click', function () {
    //     $('.menu__btn, .menu__mobile').toggleClass('active');
    //     // для крестика и для меню и что бы закрывалось меню после выбора сcылки
    // });


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
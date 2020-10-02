$(function(){
    $('.customer__content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false
                }
            }
            ]
    });

    $('#sandwichmenu').on('click', function(e) {
        e.preventDefault();
        $('#sandwichmenu').toggleClass("active");
        $('.js_menu').toggleClass("active");
        $('.header__ul').toggleClass("header__ul-active");
        $('.header__li a').toggleClass("a-active");
        $('.header__li').toggleClass("li-active");
        // $('body').toggleClass("body-block")
    });
});
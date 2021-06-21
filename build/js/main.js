$('body').on('click', '.trigger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget).next().slideToggle();
});

var phoneMask = IMask(
    document.getElementById('phone-mask'), {
        mask: '+{7}(000)000-00-00'
});

let mobile = () => {
    if ($(window).width() <= 1023 && $('.hamburger').length === 0) {
        $('.header').after('<div class="mobile-menu"><div class="list"></div><div class="hamburger"></div></div>');
        $('.mobile-menu .list').append($('.header__menu')).append($('.menu'));
    } else if ($(window).width() > 1023 && $('.hamburger').length > 0) {
        $('.header__logo').after($('.header__menu'));
        $('.header').after($('.menu'));
        $('.mobile-menu').remove();
    }
}

mobile();

$(window).on('resize', mobile);

$('body').on('click', '.hamburger', (e) => {
    $(e.currentTarget).toggleClass('active');
    $('.mobile-menu .list').slideToggle();
});

if ($(window).width() > 1023) {
    $(".menu").sticky({topSpacing:0});
}

if ($(window).width() < 767) {
    $('.features__list.mobile').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
}
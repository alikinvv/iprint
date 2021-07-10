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
        $('.header').append('<div class="mobile-menu"><div class="list"></div><div class="hamburger"></div></div>');
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
    $('.mobile-menu').toggleClass('active');
    $('.mobile-menu .list').slideToggle(250);
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

$('.gallery__list .gallery__item:last').height($('.gallery__list .gallery__item:last').width())

$('body').on('submit', 'form', (e) => {
    e.preventDefault();

    var form = null;
    var fd = null;

    if ($(e.currentTarget).hasClass('cons')) {
        form = document.querySelector('form.cons');
        fd = new FormData(form);

        if ($('.cons input[name="phone"]').val() !== '' && $('.cons input[name="name"]').val() !== '' && $('.cons input[name="email"]').val() !== ''&& $('.cons textarea[name="message"]').val() !== '') {
            $.ajax({
                type: "POST",
                url: "/form.php",
                contentType: false,
                processData: false,
                data: fd,
                success: () => {
                    $('.cons button').addClass('success').text('Заявка отправлена!');
                    $('input:not([type="hidden"])').val('');
                    $('textarea:not([type="hidden"])').val('');

                    setTimeout(() => {
                        $('.cons button').removeClass('success').text('Оставить заявку');
                    }, 2000)
                }
            });
        } else {
            if ($('.cons input[name="phone"]').val() === '') {
                $('.cons input[name="phone"]').addClass('error');
            }

            if ($('.cons input[name="name"]').val() === '') {
                $('.cons input[name="name"]').addClass('error');
            }

            if ($('.cons input[name="email"]').val() === '') {
                $('.cons input[name="email"]').addClass('error');
            }

            if ($('.cons textarea[name="message"]').val() === '') {
                $('.cons textarea[name="message"]').addClass('error');
            }
        }
    } else if ($(e.currentTarget).hasClass('subscripbe')) {
        form = document.querySelector('form.subscripbe');
        fd = new FormData(form);

        if ($('.subscripbe input[name="email"]').val() !== '') {
            $.ajax({
                type: "POST",
                url: "/form.php",
                contentType: false,
                processData: false,
                data: fd,
                success: () => {
                    $('input:not([type="hidden"])').val('');
                    $('.subscripbe button').addClass('success').text('Отправлено!');

                    setTimeout(() => {
                        $('.subscripbe button').removeClass('success').text('Подписаться');
                    }, 2000)
                }
            });
        } else {
            if ($('.subscripbe input[name="email"]').val() === '') {
                $('.subscripbe input[name="email"]').addClass('error');
            }
        }
    } else {
        $.ajax({
            type: "POST",
            url: "/form.php",
            data: $(e.currentTarget).serialize(),
            success: () => {
                $('.modal').removeClass('active');
                $('.modals').addClass('active');
                $('.modal.success').addClass('active');
                $('input:not([type="hidden"])').val('');
                $('textarea').val('');
                $('.files-block').remove();
            }
        });
    }
});

$('body').on('focus', '.error', (e) => {
    $(e.currentTarget).removeClass('error');
});
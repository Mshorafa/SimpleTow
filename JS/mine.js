$(function() {
    // Start Adjust background Image
    $('.heder').height($(window).height());
    $(window).resize(function() {
        $('.heder').height($(window).height());
        // Adjust slider in middle
        $('.bxslider').each(function() {
            height_slider = $(window).height() - $('.bxslider li').height();
            $(this).css('paddingTop', height_slider / 2);
        });
    });
    // End Adjust background Image

    // Start Adjust Links nave-bar
    $('.links li').click(function() {
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active');
    });
    // End Adjust Links nave-bar

    // Start slider
    $('.bxslider').bxSlider({
        pager: false,
        controls: true,
        responsive: true
    });
    // Adjust slider in middle
    $('.bxslider').each(function() {
        height_slider = $(window).height() - $('.bxslider li').height();
        $(this).css('paddingTop', height_slider / 2);
    });

    // soothe scroll to section

    $('.links li a').click(function() {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        });
    });

    // A our auto slider code
    (function autoSlider() {
        $('.slider .active').each(function() {
            if (!$(this).is(':last-child')) {
                $(this)
                    .delay(3000)
                    .fadeOut(1000, function() {
                        $(this)
                            .removeClass('active')
                            .next()
                            .addClass('active')
                            .fadeIn();
                        autoSlider();
                    });
            } else {
                $(this)
                    .delay(3000)
                    .fadeOut(1000, function() {
                        $(this).removeClass('active');
                        $('.slider div')
                            .eq(0)
                            .addClass('active')
                            .fadeIn();
                        autoSlider();
                    });
            }
        });
    })();
    // Mixitup js plugin
    mixitup('#container');

    // Adjust shuffle
    $('.shuffle li ').click(function() {
        $(this)
            .addClass('selected')
            .siblings()
            .removeClass('selected');
    });

    // Nice scroll
    // 1. Simple mode, it styles document scrollbar:
    $('body').niceScroll();
});
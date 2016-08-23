function fadeIntoBeing(selection, animation, callback) {
    if (selection.visible(true)) {
        selection.delay(600).animate(animation);
        callback();
    }
}

$(document).ready(function () {
    var $arrow = $('.footer-arrow-img');
    var $reasons = $('.reason');
    var fade = {
        opacity: 0.7,
        duration: 600
    };
    var upAndEase = {
        opacity: 1,
        top: '+=20'
    };
    var scrollToTop = function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    };
    $(document).on('scroll', function handler() {
        fadeIntoBeing($arrow, fade, function callback() {
            $(document).off('scroll', handler);
        });
    });
    $(document).on('scroll', function handler() {
        fadeIntoBeing($reasons, upAndEase, function callback() {
            $(document).off('scroll', handler);
        });
    });

    $arrow.click(scrollToTop);
});

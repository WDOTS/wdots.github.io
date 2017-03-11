function fadeIntoBeing(selection, animation, callback) {
    if (selection.visible(true)) {
        selection.delay(600).animate(animation);
        callback();
    }
}

function classyFade(selection, classy, callback) {
    if (selection.visible(true)) {
        selection.addClass(classy);
        callback();
    }
}

$(document).ready(function () {
    var $arrow = $('.js-footer-arrow');
    var $reasons = $('.reason');
    var upAndEase = {
        opacity: 1,
        top: '+=20'
    };
    $(document).on('scroll', function handler() {
        classyFade($arrow, 'footer__arrow__img--visible', function () {
            $(document).off('scroll', handler);
        });
    });
    $(document).on('scroll', function handler() {
        fadeIntoBeing($reasons, upAndEase, function callback() {
            $(document).off('scroll', handler);
        });
    });
});

$(document).ready(function () {
    function classyFade(selection, classy, callback) {
        if (isElementInViewport(selection[0])) {
            selection.addClass(classy);
            callback();
        }
    }

    $(document).on('scroll', function handler() {
        classyFade($('.js-footer-arrow'), 'footer__arrow__img--visible', function callback() {
            $(document).off('scroll', handler);
        });
    });
    $(document).on('scroll', function handler() {
        classyFade($('.reason'), 'reason--visible', function callback() {
            $(document).off('scroll', handler);
        });
    });
});

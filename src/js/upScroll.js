$(document).ready(function () {
    var $arrow = $('.footer-arrow-img');
    var showArrow = function () {
        if ($arrow.visible(true)) {
            $arrow.delay(600).animate({
                opacity: 0.7,
                duration: 600
            });
        }
    };
    var scrollToTop = function () {
        $('html, body').animate({ scrollTop: 0 }, 800);

        return false;
    };

    $(window).scroll(showArrow);
    $arrow.click(scrollToTop);
});

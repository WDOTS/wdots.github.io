$(document).ready(function () {
    var documentHeight = $(document).height();
    var windowHeight = $(window).height();
    var $arrow = $('.scrollToTop');
    var showArrow = function () {
        if ($(this).scrollTop() > (documentHeight - windowHeight)) {
            $arrow.delay(600).animate({
                opacity: 1,
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

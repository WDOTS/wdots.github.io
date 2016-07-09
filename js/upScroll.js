$(document).ready(function() {

    // find how tall the page is

    var documentHeight = $(document).height();

    // find how tall the window is

    var windowHeight = $(window).height();

    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > (documentHeight - windowHeight)) {
            $('.scrollToTop').delay(600).animate({
                opacity: 1,
                duration: 600
            });
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

});

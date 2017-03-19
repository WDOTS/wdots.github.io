$(function () {
    $('.page-scroll').on('click', function (event) {
        var el = $($(this).attr('href'))[0];

        event.preventDefault();
        scrollIt(el, 1200, 'easeInOutQuad');
    });

    $('.js-footer-arrow').on('click', function () {
        var header = $('.hero-header')[0];

        scrollIt(header, 800, 'easeInOutQuad');
    });
});

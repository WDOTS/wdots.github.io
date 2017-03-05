$(function () {
    $('.page-scroll').bind('click', function (event) {
        var el = $($(this).attr('href'))[0];

        event.preventDefault();
        scrollIt(el, 1200, 'easeInOutQuad');
    });
});

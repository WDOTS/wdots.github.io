$(document).ready(function () {
    $(document).on('scroll', function handler() {
        var $reasons = $('.reason');

        if ($reasons.visible(true)) {
            $reasons.delay(600).animate({
                opacity: 1,
                top: '+=20'
            }, 1000, 'easeInOutBack');
            $(document).off('scroll', handler);
        }
    });
});
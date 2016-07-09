$(document).ready(function() {
    $(document).on("scroll", function handler() {
        if ($('.reason').visible(true)) {
            $(".reason").delay(600).animate({
                    opacity: 1,
                    top: "+=20",
                },
                1000,
                "easeInOutBack"
            );

            $(document).off('scroll', handler);
        }

    });

});

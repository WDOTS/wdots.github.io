$(document).ready(function(){

$(document).on("scroll", function () {
    // how far down the page am i?
    
    var pixels = $(document).scrollTop()
    
    if (pixels > 600) {
        $(".reason").one().fadeIn("slow").slideDown("slow", function() {
        });
    });
    }
 
});


});
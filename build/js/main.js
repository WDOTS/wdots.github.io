$(function(){$(".page-scroll").bind("click",function(event){var $anchor=$(this);$("html, body").stop().animate({scrollTop:$($anchor.attr("href")).offset().top},1200,"easeInOutExpo"),event.preventDefault()})});
$(document).ready(function(){$(document).on("scroll",function handler(){var $reasons=$(".reason");$reasons.visible(!0)&&($reasons.delay(600).animate({opacity:1,top:"+=20"},1e3,"easeInOutBack"),$(document).off("scroll",handler))})});
$(document).ready(function(){var $arrow=$(".footer-arrow-img"),showArrow=function(){$arrow.visible(!0)&&$arrow.delay(600).animate({opacity:.7,duration:600})},scrollToTop=function(){return $("html, body").animate({scrollTop:0},800),!1};$(window).scroll(showArrow),$arrow.click(scrollToTop)});
//# sourceMappingURL=maps/main.js.map

$(function(){$(".page-scroll").bind("click",function(event){var $anchor=$(this);$("html, body").stop().animate({scrollTop:$($anchor.attr("href")).offset().top},1200,"easeInOutExpo"),event.preventDefault()})});
function fadeIntoBeing(selection,animation,callback){selection.visible(!0)&&(selection.delay(600).animate(animation),callback())}$(document).ready(function(){var $arrow=$(".footer-arrow-img"),$reasons=$(".reason"),fade={opacity:.7,duration:600},upAndEase={opacity:1,top:"+=20"},scrollToTop=function(){return $("html, body").animate({scrollTop:0},800),!1};$(document).on("scroll",function handler(){fadeIntoBeing($arrow,fade,function(){$(document).off("scroll",handler)})}),$(document).on("scroll",function handler(){fadeIntoBeing($reasons,upAndEase,function(){$(document).off("scroll",handler)})}),$arrow.click(scrollToTop)});
//# sourceMappingURL=maps/main.js.map

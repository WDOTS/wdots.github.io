$(function(){$(".page-scroll").on("click",function(event){var el=$($(this).attr("href"))[0];event.preventDefault(),scrollIt(el,1200,"easeInOutQuad")}),$(".js-footer-arrow").on("click",function(){$("html, body").animate({scrollTop:0},800)})});
function scrollIt(element,duration,easing,callback){function scroll(){var now=Date.now(),time=Math.min(1,(now-startTime)/duration),timeFunction=easings[easing](time);return body.scrollTop=timeFunction*(destination-start)+start,body.scrollTop===destination?void("function"==typeof callback&&callback()):void requestAnimationFrame(scroll)}var easings={easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t}},checkBody=function(){var body;return document.documentElement.scrollTop+=1,body=0!==document.documentElement.scrollTop?document.documentElement:document.body,document.documentElement.scrollTop-=1,body},body=checkBody(),start=body.scrollTop,startTime=Date.now(),documentHeight=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),windowHeight=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,destination=documentHeight-element.offsetTop<windowHeight?documentHeight-windowHeight:element.offsetTop;scroll()}
$(document).ready(function(){function classyFade(selection,classy,callback){selection.visible(!0)&&(selection.addClass(classy),callback())}$(document).on("scroll",function handler(){classyFade($(".js-footer-arrow"),"footer__arrow__img--visible",function(){$(document).off("scroll",handler)})}),$(document).on("scroll",function handler(){classyFade($(".reason"),"reason--visible",function(){$(document).off("scroll",handler)})})});
//# sourceMappingURL=maps/main.js.map

// Lightweight vanilla JS scroll helper
// https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
function scrollIt(element, duration, easing, callback) {
    // define timing functions
    var easings = {
        linear: function(t) {
            return t;
        },
        easeInQuad: function(t) {
            return t * t;
        },
        easeOutQuad: function(t) {
            return t * (2 - t);
        },
        easeInOutQuad: function(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic: function(t) {
            return t * t * t;
        },
        easeOutCubic: function(t) {
            return (--t) * t * t + 1;
        },
        easeInOutCubic: function(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart: function(t) {
            return t * t * t * t;
        },
        easeOutQuart: function(t) {
            return 1 - (--t) * t * t * t;
        },
        easeInOutQuart: function(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint: function(t) {
            return t * t * t * t * t;
        },
        easeOutQuint: function(t) {
            return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint: function(t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
    };

    // Returns document.documentElement for Chrome and Safari
    // document.body for rest of the world
    function checkBody() {
        document.documentElement.scrollTop += 1;
        var body = (document.documentElement.scrollTop !== 0) ? document.documentElement : document.body;
        document.documentElement.scrollTop -= 1;
        return body;
    }

    var body = checkBody();
    var start = body.scrollTop;
    var startTime = Date.now();

    // Height checks to prevent requestAnimationFrame from infinitely looping
    // If the function tries to scroll below the visible document area
    // it should only scroll to the bottom of the document
    var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    var destination = documentHeight - element.offsetTop < windowHeight ? documentHeight - windowHeight : element.offsetTop;

    function scroll() {
        var now = Date.now();
        var time = Math.min(1, ((now - startTime) / duration));
        var timeFunction = easings[easing](time);
        body.scrollTop = (timeFunction * (destination - start)) + start;

        if (body.scrollTop === destination) {
            callback();
            return;
        }
        requestAnimationFrame(scroll);
    }
    scroll();
}

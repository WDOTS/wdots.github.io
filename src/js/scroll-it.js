// Lightweight vanilla JS scroll helper
// https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
function scrollIt(element, duration, easing, callback) {
    // define timing functions (truncated, see linked article for more)
    var easings = {
        easeInOutQuad: function(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
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
            if (typeof callback === 'function') {
                callback();
            }
            return;
        }
        requestAnimationFrame(scroll);
    }
    scroll();
}

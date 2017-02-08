(function($) {

    console.time("DOMContentLoaded"); // 2.000ms
    console.time("Window Loaded"); // 7.000ms

    $(window).load(function() {

        console.timeEnd("Window Loaded"); // 102.000ms

    });

    $(document).ready(function() {

        console.timeEnd("DOMContentLoaded"); // 2.000ms

    });

})(jQuery);
// PURE CSS

(function ($) {
    $(document).ready(function () {
        $(".ipgBtn").on("click", function () {
            var that = $(this); // optimize code = this on $(.ipgBtn)
            // var bgColor = window.getComputedStyle(this).backgroundColor; // vanilla js alternative
            var bgColor = that.css("background-color");
            // console.log(bgColor); // rgb(96, 108, 118)
            that.css({
                "font-size": 20,  // px default
                "background-color": "#4B0082" // indigo color
            });
            that.css("font-size", function(i, value) {
            // double font size
                return parseInt(value) * 2;
            });
            // that.css("font-size", "+=2"); // +2px every click
            that.css("font-size", ""); // reset font-size to default
        });
    });
})(jQuery);

// CLASSES

(function ($) {
    $(document).ready(function () {
        var ipgBtn = $(".ipgBtn");
        ipgBtn.on("click", function () {
            // if( button.hasClass("button--inactive") ) {
            //     button.removeClass("button--inactive");
            // } else {
            //     button.addClass("button--inactive");
            // }
            ipgBtn.toggleClass("btn-darkmagenta"); // alternative to if ... else above
        });
    });
})(jQuery);
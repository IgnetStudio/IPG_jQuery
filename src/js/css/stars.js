(function ($) {
    $(document).ready(function () {
        var stars = $("#rating .rating__star");
        var radios = $(":radio[name='rating']");

        stars.hover(
            function () {

                var that = $(this);
                that.prevAll().andSelf().addClass("rating__star--hovered");

            },

            function () {

                var that = $(this);
                that.prevAll().andSelf().removeClass("rating__star--hovered");

            }
        );

        stars.on("click", function () {

            var that = $(this);
            var index = that.index();

            that.siblings().removeClass("rating__star--selected");
            that.prevAll().andSelf().addClass("rating__star--selected");
            radios.eq(index).prop("checked", true);

        });

    });
})(jQuery);
// CREATE

(function ($) {
    $(document).ready(function () {
        // 1st way
        // var button = document.createElement("button"); // vanilla js
        // button = $(button);

        // 2nd way
        // var button = $("<button>KLIK</button>");
        // button.addClass("btn--active");
        // console.log(button); // jQuery.fn.init[1] ... button.btn--active

        // 3rd way
        var link = $("<a></a>", {
            href: "http:ignet.com.pl",
            text: "KLIK",
            on: {
                click: function () {
                    alert("KLIK");
                }
            },
            class: "link--active"
        });

        $("body").append(link);

    });
})(jQuery);
// ON (RECOMMENDED METHOD), BIND & ONE

(function ($) {

    $(document).ready(function () {

        var lis = document.querySelectorAll("li");

        for (var i = 0; i < lis.length; i++) {

            lis[i].addEventListener("click", function () {

                alert("klik na li za każdym razem");

            });

        }

        /*

        .click & .bind = not recommended, use on instead

        $(".content").click(function() {

            alert("klik za każdym razem");

        });


        $(".content").bind("click", function() {

            alert("klik za każdym razem");

        });

        $(".content").on("dblclick contextmenu", function() {

            alert("podwójny lub prawy klik za każdym razem");

        });

        */

        $(".content").on({
            "scroll": function () {
                alert("podwójny klik za każdym razem");
            },
            "contextmenu": function () {
                alert("prawy klik za każdym razem");
            }
        });

        $(".content").one("click", function () {

            alert("lewy klik tylko za pierwszym razem");

        });

    });

})(jQuery);

// ON & OFF

(function ($) {

    $(document).ready(function () {
        function clickMessage() {
            alert("lewy klik tylko za pierwszym razem");
            $(this).off("click", clickMessage);
        }

        $(".content").on("click", clickMessage).on("click", function () {
            alert("lewy klik za każdym razem");
        });

    });

})(jQuery);

// DELEGATE

(function ($) {
    $(document).ready(function () {
        var ipgUl = $(".ipgUl");
        ipgUl.delegate("li", "click", function () {
            alert("klik na li o indeksie nr: " + $(this).index());
        });
        // ipgUl.undelegate("click");

    });
})(jQuery);


// TRIGGER

(function ($) {

    $(document).ready(function () {
        var ipgLinks = $(".ipgUl a");
        var ipgImg = $(".ipgImg");
        var ipgBtn = $(".ipgBtn");

        ipgLinks.on("click", function (e) {
            e.preventDefault();
            console.log($(this).attr("href")); // <a href="..."></a>
        });

        $(".ipgBtn").on("click", function () {
            ipgLinks.trigger("click"); // access to all ipgLinks => <a href="..."></a>
        });

        ipgImg.on("showImg", function () {
            $(this).addClass("visible");
        });
        $(window).on("click", function () {
            $(".ipgImg").trigger("showImg"); // show img on click anywhere (window)
        });
    });

})(jQuery);
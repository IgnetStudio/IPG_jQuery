// INSERT INSIDE

(function ($) {  
    $(document).ready(function () {
        var buttonAlfa = $("<button></button>", {
            "text": "KLIK alfa",
            "class": "btn--active"
        });
        var buttonBeta = $("<button></button>", {
            "text": "KLIK beta",
            "class": "btn--active"
        });
        var buttonGamma = $("<button></button>", {
            "text": "KLIK gamma",
            "class": "btn--active"
        });
        var buttonDelta = $("<button></button>", {
            "text": "KLIK delta",
            "class": "btn--active"
        });

        $("#forms__action").append(buttonDelta);
        // buttonDelta.appendTo("#forms__action"); // alternative to code above

        $("#forms__action").prepend(buttonAlfa);
        // buttonAlfa.prependTo("#forms__action"); // alternative to code above

        buttonBeta.insertAfter("#forms__action p:eq(0)"); // :eq(0) insert after only 1st paragraph
        buttonGamma.insertBefore("#forms__action p:eq(1)"); // :eq(1) insert before only 2nd paragraph

        $("p").before("<hr>");
        // $("p").after("<hr>"); // similar to code above

    });
})(jQuery);

// INSERT TEXT & HTML

(function ($) {
    $(document).ready(function () {
        var buttonInsert = $(".btn--insert");
        var textInsert = buttonInsert.text();

        buttonInsert.on("click", function () {
            if (buttonInsert.text() === textInsert) {
                buttonInsert.text("Close");
            } else {
                buttonInsert.text(textInsert);
            }
        });

        $(".footerDemo").text(function (i, oldText) {
            return oldText.toUpperCase();
        });

    });
})(jQuery);

(function ($) {
    $(document).ready(function () {
        // IMPORTANT SECURITY NOTICE: USE TEXT INSTEAD OF HTML, POSSIBILITY OF INJECT EXTERNAL SCRIPT THROUGH BROWSER
        var search = decodeURIComponent(window.location.search.split("=").pop());
        $("#search").text(search); // WRONG! $("#search").html(search); WRONG!
    });
})(jQuery);

// INSERT AROUND

(function ($) {
    $(document).ready(function () {
        var btnEpsilon = $(".btn--epsilon");
        btnEpsilon.on("click", function () {
            alert("klik na epsilon");
        });

        // btnEpsilon.find("span").on("click", function (e) {
        //     alert("klik na span"); // find span inside button
        // });

        $("#forms__action").prepend(btnEpsilon.clone(true, false)); // 1st param = clone current element; 2nd param = clone inside elements

        // replace
        $("<div>Content</div>").replaceAll("p");
        $("p").replaceWith("<div>Content</div>");

        $(".strong__paragraph").replaceWith(function () {  
            return "<strong>" + $(this).text() + "</strong>";
        });

        // wrap around
        $(".italic__paragraph").wrap("<em></em>");
        $("#text__paragraphs p").wrapAll("<div></div>"); // wrap all p
        $("#text__paragraphs p").wrapInner("<span></span>"); // wrap single p
        $("#text__paragraphs p").unwrap(); // unwrap additional div

        // wrap all paragraphs around and add div class "text-color-..."
        $("#text__paragraphs p").wrap(function (i) {  
            return $("<div></div>", {
                "class": "text-color-" + (i+1)
            });
        });

    });
})(jQuery);
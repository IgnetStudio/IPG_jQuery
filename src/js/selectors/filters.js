(function($) {

    $(document).ready(function() {

        var blockquote = $("blockquote");
        var footer = $("footer");
        var paragraphs = $("p");
        var ol = $("ol");
        var olLi = ol.children("li");

        // find
        var links__blockquote = blockquote.find("a");

        // filter
        var links__footer = footer.find("a");
        var links__top = links__footer.filter("[href^='#top']");

        // filter function
        var paragraph__over250 = paragraphs.filter(function(i, elem) {
            return $(elem).text().length > 250;
        });

        // first
        var firstLi = olLi.first();

        // parent
        var parentLi = firstLi.parent();

        // links__blockquote.hl();
        // links__top.hl();
        // paragraph__over250.hl();
        // firstLi.hl();
        parentLi.hl();

    });

})(jQuery);
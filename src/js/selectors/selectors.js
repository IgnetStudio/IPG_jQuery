(function($) {

    // document.addEventListener("DOMContentLoaded", function() {}); vanilla js

    $(document).ready(function() {
        var paragraphs = $("p");
        var list = $(".list");
        var text__blockquotes = $("#text__blockquotes");
        var link__para = $("p a");

        var lis = $("ul > li"); // children
        var pap = $("p + p"); // after
        var paul = $("ul ~ p"); // sibling
        var texts = $("p, ul, .heading");

        var withTitle = $("[title]");
        var blank = $("a[href='#']");
        var notBlank = $("a[href!='#']");
        var domainLinks = $("a[href*='domain']");
        var zoomLink = $("a[title~='zoom']");
        var pictureLink = $("a[href$='.jpg']");
        var externalLinks = $("a[href^='http']");
        var notTitle = $("h2:not('.some-class')");
        var buttonDisabled = $("button:disabled");

        var buttons = $(":button");
        var contains = $("a:contains('someText')");
        var secondLi = $(".ul li:eq(1)");
        var evenLi = $(".ul li:odd");
        var firstP = $("p:first");
        var liWithLink = $("li:has(a)");
        var headings = $(":header:parent(.some-class)");

        // texts.hl();

        console.log(paragraphs.length);

        // paragraphs.hl();
        // list.hl();
        // text__blockquotes.hl();
        // link__para.hl();
    });

})(jQuery);
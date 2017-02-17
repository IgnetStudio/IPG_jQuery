// ATTRIBUTES

(function ($) { 
    $(document).ready(function () {
        // show hidden element
        $("#openDiv").on("click", function (e) { 
            e.preventDefault();
            var divId = $(this).attr("href");
            $(divId).css("display", "");
         });
         // add & remove attribute
         $("#embedded__images a:has('img')").attr("title", "This is image");
         $("#embedded__images a").removeAttr("title href");
         // zoom on click
         $(".attributeTest").on("click", function () {  
             if($(this).is("[width]")) {
                 // some condition
             }
             $(this).attr({
                 width: "500",
                 height: "276"
             });
         });
         // append new img
         var newImg = $("<img>", {
             src: "css/img/ipgPicture.png",
             width: 250
         });
         $("#embedded__images").append(newImg);
    });
 })(jQuery);
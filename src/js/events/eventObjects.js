// PREVENT DEFAULT, CURRENT TARGET & STRING FROM CHARCODE

(function ($) {
    
    $(document).ready(function () {
        var ipgLinks = $(".ipgUl a");
        ipgLinks.on("click", function (e) {
            e.preventDefault();
            // console.log(e); // jQueryEvent {...}
            // console.log( $(this).attr("href") ); // <a href="..."></a>
          });          

        // $(".ipgUl").on("click", "li", function (e) { 
        //     console.log(e.currentTarget); // <li>List Item ##</li>
        //  });

        // $("#input__text").on("keyup", function (e) { 
        //     // console.log(e); // jQueryEvent {...}
        //     console.log(String.fromCharCode(e.which)); // convert charCode to letter
        //  });

    });
})(jQuery);
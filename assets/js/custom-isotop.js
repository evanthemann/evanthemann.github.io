/************* Main Js File ************************
    Template Name: Nachol - Personal Portfolio Template
    Author: Evrothemes
    Version: 1.0
    Copyright 2020
****************************************/


$(window).on("load", function() {
    
    /*========Portfolio Isotope Setup========*/
    if ($(".portfolio-items").length) {
        var $elements = $(".portfolio-items");
        $elements.isotope();
        $(".portfolio-filter ul li").on("click", function() {
            $(".portfolio-filter ul li").removeClass("current");
            $(this).addClass("current");
            var selector = $(this).attr("data-filter");
            $(".portfolio-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            });
        });
    }

});
"use strict";

$(document).ready(function () {
    var pageWidth = window.innerWidth;
    var marginSet = ( (pageWidth - 975) / 2 );
    var marginBounce = marginSet + 90 + "px";
    

    $(".full-window-works").animate({
        marginRight: marginBounce
    }, 500, function () {
        $(".full-window-works").animate({
            marginRight: marginSet + "px"
        }, 200);
    });
});

$(".navigation-back").click(function () {
    $(".full-window").css({"transition": "none"});
    $(".full-window").animate({
        marginRight: "25%"
    }, 300, function () {
        $(".full-window").animate({
            marginRight: "-100%"
        }, 500, function () {
            window.location.href = "index.html"
        })
    });
});

function updateWindowView () {
    // hide or show divs
    $(".work").toggleClass("hidden");
    $(".contact").toggleClass("hidden");
    $(".about").toggleClass("hidden");
    $(".work-content").toggleClass("hidden");
    // add proper widths and lack of box shadow to visible divs 
    $(".full-window").toggleClass("full-window-minimized");
    $(".window-header").toggleClass("window-header-minimized");
    $(".name").toggleClass("name-minimized");
    $(".navigation-back").toggleClass("navigation-back-minimized");
    $(".navigation-forward").toggleClass("navigation-forward-minimized");
}

$(".expand-window").click(function () {
    $(".full-window").toggleClass("full-window-expanded").css({"margin-right": "auto", "transition": "all .3s linear"});
    if ( $(".full-window").data("minimized") === true ) {
        updateWindowView();
        $(".window-header").css({"top": "0px"});
        $(".full-window").data("minimized", false).css("background-color", "#fff");
    }
});


$(".minimize-window").click(function() {
    var containerHeight = $(".full-window").height();
    
    updateWindowView();
    // if not minimized, minimize it and update the attribute
    if ( $(".full-window").data("minimized") === false ) {

        $(".window-header").css({"top": (containerHeight-70)});
        $(".full-window").data("minimized", true).css("background-color", "#29B781");
    }
    // otherwise, enlarge and update attribute
    else {
        $(".window-header").css({"top": "0px"});
        $(".full-window").data("minimized", false).css("background-color", "#fff");
    }
});


$(".close-window").click(function () {
    // get the current "full-window" divs dimensions so content will shrink to the right place and set container to that size
    var containerHeight = $(".full-window").height() + $(".full-window").offset().top;
    var leftOffset = $(".full-window").css("margin-left");

    $(".container").css({"height": containerHeight, "margin-left": leftOffset});

    $(".full-window").addClass("full-window-removed");
    setTimeout(function () {
        $(".container").hide();
        $(".easter-egg").show();
    }, 400);

});

$(".cats-reload").click(function () {
    document.location.reload();
});

var workHeight = $(".work-example").height();

$(".work-example").click(function (target) {
        var visibleDiv = $(this).attr("id");
        $(".no-display").removeClass("no-display");
        $(".work-example-display div").hide();
        $(".work-example-expanded").removeClass("work-example-expanded");
        $(".work-example-container").addClass("work-example-minimized");
        $(".work-example-display").css({"height": workHeight * 2, "width": "100%"});
        $("."+visibleDiv).toggleClass("work-example-expanded").show();
        $(this).addClass("no-display");
});
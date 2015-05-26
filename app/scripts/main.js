"use strict";
// slide the window slightly to the right, wait, then zoom to the left and go to works page
$(".work").click(function () {
    $(".full-window").css({"transition": "none"});
    $(".full-window").animate({
        marginLeft: "25%"
    }, 300, function () {
        $(".full-window").animate({
            marginLeft: "-100%"
        }, 500, function () {
            window.location.href = "works.html"
        })
    })
});

function updateWindowView () {
    // hide or show divs
    $(".work").toggleClass("hidden");
    $(".contact").toggleClass("hidden");
    $(".about").toggleClass("hidden");
    // add proper widths and lack of box shadow to visible divs 
    $(".full-window").toggleClass("full-window-minimized");
    $(".window-header").toggleClass("window-header-minimized");
    $(".name").toggleClass("name-minimized");
}


$(".expand-window").click(function () {
    if ( $(".full-window").data("minimized") === true ) {
        updateWindowView();
        $(".window-header").css({"top": "0px"});
        $(".full-window").data("minimized", false).css("background-color", "#fff");
    }
    $(".full-window").toggleClass("full-window-expanded");
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
})





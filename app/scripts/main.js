"use strict";


$(".work").click(function () {
    $(".full-window").animate({
        marginLeft: "25%"
    }, 300, function () {
        $(".full-window").animate({
            marginLeft: "-100%"
        }, 500, function () {
            window.location.href = "works.html"
        })
    })
})
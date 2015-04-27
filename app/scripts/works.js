"use strict";

$(".back").click(function () {
    $(".full-window").animate({
        marginRight: "25%"
    }, 300, function () {
        $(".full-window").animate({
            marginRight: "-100%"
        }, 500, function () {
            window.location.href = "index.html"
        })
    })
})


// play/pause toggle functionality for carousel
$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

// functionality for Reserve Campsite button modal on click
$("#reserveButton").click(function() {
    //console.log("hello");
    $("#reserveModal").modal("toggle");
})



// functionality for Login button modal on click
$("#loginButton").click(function() {
    //console.log("hello");
    $("#loginModal").modal("toggle");
})
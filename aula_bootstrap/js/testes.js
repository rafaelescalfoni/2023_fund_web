$(function() {
    $("#ocultar").click(function() {
        $("strong").remove();
    })
    
    $("#exibir").click(function() {
        $(".paragrafo").fadeIn("slow");
    })

    $("#alternar").click(function() {
        $(".paragrafo").slideToggle("slow");
    })
/*
    $("p").on({
        mouseenter: function() {
            $(this).css("background-color", "yellow")
        },
        mouseleave: function() {
            $(this).css("background-color", "blue")
        },
        click: function() {
            $(this).css("background-color", "white")
        }

    })
    */
})
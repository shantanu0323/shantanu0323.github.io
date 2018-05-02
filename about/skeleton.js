$(window).load(function () {
    var menuOpen = false;
    var menuContainer = $("#menu-container");
    var menuIcon = $("#menu-icon");
    var menuCircleLayer = $("#menu-circle-layer");
    var title = $('#about-me-title');

    var height = "50vh";
    var cHeight = "60vh"
    var width = "60vh";
    if (screen.width >= 620) {
        height = "50vh";
        cHeight = "60vh";
        width = "60vh";
    }

    var screenHeight = $(window).height();
    //    alert(screenHeight);

    $('#menu-icon').click(function () {
        $(this).toggleClass('open');
    });

    $('#menu-icon').click(function () {
        if (!menuOpen) {
            //            alert('not open');

            $("#menu-container").animate({
                "height": height,
                "width": width,
                "opacity": "0.8"
            }, 800, 'easeOutElastic', function () {
                menuOpen = true;
            });
            menuCircleLayer.animate({
                "height": cHeight,
                "width": width,
                "opacity": "0.8"
            }, 800, 'easeOutElastic');
            $("#menu-icon span").css("background", "white");
        } else {
            //            alert('open');
            $("#menu-container").animate({
                "height": "0vh",
                "width": "0vh",
                "opacity": "0"
            }, 500, 'easeOutElastic', function () {
                menuOpen = false;
            });
            menuCircleLayer.animate({
                "height": "0vh",
                "width": "0vh",
                "opacity": "0"
            }, 500, 'easeOutElastic');
            $("#menu-icon span").css("background", "#111");
        }
    });

    $(window).click(function () {
        if (menuOpen) {
            $('#menu-icon').toggleClass('open');
            $("#menu-container").animate({
                "height": "0vh",
                "width": "0vh",
                "opacity": "0"
            }, 500, 'easeOutElastic', function () {
                menuOpen = false;
            });
            menuCircleLayer.animate({
                "height": "0vh",
                "width": "0vh",
                "opacity": "0"
            }, 500, 'easeOutElastic');
            $("#menu-icon span").css("background", "#111");
        }
    });



    var titleLeft0 = 38;
    var titleTop0 = 48;
    var titleFontSize0 = 10;
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();

        $('#scrollPos').html(scrollPos);

        if (scrollPos <= screenHeight) {
            var titleTop = titleTop0 - 38 * (scrollPos / screenHeight);
            var titleLeft = titleLeft0 - 13 * (scrollPos / screenHeight);
            var titleFontSize = titleFontSize0 - 5 * (scrollPos / screenHeight);
            $('#titleTop').html(titleTop);
            $('#titleLeft').html(titleLeft);
            $('#titleFontSize').html(titleFontSize);
            title.css({
                "top": titleTop + "vh",
                "left": titleLeft + "vw",
                "font-size": titleFontSize + "vw"
            });
        }
    });

});

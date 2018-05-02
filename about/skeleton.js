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

    var smoothScrollTo = function (target) {
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
        });
    }

    $(function () {
        $('#scrollBtnToVincent').on('click', function (e) {
            e.preventDefault();
            smoothScrollTo($("#vincent"));
        });
    });
    
    $(function () {
        $('#scrollBtnToHemSheela').on('click', function (e) {
            e.preventDefault();
            smoothScrollTo($("#hemsheela"));
        });
    });
    
    $(function () {
        $('#scrollBtnToVit').on('click', function (e) {
            e.preventDefault();
            smoothScrollTo($("#vit"));
        });
    });
    
    $(window).scrollTop();
    var titleLeft0 = 38;
    var titleTop0 = 48;
    var titleFontSize0 = 10;
    var scrollOpacity0 = 1;
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();

        $('#scrollPos').html(scrollPos);

        if (scrollPos <= screenHeight) {
            var titleTop = titleTop0 - 38 * (scrollPos / screenHeight);
            var titleLeft = titleLeft0 - 13 * (scrollPos / screenHeight);
            var titleFontSize = titleFontSize0 - 5 * (scrollPos / screenHeight);
            var scrollOpacity = scrollOpacity0 - 5 * (scrollPos / screenHeight);
            $('#titleTop').html(titleTop);
            $('#titleLeft').html(titleLeft);
            $('#titleFontSize').html(titleFontSize);
            title.css({
                "top": titleTop + "vh",
                "left": titleLeft + "vw",
                "font-size": titleFontSize + "vw"
            });
            $("#scrollBtnToVincent").css("opacity", "" + scrollOpacity);
        }
    });
});

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
            //            var $target = $(target);
            //            $target.focus();
            //            if ($target.is(":focus")) { // Checking if the target was focused
            //                return false;
            //            } else {
            //                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            //                $target.focus(); // Set focus again
            //            };
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

    $(function () {
        $('#scrollBtnToDesc').on('click', function (e) {
            e.preventDefault();
            smoothScrollTo($("#desc"));
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

        var factor, leftcard, leftValue, topValue, opacityValue, rightcard, imgSchool;
        if (scrollPos <= screenHeight) {
            factor = (scrollPos / screenHeight);
            var titleTop = titleTop0 - 38 * factor;
            var titleLeft = titleLeft0 - 13 * factor;
            var titleFontSize = titleFontSize0 - 5 * factor;
            var scrollOpacity = scrollOpacity0 - 5 * factor;
            $('#titleFontSize').html(titleFontSize);
            title.css({
                "top": titleTop + "vh",
                "left": titleLeft + "vw",
                "font-size": titleFontSize + "vw"
            });

            $("#scrollBtnToVincent").css("opacity", "" + scrollOpacity);

            leftcard = $('#vincent .left-card');
            leftValue = 30 * factor;
            topValue = -43 + 100 * factor;
            opacityValue = -1 + 2 * factor;
            $('#titleTop').html(topValue);
            $('#titleLeft').html(leftValue);
            leftcard.css({
                "left": leftValue + "%",
                "top": topValue + "%",
                "opacity": opacityValue
            });
            rightcard = $('#vincent .right-card');
            leftValue = 125 - 70 * factor;
            rightcard.css({
                "left": leftValue + "%",
                "top": topValue + "%",
                "opacity": opacityValue
            });
            imgSchool = $("#vincent .img-school");
            opacityValue = -4 + 5 * factor;
            imgSchool.css("opacity", opacityValue);

        } else if (scrollPos > screenHeight && scrollPos <= (screenHeight * 2)) {
            factor = (scrollPos - screenHeight) / screenHeight;
            leftcard = $('#hemsheela .left-card');
            leftValue = 30 * factor;
            topValue = -43 + 100 * factor;
            opacityValue = -1 + 2 * factor;
            $('#titleTop').html(topValue);
            $('#titleLeft').html(leftValue);
            leftcard.css({
                "left": leftValue + "%",
                "top": topValue + "%",
                "opacity": opacityValue
            });
            rightcard = $('#hemsheela .right-card');
            leftValue = 125 - 70 * factor;
            rightcard.css({
                "left": leftValue + "%",
                "top": topValue + "%",
                "opacity": opacityValue
            });
            imgSchool = $("#hemsheela .img-school");
            opacityValue = -4 + 5 * factor;
            imgSchool.css("opacity", opacityValue);
        } else if (scrollPos > (screenHeight * 2) && scrollPos <= (screenHeight * 3)) {
            factor = (scrollPos - (screenHeight * 2)) / screenHeight;
            leftcard = $('#vit .left-card');
            leftValue = 30 * factor;
            topValue = -43 + 100 * factor;
            opacityValue = -1 + 2 * factor;
            $('#titleTop').html(topValue);
            $('#titleLeft').html(leftValue);
            leftcard.css({
                "left": leftValue + "%",
                "top": topValue + "%",
                "opacity": opacityValue
            });
            rightcard = $('#vit .right-card');
            leftValue = 125 - 70 * factor;
            rightcard.css({
                "left": leftValue + "%",
                "top": topValue + "%",
                "opacity": opacityValue
            });
            imgSchool = $("#vit .img-school");
            opacityValue = -4 + 5 * factor;
            imgSchool.css("opacity", opacityValue);
        } else if (scrollPos > (screenHeight * 3) && scrollPos <= (screenHeight * 4)) {
            factor = (scrollPos - (screenHeight * 3)) / screenHeight;
            opacityValue = -5 + 6 * factor;
            tagline = $("#tagline");
            topValue = 23 * factor;
            tagline.css({
                "top": topValue + "%",
                "opacity": factor
            });
            leftQuotes = $("#tagline span:nth-child(1)");
            rightQuotes = $("#tagline span:nth-child(2)");
            offsetValue = -100 + 85 * factor;
            leftQuotes.css({
                "left": offsetValue + "px",
                "opacity": opacityValue
            });
            rightQuotes.css({
                "right": offsetValue + "px",
                "opacity": opacityValue
            });
            languages = $('#languages');
            english = $('#languages span:nth-child(1)');
            comma = $('#languages span:nth-child(2)');
            hindi = $('#languages span:nth-child(3)');
            and = $('#languages span:nth-child(4)');
            bengali = $('#languages span:nth-child(5)');
        }
    });
});

var prevWidth = screen.width;
var currentWidth = prevWidth;
$(window).load(function () {
    prevWidth = screen.width;
    setTimeout(function () {
        //                $("#preloader-bg").css("display", "none");
        //                $(".main-container").css("display", "block");
        $("#preloader-bg").fadeOut(2000);
        $(".main-container").fadeIn(2000);
    }, 2000);

    if (getCookie("isResizing") == "true") {
        $("#preloader-text").removeClass("glitch-load");
        $("#preloader-text").addClass("glitch-resize");
        $("#preloader-text").text("RESIZING");
        $("#preloader-text").css("letter-spacing", "5vw");
        setCookie("isResizing", "false", 1);
    } else {
        $("#preloader-text").removeClass("glitch-resize");
        $("#preloader-text").addClass("glitch-load");
        $("#preloader-text").text("LOADING");
        $("#preloader-text").css("letter-spacing", "7vw");
    }

    var logo = $("#logo");
    var me = $("#me");

    var mainContainer = $(".main-container");
    var gradient = $(".gradient");
    var mainCallout = $("#main-callout");
    var smallCallout3 = $("#small-callout-3");
    var smallCallout2 = $("#small-callout-2");
    var smallCallout1 = $("#small-callout-1");
    var mainCalloutMsg = $("#main-callout h1");
    var callout = $(".callout");

    if (screen.width >= 960) {

        mainContainer.mousemove(function (e) {
            var xVal = e.pageX * -1;
            var yVal = e.pageY * -1;

            logo.css({
                'transform': 'translate3d(' + xVal / 80 + 'px, ' + yVal / 80 + 'px,0)'
            });

            me.css({
                'transform': 'translate3d(' + xVal / 120 + 'px, ' + yVal / 120 + 'px,0)'
            });

            callout.css({
                'transform': 'translate3d(' + xVal / -100 + 'px, ' + yVal / -100 + 'px,0)'
            });

            mainCalloutMsg.css({
                'transform': 'translate(70%,70%) translate3d(' + xVal / 20 + 'px, ' + yVal / 20 + 'px,0)'
            });

        });
    }
    /* 200, 300, 400, 800, 800, 4000*/
    setTimeout(function () {
        smallCallout1.animate({
            "width": "5%",
            "height": "5%",
            "opacity": "1"
        }, 200, 'easeOutElastic', function () {
            smallCallout2.animate({
                "width": "10%",
                "height": "10%",
                "opacity": "1"
            }, 300, 'easeOutElastic', function () {
                smallCallout3.animate({
                    "width": "15%",
                    "height": "15%",
                    "opacity": "1"
                }, 400, 'easeOutElastic', function () {
                    mainCallout.animate({
                        "width": "100%",
                        "height": "100%",
                        "opacity": "1"
                    }, 800, 'easeOutElastic', function () {
                        var letSpaceVal = "2vw";
                        var padLeftVal = "4vw";
                        var fSizeVal = "10vw";

                        if (screen.width >= 640) {
                            fSizeVal = "5vw";
                            letSpaceVal = "1vw";
                            padLeftVal = "0vw";
                        }

                        if (screen.width >= 960) {
                            fSizeVal = "6vw";
                        }

                        mainCalloutMsg.animate({
                            "letter-spacing": letSpaceVal,
                            "padding-left": padLeftVal,
                            "font-size": fSizeVal,
                            "opacity": "1"
                        }, 800, 'easeOutElastic', function () {

                        });
                    });
                });
            });
        });
    }, 4000);

});

window.onresize = function (e) {
    currentWidth = screen.width;
    if (Math.abs(currentWidth - prevWidth) > 0) {
        $("#preloader-bg").fadeIn(400);
        $(".main-container").fadeOut(400);
        setCookie("isResizing", "true", 1);
        location.reload();
    }
};

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

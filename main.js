$(window).load(function () {
    setTimeout(function () {
        $("#preloader-bg").fadeOut(2000);
        $(".main-container").fadeIn(2000);
    }, 2000);

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
            'transform': 'translate(75%,75%) translate3d(' + xVal / 20 + 'px, ' + yVal / 20 + 'px,0)'
        });

    });

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
                        mainCalloutMsg.animate({
                            "letter-spacing": "10px",
                            "font-size" : "80px",
                            "opacity": "1"
                        }, 800, 'easeOutElastic', function () {

                        });
                    });
                });
            });
        });
    }, 2000);

});

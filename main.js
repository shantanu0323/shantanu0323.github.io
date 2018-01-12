var prevWidth = screen.width;
var currentWidth = prevWidth;
(function () {
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

})();
$(window).load(function () {
    particlesJS.load('particles-js', 'assets/libraries/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });
    prevWidth = screen.width;
    setTimeout(function () {
        //                        $("#preloader-bg").css("display", "block");
        //                        $(".main-container").css("display", "none");
        $("#preloader-bg").fadeOut(2000);
        $(".main-container").fadeIn(2000);
    }, 1500);

    $('#menu-icon').click(function () {
        $(this).toggleClass('open');
    });

    var logo = $("#logo");
    var me = $("#me");
    var menuOpen = false;

    var mainContainer = $(".main-container");
    var gradient = $(".gradient");
    var mainCallout = $("#main-callout");
    var smallCallout3 = $("#small-callout-3");
    var smallCallout2 = $("#small-callout-2");
    var smallCallout1 = $("#small-callout-1");
    var mainCalloutMsg = $("#main-callout h1");
    var callout = $(".callout");
    var iam = $("#iam");
    var firstname = $("#firstname");
    var lastname = $("#lastname");
    var taglines = $("#taglines");
    var menuContainer = $("#menu-container");
    var menuIcon = $("#menu-icon");
    var menuCircleLayer = $("#menu-circle-layer");

    var height = "70vh";
    var cHeight = "80vh"
    var width = "80vh";
    if (screen.width >= 620) {
        height = "75vh";
        cHeight = "85vh";
        width = "90vh";
    }

    menuIcon.click(function () {
        if (!menuOpen) {
            menuContainer.animate({
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
            menuContainer.animate({
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
        me.fadeIn(2500);
    }, 2500);
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
                    }, 600, 'easeOutElastic', function () {
                        var letSpaceVal = "2vw";
                        var padLeftVal = "4vw";
                        var fSizeVal = "10vw";

                        if (screen.width >= 620) {
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
                        }, 400, 'easeOutElastic', function () {
                            var iamLeft = "14vw";
                            var firstRight = "2vh";
                            var lastRight = "14vh";
                            if (screen.width >= 620) {
                                iamLeft = "39.5vw";
                                firstRight = "10vw";
                                lastRight = "20vw";
                            }
                            if (screen.width >= 960) {
                                iamLeft = "34.5vw";
                            }
                            iam.css({
                                "animation": "iam-anim 1s",
                                "left": iamLeft,
                                "transform": "scale(1.2,1.5) skewX(-10deg)",
                                "opacity": "1"
                            });
                            setTimeout(function () {
                                firstname.css({
                                    "opacity": "1",
                                    "right": firstRight,
                                    "animation": "firstname-anim 1s"
                                });
                                lastname.css({
                                    "opacity": "1",
                                    "right": lastRight,
                                    "animation": "lastname-anim 1.5s",
                                });


                            }, 1000);
                            let b = baffle('#firstname,#lastname', {
                                characters: '░▓░▒▓█░▒█▓█░░█▓▒█▒▓░▒░▒█░▒░▓░█▒▓▒░█░▒░▓█▒░▒▓▒█░░░▓▒███▓▓▒▓▒▒░▒█▓░░▓▓█▓▒▒░█▓▒▒██▓▓▓█▓▒▒▒▒███▒▓███░▒░░▒▓█░▒█▓▓',
                                speed: 50
                            });
                            setInterval(function () {
                                b.start();
                                b.reveal(1000, 800);
                            }, 5000);

                            setTimeout(function () {
                                taglines.fadeIn(500);
                                var phrases = [
                                    'an Android App Developer',
                                    'a Web Developer',
                                    'an Enthusiastic Coder',
                                    'a Creative Designer',
                                    'a Travelling Lover',
                                    'an Opportunity Seeker'];
                                var index = -1;
                                (function loopAnimation() {
                                    index = (index + 1) % phrases.length;
                                    var length = phrases[index].length;
                                    bubbleText({
                                        element: taglines,
                                        newText: phrases[index],
                                        letterSpeed: 70,
                                        callback: function () {
                                            setTimeout(loopAnimation, 2000);
                                        },
                                    });
                                })();
                            }, 2500);

                            var c = 1;
                            var reveal = function () {
                                var img = $("#social-links ul li:nth-child(" + c + ") a img");
                                img.css({
                                    "transform": "translate(0,0)",
                                    "opacity": "1",
                                    "filter": "none"
                                });
                                c++;
                                if (c <= 7) {
                                    setTimeout(reveal, 200);
                                }
                            };

                            setTimeout(reveal, 2500);

                            setTimeout(function () {
                                $("#splash").css("background-color", "red");
                                setTimeout(function () {
                                    $(".left-slider").css("height", "100%");
                                    $(".top-slider, .bottom-slider").css("width", "100%");
                                    $(".right-slider").css("height", "100%");
                                    setTimeout(function () {
                                        setInterval(updateGradient, 10);
                                        //                                        $("#social-links").css({
                                        //                                            "box-shadow" : "0 0 5vh 0 rgba(57,255,20,0.5)",
                                        //                                            "background": "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))"});
                                    }, 1000);
                                }, 1000);
                            }, 3000);

                        });
                    });
                });
            });
        });
    }, 3500);

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

function animateWord(targetDivId) {
    var targetWord = $("#" + targetDivId).text();
    //    $("#" + targetDivId).html("heather") ;

    x = [0, 1, 2, 3, 4, 5, 6, 7];
    for (i = 1; i < targetWord.length; i++) {
        var asciiValue = targetWord.charCodeAt(i);
        //                alert(i);

        var pointer = 97;

        changeChar();

        var j = i;

        function changeChar() {
            if (pointer <= asciiValue) {
                //                alert(i);

                var newText = targetWord.slice(0, j) + String.fromCharCode(pointer) + targetWord.slice(i, targetWord.length);
                //                alert(newText);
                $("#" + targetDivId).html(newText);

                pointer++;
                setTimeout(changeChar, 1000);
            } else {
                //                $(this).stop;
            }
        }
    }
}


var colors = new Array(
    [255, 255, 255], [57, 255, 20], [0, 0, 0], [57, 255, 20], [255, 255, 255], [57, 255, 20], [0, 0, 0]);

var step = 0;
var colorIndices = [0, 1, 2, 3];
var gradientSpeed = 0.002;

function updateGradient() {

    if ($ === undefined) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgba(" + r1 + "," + g1 + "," + b1 + ",0.2)";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgba(" + r2 + "," + g2 + "," + b2 + ",0.2)";

    $('#social-links').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}

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

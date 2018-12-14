var prevWidth = screen.width;
var currentWidth = prevWidth;
var firstTimeLoad = true;
// ******************** FUNCTION HANDLING THE RESIZING OF WINDOW ************************
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


    var HomePageLoader = function () {

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


        var height = "50vh";
        var cHeight = "60vh"
        var width = "60vh";
        if (screen.width >= 620) {
            height = "50vh";
            cHeight = "60vh";
            width = "60vh";
        }

        // ************************** ONCLICKLISTENER FOR MENU BUTTON ***************************
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
        menuClickListener();

        // *********************** MOVEMENT ON MOUSEMOVE *************************
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
            }, 100, 'easeOutElastic', function () {
                smallCallout2.animate({
                    "width": "10%",
                    "height": "10%",
                    "opacity": "1"
                }, 200, 'easeOutElastic', function () {
                    smallCallout3.animate({
                        "width": "15%",
                        "height": "15%",
                        "opacity": "1"
                    }, 300, 'easeOutElastic', function () {
                        mainCallout.animate({
                            "width": "100%",
                            "height": "100%",
                            "opacity": "1"
                        }, 400, 'easeOutElastic', function () {
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
                            }, 200, 'easeOutElastic', function () {
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

                                // ***************** NAME ENTRY ANIMATION ****************
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
                                }, 500);

                                // ******************** BAFFLE ANIMATION ***********************
                                let b = baffle('#firstname,#lastname', {
                                    characters: '░▓░▒▓█░▒█▓█░░█▓▒█▒▓░▒░▒█░▒░▓░█▒▓▒░█░▒░▓█▒░▒▓▒█░░░▓▒███▓▓▒▓▒▒░▒█▓░░▓▓█▓▒▒░█▓▒▒██▓▓▓█▓▒▒▒▒███▒▓███░▒░░▒▓█░▒█▓▓',
                                    speed: 50
                                });
                                setInterval(function () {
                                    b.start();
                                    b.reveal(1000, 800);
                                }, 5000);

                                // ******************** TAGLINES *****************************
                                setTimeout(function () {
                                    taglines.fadeIn(800);
                                    var phrases = [
                                        'an Enthusiastic Coder',
                                        'an Android App Developer',
                                        'an Opportunity Seeker',
                                        'a Web Developer',
                                        'a Creative Designer',
                                        'a Travelling Lover'];
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
                                }, 2000);

                                // ********************* REVEALING OF SOCIAL LINKS **************
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
                                setTimeout(reveal, 2000);
                                firstTimeLoad = false;
                                setTimeout(function () {
                                    $(".top-slider, .bottom-slider").css("animation", "social-border-width 5s infinite");
                                    $(".left-slider, .right-slider").css("animation", "social-border-height 5s infinite");
                                    $("#social-links").css("animation", "social-gradient 5s infinite");
                                }, 3000);

                            });
                        });
                    });
                });
            });
        }, 3500);

    };
    HomePageLoader();

    var StaticHomePageLoader = function () {

        prevWidth = screen.width;
        $("#preloader-bg").css("display", "none");
        $(".main-container").css("display", "block");

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

        var height = "50vh";
        var cHeight = "60vh"
        var width = "60vh";
        if (screen.width >= 620) {
            height = "50vh";
            cHeight = "60vh";
            width = "60vh";
        }

        // ************************** ONCLICKLISTENER FOR MENU BUTTON ***************************
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

        // *********************** MOVEMENT ON MOUSEMOVE *************************
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


        me.css("display", "block");
        smallCallout1.css({
            "width": "5%",
            "height": "5%",
            "opacity": "1"
        });
        smallCallout2.css({
            "width": "10%",
            "height": "10%",
            "opacity": "1"
        });
        smallCallout3.css({
            "width": "15%",
            "height": "15%",
            "opacity": "1"
        });
        mainCallout.css({
            "width": "100%",
            "height": "100%",
            "opacity": "1"
        });
        var letSpaceVal = "2vw";
        var padLeftVal = "4vw";
        var fSizeVal = "10vw";
        mainCalloutMsg.css({
            "letter-spacing": "calc(0.5 * " + letSpaceVal + ")",
            "padding-left": "calc(0.5 * " + padLeftVal + ")",
            "font-size": "calc(0.5 * " + fSizeVal + ")",
            "opacity": "1"
        });
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
            "left": iamLeft,
            "transform": "scale(1.2,1.5) skewX(-10deg)",
            "opacity": "1"
        });
        firstname.css({
            "opacity": "1",
            "right": firstRight,
        });
        lastname.css({
            "opacity": "1",
            "right": lastRight,
        });
        // ******************** BAFFLE ANIMATION ***********************
        let b = baffle('#firstname,#lastname', {
            characters: '░▓░▒▓█░▒█▓█░░█▓▒█▒▓░▒░▒█░▒░▓░█▒▓▒░█░▒░▓█▒░▒▓▒█░░░▓▒███▓▓▒▓▒▒░▒█▓░░▓▓█▓▒▒░█▓▒▒██▓▓▓█▓▒▒▒▒███▒▓███░▒░░▒▓█░▒█▓▓',
            speed: 50
        });
        setInterval(function () {
            b.start();
            b.reveal(1000, 800);
        }, 5000);
        taglines.css("display", "block");
        var phrases = [
            'an Enthusiastic Coder',
            'an Android App Developer',
            'an Opportunity Seeker',
            'a Web Developer',
            'a Creative Designer',
            'a Travelling Lover'];
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
        var c = 1;
        var img = $("#social-links ul li a img");
        img.css({
            "transform": "translate(0,0)",
            "opacity": "1",
            "filter": "none"
        });
        $(".top-slider, .bottom-slider").css("animation", "social-border-width 5s infinite");
        $(".left-slider, .right-slider").css("animation", "social-border-height 5s infinite");
        $("#social-links").css("animation", "social-gradient 5s infinite");
        menuClickListener();
    };

    var Homepage = Barba.BaseView.extend({
        namespace: 'homepage',
        onEnter: function () {
            // The new Container is ready and attached to the DOM.
            //            alert("Home | onEnter");
            $("body").css("height", "auto");
            setTimeout(function () {
                $("#overlay-container").animate({
                    "left": "-150vw"
                }, 1000, function () {
                    $("#overlay-container").css("display", "none");
                });
            }, 1300);
        },
        onEnterCompleted: function () {
            // The Transition has just finished.
            //            alert("Home | onEnterCompleted");
            if (!firstTimeLoad) {
                StaticHomePageLoader();
            }
        },
        onLeave: function () {
            // A new Transition toward a new page has just started.
            //            alert("Home | onLeave");
            $("#overlay-container").css("display", "block");
            $("#overlay-container").animate({
                "left": "-25vw"
            }, 1000);
        },
        onLeaveCompleted: function () {
            // The Container has just been removed from the DOM.
            //            alert("Home | onLeaveCompleted");

        }
    });

    // Don't forget to init the view!
    Homepage.init();


    var AboutScript = function () {
        $("body").css("height", "400vh");
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
            }
        });


    };
    var About = Barba.BaseView.extend({
        namespace: 'about',
        onEnter: function () {
            // The new Container is ready and attached to the DOM.
            //                        alert("About | onEnter");
            $("#overlay-container").animate({
                "left": "150vw"
            }, 1000, function () {
                $("#overlay-container").css("display", "none");
            });
        },
        onEnterCompleted: function () {
            // The Transition has just finished.
            AboutScript();
        },
        onLeave: function () {
            // A new Transition toward a new page has just started.
            //            alert("About | onLeave");
            $("#overlay-container").css("display", "block");
            $("#overlay-container").animate({
                "left": "-25vw"
            }, 1000);

        },
        onLeaveCompleted: function () {
            // The Container has just been removed from the DOM.
            //            alert("About | onLeaveCompleted");
        }
    });

    // Don't forget to init the view!
    About.init();

    var Contact = Barba.BaseView.extend({
        namespace: 'contact',
        onEnter: function () {
            // The new Container is ready and attached to the DOM.
            //            alert("About | onEnter");
            $("body").css("height", "auto");
            $("#overlay-container").animate({
                "left": "150vw"
            }, 1000, function () {
                $("#overlay-container").css("display", "none");
            });
        },
        onEnterCompleted: function () {
            // The Transition has just finished.
            //            alert("About | onEnterCompleted");
        },
        onLeave: function () {
            // A new Transition toward a new page has just started.
            //            alert("About | onLeave");
            $("#overlay-container").css("display", "block");
            $("#overlay-container").animate({
                "left": "-25vw"
            }, 1000);

        },
        onLeaveCompleted: function () {
            // The Container has just been removed from the DOM.
            //            alert("About | onLeaveCompleted");
        }
    });

    // Don't forget to init the view!
    Contact.init();

    var Projects = Barba.BaseView.extend({
        namespace: 'projects',
        onEnter: function () {
            // The new Container is ready and attached to the DOM.
            //            alert("About | onEnter");
            $("body").css("height", "auto");
            $("#overlay-container").animate({
                "left": "150vw"
            }, 1000, function () {
                $("#overlay-container").css("display", "none");
            });
        },
        onEnterCompleted: function () {
            // The Transition has just finished.
            //            alert("About | onEnterCompleted");
        },
        onLeave: function () {
            // A new Transition toward a new page has just started.
            //            alert("About | onLeave");
            $("#overlay-container").css("display", "block");
            $("#overlay-container").animate({
                "left": "-25vw"
            }, 1000);

        },
        onLeaveCompleted: function () {
            // The Container has just been removed from the DOM.
            //            alert("About | onLeaveCompleted");
        }
    });

    // Don't forget to init the view!
    Projects.init();


    Barba.Pjax.start();

    Barba.Pjax.cacheEnabled = false;

    Barba.Prefetch.init();


    var FadeTransition = Barba.BaseTransition.extend({
        start: function () {
            /**
             * This function is automatically called as soon the Transition starts
             * this.newContainerLoading is a Promise for the loading of the new container
             * (Barba.js also comes with an handy Promise polyfill!)
             */

            // As soon the loading is finished and the old page is faded out, let's fade the new page
            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
        },

        fadeOut: function () {
            /**
             * this.oldContainer is the HTMLElement of the old Container
             */

            return $(this.oldContainer).animate({
                opacity: 0
            }).promise();
        },

        fadeIn: function () {
            /**
             * this.newContainer is the HTMLElement of the new Container
             * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
             * Please note, newContainer is available just after newContainerLoading is resolved!
             */

            var _this = this;
            var $el = $(this.newContainer);

            $(this.oldContainer).hide();

            $el.css({
                visibility: 'visible',
                opacity: 0
            });

            $el.animate({
                opacity: 1
            }, 1000, function () {
                /**
                 * Do not forget to call .done() as soon your transition is finished!
                 * .done() will automatically remove from the DOM the old Container
                 */

                _this.done();
            });
        }
    });

    Barba.Pjax.getTransition = function () {
        /**
         * Here you can use your own logic!
         * For example you can use different Transition based on the current page or link...
         */

        return FadeTransition;
    };
    //        Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
    //
    //        });

});

var menuClickListener = function () {
    $('.menu-item').click(function () {
        //        alert("menu");
        //        $("#overlay-container").animate({
        //            "left": "100%"
        //        }, 1000);
    });
};

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

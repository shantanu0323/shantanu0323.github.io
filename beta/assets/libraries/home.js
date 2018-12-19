var collapseNavBar = function () {
    $(".navbar").addClass("top-nav-collapse");
    $(".navbar-brand").addClass("col-lg-6");
    $(".navbar-brand").addClass("col-md-12");
    $(".navbar-brand").addClass("col-sm-6");
    $(".navbar-brand").addClass("col-12");
    $(".navbar-brand").addClass("img-thumb");
    $(".nav-link").addClass("text-light");
};

var expandNavBar = function () {
    $(".navbar").removeClass("top-nav-collapse");
    $(".navbar-brand").removeClass("img-thumb");
    $(".navbar-brand").removeClass("col-lg-6");
    $(".navbar-brand").removeClass("col-md-12");
    $(".navbar-brand").removeClass("col-sm-6");
    $(".navbar-brand").removeClass("col-12");
    $(".nav-link").removeClass("text-light");
};

var setActive = function (anchor) {
    $(".navbar .active").removeClass("active");
    anchor.parent().addClass("active");
};

var loadData = function (project, projectExpanded) {
    var title = project.find(".project__title a").html();
    var category = project.find(".project__category a").html();
    var iconSrc = project.find(".project-content .icon").html();
    var coverSrc = project.find(".project__image img").attr("src");
    var desc = project.find(".project-content .desc").html();
    var keywords = project.find(".project-content .keywords").html();
    //    console.log("title : " + title);
    //    console.log("catergory :" + category);
    //    console.log("iconSrc :" + iconSrc);
    //    console.log("coverSrc :" + coverSrc);
    //    console.log("desc :" + desc);
    //    console.log("keywords :" + keywords);

    projectExpanded.find(".title h4").html(title);
    projectExpanded.find(".category span").html(category);
    projectExpanded.find(".icon img").attr("src", iconSrc);
    projectExpanded.find(".cover img").attr("src", coverSrc);
    projectExpanded.find(".desc p").html(desc);
    projectExpanded.find(".keywords p").html(keywords);
};

var alreadyCounted = false;
var alreadyRevealedServices = false;
var alreadyRevealedProjects = false;
var isProjectExpanded = false;

$(document).ready(function () {

    particlesJS.load('home', '../assets/others/particles.json', function () {
        //        console.log('callback - particles.js config loaded');
    });

    $(".services-heading, .projects-heading").css({
        "opacity": "0",
        "top": "-80px"
    });

    $(".nav-link").click(function () {
        var anchor = $(this);
        setActive(anchor);
    });

    $(".navbar-toggler").click(function () {
        //    collapseNavBar();
    })

    $(".scroll-down-button").click(function () {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        });
    })

    $(".tagline-container").hide();

    var options = {
        strings: ["", "Enthusiastic Coder", "Android Developer", "Opportunity Seeker", "Web Developer", "Creative Designer"],
        typeSpeed: 40,
        backSpeed: 30,
        backDelay: 300,
        startDelay: 0,
        loop: true,
        showCursor: false,
        loopCount: Infinity,
        onLastStringBackspaced: (self) => {
            $(".tagline-container").hide();
        },
        preStringTyped: (arrayPos, self) => {
            if (arrayPos == 1) {
                //                alert("trigger 1");
                $(".tagline-container").show();
            }
        }
    }

    $(".count").css("opacity", "0");

    var leftTargetFirstName = "-10%";
    var leftTargetLastName = "20%";
    if ($(window).width() > 480) {
        leftTargetFirstName = "-60%";
        leftTargetLastName = "30%";
    }

    $(".first-name").css({
        "opacity": "0",
        "left": "50%"
    });

    $(".last-name").css({
        "opacity": "0",
        "left": "-40%"
    });

    setTimeout(function () {
        $(".first-name").animate({
            "opacity": "1",
            "left": leftTargetFirstName
        }, 1000);


        $(".last-name").animate({
            "opacity": "1",
            "left": leftTargetLastName
        }, 1000);

        var typed = new Typed(".tagline", options);

    }, 1000);

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            slideBy: 1,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 3
                }
            }
        });
    });

    $(".project").hover3d({
        selector: ".project__card",
        shine: true,
        perspective: 2000,
        sensitivity: 8
    });

    var projectExpanded = $(".project-expanded");
    projectExpanded.css("display", "none");

    $(".project").each(function (index, value) {
        $(this).click(function () {
            if (!isProjectExpanded) {
                loadData($(this), projectExpanded);
                projectExpanded.css("display", "block");
                isProjectExpanded = true;
            }
        })
    });

    $(".project-expanded").click(function () {
        if (isProjectExpanded) {
            projectExpanded.css("display", "none");
            isProjectExpanded = false;
        }
    });
});

$(window).on('popstate', function (event) {
    if (isProjectExpanded) {
        projectExpanded.css("display", "none");
        isProjectExpanded = false;
    }
});

$(document).scroll(function () {
    if ($('.navbar').offset().top > 50) {
        collapseNavBar();
    } else {
        expandNavBar();
    }

    var scrollPos = $(document).scrollTop();
    var aboutPos = $("#about").position().top;
    var servicesPos = $("#services").position().top;
    var projectsPos = $("#projects").position().top;
    var achievementsPos = $("#achievements").position().top;
    var contactPos = $("#contact").position().top;
    var navHome = $(".nav-item a[href='#home']");
    var navAbout = $("a[href='#about']");
    var navServices = $("a[href='#services']");
    var navProjects = $("a[href='#projects']");
    var navAchievements = $("a[href='#achievements']");
    var navContact = $("a[href='#contact']");
    var halfScr = aboutPos / 2;

    if (scrollPos > (aboutPos - halfScr)) {
        $(".scroll-down-button").hide();
    } else {
        $(".scroll-down-button").show();
    }

    if (!alreadyCounted && scrollPos >= ($("#services-counter-bg").position().top - (halfScr * 1.75))) {
        $(".count").css("opacity", "1");
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        alreadyCounted = true;
    }

    if (!alreadyRevealedServices && scrollPos >= ($(".services-heading").position().top - (halfScr * 1.65))) {
        $(".services-heading").animate({
            "opacity": "1",
            "top": "0px"
        }, 1000);
        alreadyRevealedServices = true;
    }

    if (!alreadyRevealedProjects && scrollPos >= ($(".projects-heading").position().top - (halfScr * 1.65))) {
        $(".projects-heading").animate({
            "opacity": "1",
            "top": "0px"
        }, 1000);
        alreadyRevealedProjects = true;
    }

    //    console.log("scrollPos : " + scrollPos + " ; project : " + ($(".projects-gallery .item").position().top - halfScr));
    //    if (scrollPos >= ($(".projects-gallery .item").position().top - halfScr)) {
    //        console.log("trigger : ");
    //    } else {
    //        console.log("sink : " );
    //    }

    $(".projects-gallery .item .project").each(function (index, value) {
        if (scrollPos >= ($(this).parent().position().top - halfScr)) {
            //            console.log("trigger : " + index);
            $(this).addClass("project-active");
        } else {
            //            console.log("sink : " + index);
            $(this).removeClass("project-active");
        }
    });

    if (scrollPos == 0) {
        $(".navbar .active").removeClass("active");
    } else if (scrollPos > 0 && scrollPos < (aboutPos - halfScr)) {
        setActive(navHome);
    } else if (scrollPos >= aboutPos && scrollPos < (servicesPos - halfScr)) {
        setActive(navAbout);
    } else if (scrollPos >= servicesPos && scrollPos < (projectsPos - halfScr)) {
        setActive(navServices);
    } else if (scrollPos >= projectsPos && scrollPos < (achievementsPos - halfScr)) {
        setActive(navProjects);
    } else if (scrollPos >= achievementsPos && scrollPos < (contactPos - halfScr)) {
        setActive(navAchievements);
    } else if (scrollPos >= contactPos) {
        setActive(navContact);
    }

});

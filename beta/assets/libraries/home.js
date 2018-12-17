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

$(window).scroll(function () {
    if ($('.navbar').offset().top > 50) {
        collapseNavBar();
    } else {
        expandNavBar();
    }
});

$(".nav-link").click(function () {
    var anchor = $(this);
    setActive(anchor);
});

var setActive = function (anchor) {
    $(".navbar .active").removeClass("active");
    anchor.parent().addClass("active");
};

$(document).scroll(function () {
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

$(document).ready(function () {
    particlesJS.load('home', '../assets/others/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

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
});

$(".navbar-toggler").click(function () {
//    collapseNavBar();
})

$(".scroll-down-button").click(function () {
    $("html, body").animate({
        scrollTop: $("#about").offset().top
    });
})

$(window).scroll(function () {
    if ($('.navbar').offset().top > 50) {
        $(".navbar").addClass("top-nav-collapse");
        $(".navbar-brand").addClass("col-lg-6");
        $(".navbar-brand").addClass("col-md-12");
        $(".navbar-brand").addClass("col-sm-6");
        $(".navbar-brand").addClass("col-12");
        $(".navbar-brand").addClass("img-thumb");
        $(".nav-link").addClass("text-light");
    } else {
        $(".navbar").removeClass("top-nav-collapse");
        $(".navbar-brand").removeClass("img-thumb");
        $(".navbar-brand").removeClass("col-lg-6");
        $(".navbar-brand").removeClass("col-md-12");
        $(".navbar-brand").removeClass("col-sm-6");
        $(".navbar-brand").removeClass("col-12");
        $(".nav-link").removeClass("text-light");
    }
});

$(".nav-link").click(function () {
    var $anchor = $(this);
    $(".navbar .active").removeClass("active");
    $anchor.parent().addClass("active");
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

    var $pageScroll = $('.page-scroll');

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();

        window.setTimeout(function(){
            $pageScroll.removeAttr('data-toggle data-target');
        }, 1000);

    });

    // Makes page scroll work smoothly with burger menu
    $('.navbar-toggle').bind('click', function(event) {
        if ($pageScroll.attr('data-toggle')) {
            $pageScroll.removeAttr('data-toggle data-target');
        } else {
            $pageScroll.attr('data-toggle', 'collapse');
            $pageScroll.attr('data-target', '#navbar-implode');
        }
    });

});
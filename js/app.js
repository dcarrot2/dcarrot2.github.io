var main = function() {

    /* Push the body and the nav over by 285px over */
    var open = false;

    $('html').click(function() {

        if (open) {
            $('.menu').animate({
                left: "-285px"
            }, 200);
            open = false;
        }
    });

   /* Open up menu */
    $('.menuIcon').click(function(event) {
        event.stopPropagation();
        $('.menu').animate({
            left: "0px"
        }, 200);
        open = true;
    });

    /* Then push them back */
    $('.icon-close').click(function() {
        $('.menu').animate({
            left: "-285px"
        }, 200);
        open = false;
    });


    /* Smooth scroll */
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
};


$(document).ready(main);
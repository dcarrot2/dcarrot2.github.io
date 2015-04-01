var main = function() {

    /* Push the body and the nav over by 285px over */
    var open = false;
    // var name = ".fa fa-bars";
    // console.log($(name).css("top"));
    // var menuYloc = parseInt($(name).css("top").substr(0,$(name).css("top").indexOf("px")));

    // $(window).scroll(function(){
    //     var offset = menuYloc+$(document).scrollTop()+"px";
    //     console.log(offset);
    //     $(name).animate({top:offset},{duration:500,queue:false});
    // });

    $('html').click(function() {
        console.log(open);

        if (open) {
            console.log("here2");

            console.log("here3");
            $('.menu').animate({
                left: "-285px"
            }, 200);
            open = false;

        }
    });

    console.log(open);
    $('.icon-menu').click(function(event) {
        event.stopPropagation();
        $('.menu').animate({
            left: "0px"
        }, 200);
        open = true;
        console.log(open)
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
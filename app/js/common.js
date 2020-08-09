jQuery(document).ready(function ($) {
    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });
});


// Fixed Navigation
jQuery(function ($) {
    $(window).on('scroll', function (event) {
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 400) {
            $('header').addClass('affix');
        } else {
            $('header').removeClass('affix');
        }
    });
});

const header = document.querySelector('header');
const belowHeader = header.nextElementSibling;

belowHeader.style.marginTop = header.clientHeight + 'px';


// Fixed itineary 
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#tripWrap').offset().top;
    if (window_top > div_top) {
        const hide = document.querySelector('header');
        $('#mainNav').addClass('affix');
        hide.style.display = 'none';
    } else {
        const hide = document.querySelector('header');
        $('#mainNav').removeClass('affix');
        hide.style.display = 'block';
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});


// Smooth scrolling
$(document).ready(function () {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 70;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

})
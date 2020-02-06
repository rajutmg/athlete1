(function($) {
    $.fn.appendAround = function() {
        return this.each(function() {

            var $self = $(this),
                att = "data-set",
                $parent = $self.parent(),
                parent = $parent[0],
                attval = $parent.attr(att),
                $set = $("[" + att + "='" + attval + "']");

            function isHidden(elem) {
                return $(elem).css("display") === "none";
            }

            function appendToVisibleContainer() {
                if (isHidden(parent)) {
                    var found = 0;
                    $set.each(function() {
                        if (!isHidden(this) && !found) {
                            $self.appendTo(this);
                            found++;
                            parent = this;
                        }
                    });
                }
            }

            appendToVisibleContainer();

            $(window).bind("resize", appendToVisibleContainer);

        });
    };
}(jQuery));




$(function() {
    $(document).trigger("enhance");

    $('#left').offcanvas({
        modifiers: "right,overlay",
        triggerButton: '.js-offcanvas-toggler',
        onInit: function() {
            $(this).removeClass('is-hidden');
        }
    });
    $(".js-append-around").appendAround();
});


$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("fa-eye");
            $('#show_hide_password i').removeClass("fa-eye-slash");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("fa-eye");
            $('#show_hide_password i').addClass("fa-eye-slash");
        }
    });
});


$('.closeall').click(function(e) {
    e.preventDefault();
    $('.accordion .collapse.show').collapse('hide');
    return false;
});
$('.openall').click(function(e) {
    e.preventDefault();
    $('.accordion .collapse').collapse('show');
    return false;
});

if (window.location.hash) {
    redirect(window.location.hash);
}

$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var a = document.createElement('a');
    a.href = this.href;
    redirect(a.hash);
    return false;
});

function redirect(hash) {
    // $( hash ).attr( 'aria-expanded', 'true' ).focus();
    // $( hash + '+div.collapse' ).addClass( 'show' ).attr( 'aria-expanded', 'true' );
    $(hash + '+div.collapse').collapse('show');

    // using this because of static nav bar space
    $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
    }, 10, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
    });
}

document.documentElement.setAttribute("lang", "en");
document.documentElement.removeAttribute("class");

axe.run(function(err, results) {
    console.log(results.violations);
});





// disable_btn
function disableButton(btn) {
    document.getElementById(btn.id).disabled = true;
    document.getElementById(btn.id).style.backgroundColor = "#ee5858";
    document.getElementById(btn.id).value = "COMPLETED";
}




// form_validation
$("#needs-validation").submit(function(event) {
    if (this.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    this.classList.add('was-validated');
});
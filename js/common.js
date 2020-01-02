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
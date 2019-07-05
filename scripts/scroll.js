// AOS ANIMATIONS
$(document).ready(function () {
    AOS.init({
        duration: 1200
    });
});

// SCROLL TO HASH

$(document).ready(function () {
    $("#").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function () {
                window.location.hash = hash;
            });
        }
    });
});

// close hamburger menu after click a
Open: $('.menu-wrap input').prop("checked", true);
Close: $('.menu-wrap input').prop("checked", false);
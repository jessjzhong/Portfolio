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

// close hamburger menu after click
Open: $('.menu-wrap input').prop("checked", true);
Close: $('.menu-wrap input').prop("checked", false);

// When the user scrolls down 5px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

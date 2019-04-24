// AOS ANIMATIONS
$(document).ready(function () {
    AOS.init({
        duration: 1200
    });
});

// SCROLL TO HASH

// var homePage = {
//     smoothScroll: function () {
//         $('a[href*="#"]:not([href="#"])').click(function () {
//             if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//                 var target = $(this.hash);

//                 target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

//                 if (target.length) {
//                     $('html, body').animate({
//                         scrollTop: target.offset().top - 100
//                     }, 2000, 'easeInOutExpo');
//                     return false;
//                 }
//             }
//         });
//     },

//     ready: function () {
//         homePage.smoothScroll();
//     }
// };

// $(document).ready(homePage.ready);

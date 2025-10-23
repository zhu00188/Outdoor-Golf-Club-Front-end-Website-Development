(function ($) {
    "use strict"; jQuery(window).on('load', function () { $(".preloader_area_wrap").delay(1600).fadeOut("slow"); }); $(function () { $(".lazy").lazy(); }); $(document).ready(function () {
        // Initialize gallery grid with isotope masonry for responsive waterfall
        var $grid = $('.gallery-grid');
        if ($grid.length) {
            if ($grid.imagesLoaded) {
                $grid.imagesLoaded(function () {
                    $grid.isotope({
                        itemSelector: '.gallery-item',
                        percentPosition: true,
                        masonry: { columnWidth: '.gallery-item' }
                    });
                });
            } else {
                $grid.isotope({
                    itemSelector: '.gallery-item',
                    percentPosition: true,
                    masonry: { columnWidth: '.gallery-item' }
                });
            }

            $('ul.tab-menu li').on('click', function () {
                $('ul.tab-menu li').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $grid.isotope({ filter: selector });
                return false;
            });
        }
    }); const currentLocation = location.href; const menuItem = document.querySelectorAll('ul li a'); const menuLength = menuItem.length; for (let i = 0; i < menuLength; i++) { if (menuItem[i].href === currentLocation) { menuItem[i].className = "active"; } }
    $(window).on('scroll', function () { if ($(this).scrollTop() > 200) { $('.position_top').addClass('sticky'); } else { $('.position_top').removeClass('sticky'); } }); $('.cross-btn').on('click', function (event) { $(this).toggleClass('h-active'); $('.main-nav').toggleClass('slidenav'); }); $(".main-nav .bi").on('click', function (event) {
        var $fl = $(this); $(this).parent().siblings().find('.sub-menu').slideUp(); $(this).parent().siblings().find('.bi').addClass('bi-chevron-down'); if ($fl.hasClass('bi-chevron-down')) { $fl.removeClass('bi-chevron-down').addClass('bi-chevron-up'); } else { $fl.removeClass('bi-chevron-up').addClass('bi-chevron-down'); }
        $fl.next(".sub-menu").slideToggle();
    }); $('.counter').counterUp({ delay: 10, time: 1000 }); $('.popup-video').magnificPopup({ disableOn: 700, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false }); var swiper = new Swiper(".hero-slider", { direction: "horizontal", speed: 1000, parallax: true, autoPlay: true, effect: 'fade', slidesPerView: 1, slidesPerGroupSkip: 1, grabCursor: true, keyboard: { enabled: true, }, scrollbar: { el: ".swiper-scrollbar", }, pagination: { el: ".swiper-pagination", type: "fraction", clickable: true, }, }); var swiper = new Swiper(".testimonial", { direction: "horizontal", slidesPerView: 1, loop: true, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", clickable: true, }, }); var swiper = new Swiper(".reviewer", { direction: "horizontal", slidesPerView: 1, loop: true, navigation: { nextEl: ".swiper-button-next-n", prevEl: ".swiper-button-prev-p", clickable: true, }, }); var textWrapper = document.querySelector('.hero-content-title span'); if (textWrapper) { textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); anime.timeline({ loop: true }).add({ targets: '.hero-content-title span', rotateY: [-90, 0], duration: 1300, delay: (el, i) => 45 * i }).add({ targets: '.hero-content-title ', opacity: 0, duration: 1000, easing: "easeOutExpo", delay: 1000 }); }
}(jQuery));
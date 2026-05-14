(function ($) {
    "use strict";


    // =========================
    // Spinner
    // =========================
    var spinner = function () {

        setTimeout(function () {

            if ($('#spinner').length > 0) {

                $('#spinner').removeClass('show');

            }

        }, 1);

    };

    spinner();


    // =========================
    // WOW JS
    // =========================
    new WOW().init();


    // =========================
    // Sticky Navbar
    // =========================
    $(window).scroll(function () {

        if ($(this).scrollTop() > 300) {

            $('.sticky-top')
                .addClass('shadow-sm')
                .css({
                    'top': '0px',
                    'transition': '.5s'
                });

        } else {

            $('.sticky-top')
                .removeClass('shadow-sm')
                .css('top', '-120px');

        }

    });


    // =========================
    // Back To Top
    // =========================
    $(window).scroll(function () {

        if ($(this).scrollTop() > 300) {

            $('.back-to-top').fadeIn('slow');

        } else {

            $('.back-to-top').fadeOut('slow');

        }

    });

    $('.back-to-top').click(function () {

        $('html, body').animate({

            scrollTop: 0

        }, 1500, 'easeInOutExpo');

        return false;

    });

    // =========================
    // Custom Video Modal
    // =========================
    $('#videoModal').on('shown.bs.modal', function () {

        $('#customVideo')[0].play();

    });

    $('#videoModal').on('hide.bs.modal', function () {

        $('#customVideo')[0].pause();

        $('#customVideo')[0].currentTime = 0;

    });

    // =========================
    // Owl Carousel
    // =========================
    $(".project-carousel, .testimonial-carousel").owlCarousel({

        autoplay: true,
        smartSpeed: 1200,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,

        navText: [

            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'

        ],

        responsive: {

            0: {
                items: 1
            },

            576: {
                items: 1
            },

            768: {
                items: 2
            },

            992: {
                items: 3
            }

        }

    });


    // =========================
    // Counter Animation
    // =========================
    let counted = false;

    $(window).scroll(function () {

        if ($('.stats-section').length) {

            let oTop = $('.stats-section').offset().top - window.innerHeight;

            if (!counted && $(window).scrollTop() > oTop) {

                $('.counter').each(function () {

                    let $this = $(this),
                        countTo = $this.attr('data-target');

                    $({

                        countNum: 0

                    }).animate({

                        countNum: countTo

                    },

                        {

                            duration: 2500,
                            easing: 'swing',

                            step: function () {

                                $this.text(
                                    Math.floor(this.countNum)
                                );

                            },

                            complete: function () {

                                if (countTo == 12) {

                                    $this.html(countTo + '+');

                                } else {

                                    $this.text(countTo);

                                }

                            }

                        });

                });

                counted = true;

            }

        }

    });


    // =========================
    // Smooth Scroll
    // =========================
    $('a[href*="#"]').on('click', function (e) {

        let target = $(this.hash);

        if (target.length) {

            e.preventDefault();

            $('html, body').animate({

                scrollTop: target.offset().top - 70

            }, 1000);

        }

    });


    // =========================
    // General Accordion
    // =========================
    function initAccordion(itemClass, headerClass, bodyClass) {

        $(headerClass).on('click', function () {

            let parent = $(this).parent();

            // Close all
            $(itemClass).removeClass('active open');

            $(bodyClass).slideUp(300);

            $(headerClass + ' i')
                .removeClass('bi-dash')
                .addClass('bi-plus');

            // Open Current
            parent.addClass('active open');

            parent.find(bodyClass).slideDown(300);

            parent.find('i')
                .removeClass('bi-plus')
                .addClass('bi-dash');

        });

    }

    // Custom Accordions
    initAccordion(
        '.accordion-item-custom',
        '.accordion-header-custom',
        '.accordion-body-custom'
    );

    initAccordion(
        '.benefit-item',
        '.benefit-header',
        '.benefit-body'
    );

    initAccordion(
        '.wa-accordion-item',
        '.wa-accordion-header',
        '.wa-accordion-body'
    );


    // =========================
    // Mission & Vision Tabs
    // =========================
    $('.mv-btn').on('click', function () {

        $('.mv-btn').removeClass('active');

        $(this).addClass('active');

        let target = $(this).data('target');

        $('.mv-content').removeClass('active-content');

        $('#' + target).addClass('active-content');

    });


    // =========================
    // Floating Animation Delay
    // =========================
    function floatingAnimation(selector, delay) {

        $(selector).each(function (index) {

            $(this).css({
                animationDelay: (index * delay) + 's'
            });

        });

    }

    floatingAnimation('.floating-icon', 0.5);
    floatingAnimation('.floating-email', 0.4);
    floatingAnimation('.floating-benefit', 0.6);
    floatingAnimation('.wa-floating', 0.5);
    floatingAnimation('.wa-mini-card', 0.6);


    // =========================
    // Timeline Animation
    // =========================
    $(window).scroll(function () {

        $('.timeline-card').each(function () {

            let position = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();

            if (scroll + windowHeight - 100 > position) {

                $(this).addClass('show');

            }

        });

    });


    // =========================
    // Hover Effects
    // =========================
    $('.feature-box, .timeline-card, .benefit-item, .wa-feature, .wa-mini-card').hover(

        function () {

            $(this).css({
                transform: 'translateY(-8px)',
                transition: '.4s'
            });

        },

        function () {

            $(this).css({
                transform: 'translateY(0px)'
            });

        }

    );


    // =========================
    // Floating Mouse Effect
    // =========================
    $('.floating-email, .floating-benefit, .wa-floating').mousemove(function (e) {

        let moveX = (e.pageX * -1 / 30);
        let moveY = (e.pageY * -1 / 30);

        $(this).css({
            transform: 'translate(' + moveX + 'px,' + moveY + 'px)'
        });

    });


    // =========================
    // Image Lazy Fade
    // =========================
    $('img').on('load', function () {

        $(this).addClass('img-loaded');

    });


    // =========================
    // Auto Active Navbar
    // =========================
    $(window).scroll(function () {

        let scrollDistance = $(window).scrollTop();

        $('section').each(function () {

            if ($(this).position().top <= scrollDistance + 100) {

                let sectionID = $(this).attr('id');

                $('.navbar-nav a').removeClass('active');

                $('.navbar-nav a[href="#' + sectionID + '"]')
                    .addClass('active');

            }

        });

    });

    // =========================
    // Voice Benefits Accordion
    // =========================
    initAccordion(
        '.voice-benefit-item',
        '.voice-benefit-header',
        '.voice-benefit-body'
    );


    // =========================
    // Voice Floating Animation
    // =========================
    floatingAnimation('.voice-feature', 0.5);
    floatingAnimation('.voice-mini-card', 0.6);


    // =========================
    // Voice Hover Effects
    // =========================
    $('.voice-card, .voice-feature, .voice-mini-card').hover(

        function () {

            $(this).css({
                transform: 'translateY(-8px)',
                transition: '.4s'
            });

        },

        function () {

            $(this).css({
                transform: 'translateY(0px)'
            });

        }

    );


    // =========================
    // Voice Mouse Effect
    // =========================
    $('.voice-feature, .voice-mini-card').mousemove(function (e) {

        let moveX = (e.pageX * -1 / 35);
        let moveY = (e.pageY * -1 / 35);

        $(this).css({
            transform: 'translate(' + moveX + 'px,' + moveY + 'px)'
        });

    });

      // =========================
    // lead generation Benefits Accordion
    // =========================

    $('.lead-benefit-card').click(function () {

        let current = $(this);

        $('.lead-benefit-card').removeClass('active');

        $('.lead-benefit-body').slideUp();

        $('.lead-toggle i')
            .removeClass('bi-dash')
            .addClass('bi-plus');

        current.addClass('active');

        current.find('.lead-benefit-body').slideDown();

        current.find('.lead-toggle i')
            .removeClass('bi-plus')
            .addClass('bi-dash');

    });

    // =========================
    // RCS Benefit Accordion
    // =========================
    $('.rcs-benefit-card').on('click', function () {

        let current = $(this);

        // Close All
        $('.rcs-benefit-card')
            .removeClass('active');

        $('.rcs-benefit-body')
            .slideUp(300);

        $('.rcs-toggle i')
            .removeClass('bi-dash')
            .addClass('bi-plus');

        // Open Current
        current.addClass('active');

        current.find('.rcs-benefit-body')
            .slideDown(300);

        current.find('.rcs-toggle i')
            .removeClass('bi-plus')
            .addClass('bi-dash');

    });


    // =========================
    // RCS Floating Animation
    // =========================
    floatingAnimation('.rcs-float', 0.5);


    // =========================
    // RCS Hover Effects
    // =========================
    $('.rcs-benefit-card, .rcs-float').hover(

        function () {

            $(this).css({
                transform: 'translateY(-8px)',
                transition: '.4s'
            });

        },

        function () {

            $(this).css({
                transform: 'translateY(0px)'
            });

        }

    );


    // =========================
    // RCS Mouse Effect
    // =========================
    $('.rcs-float').mousemove(function (e) {

        let moveX = (e.pageX * -1 / 35);
        let moveY = (e.pageY * -1 / 35);

        $(this).css({
            transform: 'translate(' + moveX + 'px,' + moveY + 'px)'
        });

    });

    // =========================
    // IVR Benefit Accordion
    // =========================
    $('.ivr-benefit-card').on('click', function () {

        let current = $(this);

        // Close All
        $('.ivr-benefit-card')
            .removeClass('active');

        $('.ivr-benefit-body')
            .slideUp(300);

        $('.ivr-toggle i')
            .removeClass('bi-dash')
            .addClass('bi-plus');

        // Open Current
        current.addClass('active');

        current.find('.ivr-benefit-body')
            .slideDown(300);

        current.find('.ivr-toggle i')
            .removeClass('bi-plus')
            .addClass('bi-dash');

    });


    // =========================
    // IVR Floating Animation
    // =========================
    floatingAnimation('.ivr-float-card', 0.5);


    // =========================
    // IVR Hover Effects
    // =========================
    $('.ivr-benefit-card, .ivr-float-card').hover(

        function () {

            $(this).css({
                transform: 'translateY(-8px)',
                transition: '.4s'
            });

        },

        function () {

            $(this).css({
                transform: 'translateY(0px)'
            });

        }

    );


    // =========================
    // IVR Mouse Effect
    // =========================
    $('.ivr-float-card').mousemove(function (e) {

        let moveX = (e.pageX * -1 / 35);
        let moveY = (e.pageY * -1 / 35);

        $(this).css({
            transform: 'translate(' + moveX + 'px,' + moveY + 'px)'
        });

    });


    // =========================
    // IVR Image Animation
    // =========================
    $('.ivr-benefit-image').hover(

        function () {

            $(this).css({
                transform: 'scale(1.03)',
                transition: '.5s'
            });

        },

        function () {

            $(this).css({
                transform: 'scale(1)'
            });

        }

    );

    // =========================
    // FAQ Accordion
    // =========================
    $('.faq-card').on('click', function () {

        let current = $(this);

        // Close All
        $('.faq-card')
            .removeClass('active');

        $('.faq-body')
            .slideUp(300);

        $('.faq-toggle i')
            .removeClass('bi-dash')
            .addClass('bi-plus');

        // Open Current
        current.addClass('active');

        current.find('.faq-body')
            .slideDown(300);

        current.find('.faq-toggle i')
            .removeClass('bi-plus')
            .addClass('bi-dash');

    });


    // =========================
    // FAQ Floating Animation
    // =========================
    floatingAnimation('.faq-floating', 0.5);


    // =========================
    // FAQ Hover Effects
    // =========================
    $('.faq-card, .faq-floating').hover(

        function () {

            $(this).css({
                transform: 'translateY(-8px)',
                transition: '.4s'
            });

        },

        function () {

            $(this).css({
                transform: 'translateY(0px)'
            });

        }

    );


    // =========================
    // FAQ Mouse Effect
    // =========================
    $('.faq-floating').mousemove(function (e) {

        let moveX = (e.pageX * -1 / 35);
        let moveY = (e.pageY * -1 / 35);

        $(this).css({
            transform: 'translate(' + moveX + 'px,' + moveY + 'px)'
        });

    });


    // =========================
    // FAQ Main Icon Hover
    // =========================
    $('.faq-main-icon').hover(

        function () {

            $(this).css({
                transform: 'scale(1.05)',
                transition: '.4s'
            });

        },

        function () {

            $(this).css({
                transform: 'scale(1)'
            });

        }

    );


})(jQuery);
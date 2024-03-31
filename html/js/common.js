jQuery(document).ready(function($){
    // document start
    
    
     // Navbar
     $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
     $('.navbar-nav li .clickD').click(function(e) {
         e.preventDefault();
         var $this = $(this);
         if ($this.next().hasClass('show'))
            {
                $this.next().removeClass('show');
                $this.removeClass('toggled');
            } 
            else 
            {
                $this.parent().parent().find('.sub-menu').removeClass('show');
                $this.parent().parent().find('.toggled').removeClass('toggled');
                $this.next().toggleClass('show');
                $this.toggleClass('toggled');
            }
     });
    
     $(window).on('resize', function(){
         if ($(this).width() < 1025) {
             $('html').click(function(){
                 $('.navbar-nav li .clickD').removeClass('toggled');
                 $('.toggled').removeClass('toggled');
                 $('.sub-menu').removeClass('show');
             });
             $(document).click(function(){
                 $('.navbar-nav li .clickD').removeClass('toggled');
                 $('.toggled').removeClass('toggled');
                 $('.sub-menu').removeClass('show');
             });
             $('.navbar-nav').click(function(e){
                e.stopPropagation();
             });
         }
     });
     // Navbar end
    
    /* ===== For menu animation === */
    $(".navbar-toggler").click(function(){
        $(".navbar-toggler").toggleClass("open");
        $(".navbar-toggler .stick").toggleClass("open");
        $('body,html' ).toggleClass("open-nav");
    });
    
    // Navbar end
    
    // back to top
    if($("#scroll").length){
        $(window).scroll(function(){ 
            if ($(this).scrollTop() > 200) { 
                $('#scroll').fadeIn(200); 
            } else { 
                $('#scroll').fadeOut(200); 
            } 
        }); 
        $('#scroll').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 500); 
            return false; 
        }); 
    }

    // slick slider start
    $('.skills-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: false,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        touchMove: false,
        swipe: false,
        draggable: false,
        responsive: [
            
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });



    $('.projects-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 0,
        prevArrow: '.prev-arrows',
        nextArrow: '.next-arrows',
        centerMode: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // slick slider end

    // to make sticky nav bar start
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 20) {
                $(".main-head").addClass("fixed");
            }
            else {
                $(".main-head").removeClass("fixed");
            }
        })
    // to make sticky nav bar end


    //Horizontal Tab start
    
        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function (event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });

    //Horizontal Tab end

    // fancybox start
    $(".fancybox").fancybox({
    });
    //  fancybox end


    // reveal animation
    if ($(".reveal").length) {
        var reveal = gsap.utils.toArray(".reveal > *");

        reveal.forEach((elem, i) => {
            ScrollTrigger.create({
                trigger: elem,
                start: "top 90%",
                end: "top 20%",
                scrub: 2,
                onEnter() {
                    elem.classList.add("play-reveal");
                },
            });
        });
    }

    Splitting({
        target: "[data-splitting]",
        by: "chars",
        scrub: 2
    });



    $(".navbar-nav li").click(function() {
        // Remove class from the element
        $(".navbar-collapse").removeClass("show");
        $("body,html").removeClass("open-nav");
        $(".stick").removeClass("open");
    });
    
    // document end
    
    })

    

    
    
    
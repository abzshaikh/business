$(document).ready(function() {
    console.log("hello");

    // $('.carousel').carousel({
    //     interval: 1000,
    //     pause: "hover"
    // });

    const swiper = new Swiper('.service-block .swiper-container', {
        // slidesPerView: 3,
        slidesPerColumn: 2,
        speed: 1000,
        spaceBetween: 30,
        navigation: {
            nextEl: '.service-block .swiper-button-next',
            prevEl: '.service-block .swiper-button-prev',
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerColumn: 2,
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerColumn: 2,
            },
            // when window width is >= 640px
            991: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerColumn: 2,
            }
        }
    });

    const swiper1 = new Swiper('.project-block .swiper-container', {
        slidesPerView: 4,
        speed: 1000,
        navigation: {
            nextEl: '.project-block .swiper-button-next',
            prevEl: '.project-block .swiper-button-prev',
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 4,
            },
        }
    });
    const swiper2 = new Swiper('.expert-block .swiper-container', {
        slidesPerView: 4,
        speed: 1000,
        spaceBetween: 30,
        navigation: {
            nextEl: '.expert-block .swiper-button-next',
            prevEl: '.expert-block .swiper-button-prev',
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            340: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });

    $(".project-block .swiper-slide").on("mouseenter", function(){
        console.log("inside");
        $(this).find(".title").css("background","rgba(59, 154, 255, 0.68)");
    }).on("mouseleave", function() {
        console.log("outside");
        $(this).find(".title").css("background","rgba(0, 0, 0, 0.68)");
    });

    const counters = document.querySelectorAll('.counter');
    const speed = 20000;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            console.log(Math.ceil(inc));
            if (count < target) {
                counter.innerText = count + Math.ceil(inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });

    $(".expert-block .swiper-slide .img-container").on("mouseenter", function(){
        $(this).addClass("active");
    }).on("mouseleave", function() {
        $(this).removeClass("active");
    });

    AOS.init({
        once: true
    });
});
$(document).ready(function(){
    // change color of navbar when scrolling
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".nav").css("background", "#F3DEBA");
            $(".nav").css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 4px 12px");
        }
        else{
            $(".nav").css("background", "transparent");
            $(".nav").css("box-shadow", "none");
        }
    })

    // mobile navbar
    const mobile = document.querySelector(".burger-btn");
    const mobileLink = document.querySelector(".nav-menus");

    mobile.addEventListener("click", function(){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    })

    // close navbar when click
    mobileLink.addEventListener("click", function(){
        const menuBars = document.querySelector(".is-active");
        if(window.innerWidth <=768 && menuBars) {
            mobile.classList.toggle("is-active");
            mobileLink.classList.remove("active")
        }
    })

    // heart
    $(".heart").on("click", function(){
        $(this).toggleClass("is-active");
    });

    // filter
    var mixer = mixitup('.product-list',{
        selectors: {
            target: '.product-card'
        },
        animation: {
            duration: 300
        }
    });

    // swiper
    var swiper = new Swiper(".mySwiper",{
        loop: true,
        autoplay: {
            delay:2500,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween:20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView:3,
                spaceBetween: 50,
            }
        }
    });
})
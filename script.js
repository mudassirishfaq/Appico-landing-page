 let navbar = document.querySelector (".navbar") ,
    menu = document.querySelector ("#menu-bar") ,
    close = document.querySelector ("#close-bar") ;

    menu.onclick =() => {
        console.log("hello");
        navbar.classList.toggle("active");
    }
    close.onclick = () => {
        navbar.classList.remove("active");

    }
    window.onload = () => {
        navbar.classList.remove("active");
    }
    window.onscroll = () => {
        navbar.classList.remove("active");
    }


    //  HOME SWIPER SLIDE

    var swiper = new Swiper(".image-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: true,
        },
        loop:true,
        autoplay: {
              delay: 2000,
              disableOnInteraction: true,
        },
    }); 
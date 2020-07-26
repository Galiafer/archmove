
    let searchIcon = document.querySelector(".nav__search");
    let search = document.querySelector(".nav__search--field");
   
    searchIcon.addEventListener("click", function(){ 
        search.classList.toggle("nav__search--field-display")
     });
    
     $('.slider__container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:       `<svg class="slider__arrow slider__arrow-right" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 11V9H14L10 5L11 3L18 10L11 17L10 15L14 11H2Z"/></svg>`,
        prevArrow: `<svg class="slider__arrow slider__arrow-left" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V9H6L10 5L9 3L2 10L9 17L10 15L6 11H18Z"/></svg>`
      });


      $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:  `<svg class="reviews__arrow reviews__arrow-right" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 11V9H14L10 5L11 3L18 10L11 17L10 15L14 11H2Z"/></svg>`,
        prevArrow: `<svg class="reviews__arrow reviews__arrow-left" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V9H6L10 5L9 3L2 10L9 17L10 15L6 11H18Z"/></svg>`
      });

      $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"},1000);
                return false;
        });
    });

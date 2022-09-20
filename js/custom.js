 $(document).ready(function () {
   //search btn
   $('#search-btn').click(function () {
     $('.search-form').toggleClass('active');
   });

   // shopping-cart-btn button
   $('#cart-btn').click(function () {
     $('.shopping').toggleClass('active');
   });

   // login from
   $('#login-btn').click(function () {
     $('.login').toggleClass('active');
   });

   //menu btn
   $('#menu-btn').click(function () {
     $('.nav').toggleClass('active');
   });

   //js for banner
   $('.image-slider').slick({
     arrows: true,
     autoplay: true,
     autoplaySpeed: 1500,
     dots: true,
     prevArrow: '<i class="fa-solid fa-angles-left prev-btn"></i>',
     nextArrow: '<i class="fa-solid fa-angles-right next-btn"></i>',
   });

   // js for features

   $('.features-item').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3,
     arrows: true,
     prevArrow: '<i class="fa-solid fa-angles-left prev-btn"></i>',
     nextArrow: '<i class="fa-solid fa-angles-right next-btn"></i>',
     responsive: [{
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
   });

   // js for products
   $('.products-item').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3,
     autoplay: true,
     autoplaySpeed: 1500,
     arrows: true,
     prevArrow: '<i class="fa-solid fa-angles-left prev-btn"></i>',
     nextArrow: '<i class="fa-solid fa-angles-right next-btn"></i>',
     responsive: [{
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
   });

   // js for reviews
   $('.reviews-item').slick({
     centerMode: true,
     centerPadding: '180px',
     slidesToShow: 3,
     autoplay: true,
     autoplaySpeed: 1500,
     prevArrow: '<i class="fa-solid fa-angles-left prev-btn"></i>',
     nextArrow: '<i class="fa-solid fa-angles-right next-btn"></i>',
     responsive: [{
         breakpoint: 576,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 3
         }
       },
       {
         breakpoint: 992,
         breakpoint: 768,
         settings: {
           arrows: false,
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 1
         }
       }
     ]
   });

   // js for blogs

   $('.blogs-item').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3,
     arrows: true,
     prevArrow: '<i class="fa-solid fa-angles-left prev-btn"></i>',
     nextArrow: '<i class="fa-solid fa-angles-right next-btn"></i>',
   });

   // js for back to top
   $(window).scroll(function () {
     var scrolling = $(this).scrollTop();

     if (scrolling > 550) {
       $('.back-to-top').fadeIn();
     } else {
       $('.back-to-top').fadeOut();
     }
   })

   $('.back-to-top').click(function () {
     $('html').animate({
       scrollTop: 0,
     }, 1500);

   });

 });
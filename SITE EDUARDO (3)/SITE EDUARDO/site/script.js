$(document).ready(function () {
    $(".biografia-img").bxSlider({
      auto: true,
      speed: 2000,
      //pager: false,
      //mode: "fade",
    });
  
    $(".biografia-img .container").magnificPopup({
      delegate: "a",
      type: "image",
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: "mfp-with-zoom mfp-img-mobile",
  
      image: {
        verticalFit: true,
        // titleSrc: function (item) {
        //   return (
        //     item.el.attr("title") +
        //     ' &middot; <a class="image-source-link" href="' +
        //     item.el.attr("data-source") +
        //     '" target="_blank">image source</a>'
        //   );
        // },
      },
      gallery: {
        enabled: true,
      },
      zoom: {
        enabled: true,
        duration: 300, // don't forget to change the duration also in CSS
        opener: function (element) {
          return element.find("img");
        },
      },
    });
  });
  
  
  